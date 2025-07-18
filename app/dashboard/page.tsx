"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Target, BarChart3, Calendar, Bell, Search, Plus, UserPlus, Settings, LogOut, Menu } from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { MetricsCards } from "@/components/dashboard/metrics-cards"
import { PerformanceChart } from "@/components/dashboard/performance-chart"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { StudentsTable } from "@/components/dashboard/students-table"

export default function TrainerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    // Clear any stored data
    localStorage.clear()
    sessionStorage.clear()

    // Redirect to login
    window.location.href = "/login"
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-500">Bem-vindo de volta, Carlos Silva</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Buscar alunos..." className="pl-10 w-64" />
              </div>

              <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                <Plus className="h-4 w-4 mr-2" />
                Novo Treino
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative">
                    <Bell className="h-5 w-5" />
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs flex items-center justify-center">
                      3
                    </Badge>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notificações</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">Novo feedback de treino</p>
                      <p className="text-xs text-gray-500">Maria completou o treino de hoje</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">Pagamento pendente</p>
                      <p className="text-xs text-gray-500">João tem mensalidade em atraso</p>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Carlos" />
                      <AvatarFallback>CS</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Carlos Silva</p>
                      <p className="text-xs leading-none text-muted-foreground">carlos@runcoach.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => (window.location.href = "/dashboard/settings")}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configurações</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="students">Alunos</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="calendar">Agenda</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Metrics Cards */}
              <MetricsCards />

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Performance Chart */}
                <PerformanceChart />

                {/* Recent Activity */}
                <RecentActivity />
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Ações Rápidas</CardTitle>
                  <CardDescription>Acesso rápido às funcionalidades mais usadas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Button className="h-20 flex-col bg-orange-600 hover:bg-orange-700">
                      <UserPlus className="h-6 w-6 mb-2" />
                      Novo Aluno
                    </Button>
                    <Button variant="outline" className="h-20 flex-col bg-transparent">
                      <Target className="h-6 w-6 mb-2" />
                      Criar Treino
                    </Button>
                    <Button variant="outline" className="h-20 flex-col bg-transparent">
                      <Calendar className="h-6 w-6 mb-2" />
                      Agendar Aula
                    </Button>
                    <Button variant="outline" className="h-20 flex-col bg-transparent">
                      <BarChart3 className="h-6 w-6 mb-2" />
                      Relatórios
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="students" className="space-y-6">
              <StudentsTable />
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Engajamento dos Alunos</CardTitle>
                    <CardDescription>Taxa de conclusão de treinos nos últimos 30 dias</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Maria Santos</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                          </div>
                          <span className="text-sm text-gray-600">95%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">João Silva</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                          </div>
                          <span className="text-sm text-gray-600">78%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Ana Costa</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                          </div>
                          <span className="text-sm text-gray-600">45%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tipos de Treino Mais Populares</CardTitle>
                    <CardDescription>Distribuição dos treinos realizados</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Corrida Base</span>
                        <Badge variant="secondary">45%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Intervalado</span>
                        <Badge variant="secondary">25%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Tempo Run</span>
                        <Badge variant="secondary">20%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Long Run</span>
                        <Badge variant="secondary">10%</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Próximos Eventos</CardTitle>
                  <CardDescription>Aulas e treinos agendados para esta semana</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="flex flex-col items-center">
                        <span className="text-sm font-medium text-orange-600">SEG</span>
                        <span className="text-2xl font-bold">18</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Treino em Grupo - Intervalado</h4>
                        <p className="text-sm text-gray-600">06:00 - Parque Ibirapuera</p>
                        <p className="text-xs text-gray-500">8 alunos confirmados</p>
                      </div>
                      <Badge>Confirmado</Badge>
                    </div>

                    <div className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="flex flex-col items-center">
                        <span className="text-sm font-medium text-orange-600">TER</span>
                        <span className="text-2xl font-bold">19</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Avaliação Física - Maria Santos</h4>
                        <p className="text-sm text-gray-600">14:00 - Consultório</p>
                        <p className="text-xs text-gray-500">Teste de VO2 Max</p>
                      </div>
                      <Badge variant="outline">Agendado</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
