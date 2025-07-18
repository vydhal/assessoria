"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Trophy,
  Plus,
  Search,
  Filter,
  Calendar,
  MapPin,
  Users,
  Clock,
  MoreHorizontal,
  Edit,
  Eye,
  Trash2,
  Medal,
  Target,
} from "lucide-react"

export default function RacesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const races = [
    {
      id: 1,
      name: "Maratona de São Paulo 2024",
      date: "2024-05-12",
      location: "São Paulo, SP",
      distance: "42.2 km",
      type: "Maratona",
      status: "upcoming",
      participants: [
        { name: "Maria Santos", avatar: "/placeholder.svg?height=32&width=32", initials: "MS", goal: "Sub 3:30" },
        { name: "Pedro Lima", avatar: "/placeholder.svg?height=32&width=32", initials: "PL", goal: "Sub 3:45" },
      ],
      registrationDeadline: "2024-04-15",
      price: "R$ 180,00",
      website: "https://maratonasp.com.br",
    },
    {
      id: 2,
      name: "Meia Maratona do Rio",
      date: "2024-03-24",
      location: "Rio de Janeiro, RJ",
      distance: "21.1 km",
      type: "Meia Maratona",
      status: "upcoming",
      participants: [
        { name: "João Silva", avatar: "/placeholder.svg?height=32&width=32", initials: "JS", goal: "Sub 1:45" },
        { name: "Ana Costa", avatar: "/placeholder.svg?height=32&width=32", initials: "AC", goal: "Sub 2:00" },
        { name: "Carla Mendes", avatar: "/placeholder.svg?height=32&width=32", initials: "CM", goal: "Sub 1:50" },
      ],
      registrationDeadline: "2024-02-20",
      price: "R$ 120,00",
      website: "https://meiamaratonario.com.br",
    },
    {
      id: 3,
      name: "Corrida de São Silvestre",
      date: "2023-12-31",
      location: "São Paulo, SP",
      distance: "15 km",
      type: "Corrida de Rua",
      status: "completed",
      participants: [
        {
          name: "Maria Santos",
          avatar: "/placeholder.svg?height=32&width=32",
          initials: "MS",
          result: "1:05:23",
          position: 45,
        },
        {
          name: "João Silva",
          avatar: "/placeholder.svg?height=32&width=32",
          initials: "JS",
          result: "1:12:45",
          position: 78,
        },
        {
          name: "Pedro Lima",
          avatar: "/placeholder.svg?height=32&width=32",
          initials: "PL",
          result: "1:08:12",
          position: 56,
        },
      ],
      registrationDeadline: "2023-11-30",
      price: "R$ 80,00",
      website: "https://saosilvestre.com.br",
    },
    {
      id: 4,
      name: "10K Ibirapuera",
      date: "2024-02-18",
      location: "São Paulo, SP",
      distance: "10 km",
      type: "10K",
      status: "registration_open",
      participants: [
        { name: "Ana Costa", avatar: "/placeholder.svg?height=32&width=32", initials: "AC", goal: "Sub 45:00" },
        { name: "Carla Mendes", avatar: "/placeholder.svg?height=32&width=32", initials: "CM", goal: "Sub 50:00" },
      ],
      registrationDeadline: "2024-02-10",
      price: "R$ 60,00",
      website: "https://10kibirapuera.com.br",
    },
  ]

  const upcomingRaces = [
    {
      name: "Maratona Internacional de São Paulo",
      date: "2024-04-14",
      distance: "42.2 km",
      location: "São Paulo, SP",
    },
    {
      name: "Corrida da Independência",
      date: "2024-09-07",
      distance: "5 km / 10 km",
      location: "São Paulo, SP",
    },
    {
      name: "Maratona do Rio de Janeiro",
      date: "2024-05-19",
      distance: "42.2 km",
      location: "Rio de Janeiro, RJ",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return <Badge className="bg-blue-100 text-blue-800">Próxima</Badge>
      case "registration_open":
        return <Badge className="bg-green-100 text-green-800">Inscrições Abertas</Badge>
      case "completed":
        return <Badge className="bg-gray-100 text-gray-800">Concluída</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">Cancelada</Badge>
      default:
        return <Badge variant="secondary">Desconhecida</Badge>
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Maratona":
        return "text-red-600"
      case "Meia Maratona":
        return "text-orange-600"
      case "10K":
        return "text-green-600"
      case "5K":
        return "text-blue-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestão de Provas</h1>
          <p className="text-gray-600">Cadastre provas e acompanhe a participação dos alunos</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Plus className="h-4 w-4 mr-2" />
            Nova Prova
          </Button>
        </div>
      </div>

      <Tabs defaultValue="my-races" className="space-y-6">
        <TabsList>
          <TabsTrigger value="my-races">Minhas Provas</TabsTrigger>
          <TabsTrigger value="discover">Descobrir</TabsTrigger>
          <TabsTrigger value="results">Resultados</TabsTrigger>
        </TabsList>

        <TabsContent value="my-races" className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar provas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {races.map((race) => (
              <Card key={race.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{race.name}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className={getTypeColor(race.type)}>
                          {race.type}
                        </Badge>
                        {getStatusBadge(race.status)}
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
                          <Eye className="mr-2 h-4 w-4" />
                          Ver Detalhes
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="mr-2 h-4 w-4" />
                          Gerenciar Participantes
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Remover
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{new Date(race.date).toLocaleDateString("pt-BR")}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{race.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-gray-400" />
                      <span>{race.distance}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span>{race.participants.length} participante(s)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Participantes:</h4>
                    <div className="flex -space-x-1">
                      {race.participants.slice(0, 3).map((participant, index) => (
                        <Avatar key={index} className="h-8 w-8 border-2 border-white">
                          <AvatarImage src={participant.avatar || "/placeholder.svg"} alt={participant.name} />
                          <AvatarFallback className="text-xs">{participant.initials}</AvatarFallback>
                        </Avatar>
                      ))}
                      {race.participants.length > 3 && (
                        <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                          <span className="text-xs text-gray-600">+{race.participants.length - 3}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Inscrições até:</span>
                      <span className="font-medium">
                        {new Date(race.registrationDeadline).toLocaleDateString("pt-BR")}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-gray-600">Valor:</span>
                      <span className="font-medium">{race.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="discover" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Próximas Provas Recomendadas</CardTitle>
              <CardDescription>Descubra novas provas para seus alunos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingRaces.map((race, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Trophy className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{race.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(race.date).toLocaleDateString("pt-BR")}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{race.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Target className="h-4 w-4" />
                          <span>{race.distance}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Adicionar
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resultados de Provas</CardTitle>
              <CardDescription>Acompanhe os resultados dos seus alunos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {races
                  .filter((race) => race.status === "completed")
                  .map((race) => (
                    <div key={race.id} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Medal className="h-6 w-6 text-yellow-600" />
                        <div>
                          <h3 className="font-medium">{race.name}</h3>
                          <p className="text-sm text-gray-600">
                            {new Date(race.date).toLocaleDateString("pt-BR")} • {race.distance}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {race.participants.map((participant, index) => (
                          <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={participant.avatar || "/placeholder.svg"} alt={participant.name} />
                              <AvatarFallback>{participant.initials}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h4 className="font-medium">{participant.name}</h4>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{participant.result}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Trophy className="h-4 w-4" />
                                  <span>{participant.position}º lugar</span>
                                </div>
                              </div>
                            </div>
                            <Badge className="bg-green-100 text-green-800">Concluído</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
