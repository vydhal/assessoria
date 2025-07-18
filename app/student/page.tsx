"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Target,
  Activity,
  Clock,
  MapPin,
  TrendingUp,
  MessageSquare,
  Camera,
  ThumbsUp,
  MessageCircle,
  Share2,
  Play,
} from "lucide-react"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [socialPosts, setSocialPosts] = useState([
    {
      id: 1,
      author: "João Silva",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JS",
      time: "2h atrás",
      content: "Acabei de completar meu primeiro 10K! Que sensação incrível! 🏃‍♂️💪",
      image: "/placeholder.svg?height=200&width=300",
      likes: 12,
      comments: 3,
      liked: false,
    },
    {
      id: 2,
      author: "Ana Costa",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AC",
      time: "4h atrás",
      content: "Treino de intervalado hoje foi puxado, mas consegui manter o ritmo! Obrigada pelas dicas, Carlos! 🙏",
      image: null,
      likes: 8,
      comments: 2,
      liked: true,
    },
    {
      id: 3,
      author: "Pedro Lima",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "PL",
      time: "6h atrás",
      content: "Long run de domingo no parque. O tempo estava perfeito! ☀️🌳",
      image: "/placeholder.svg?height=200&width=300",
      likes: 15,
      comments: 5,
      liked: false,
    },
  ])

  const [newPost, setNewPost] = useState("")

  const student = {
    name: "Maria Santos",
    email: "maria@email.com",
    avatar: "/placeholder.svg?height=60&width=60",
    initials: "MS",
    level: "Intermediário",
    goal: "Maratona de São Paulo 2024",
    weeklyProgress: 85,
    monthlyProgress: 72,
  }

  const todayWorkout = {
    id: 1,
    title: "Intervalado 5x1000m",
    type: "Intervalado",
    duration: "45 min",
    distance: "8 km",
    description: "Aquecimento 10min + 5x1000m (R: 2min) + Volta à calma 10min",
    intensity: "Alta",
    completed: false,
  }

  const weekWorkouts = [
    {
      day: "Segunda",
      date: "18/01",
      workout: "Intervalado 5x1000m",
      status: "today",
      completed: false,
    },
    {
      day: "Terça",
      date: "19/01",
      workout: "Corrida Base 6km",
      status: "upcoming",
      completed: false,
    },
    {
      day: "Quarta",
      date: "20/01",
      workout: "Descanso",
      status: "upcoming",
      completed: false,
    },
    {
      day: "Quinta",
      date: "21/01",
      workout: "Tempo Run 8km",
      status: "upcoming",
      completed: false,
    },
    {
      day: "Sexta",
      date: "22/01",
      workout: "Corrida Fácil 5km",
      status: "upcoming",
      completed: false,
    },
    {
      day: "Sábado",
      date: "23/01",
      workout: "Long Run 15km",
      status: "upcoming",
      completed: false,
    },
    {
      day: "Domingo",
      date: "24/01",
      workout: "Descanso Ativo",
      status: "upcoming",
      completed: false,
    },
  ]

  const metrics = [
    { label: "Km esta semana", value: "32", target: "45", unit: "km" },
    { label: "Treinos concluídos", value: "4", target: "5", unit: "" },
    { label: "Pace médio", value: "5:15", target: "5:00", unit: "/km" },
    { label: "FC média", value: "155", target: "160", unit: "bpm" },
  ]

  const handleStartWorkout = () => {
    console.log("Iniciando treino:", todayWorkout.title)
    // Here you would implement the workout start logic
    alert(`Iniciando treino: ${todayWorkout.title}`)
  }

  const handleShareWorkout = (content: string) => {
    console.log("Compartilhando:", content)
    // Here you would implement the share logic
    if (navigator.share) {
      navigator.share({
        title: "Meu Treino",
        text: content,
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(content)
      alert("Conteúdo copiado para a área de transferência!")
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "today":
        return <Badge className="bg-orange-100 text-orange-800">Hoje</Badge>
      case "upcoming":
        return <Badge variant="outline">Próximo</Badge>
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Concluído</Badge>
      default:
        return <Badge variant="secondary">-</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-orange-600" />
              <span className="text-xl font-bold text-gray-900">RunCoach</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
              <AvatarFallback>{student.initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="workouts">Treinos</TabsTrigger>
            <TabsTrigger value="progress">Progresso</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Welcome Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                    <AvatarFallback className="text-xl">{student.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold">Olá, {student.name}! 👋</h2>
                    <p className="text-gray-600">{student.goal}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <Badge variant="outline">{student.level}</Badge>
                      <span className="text-sm text-gray-500">Progresso semanal: {student.weeklyProgress}%</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-orange-600">{student.weeklyProgress}%</div>
                    <Progress value={student.weeklyProgress} className="w-24 mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Today's Workout */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-orange-600" />
                      <span>Treino de Hoje</span>
                    </CardTitle>
                    <CardDescription>Seu treino programado para hoje</CardDescription>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800">Pendente</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{todayWorkout.title}</h3>
                  <p className="text-gray-600">{todayWorkout.description}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>{todayWorkout.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{todayWorkout.distance}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Activity className="h-4 w-4 text-gray-400" />
                    <span>{todayWorkout.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-gray-400" />
                    <span>Intensidade {todayWorkout.intensity}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button onClick={handleStartWorkout} className="flex-1 bg-orange-600 hover:bg-orange-700">
                    <Play className="h-4 w-4 mr-2" />
                    Iniciar Treino
                  </Button>
                  <Button variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Dúvidas
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Metrics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                      <div className="flex items-baseline space-x-1">
                        <p className="text-2xl font-bold">{metric.value}</p>
                        <p className="text-sm text-gray-500">{metric.unit}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>
                          Meta: {metric.target}
                          {metric.unit}
                        </span>
                        <Progress
                          value={
                            metric.target ? (Number.parseInt(metric.value) / Number.parseInt(metric.target)) * 100 : 0
                          }
                          className="flex-1 h-1"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="workouts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Plano Semanal</CardTitle>
                <CardDescription>Seus treinos programados para esta semana</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {weekWorkouts.map((workout, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                      <div className="text-center min-w-[60px]">
                        <div className="text-sm font-medium text-gray-600">{workout.day}</div>
                        <div className="text-lg font-bold">{workout.date}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{workout.workout}</h4>
                        <p className="text-sm text-gray-600">
                          {workout.workout === "Descanso" || workout.workout === "Descanso Ativo"
                            ? "Dia de recuperação"
                            : "Treino programado"}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(workout.status)}
                        {workout.status === "today" && (
                          <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                            <Play className="h-4 w-4 mr-2" />
                            Iniciar
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Evolução Mensal</CardTitle>
                  <CardDescription>Seu progresso nos últimos meses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { month: "Nov", km: 120, pace: "5:45" },
                      { month: "Dez", km: 140, pace: "5:35" },
                      { month: "Jan", km: 160, pace: "5:25" },
                    ].map((data, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{data.month}</span>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm">{data.km}km</span>
                          <span className="text-sm font-bold">{data.pace}/km</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Próximas Metas</CardTitle>
                  <CardDescription>Objetivos para os próximos meses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">10K - Março</span>
                        <Badge className="bg-green-100 text-green-800">Em dia</Badge>
                      </div>
                      <Progress value={75} />
                      <p className="text-xs text-gray-500">Meta: Sub 45min</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Meia Maratona - Junho</span>
                        <Badge className="bg-orange-100 text-orange-800">Planejando</Badge>
                      </div>
                      <Progress value={45} />
                      <p className="text-xs text-gray-500">Meta: Sub 1h45min</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Maratona SP - Outubro</span>
                        <Badge className="bg-blue-100 text-blue-800">Objetivo</Badge>
                      </div>
                      <Progress value={25} />
                      <p className="text-xs text-gray-500">Meta: Sub 3h30min</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="social" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Compartilhar Treino</CardTitle>
                <CardDescription>Conte como foi seu treino para a comunidade</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <textarea
                    placeholder="Como foi seu treino hoje? Compartilhe sua experiência..."
                    className="w-full p-3 border rounded-lg resize-none"
                    rows={3}
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                  />
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      <Camera className="h-4 w-4 mr-2" />
                      Adicionar Foto
                    </Button>
                    <Button onClick={() => handleShareWorkout(newPost)} className="bg-orange-600 hover:bg-orange-700">
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartilhar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {socialPosts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                          <AvatarFallback>{post.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium">{post.author}</h4>
                            <span className="text-sm text-gray-500">{post.time}</span>
                          </div>
                          <p className="text-gray-700 mt-1">{post.content}</p>
                        </div>
                      </div>

                      {post.image && (
                        <div className="rounded-lg overflow-hidden">
                          <img src={post.image || "/placeholder.svg"} alt="Post" className="w-full h-48 object-cover" />
                        </div>
                      )}

                      <div className="flex items-center space-x-6 pt-2 border-t">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={post.liked ? "text-red-600" : "text-gray-600"}
                          onClick={() => {
                            setSocialPosts((prevPosts) =>
                              prevPosts.map((p) =>
                                p.id === post.id ? { ...p, liked: !p.liked, likes: p.likes + (p.liked ? -1 : 1) } : p,
                              ),
                            )
                          }}
                        >
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          {post.likes}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600"
                          onClick={() => console.log(`Comentando no post ${post.id}`)}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {post.comments}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600"
                          onClick={() => handleShareWorkout(post.content)}
                        >
                          <Share2 className="h-4 w-4 mr-2" />
                          Compartilhar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
