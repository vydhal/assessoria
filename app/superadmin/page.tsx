"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Shield,
  Users,
  Building,
  BarChart3,
  DollarSign,
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Settings,
  Activity,
  TrendingUp,
  UserPlus,
  Crown,
} from "lucide-react"
import Link from "next/link"

export default function SuperAdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const systemMetrics = [
    {
      title: "Total de Assessorias",
      value: "12",
      change: "+2 este mês",
      changeType: "positive",
      icon: Building,
      color: "text-blue-600",
    },
    {
      title: "Treinadores Ativos",
      value: "45",
      change: "+8 este mês",
      changeType: "positive",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Alunos Totais",
      value: "1,247",
      change: "+156 este mês",
      changeType: "positive",
      icon: Activity,
      color: "text-orange-600",
    },
    {
      title: "Receita Total",
      value: "R$ 89.450",
      change: "+12.5%",
      changeType: "positive",
      icon: DollarSign,
      color: "text-purple-600",
    },
  ]

  const assessorias = [
    {
      id: 1,
      name: "RunFast Assessoria",
      owner: "Carlos Silva",
      email: "carlos@runfast.com",
      students: 24,
      trainers: 3,
      revenue: 12450,
      status: "active",
      createdAt: "2023-06-15",
      plan: "Premium",
    },
    {
      id: 2,
      name: "Speed Training",
      owner: "Ana Oliveira",
      email: "ana@speedtraining.com",
      students: 18,
      trainers: 2,
      revenue: 8900,
      status: "active",
      createdAt: "2023-08-22",
      plan: "Pro",
    },
    {
      id: 3,
      name: "Corrida & Vida",
      owner: "Pedro Santos",
      email: "pedro@corridaevida.com",
      students: 32,
      trainers: 4,
      revenue: 15600,
      status: "active",
      createdAt: "2023-04-10",
      plan: "Premium",
    },
    {
      id: 4,
      name: "Marathon Club",
      owner: "Maria Costa",
      email: "maria@marathonclub.com",
      students: 8,
      trainers: 1,
      revenue: 3200,
      status: "trial",
      createdAt: "2024-01-05",
      plan: "Basic",
    },
  ]

  const admins = [
    {
      id: 1,
      name: "Carlos Silva",
      email: "carlos@runfast.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "CS",
      assessoria: "RunFast Assessoria",
      role: "Owner",
      lastLogin: "2024-01-18 14:30",
      status: "active",
    },
    {
      id: 2,
      name: "Ana Oliveira",
      email: "ana@speedtraining.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AO",
      assessoria: "Speed Training",
      role: "Owner",
      lastLogin: "2024-01-18 09:15",
      status: "active",
    },
    {
      id: 3,
      name: "Pedro Santos",
      email: "pedro@corridaevida.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "PS",
      assessoria: "Corrida & Vida",
      role: "Owner",
      lastLogin: "2024-01-17 16:45",
      status: "active",
    },
    {
      id: 4,
      name: "João Treinador",
      email: "joao@runfast.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JT",
      assessoria: "RunFast Assessoria",
      role: "Trainer",
      lastLogin: "2024-01-18 11:20",
      status: "active",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Ativo</Badge>
      case "trial":
        return <Badge className="bg-yellow-100 text-yellow-800">Trial</Badge>
      case "suspended":
        return <Badge className="bg-red-100 text-red-800">Suspenso</Badge>
      default:
        return <Badge variant="secondary">Desconhecido</Badge>
    }
  }

  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case "Premium":
        return <Badge className="bg-purple-100 text-purple-800">Premium</Badge>
      case "Pro":
        return <Badge className="bg-blue-100 text-blue-800">Pro</Badge>
      case "Basic":
        return <Badge className="bg-gray-100 text-gray-800">Basic</Badge>
      default:
        return <Badge variant="secondary">-</Badge>
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold text-gray-900">SuperAdmin</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Badge className="bg-red-100 text-red-800">
              <Crown className="h-3 w-3 mr-1" />
              Super Administrador
            </Badge>
            <Avatar className="h-8 w-8">
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Painel SuperAdmin</h1>
            <p className="text-gray-600">Controle total do sistema RunCoach Pro</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Configurações
            </Button>
            <Link href="/superadmin/create-assessoria">
              <Button className="bg-red-600 hover:bg-red-700">
                <Plus className="h-4 w-4 mr-2" />
                Nova Assessoria
              </Button>
            </Link>
          </div>
        </div>

        {/* System Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          {systemMetrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground">
                  {metric.change}
                  {metric.changeType === "positive" && (
                    <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
                      ↗
                    </Badge>
                  )}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="assessorias" className="space-y-6">
          <TabsList>
            <TabsTrigger value="assessorias">Assessorias</TabsTrigger>
            <TabsTrigger value="admins">Administradores</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="system">Sistema</TabsTrigger>
          </TabsList>

          <TabsContent value="assessorias" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Gestão de Assessorias</CardTitle>
                    <CardDescription>Gerencie todas as assessorias do sistema</CardDescription>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Buscar assessorias..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Link href="/superadmin/create-assessoria">
                      <Button className="bg-red-600 hover:bg-red-700">
                        <Plus className="h-4 w-4 mr-2" />
                        Nova Assessoria
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Assessoria</TableHead>
                      <TableHead>Proprietário</TableHead>
                      <TableHead>Alunos</TableHead>
                      <TableHead>Treinadores</TableHead>
                      <TableHead>Receita</TableHead>
                      <TableHead>Plano</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {assessorias.map((assessoria) => (
                      <TableRow key={assessoria.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{assessoria.name}</div>
                            <div className="text-sm text-gray-500">
                              Criada em {new Date(assessoria.createdAt).toLocaleDateString("pt-BR")}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{assessoria.owner}</div>
                            <div className="text-sm text-gray-500">{assessoria.email}</div>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{assessoria.students}</TableCell>
                        <TableCell className="font-medium">{assessoria.trainers}</TableCell>
                        <TableCell className="font-medium">{formatCurrency(assessoria.revenue)}</TableCell>
                        <TableCell>{getPlanBadge(assessoria.plan)}</TableCell>
                        <TableCell>{getStatusBadge(assessoria.status)}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Ações</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                Ver Detalhes
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Editar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                Configurações
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Suspender
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="admins" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Administradores do Sistema</CardTitle>
                    <CardDescription>Gerencie todos os administradores e treinadores</CardDescription>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Novo Admin
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Usuário</TableHead>
                      <TableHead>Assessoria</TableHead>
                      <TableHead>Função</TableHead>
                      <TableHead>Último Login</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {admins.map((admin) => (
                      <TableRow key={admin.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={admin.avatar || "/placeholder.svg"} alt={admin.name} />
                              <AvatarFallback>{admin.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{admin.name}</div>
                              <div className="text-sm text-gray-500">{admin.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{admin.assessoria}</TableCell>
                        <TableCell>
                          <Badge variant={admin.role === "Owner" ? "default" : "secondary"}>
                            {admin.role === "Owner" ? "Proprietário" : "Treinador"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm">{admin.lastLogin}</TableCell>
                        <TableCell>{getStatusBadge(admin.status)}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Ações</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                Ver Perfil
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Editar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                Permissões
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Desativar
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Crescimento de Usuários</CardTitle>
                  <CardDescription>Novos usuários por mês</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { month: "Set", users: 89, growth: 0 },
                      { month: "Out", users: 124, growth: 39.3 },
                      { month: "Nov", users: 156, growth: 25.8 },
                      { month: "Dez", users: 203, growth: 30.1 },
                      { month: "Jan", users: 247, growth: 21.7 },
                    ].map((data, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{data.month}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold">{data.users}</span>
                          {data.growth > 0 && (
                            <Badge className="bg-green-100 text-green-800 text-xs">+{data.growth}%</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Receita por Plano</CardTitle>
                  <CardDescription>Distribuição da receita</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { plan: "Premium", revenue: 45600, percentage: 51 },
                      { plan: "Pro", revenue: 28900, percentage: 32 },
                      { plan: "Basic", revenue: 14950, percentage: 17 },
                    ].map((data, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{data.plan}</span>
                          <span className="text-gray-600">{data.percentage}%</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: `${data.percentage}%` }}></div>
                          </div>
                          <span className="text-sm font-medium">{formatCurrency(data.revenue)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações do Sistema</CardTitle>
                <CardDescription>Configurações globais da plataforma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-medium">Configurações Gerais</h4>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Settings className="h-4 w-4 mr-2" />
                        Configurações de Email
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Shield className="h-4 w-4 mr-2" />
                        Configurações de Segurança
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Configurações de Pagamento
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Manutenção</h4>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Relatórios do Sistema
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Activity className="h-4 w-4 mr-2" />
                        Logs de Atividade
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Backup e Restore
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
