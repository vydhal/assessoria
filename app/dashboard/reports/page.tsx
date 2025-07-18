"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Download, Users, Target, Activity, Clock, Filter } from "lucide-react"

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")

  const performanceData = [
    { student: "Maria Santos", completionRate: 95, avgPace: "5:15", vo2max: 54.2, improvement: "+8%" },
    { student: "João Silva", completionRate: 78, avgPace: "5:45", vo2max: 48.7, improvement: "+5%" },
    { student: "Pedro Lima", completionRate: 88, avgPace: "5:30", vo2max: 51.3, improvement: "+12%" },
    { student: "Ana Costa", completionRate: 45, avgPace: "6:20", vo2max: 42.1, improvement: "-2%" },
    { student: "Carla Mendes", completionRate: 92, avgPace: "5:25", vo2max: 46.8, improvement: "+6%" },
  ]

  const workoutStats = [
    { type: "Corrida Base", total: 45, completed: 42, percentage: 93 },
    { type: "Intervalado", total: 25, completed: 20, percentage: 80 },
    { type: "Tempo Run", total: 20, completed: 18, percentage: 90 },
    { type: "Long Run", total: 15, completed: 14, percentage: 93 },
    { type: "Fartlek", total: 10, completed: 8, percentage: 80 },
  ]

  const monthlyMetrics = [
    { month: "Set", students: 20, workouts: 180, completion: 85, revenue: 8500 },
    { month: "Out", students: 22, workouts: 198, completion: 87, revenue: 9200 },
    { month: "Nov", students: 23, workouts: 207, completion: 89, revenue: 10100 },
    { month: "Dez", students: 24, workouts: 216, completion: 91, revenue: 11300 },
    { month: "Jan", students: 24, workouts: 220, completion: 87, revenue: 12450 },
  ]

  const getCompletionColor = (rate: number) => {
    if (rate >= 90) return "text-green-600"
    if (rate >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  const getImprovementColor = (improvement: string) => {
    if (improvement.startsWith("+")) return "text-green-600"
    if (improvement.startsWith("-")) return "text-red-600"
    return "text-gray-600"
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Relatórios</h1>
          <p className="text-gray-600">Análises de performance e estatísticas</p>
        </div>
        <div className="flex space-x-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Esta semana</SelectItem>
              <SelectItem value="month">Este mês</SelectItem>
              <SelectItem value="quarter">Trimestre</SelectItem>
              <SelectItem value="year">Ano</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="workouts">Treinos</TabsTrigger>
          <TabsTrigger value="financial">Financeiro</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Métricas Principais */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Alunos</CardTitle>
                <Users className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  +2 desde o mês passado
                  <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
                    ↗
                  </Badge>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Taxa de Conclusão</CardTitle>
                <Target className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">
                  -4% vs mês anterior
                  <Badge variant="secondary" className="ml-2 bg-red-100 text-red-800">
                    ↘
                  </Badge>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Treinos Realizados</CardTitle>
                <Activity className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">220</div>
                <p className="text-xs text-muted-foreground">
                  +4 vs mês anterior
                  <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
                    ↗
                  </Badge>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Horas Treinadas</CardTitle>
                <Clock className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156h</div>
                <p className="text-xs text-muted-foreground">Esta semana</p>
              </CardContent>
            </Card>
          </div>

          {/* Gráfico de Evolução Mensal */}
          <Card>
            <CardHeader>
              <CardTitle>Evolução Mensal</CardTitle>
              <CardDescription>Métricas principais dos últimos 5 meses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyMetrics.map((data, index) => (
                  <div key={index} className="grid grid-cols-5 gap-4 items-center">
                    <div className="font-medium">{data.month}</div>
                    <div className="text-center">
                      <div className="text-lg font-bold">{data.students}</div>
                      <div className="text-xs text-gray-500">Alunos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">{data.workouts}</div>
                      <div className="text-xs text-gray-500">Treinos</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-bold ${getCompletionColor(data.completion)}`}>
                        {data.completion}%
                      </div>
                      <div className="text-xs text-gray-500">Conclusão</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">R$ {data.revenue.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">Receita</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance dos Alunos</CardTitle>
              <CardDescription>Análise individual de performance e evolução</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {performanceData.map((student, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium">{student.student}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge className={getCompletionColor(student.completionRate)}>
                          {student.completionRate}% conclusão
                        </Badge>
                        <Badge className={`${getImprovementColor(student.improvement)} bg-transparent border`}>
                          {student.improvement}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600">Pace Médio</div>
                        <div className="font-bold">{student.avgPace}/km</div>
                      </div>
                      <div>
                        <div className="text-gray-600">VO2 Max</div>
                        <div className="font-bold">{student.vo2max} ml/kg/min</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Melhoria</div>
                        <div className={`font-bold ${getImprovementColor(student.improvement)}`}>
                          {student.improvement}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <Progress value={student.completionRate} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workouts" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Tipos de Treino Mais Populares</CardTitle>
                <CardDescription>Distribuição dos treinos realizados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {workoutStats.map((workout, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{workout.type}</span>
                        <span className="text-gray-600">
                          {workout.completed}/{workout.total}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={workout.percentage} className="flex-1" />
                        <span className={`text-sm font-medium ${getCompletionColor(workout.percentage)}`}>
                          {workout.percentage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engajamento por Dia da Semana</CardTitle>
                <CardDescription>Taxa de conclusão por dia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { day: "Segunda", rate: 92 },
                    { day: "Terça", rate: 88 },
                    { day: "Quarta", rate: 85 },
                    { day: "Quinta", rate: 90 },
                    { day: "Sexta", rate: 78 },
                    { day: "Sábado", rate: 95 },
                    { day: "Domingo", rate: 89 },
                  ].map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium w-20">{data.day}</span>
                      <div className="flex items-center space-x-2 flex-1">
                        <Progress value={data.rate} className="flex-1" />
                        <span className={`text-sm font-medium w-12 ${getCompletionColor(data.rate)}`}>
                          {data.rate}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financial" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Receita Mensal</CardTitle>
                <CardDescription>Evolução da receita nos últimos meses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyMetrics.map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{data.month}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold">R$ {data.revenue.toLocaleString()}</span>
                        {index > 0 && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            +
                            {(
                              ((data.revenue - monthlyMetrics[index - 1].revenue) / monthlyMetrics[index - 1].revenue) *
                              100
                            ).toFixed(1)}
                            %
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribuição por Plano</CardTitle>
                <CardDescription>Receita por tipo de plano</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { plan: "Plano Premium", students: 4, price: 450, percentage: 36 },
                    { plan: "Plano Intermediário", students: 12, price: 350, percentage: 42 },
                    { plan: "Plano Básico", students: 8, price: 280, percentage: 22 },
                  ].map((data, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{data.plan}</span>
                        <span className="text-gray-600">{data.percentage}%</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={data.percentage} className="flex-1" />
                        <span className="text-sm font-medium">R$ {(data.students * data.price).toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        {data.students} alunos × R$ {data.price}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
