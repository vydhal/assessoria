import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Target,
  BarChart3,
  Calendar,
  MessageSquare,
  CreditCard,
  Smartphone,
  Activity,
  Shield,
  UserCheck,
  GraduationCap,
  Trophy,
  Camera,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <Activity className="h-8 w-8 text-orange-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">RunCoach Pro</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Funcionalidades
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Preços
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Contato
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">Treino Online</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Plataforma Completa para Treinadores de Corrida
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Gerencie alunos, crie treinos personalizados e acompanhe resultados de forma eficiente. Conecte-se
                    ao Strava, Garmin e outros dispositivos para uma experiência completa.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                    <Play className="mr-2 h-4 w-4" />
                    Começar Agora
                  </Button>
                  <Button variant="outline" size="lg" className="border-orange-200 hover:bg-orange-50 bg-transparent">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-3xl opacity-20"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    width={400}
                    height={400}
                    alt="Dashboard Preview"
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Funcionalidades Principais</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tudo que você precisa para gerenciar sua assessoria esportiva de forma profissional
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-orange-600" />
                  <CardTitle>Gestão de Alunos</CardTitle>
                  <CardDescription>Organize e acompanhe todos os seus alunos em um só lugar</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Perfis detalhados
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Histórico de treinos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Avaliações físicas e anamnese
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-10 w-10 text-orange-600" />
                  <CardTitle>Treinos Personalizados</CardTitle>
                  <CardDescription>Crie e atribua treinos específicos para cada aluno</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Diversos tipos de treino
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Instruções detalhadas
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Controle de progressão
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-orange-600" />
                  <CardTitle>Métricas e Relatórios</CardTitle>
                  <CardDescription>Acompanhe o desempenho com dados precisos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Análise de performance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Gráficos de evolução
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Zonas de treino e VO2
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-orange-600" />
                  <CardTitle>Agenda Integrada</CardTitle>
                  <CardDescription>Gerencie horários de aulas e sessões de treino</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Agendamento online
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Lembretes automáticos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Aulas em grupo
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MessageSquare className="h-10 w-10 text-orange-600" />
                  <CardTitle>Comunicação Direta</CardTitle>
                  <CardDescription>Mantenha contato direto com seus alunos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Sistema de mensagens
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Notificações em tempo real
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Feedback dos treinos
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CreditCard className="h-10 w-10 text-orange-600" />
                  <CardTitle>Gestão Financeira</CardTitle>
                  <CardDescription>Controle pagamentos e mensalidades facilmente</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Controle de pagamentos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Relatórios financeiros
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Lembretes automáticos
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* User Profiles Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-50 to-red-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Perfis de Usuário</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Sistema hierárquico completo para diferentes níveis de acesso
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              <Card className="border-2 border-red-200 bg-white">
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 text-red-600 mx-auto" />
                  <CardTitle className="text-red-600">SuperAdmin</CardTitle>
                  <CardDescription>Controle total do sistema</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Criar e gerenciar admins
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Criar espaços de assessorias
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Relatórios globais
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Configurações do sistema
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 bg-white">
                <CardHeader className="text-center">
                  <GraduationCap className="h-12 w-12 text-orange-600 mx-auto" />
                  <CardTitle className="text-orange-600">Admin/Professor</CardTitle>
                  <CardDescription>Gerenciamento de alunos e treinos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Criar e gerenciar treinos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Acompanhar métricas dos alunos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Realizar anamnese
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Criar enquetes e cadastrar provas
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-white">
                <CardHeader className="text-center">
                  <UserCheck className="h-12 w-12 text-green-600 mx-auto" />
                  <CardTitle className="text-green-600">Aluno</CardTitle>
                  <CardDescription>Acesso aos treinos e rede social</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Visualizar treinos personalizados
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Acompanhar progresso
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Participar da rede social
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Comunicação com o treinador
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recursos Avançados</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Funcionalidades extras que fazem a diferença
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Smartphone className="h-10 w-10 text-orange-600 mx-auto" />
                  <CardTitle className="text-lg">PWA</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">Aplicativo web progressivo que funciona offline</p>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Globe className="h-10 w-10 text-orange-600 mx-auto" />
                  <CardTitle className="text-lg">Integrações</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">Strava, Garmin, Zeblaze e outros dispositivos</p>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Camera className="h-10 w-10 text-orange-600 mx-auto" />
                  <CardTitle className="text-lg">Rede Social</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">Compartilhe fotos de treinos e interaja com outros atletas</p>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Trophy className="h-10 w-10 text-orange-600 mx-auto" />
                  <CardTitle className="text-lg">Provas</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">Cadastre provas e acompanhe a participação dos alunos</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Pronto para Revolucionar seus Treinos?
                </h2>
                <p className="mx-auto max-w-[600px] text-orange-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Junte-se a centenas de treinadores que já transformaram sua metodologia de trabalho
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                  <Zap className="mr-2 h-4 w-4" />
                  Começar Teste Grátis
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Agendar Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© 2024 RunCoach Pro. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Termos de Serviço
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Privacidade
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Contato
          </Link>
        </nav>
      </footer>
    </div>
  )
}
