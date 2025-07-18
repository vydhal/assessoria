"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MoreHorizontal, Eye, Send, Edit, Target, Calendar, UserPlus } from "lucide-react"

export function StudentsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const students = [
    {
      id: 1,
      name: "Maria Santos",
      email: "maria@email.com",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MS",
      status: "active",
      lastWorkout: "Hoje",
      completionRate: 95,
      nextRace: "Maratona SP",
      vo2max: 54.2,
      joinDate: "Jan 2024",
    },
    {
      id: 2,
      name: "João Silva",
      email: "joao@email.com",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JS",
      status: "active",
      lastWorkout: "Ontem",
      completionRate: 78,
      nextRace: "Meia Maratona RJ",
      vo2max: 48.7,
      joinDate: "Fev 2024",
    },
    {
      id: 3,
      name: "Ana Costa",
      email: "ana@email.com",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AC",
      status: "inactive",
      lastWorkout: "3 dias atrás",
      completionRate: 45,
      nextRace: "-",
      vo2max: 42.1,
      joinDate: "Mar 2024",
    },
    {
      id: 4,
      name: "Pedro Lima",
      email: "pedro@email.com",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "PL",
      status: "active",
      lastWorkout: "Hoje",
      completionRate: 88,
      nextRace: "10K São Paulo",
      vo2max: 51.3,
      joinDate: "Jan 2024",
    },
    {
      id: 5,
      name: "Carla Mendes",
      email: "carla@email.com",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "CM",
      status: "active",
      lastWorkout: "Ontem",
      completionRate: 92,
      nextRace: "Trail Run",
      vo2max: 46.8,
      joinDate: "Dez 2023",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Ativo</Badge>
      case "inactive":
        return (
          <Badge variant="secondary" className="bg-red-100 text-red-800">
            Inativo
          </Badge>
        )
      default:
        return <Badge variant="secondary">Desconhecido</Badge>
    }
  }

  const getCompletionColor = (rate: number) => {
    if (rate >= 80) return "text-green-600"
    if (rate >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || student.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Gestão de Alunos</CardTitle>
            <CardDescription>Gerencie todos os seus alunos em um só lugar</CardDescription>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Novo Aluno
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar alunos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="active">Ativos</SelectItem>
              <SelectItem value="inactive">Inativos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Aluno</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Último Treino</TableHead>
                <TableHead>Taxa Conclusão</TableHead>
                <TableHead>VO2 Max</TableHead>
                <TableHead>Próxima Prova</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                        <AvatarFallback>{student.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(student.status)}</TableCell>
                  <TableCell className="text-sm">{student.lastWorkout}</TableCell>
                  <TableCell>
                    <span className={`font-medium ${getCompletionColor(student.completionRate)}`}>
                      {student.completionRate}%
                    </span>
                  </TableCell>
                  <TableCell className="font-medium">{student.vo2max}</TableCell>
                  <TableCell className="text-sm">{student.nextRace}</TableCell>
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
                          <Target className="mr-2 h-4 w-4" />
                          Criar Treino
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar Mensagem
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="mr-2 h-4 w-4" />
                          Agendar Aula
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">Nenhum aluno encontrado</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
