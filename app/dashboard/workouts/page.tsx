"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Target,
  Clock,
  MapPin,
  Users,
  Edit,
  Copy,
  Trash2,
  Play,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

export default function WorkoutsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const workouts = [
    {
      id: 1,
      title: "Intervalado 5x1000m",
      type: "Intervalado",
      duration: "45 min",
      distance: "8 km",
      intensity: "Alta",
      assignedTo: 3,
      status: "active",
      createdAt: "2024-01-15",
      description: "Aquecimento 10min + 5x1000m (R: 2min) + Volta à calma 10min",
    },
    {
      id: 2,
      title: "Long Run Domingo",
      type: "Long Run",
      duration: "90 min",
      distance: "15 km",
      intensity: "Baixa",
      assignedTo: 8,
      status: "active",
      createdAt: "2024-01-14",
      description: "Corrida contínua em ritmo confortável, zona 2",
    },
    {
      id: 3,
      title: "Tempo Run 6km",
      type: "Tempo Run",
      duration: "35 min",
      distance: "6 km",
      intensity: "Média",
      assignedTo: 5,
      status: "draft",
      createdAt: "2024-01-13",
      description: "Aquecimento 10min + 20min em ritmo de limiar + Volta à calma 5min",
    },
    {
      id: 4,
      title: "Corrida Base Fácil",
      type: "Base",
      duration: "40 min",
      distance: "7 km",
      intensity: "Baixa",
      assignedTo: 12,
      status: "active",
      createdAt: "2024-01-12",
      description: "Corrida em ritmo confortável, conversação possível",
    },
  ]

  const workoutTemplates = [
    {
      id: 1,
      name: "Intervalado Curto",
      description: "Para desenvolvimento de velocidade",
      exercises: ["Aquecimento 10min", "6x400m (R: 90s)", "Volta à calma 10min"],
    },
    {
      id: 2,
      name: "Fartlek Clássico",
      description: "Treino de variação de ritmo",
      exercises: ["Aquecimento 15min", "20min fartlek", "Volta à calma 10min"],
    },
    {
      id: 3,
      name: "Long Run Progressivo",
      description: "Corrida longa com progressão",
      exercises: ["60min ritmo fácil", "20min progressivo", "10min volta à calma"],
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Ativo</Badge>
      case "draft":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            Rascunho
          </Badge>
        )
      case "archived":
        return (
          <Badge variant="secondary" className="bg-gray-100 text-gray-800">
            Arquivado
          </Badge>
        )
      default:
        return <Badge variant="secondary">Desconhecido</Badge>
    }
  }

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "Alta":
        return "text-red-600"
      case "Média":
        return "text-yellow-600"
      case "Baixa":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center space-x-4 mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Dashboard
          </Button>
        </Link>
        <div className="flex-1 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Treinos</h1>
            <p className="text-gray-600">Gerencie e crie treinos personalizados</p>
          </div>
          <Link href="/dashboard/workouts/create">
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Plus className="h-4 w-4 mr-2" />
              Novo Treino
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">Todos os Treinos</TabsTrigger>
          <TabsTrigger value="templates">Modelos</TabsTrigger>
          <TabsTrigger value="scheduled">Agendados</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar treinos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <Card key={workout.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{workout.title}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{workout.type}</Badge>
                        {getStatusBadge(workout.status)}
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Copy className="mr-2 h-4 w-4" />
                          Duplicar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="mr-2 h-4 w-4" />
                          Atribuir
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{workout.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{workout.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{workout.distance}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-gray-400" />
                      <span className={getIntensityColor(workout.intensity)}>{workout.intensity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span>{workout.assignedTo} alunos</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-xs text-gray-500">
                      Criado em {new Date(workout.createdAt).toLocaleDateString("pt-BR")}
                    </span>
                    <Button size="sm" variant="outline">
                      <Play className="h-4 w-4 mr-2" />
                      Iniciar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workoutTemplates.map((template) => (
              <Card key={template.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Exercícios:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {template.exercises.map((exercise, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span>{exercise}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    Usar Modelo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Treinos Agendados</CardTitle>
              <CardDescription>Próximos treinos programados para seus alunos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 border rounded-lg">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium text-orange-600">HOJ</span>
                    <span className="text-2xl font-bold">18</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Intervalado 5x1000m</h4>
                    <p className="text-sm text-gray-600">Maria Santos, João Silva, Pedro Lima</p>
                    <p className="text-xs text-gray-500">3 alunos • 06:00</p>
                  </div>
                  <Badge>Hoje</Badge>
                </div>

                <div className="flex items-center space-x-4 p-4 border rounded-lg">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium text-orange-600">AMÃ</span>
                    <span className="text-2xl font-bold">19</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Long Run 15km</h4>
                    <p className="text-sm text-gray-600">Todos os alunos</p>
                    <p className="text-xs text-gray-500">12 alunos • 07:00</p>
                  </div>
                  <Badge variant="outline">Amanhã</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
