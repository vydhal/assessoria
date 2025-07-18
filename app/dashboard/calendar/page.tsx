"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Plus, Clock, MapPin, Users, ChevronLeft, ChevronRight, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const events = [
    {
      id: 1,
      title: "Treino em Grupo - Intervalado",
      type: "group_training",
      date: "2024-01-18",
      time: "06:00",
      duration: "60 min",
      location: "Parque Ibirapuera",
      participants: [
        { name: "Maria Santos", avatar: "/placeholder.svg?height=32&width=32", initials: "MS" },
        { name: "João Silva", avatar: "/placeholder.svg?height=32&width=32", initials: "JS" },
        { name: "Pedro Lima", avatar: "/placeholder.svg?height=32&width=32", initials: "PL" },
      ],
      status: "confirmed",
      color: "bg-orange-500",
    },
    {
      id: 2,
      title: "Avaliação Física - Ana Costa",
      type: "assessment",
      date: "2024-01-18",
      time: "14:00",
      duration: "90 min",
      location: "Consultório",
      participants: [{ name: "Ana Costa", avatar: "/placeholder.svg?height=32&width=32", initials: "AC" }],
      status: "scheduled",
      color: "bg-blue-500",
    },
    {
      id: 3,
      title: "Long Run Domingo",
      type: "group_training",
      date: "2024-01-21",
      time: "07:00",
      duration: "120 min",
      location: "Parque Villa-Lobos",
      participants: [
        { name: "Maria Santos", avatar: "/placeholder.svg?height=32&width=32", initials: "MS" },
        { name: "João Silva", avatar: "/placeholder.svg?height=32&width=32", initials: "JS" },
        { name: "Ana Costa", avatar: "/placeholder.svg?height=32&width=32", initials: "AC" },
        { name: "Pedro Lima", avatar: "/placeholder.svg?height=32&width=32", initials: "PL" },
        { name: "Carla Mendes", avatar: "/placeholder.svg?height=32&width=32", initials: "CM" },
      ],
      status: "confirmed",
      color: "bg-green-500",
    },
    {
      id: 4,
      title: "Consulta Nutricional - Maria",
      type: "consultation",
      date: "2024-01-19",
      time: "16:00",
      duration: "45 min",
      location: "Online",
      participants: [{ name: "Maria Santos", avatar: "/placeholder.svg?height=32&width=32", initials: "MS" }],
      status: "scheduled",
      color: "bg-purple-500",
    },
  ]

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case "group_training":
        return "Treino em Grupo"
      case "assessment":
        return "Avaliação"
      case "consultation":
        return "Consulta"
      case "individual_training":
        return "Treino Individual"
      default:
        return "Evento"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-100 text-green-800">Confirmado</Badge>
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-800">Agendado</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">Cancelado</Badge>
      default:
        return <Badge variant="secondary">Pendente</Badge>
    }
  }

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Dias do mês anterior
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i)
      days.push({ date: prevDate, isCurrentMonth: false })
    }

    // Dias do mês atual
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ date: new Date(year, month, day), isCurrentMonth: true })
    }

    // Dias do próximo mês para completar a grade
    const remainingDays = 42 - days.length
    for (let day = 1; day <= remainingDays; day++) {
      days.push({ date: new Date(year, month + 1, day), isCurrentMonth: false })
    }

    return days
  }

  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split("T")[0]
    return events.filter((event) => event.date === dateString)
  }

  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1))
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Agenda</h1>
          <p className="text-gray-600">Gerencie aulas, treinos e eventos</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Plus className="h-4 w-4 mr-2" />
            Novo Evento
          </Button>
        </div>
      </div>

      <Tabs defaultValue="calendar" className="space-y-6">
        <TabsList>
          <TabsTrigger value="calendar">Calendário</TabsTrigger>
          <TabsTrigger value="list">Lista</TabsTrigger>
          <TabsTrigger value="week">Semana</TabsTrigger>
        </TabsList>

        <TabsContent value="calendar" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" onClick={() => navigateMonth(-1)}>
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <h2 className="text-xl font-bold">
                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                      </h2>
                      <Button variant="ghost" size="sm" onClick={() => navigateMonth(1)}>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date())}>
                      Hoje
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {weekDays.map((day) => (
                      <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {getDaysInMonth(currentDate).map((day, index) => {
                      const dayEvents = getEventsForDate(day.date)
                      const isToday = day.date.toDateString() === new Date().toDateString()
                      const isSelected = day.date.toDateString() === selectedDate.toDateString()

                      return (
                        <div
                          key={index}
                          className={`min-h-[80px] p-1 border rounded cursor-pointer hover:bg-gray-50 ${
                            !day.isCurrentMonth ? "text-gray-400 bg-gray-50" : ""
                          } ${isToday ? "bg-orange-50 border-orange-200" : ""} ${
                            isSelected ? "ring-2 ring-orange-500" : ""
                          }`}
                          onClick={() => setSelectedDate(day.date)}
                        >
                          <div className={`text-sm font-medium ${isToday ? "text-orange-600" : ""}`}>
                            {day.date.getDate()}
                          </div>
                          <div className="space-y-1">
                            {dayEvents.slice(0, 2).map((event) => (
                              <div key={event.id} className={`text-xs p-1 rounded text-white truncate ${event.color}`}>
                                {event.time} {event.title}
                              </div>
                            ))}
                            {dayEvents.length > 2 && (
                              <div className="text-xs text-gray-500">+{dayEvents.length - 2} mais</div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {selectedDate.toLocaleDateString("pt-BR", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                    })}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {getEventsForDate(selectedDate).length > 0 ? (
                      getEventsForDate(selectedDate).map((event) => (
                        <div key={event.id} className="p-3 border rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className={`w-3 h-3 rounded-full ${event.color}`}></div>
                            <span className="font-medium text-sm">{event.title}</span>
                          </div>
                          <div className="space-y-1 text-xs text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>
                                {event.time} ({event.duration})
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-3 w-3" />
                              <span>{event.participants.length} participante(s)</span>
                            </div>
                          </div>
                          <div className="mt-2">{getStatusBadge(event.status)}</div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500 text-center py-4">Nenhum evento neste dia</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Próximos Eventos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {events.slice(0, 3).map((event) => (
                      <div key={event.id} className="flex items-center space-x-3 p-2 border rounded">
                        <div className={`w-2 h-8 rounded ${event.color}`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{event.title}</p>
                          <p className="text-xs text-gray-600">
                            {new Date(event.date).toLocaleDateString("pt-BR")} às {event.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="list" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Lista de Eventos</CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Buscar eventos..." className="pl-10 w-64" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                    <div className={`w-4 h-16 rounded ${event.color}`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{event.title}</h3>
                        {getStatusBadge(event.status)}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{new Date(event.date).toLocaleDateString("pt-BR")}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>
                            {event.time} ({event.duration})
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{event.participants.length} participante(s)</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="outline">{getEventTypeLabel(event.type)}</Badge>
                        <div className="flex -space-x-1">
                          {event.participants.slice(0, 3).map((participant, index) => (
                            <Avatar key={index} className="h-6 w-6 border-2 border-white">
                              <AvatarImage src={participant.avatar || "/placeholder.svg"} alt={participant.name} />
                              <AvatarFallback className="text-xs">{participant.initials}</AvatarFallback>
                            </Avatar>
                          ))}
                          {event.participants.length > 3 && (
                            <div className="h-6 w-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                              <span className="text-xs text-gray-600">+{event.participants.length - 3}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Visão Semanal</CardTitle>
              <CardDescription>Eventos da semana atual</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <CalendarIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Visão semanal em desenvolvimento</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
