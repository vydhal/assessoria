import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, AlertCircle, MessageSquare } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "workout_completed",
      student: "Maria Santos",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MS",
      action: "completou o treino",
      details: "Intervalado 5x1000m",
      time: "2h atrás",
      status: "completed",
      icon: CheckCircle,
    },
    {
      id: 2,
      type: "message",
      student: "João Silva",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JS",
      action: "enviou uma mensagem",
      details: "Dúvida sobre o treino de amanhã",
      time: "4h atrás",
      status: "pending",
      icon: MessageSquare,
    },
    {
      id: 3,
      type: "workout_missed",
      student: "Ana Costa",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AC",
      action: "perdeu o treino",
      details: "Long Run 15km",
      time: "1 dia atrás",
      status: "missed",
      icon: AlertCircle,
    },
    {
      id: 4,
      type: "workout_completed",
      student: "Pedro Lima",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "PL",
      action: "completou o treino",
      details: "Corrida Base 8km",
      time: "1 dia atrás",
      status: "completed",
      icon: CheckCircle,
    },
    {
      id: 5,
      type: "workout_completed",
      student: "Carla Mendes",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "CM",
      action: "completou o treino",
      details: "Tempo Run 6km",
      time: "2 dias atrás",
      status: "completed",
      icon: CheckCircle,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "missed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Concluído"
      case "pending":
        return "Pendente"
      case "missed":
        return "Perdido"
      default:
        return "Desconhecido"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Atividade Recente</CardTitle>
        <CardDescription>Últimas atividades dos seus alunos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.student} />
                <AvatarFallback>{activity.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">
                    <span className="text-gray-900">{activity.student}</span>
                    <span className="text-gray-600 ml-1">{activity.action}</span>
                  </p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className={getStatusColor(activity.status)}>
                      {getStatusText(activity.status)}
                    </Badge>
                  </div>
                </div>
                <p className="text-xs text-gray-500">{activity.details}</p>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <Clock className="h-3 w-3" />
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
