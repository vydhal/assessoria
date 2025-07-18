// app/superadmin/page.tsx
// REMOVIDO: "use client"


import { Assessoria, User, Payment } from '@prisma/client'; // Importe os modelos do Prisma


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  Eye,
  Trash2,
  Settings,
  Activity,
  TrendingUp,
  UserPlus,
  Crown,
} from "lucide-react";
import Link from "next/link";
import { prisma } from "@/lib/prisma"; // Importar o Prisma Client

export default async function SuperAdminDashboard() { // Tornar o componente assíncrono para buscar dados
  // Buscar dados reais do banco de dados
  const allAssessorias = await prisma.assessoria.findMany({
    include: {
      users: {
        where: {
          role: 'student' // Incluir apenas alunos para contagem total de alunos na assessoria
        }
      },
      payments: true // Para calcular receita
    }
  });

  const allAdmins = await prisma.user.findMany({
    where: {
      role: {
        in: ['admin', 'superadmin'] // Buscar todos os usuários que são admin ou superadmin
      }
    },
    include: {
      assessoria: true // Incluir dados da assessoria para exibição
    }
  });

  // Calcular métricas do sistema com base nos dados reais
  const totalAssessorias = allAssessorias.length;
  const totalTrainers = allAdmins.filter(admin => admin.role === 'admin').length;
  const totalStudents = allAssessorias.reduce((sum, assessoria) => sum + assessoria.users.length, 0);
  const totalRevenue = allAssessorias.reduce((sum, assessoria) => 
    sum + assessoria.payments.reduce((acc, payment) => acc + (payment.status === 'paid' ? payment.amount : 0), 0), 0
  );


  const systemMetrics = [
    {
      title: "Total de Assessorias",
      value: totalAssessorias.toString(),
      change: "+2 este mês", // Placeholder, você precisaria de lógica de data para isso
      changeType: "positive",
      icon: Building,
      color: "text-blue-600",
    },
    {
      title: "Treinadores Ativos",
      value: totalTrainers.toString(),
      change: "+8 este mês", // Placeholder
      changeType: "positive",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Alunos Totais",
      value: totalStudents.toLocaleString(),
      change: "+156 este mês", // Placeholder
      changeType: "positive",
      icon: Activity,
      color: "text-orange-600",
    },
    {
      title: "Receita Total",
      value: new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(totalRevenue),
      change: "+12.5%", // Placeholder
      changeType: "positive",
      icon: DollarSign,
      color: "text-purple-600",
    },
  ];

  const assessorias = allAssessorias.map(ass => ({
    id: ass.id,
    name: ass.name,
    owner: ass.ownerName, // Mapeado de owner_name no DB
    email: ass.ownerEmail, // Mapeado de owner_email no DB
    students: ass.users.length, // Contagem de alunos associados
    trainers: allAdmins.filter(admin => admin.assessoriaId === ass.id && admin.role === 'admin').length, // Contagem de treinadores associados
    revenue: ass.payments.reduce((acc, payment) => acc + (payment.status === 'paid' ? payment.amount : 0), 0), // Soma dos pagamentos 'paid'
    status: ass.status,
    createdAt: ass.createdAt.toISOString(), // Converter Date para string
    plan: ass.plan,
  }));

  const admins = allAdmins.map(admin => ({
    id: admin.id,
    name: admin.name,
    email: admin.email,
    avatar: admin.avatarUrl || "/placeholder.svg?height=32&width=32", // Usar avatar_url
    initials: admin.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(), // Gerar iniciais
    assessoria: admin.assessoria?.name || 'N/A', // Nome da assessoria associada
    role: admin.role === 'admin' ? 'Trainer' : 'Owner', // Ajustar o texto da role
    lastLogin: admin.lastLogin?.toLocaleString('pt-BR') || 'Nunca', // Formatar data
    status: admin.status,
  }));

  const [searchTerm, setSearchTerm] = useState(""); // Este useState não será usado diretamente em Server Components, mas pode ser útil se você renderizar um componente cliente que use o input de busca. Por enquanto, pode permanecer.

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Ativo</Badge>;
      case "trial":
        return <Badge className="bg-yellow-100 text-yellow-800">Trial</Badge>;
      case "suspended":
        return <Badge className="bg-red-100 text-red-800">Suspenso</Badge>;
      default:
        return <Badge variant="secondary">Desconhecido</Badge>;
    }
  };

  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case "premium": // Usar 'premium' como no DB
        return <Badge className="bg-purple-100 text-purple-800">Premium</Badge>;
      case "pro": // Usar 'pro' como no DB
        return <Badge className="bg-blue-100 text-blue-800">Pro</Badge>;
      case "basic": // Usar 'basic' como no DB
        return <Badge className="bg-gray-100 text-gray-800">Basic</Badge>;
      default:
        return <Badge variant="secondary">-</Badge>;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SuperAdmin</span>
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
                      {/* O input de busca atualmente não filtra dados do DB no lado do servidor,
                          mas pode ser usado para filtrar no lado do cliente se você passar
                          os dados completos para um Client Component. */}
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
  );
}