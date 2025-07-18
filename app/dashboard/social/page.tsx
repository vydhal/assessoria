"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Camera,
  MessageCircle,
  Share2,
  ThumbsUp,
  TrendingUp,
  Users,
  Award,
  ImageIcon,
  Send,
  Filter,
} from "lucide-react"

export default function SocialPage() {
  const [newPost, setNewPost] = useState("")

  const posts = [
    {
      id: 1,
      author: "Maria Santos",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MS",
      time: "2h atrás",
      content: "Acabei de completar meu primeiro 10K! Que sensação incrível! 🏃‍♀️💪 Obrigada pelas dicas, Carlos!",
      image: "/placeholder.svg?height=300&width=400",
      workout: {
        type: "10K",
        time: "45:23",
        pace: "4:32/km",
        distance: "10.0 km",
      },
      likes: 15,
      comments: 8,
      shares: 3,
      liked: false,
      tags: ["10K", "PB", "Primeira vez"],
    },
    {
      id: 2,
      author: "João Silva",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JS",
      time: "4h atrás",
      content: "Treino de intervalado hoje foi puxado, mas consegui manter o ritmo! 5x1000m concluído ✅",
      image: null,
      workout: {
        type: "Intervalado",
        time: "45:00",
        pace: "4:15/km",
        distance: "8.5 km",
      },
      likes: 12,
      comments: 5,
      shares: 2,
      liked: true,
      tags: ["Intervalado", "Treino forte"],
    },
    {
      id: 3,
      author: "Pedro Lima",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "PL",
      time: "6h atrás",
      content: "Long run de domingo no parque. O tempo estava perfeito! ☀️🌳 15km de pura alegria!",
      image: "/placeholder.svg?height=300&width=400",
      workout: {
        type: "Long Run",
        time: "1:18:45",
        pace: "5:15/km",
        distance: "15.0 km",
      },
      likes: 20,
      comments: 12,
      shares: 5,
      liked: false,
      tags: ["Long Run", "Domingo", "Parque"],
    },
    {
      id: 4,
      author: "Ana Costa",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AC",
      time: "1 dia atrás",
      content:
        "Primeira vez correndo na chuva! Foi uma experiência única 🌧️ Descobri que adoro correr no tempo fechado!",
      image: "/placeholder.svg?height=300&width=400",
      workout: {
        type: "Corrida Base",
        time: "35:20",
        pace: "5:53/km",
        distance: "6.0 km",
      },
      likes: 18,
      comments: 9,
      shares: 4,
      liked: true,
      tags: ["Chuva", "Primeira vez", "Descoberta"],
    },
  ]

  const topRunners = [
    { name: "Maria Santos", avatar: "/placeholder.svg?height=32&width=32", initials: "MS", km: 45, workouts: 12 },
    { name: "Pedro Lima", avatar: "/placeholder.svg?height=32&width=32", initials: "PL", km: 42, workouts: 11 },
    { name: "João Silva", avatar: "/placeholder.svg?height=32&width=32", initials: "JS", km: 38, workouts: 10 },
    { name: "Carla Mendes", avatar: "/placeholder.svg?height=32&width=32", initials: "CM", km: 35, workouts: 9 },
    { name: "Ana Costa", avatar: "/placeholder.svg?height=32&width=32", initials: "AC", km: 28, workouts: 8 },
  ]

  const achievements = [
    { student: "Maria Santos", achievement: "Primeiro 10K", date: "Hoje", icon: Award },
    { student: "Pedro Lima", achievement: "100km no mês", date: "Ontem", icon: TrendingUp },
    { student: "João Silva", achievement: "Melhor pace", date: "2 dias atrás", icon: TrendingUp },
  ]

  const handleLike = (postId: number) => {
    console.log(`Curtindo post ${postId}`)
  }

  const handleComment = (postId: number) => {
    console.log(`Comentando no post ${postId}`)
  }

  const handleShare = (postId: number) => {
    console.log(`Compartilhando post ${postId}`)
  }

  const handlePost = () => {
    if (newPost.trim()) {
      console.log("Publicando:", newPost)
      setNewPost("")
    }
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Rede Social</h1>
          <p className="text-gray-600">Acompanhe e interaja com seus alunos</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Camera className="h-4 w-4 mr-2" />
            Compartilhar
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-3 space-y-6">
          {/* Criar Post */}
          <Card>
            <CardHeader>
              <CardTitle>Compartilhar com a Turma</CardTitle>
              <CardDescription>Motive seus alunos compartilhando dicas e conquistas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="O que você gostaria de compartilhar com seus alunos hoje?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                rows={3}
              />
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Foto
                  </Button>
                  <Button variant="outline" size="sm">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Treino
                  </Button>
                </div>
                <Button onClick={handlePost} className="bg-orange-600 hover:bg-orange-700">
                  <Send className="h-4 w-4 mr-2" />
                  Publicar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Feed de Posts */}
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="workouts">Treinos</TabsTrigger>
              <TabsTrigger value="achievements">Conquistas</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {/* Header do Post */}
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                          <AvatarFallback>{post.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium">{post.author}</h4>
                            <span className="text-sm text-gray-500">{post.time}</span>
                          </div>
                          <p className="text-gray-700 mt-1">{post.content}</p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mt-2">
                            {post.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Dados do Treino */}
                      {post.workout && (
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <TrendingUp className="h-4 w-4 text-orange-600" />
                              <span className="font-medium">{post.workout.type}</span>
                            </div>
                            <div>{post.workout.distance}</div>
                            <div>{post.workout.time}</div>
                            <div>{post.workout.pace}</div>
                          </div>
                        </div>
                      )}

                      {/* Imagem do Post */}
                      {post.image && (
                        <div className="rounded-lg overflow-hidden">
                          <img src={post.image || "/placeholder.svg"} alt="Post" className="w-full h-64 object-cover" />
                        </div>
                      )}

                      {/* Ações do Post */}
                      <div className="flex items-center justify-between pt-3 border-t">
                        <div className="flex items-center space-x-6">
                          <Button
                            variant="ghost"
                            size="sm"
                            className={post.liked ? "text-red-600" : "text-gray-600"}
                            onClick={() => handleLike(post.id)}
                          >
                            <ThumbsUp className="h-4 w-4 mr-2" />
                            {post.likes}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-600"
                            onClick={() => handleComment(post.id)}
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            {post.comments}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-600"
                            onClick={() => handleShare(post.id)}
                          >
                            <Share2 className="h-4 w-4 mr-2" />
                            {post.shares}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="workouts" className="space-y-6">
              {posts
                .filter((post) => post.workout)
                .map((post) => (
                  <Card key={post.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                          <AvatarFallback>{post.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-medium">{post.author}</h4>
                          <p className="text-sm text-gray-600">Completou um treino de {post.workout?.type}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Concluído</Badge>
                      </div>

                      {post.workout && (
                        <div className="mt-4 grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className="text-center">
                            <div className="text-lg font-bold">{post.workout.distance}</div>
                            <div className="text-xs text-gray-600">Distância</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold">{post.workout.time}</div>
                            <div className="text-xs text-gray-600">Tempo</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold">{post.workout.pace}</div>
                            <div className="text-xs text-gray-600">Pace</div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-yellow-100 rounded-full">
                        <achievement.icon className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{achievement.student}</h4>
                        <p className="text-sm text-gray-600">Conquistou: {achievement.achievement}</p>
                        <p className="text-xs text-gray-500">{achievement.date}</p>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">Nova Conquista!</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Runners */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-orange-600" />
                <span>Top Runners</span>
              </CardTitle>
              <CardDescription>Ranking semanal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topRunners.map((runner, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-sm font-bold">
                      {index + 1}
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={runner.avatar || "/placeholder.svg"} alt={runner.name} />
                      <AvatarFallback className="text-xs">{runner.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{runner.name}</p>
                      <p className="text-xs text-gray-600">
                        {runner.km}km • {runner.workouts} treinos
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Estatísticas da Comunidade */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-orange-600" />
                <span>Comunidade</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">24</div>
                <div className="text-sm text-gray-600">Alunos ativos</div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold">156</div>
                  <div className="text-xs text-gray-600">Posts esta semana</div>
                </div>
                <div>
                  <div className="text-lg font-bold">89%</div>
                  <div className="text-xs text-gray-600">Engajamento</div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between text-sm">
                  <span>Km totais da turma:</span>
                  <span className="font-bold">1,247 km</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span>Treinos concluídos:</span>
                  <span className="font-bold">89</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conquistas Recentes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-orange-600" />
                <span>Conquistas</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 bg-yellow-50 rounded-lg">
                    <Award className="h-4 w-4 text-yellow-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{achievement.achievement}</p>
                      <p className="text-xs text-gray-600">{achievement.student}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
