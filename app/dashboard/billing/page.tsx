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
  DollarSign,
  TrendingUp,
  Users,
  Calendar,
  Search,
  Filter,
  Download,
  Send,
  Eye,
  MoreHorizontal,
  CreditCard,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react"

export default function BillingPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const financialMetrics = [
    {
      title: "Receita Mensal",
      value: "R$ 12.450",
      change: "+8.2%",
      changeType: "positive",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Alunos Ativos",
      value: "24",
      change: "+2 este mês",
      changeType: "positive",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Taxa de Inadimplência",
      value: "4.2%",
      change: "-1.1%",
      changeType: "positive",
      icon: TrendingUp,
      color: "text-orange-600",
    },
    {
      title: "Próximos Vencimentos",
      value: "8",
      change: "Nos próximos 7 dias",
      changeType: "neutral",
      icon: Calendar,
      color: "text-purple-600",
    },
  ]

  const payments = [
    {
      id: 1,
      student: {
        name: "Maria Santos",
        email: "maria@email.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MS",
      },
      plan: "Plano Premium",
      amount: 450,
      dueDate: "2024-01-20",
      status: "paid",
      paymentDate: "2024-01-18",
      method: "Cartão de Crédito",
    },
    {
      id: 2,
      student: {
        name: "João Silva",
        email: "joao@email.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JS",
      },
      plan: "Plano Básico",
      amount: 280,
      dueDate: "2024-01-22",
      status: "pending",
      paymentDate: null,
      method: "PIX",
    },
    {
      id: 3,
      student: {
        name: "Ana Costa",
        email: "ana@email.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "AC",
      },
      plan: "Plano Premium",
      amount: 450,
      dueDate: "2024-01-15",
      status: "overdue",
      paymentDate: null,
      method: "Boleto",
    },
    {
      id: 4,
      student: {
        name: "Pedro Lima",
        email: "pedro@email.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "PL",
      },
      plan: "Plano Intermediário",
      amount: 350,
      dueDate: "2024-01-25",
      status: "paid",
      paymentDate: "2024-01-23",
      method: "PIX",
    },
  ]

  const plans = [
    {
      id: 1,
      name: "Plano Básico",
      price: 280,
      features: ["Treinos personalizados", "Suporte via chat", "Relatórios básicos"],
      students: 8,
      color: "border-gray-200",
    },
    {
      id: 2,
      name: "Plano Intermediário",
      price: 350,
      features: ["Tudo do Básico", "Análise de métricas", "Videochamadas", "Planos nutricionais"],
      students: 12,
      color: "border-orange-200",
    },
    {
      id: 3,
      name: "Plano Premium",
      price: 450,
      features: ["Tudo do Intermediário", "Acompanhamento 24/7", "Assessoria completa", "Preparação para provas"],
      students: 4,
      color: "border-green-200",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Pago
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3 mr-1" />
            Pendente
          </Badge>
        )
      case "overdue":
        return (
          <Badge className="bg-red-100 text-red-800">
            <AlertCircle className="h-3 w-3 mr-1" />
            Vencido
          </Badge>
        )
      default:
        return <Badge variant="secondary">Desconhecido</Badge>
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR")
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestão Financeira</h1>
          <p className="text-gray-600">Controle de pagamentos e receitas</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Send className="h-4 w-4 mr-2" />
            Enviar Cobrança
          </Button>
        </div>
      </div>

      {/* Métricas Financeiras */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {financialMetrics.map((metric, index) => (
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

      <Tabs defaultValue="payments" className="space-y-6">
        <TabsList>
          <TabsTrigger value="payments">Pagamentos</TabsTrigger>
          <TabsTrigger value="plans">Planos</TabsTrigger>
          <TabsTrigger value="reports">Relatórios</TabsTrigger>
        </TabsList>

        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Controle de Pagamentos</CardTitle>
                  <CardDescription>Gerencie mensalidades e cobranças</CardDescription>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Buscar pagamentos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Aluno</TableHead>
                    <TableHead>Plano</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Método</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={payment.student.avatar || "/placeholder.svg"}
                              alt={payment.student.name}
                            />
                            <AvatarFallback>{payment.student.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{payment.student.name}</div>
                            <div className="text-sm text-gray-500">{payment.student.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{payment.plan}</TableCell>
                      <TableCell className="font-medium">{formatCurrency(payment.amount)}</TableCell>
                      <TableCell>{formatDate(payment.dueDate)}</TableCell>
                      <TableCell>{getStatusBadge(payment.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <CreditCard className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{payment.method}</span>
                        </div>
                      </TableCell>
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
                              <Send className="mr-2 h-4 w-4" />
                              Enviar Cobrança
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Baixar Recibo
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

        <TabsContent value="plans" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.id} className={`border-2 ${plan.color}`}>
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-orange-600">
                    {formatCurrency(plan.price)}
                    <span className="text-sm font-normal text-gray-500">/mês</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Alunos ativos:</span>
                      <Badge variant="secondary">{plan.students}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-gray-600">Receita mensal:</span>
                      <span className="font-medium">{formatCurrency(plan.price * plan.students)}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline">
                    Gerenciar Plano
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Receita por Mês</CardTitle>
                <CardDescription>Evolução da receita nos últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { month: "Ago", revenue: 8500, growth: 0 },
                    { month: "Set", revenue: 9200, growth: 8.2 },
                    { month: "Out", revenue: 10100, growth: 9.8 },
                    { month: "Nov", revenue: 11300, growth: 11.9 },
                    { month: "Dez", revenue: 11800, growth: 4.4 },
                    { month: "Jan", revenue: 12450, growth: 5.5 },
                  ].map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{data.month}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold">{formatCurrency(data.revenue)}</span>
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
                <CardTitle>Distribuição por Plano</CardTitle>
                <CardDescription>Receita por tipo de plano</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {plans.map((plan) => {
                    const revenue = plan.price * plan.students
                    const totalRevenue = plans.reduce((acc, p) => acc + p.price * p.students, 0)
                    const percentage = ((revenue / totalRevenue) * 100).toFixed(1)

                    return (
                      <div key={plan.id} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{plan.name}</span>
                          <span className="text-gray-600">{percentage}%</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
                          </div>
                          <span className="text-sm font-medium">{formatCurrency(revenue)}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
