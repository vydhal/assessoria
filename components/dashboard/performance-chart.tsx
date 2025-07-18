"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PerformanceChart() {
  // Dados mockados para o gráfico
  const weeklyData = [
    { day: "Seg", completed: 8, planned: 10 },
    { day: "Ter", completed: 12, planned: 12 },
    { day: "Qua", completed: 6, planned: 8 },
    { day: "Qui", completed: 15, planned: 16 },
    { day: "Sex", completed: 9, planned: 11 },
    { day: "Sáb", completed: 14, planned: 14 },
    { day: "Dom", completed: 7, planned: 9 },
  ]

  const maxValue = Math.max(...weeklyData.map((d) => Math.max(d.completed, d.planned)))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Semanal</CardTitle>
        <CardDescription>Treinos planejados vs realizados</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Realizados</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-600">Planejados</span>
            </div>
          </div>

          <div className="space-y-3">
            {weeklyData.map((data, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-8 text-sm font-medium text-gray-600">{data.day}</div>
                <div className="flex-1 flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                    <div
                      className="bg-gray-300 h-4 rounded-full absolute"
                      style={{ width: `${(data.planned / maxValue) * 100}%` }}
                    ></div>
                    <div
                      className="bg-orange-500 h-4 rounded-full absolute"
                      style={{ width: `${(data.completed / maxValue) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 w-16">
                    {data.completed}/{data.planned}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Taxa de conclusão:</span>
              <Badge className="bg-green-100 text-green-800">87%</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
