import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, TrendingUp, Clock, Award, Activity } from "lucide-react"

export function MetricsCards() {
  const metrics = [
    {
      title: "Total de Alunos",
      value: "24",
      change: "+2 este mês",
      changeType: "positive",
      icon: Users,
      color: "text-orange-600",
    },
    {
      title: "Treinos Ativos",
      value: "18",
      change: "6 hoje",
      changeType: "neutral",
      icon: Target,
      color: "text-green-600",
    },
    {
      title: "Taxa de Conclusão",
      value: "87%",
      change: "+5% vs mês anterior",
      changeType: "positive",
      icon: TrendingUp,
      color: "text-blue-600",
    },
    {
      title: "Horas Treinadas",
      value: "156h",
      change: "Esta semana",
      changeType: "neutral",
      icon: Clock,
      color: "text-purple-600",
    },
    {
      title: "Próximas Provas",
      value: "3",
      change: "Nos próximos 30 dias",
      changeType: "neutral",
      icon: Award,
      color: "text-yellow-600",
    },
    {
      title: "Média VO2 Max",
      value: "52.3",
      change: "+1.2 vs mês anterior",
      changeType: "positive",
      icon: Activity,
      color: "text-red-600",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric, index) => (
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
  )
}
