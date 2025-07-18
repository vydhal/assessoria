"use client"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  Target,
  MessageSquare,
  Edit,
  Heart,
  Timer,
  MapPin,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function StudentProfilePage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview")

  // Dados mockados do aluno
  const student = {
    id: params.id,
    name: "Maria Santos",
    email: "maria@email.com",
    phone: "(11) 99999-9999",
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "MS",
    status: "active",
    joinDate: "2024-01-15",
    age: 28,
    weight: 58,
    height: 165,
    vo2max: 54.2,
    restingHR: 52,
    maxHR: 192,
    goal: "Maratona de São Paulo 2024",
    level: "Intermediário",
    weeklyKm: 45,
    completionRate: 95,
  }

  const workoutHistory = [
    {
      id: 1,
      date: "2024-01-18",
      type: "Intervalado",
      title: "5x1000m",
      status: "completed",
      duration: "45min",
      distance: "8km",
      avgPace: "4:35/km",
      avgHR: 165,
      feedback: "Treino excelente! Consegui manter o ritmo em todas as repetições.",
    },
    {
      id: 2,
      date: "2024-01-16",
      type: "Long Run",
      title: "Corrida Longa",
      status: "completed",
      duration: "90min",
      distance: "15km",
      avgPace: "5:20/km",
      avgHR: 145,
      feedback: "Ritmo confortável, me senti bem durante toda a corrida.",
    },
    {
      id: 3,
      date: "2024-01-14",
      type: "Tempo Run",
      title: "6km Tempo",
      status: "missed",
      duration: "-",
      distance: "-",
      avgPace: "-",
      avgHR: "-",
      feedback: "Não consegui treinar por conta da chuva.",
    },
  ]

  const metrics = [
    { label: "VO2 Max", value: "54.2", unit: "ml/kg/min", trend: "+2.1", color: "text-green-600" },
    { label: "FC Repouso", value: "52", unit: "bpm", trend: "-3", color: "text-green-600" },
    { label: "Pace Médio", value: "5:15", unit: "/km", trend: "-0:15", color: "text-green-600" },
    { label: "Km Semanal", value: "45", unit: "km", trend: "+5", color: "text-green-600" },
  ]

  const zones = [
    { zone: "Z1", name: "Recuperação", range: "< 140 bpm", percentage: 25, color: "bg-gray-400" },
    { zone: "Z2", name: "Aeróbico", range: "140-155 bpm", percentage: 45, color: "bg-blue-400" },
    { zone: "Z3", name: "Tempo", range: "155-170 bpm", percentage: 20, color: "bg-green-400" },
    { zone: "Z4", name: "Limiar", range: "170-185 bpm", percentage: 8, color: "bg-yellow-400" },
    { zone: "Z5", name: "VO2 Max", range: "> 185 bpm", percentage: 2, color: "bg-red-400" },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Concluído
          </Badge>
        )
      case "missed":
        return (
          <Badge className="bg-red-100 text-red-800">
            <XCircle className="h-3 w-3 mr-1" />
            Perdido
          </Badge>
        )
      default:
        return <Badge variant="secondary">Pendente</Badge>
    }
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center space-x-4">
        <Link href="/dashboard/students">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">Perfil do Aluno</h1>
          <p className="text-gray-600">Informações detalhadas e histórico de treinos</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <MessageSquare className="h-4 w-4 mr-2" />
            Mensagem
          </Button>
          <Button variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            Editar
          </Button>
        </div>
      </div>

      {/* Header do Perfil */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
              <AvatarFallback className="text-2xl">{student.initials}</AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center space-x-3">
                  <h2 className="text-2xl font-bold">{student.name}</h2>
                  <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                  <Badge variant="outline">{student.level}</Badge>
                </div>
                <p className="text-gray-600">{student.goal}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span>{student.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>{student.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span>Desde {new Date(student.joinDate).toLocaleDateString("pt-BR")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-gray-400" />
                  <span>{student.completionRate}% conclusão</span>
                </div>
              </div>
            </div>

            <div className="text-right space-y-2">
              <div className="text-2xl font-bold text-orange-600">{student.completionRate}%</div>
              <div className="text-sm text-gray-600">Taxa de Conclusão</div>
              <Progress value={student.completionRate} className="w-24" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="workouts">Treinos</TabsTrigger>
          <TabsTrigger value="metrics">Métricas</TabsTrigger>
          <TabsTrigger value="health">Saúde</TabsTrigger>
          <TabsTrigger value="progress">Progresso</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                      <div className="flex items-baseline space-x-1">
                        <p className="text-2xl font-bold">{metric.value}</p>
                        <p className="text-sm text-gray-500">{metric.unit}</p>
                      </div>
                    </div>
                    <div className={`text-sm font-medium ${metric.color}`}>{metric.trend}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Zonas de Frequência Cardíaca</CardTitle>
                <CardDescription>Distribuição do tempo de treino por zona</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {zones.map((zone, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${zone.color}`}></div>
                        <span className="font-medium">
                          {zone.zone} - {zone.name}
                        </span>
                      </div>
                      <span className="text-gray-600">{zone.percentage}%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={zone.percentage} className="flex-1" />
                      <span className="text-xs text-gray-500 w-20">{zone.range}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Últimos Treinos</CardTitle>
                <CardDescription>Atividades recentes do aluno</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {workoutHistory.slice(0, 3).map((workout) => (
                  <div key={workout.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-medium text-orange-600">
                        {new Date(workout.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium">{workout.title}</h4>
                        {getStatusBadge(workout.status)}
                      </div>
                      <p className="text-sm text-gray-600">{workout.type}</p>
                      {workout.status === "completed" && (
                        <p className="text-xs text-gray-500">
                          {workout.distance} • {workout.avgPace} • FC {workout.avgHR}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="workouts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Treinos</CardTitle>
              <CardDescription>Todos os treinos realizados pelo aluno</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {workoutHistory.map((workout) => (
                  <div key={workout.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-center">
                          <div className="text-sm font-medium">
                            {new Date(workout.date).toLocaleDateString("pt-BR", { day: "2-digit" })}
                          </div>
                          <div className="text-xs text-gray-500">
                            {new Date(workout.date).toLocaleDateString("pt-BR", { month: "short" })}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium">{workout.title}</h4>
                          <p className="text-sm text-gray-600">{workout.type}</p>
                        </div>
                      </div>
                      {getStatusBadge(workout.status)}
                    </div>

                    {workout.status === "completed" && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span>{workout.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span>{workout.distance}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Timer className="h-4 w-4 text-gray-400" />
                          <span>{workout.avgPace}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Heart className="h-4 w-4 text-gray-400" />
                          <span>{workout.avgHR} bpm</span>
                        </div>
                      </div>
                    )}

                    {workout.feedback && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-700">
                          <strong>Feedback:</strong> {workout.feedback}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Evolução do VO2 Max</CardTitle>
                <CardDescription>Últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between space-x-2">
                  {[48.5, 49.2, 50.1, 51.8, 53.2, 54.2].map((value, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2">
                      <div
                        className="bg-orange-500 rounded-t-sm w-8"
                        style={{ height: `${(value / 60) * 200}px` }}
                      ></div>
                      <span className="text-xs text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pace Médio por Mês</CardTitle>
                <CardDescription>Evolução do ritmo de corrida</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { month: "Jan", pace: "5:45", improvement: "-" },
                    { month: "Fev", pace: "5:35", improvement: "-0:10" },
                    { month: "Mar", pace: "5:25", improvement: "-0:10" },
                    { month: "Abr", pace: "5:15", improvement: "-0:10" },
                  ].map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{data.month}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold">{data.pace}</span>
                        {data.improvement !== "-" && (
                          <Badge className="bg-green-100 text-green-800 text-xs">{data.improvement}</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="health" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Dados Físicos</CardTitle>
                <CardDescription>Informações básicas de saúde</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Idade</Label>
                    <p className="text-lg font-bold">{student.age} anos</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Peso</Label>
                    <p className="text-lg font-bold">{student.weight} kg</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Altura</Label>
                    <p className="text-lg font-bold">{student.height} cm</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">IMC</Label>
                    <p className="text-lg font-bold">{((student.weight / (student.height / 100)) ** 2).toFixed(1)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frequência Cardíaca</CardTitle>
                <CardDescription>Dados cardiovasculares</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">FC Repouso</span>
                    <span className="text-lg font-bold">{student.restingHR} bpm</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">FC Máxima</span>
                    <span className="text-lg font-bold">{student.maxHR} bpm</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Reserva FC</span>
                    <span className="text-lg font-bold">{student.maxHR - student.restingHR} bpm</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Objetivos e Metas</CardTitle>
              <CardDescription>Acompanhamento do progresso do aluno</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Maratona de São Paulo 2024</h4>
                    <p className="text-sm text-gray-600">Meta: Sub 3:30</p>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800">Em Progresso</Badge>
                </div>
                <Progress value={75} className="w-full" />
                <p className="text-sm text-gray-600">75% do plano de treino concluído</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h5 className="font-medium">Metas Semanais</h5>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Km por semana</span>
                      <span className="font-medium">45/50 km</span>
                    </div>
                    <Progress value={90} />
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-medium">Metas Mensais</h5>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Treinos concluídos</span>
                      <span className="font-medium">18/20</span>
                    </div>
                    <Progress value={90} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
