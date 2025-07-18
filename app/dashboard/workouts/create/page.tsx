"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Plus, Minus, Clock, MapPin, Save, Send, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CreateWorkoutPage() {
  const [workoutType, setWorkoutType] = useState("")
  const [exercises, setExercises] = useState([{ id: 1, name: "", duration: "", intensity: "", description: "" }])
  const [selectedStudents, setSelectedStudents] = useState<string[]>([])

  const students = [
    { id: "1", name: "Maria Santos", email: "maria@email.com" },
    { id: "2", name: "João Silva", email: "joao@email.com" },
    { id: "3", name: "Ana Costa", email: "ana@email.com" },
    { id: "4", name: "Pedro Lima", email: "pedro@email.com" },
    { id: "5", name: "Carla Mendes", email: "carla@email.com" },
  ]

  const workoutTypes = [
    { value: "base", label: "Corrida Base", description: "Ritmo confortável, aeróbico" },
    { value: "intervals", label: "Intervalado", description: "Repetições em alta intensidade" },
    { value: "tempo", label: "Tempo Run", description: "Ritmo de limiar anaeróbico" },
    { value: "long", label: "Long Run", description: "Corrida longa, baixa intensidade" },
    { value: "fartlek", label: "Fartlek", description: "Variação de ritmo livre" },
    { value: "hill", label: "Subidas", description: "Treino em aclives" },
  ]

  const addExercise = () => {
    setExercises([
      ...exercises,
      {
        id: exercises.length + 1,
        name: "",
        duration: "",
        intensity: "",
        description: "",
      },
    ])
  }

  const removeExercise = (id: number) => {
    setExercises(exercises.filter((ex) => ex.id !== id))
  }

  const updateExercise = (id: number, field: string, value: string) => {
    setExercises(exercises.map((ex) => (ex.id === id ? { ...ex, [field]: value } : ex)))
  }

  const handleStudentToggle = (studentId: string) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId) ? prev.filter((id) => id !== studentId) : [...prev, studentId],
    )
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center space-x-4">
        <Link href="/dashboard/workouts">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Criar Novo Treino</h1>
          <p className="text-gray-600">Monte um treino personalizado para seus alunos</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
              <CardDescription>Defina os dados principais do treino</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="title">Título do Treino</Label>
                  <Input id="title" placeholder="Ex: Intervalado 5x1000m" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Tipo de Treino</Label>
                  <Select value={workoutType} onValueChange={setWorkoutType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {workoutTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex flex-col">
                            <span>{type.label}</span>
                            <span className="text-xs text-gray-500">{type.description}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="duration">Duração Total</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input id="duration" placeholder="45 min" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="distance">Distância</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input id="distance" placeholder="8 km" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="intensity">Intensidade</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Baixa (Z1-Z2)</SelectItem>
                      <SelectItem value="medium">Média (Z3-Z4)</SelectItem>
                      <SelectItem value="high">Alta (Z5)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição Geral</Label>
                <Textarea
                  id="description"
                  placeholder="Descreva o objetivo e instruções gerais do treino..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Exercícios</CardTitle>
                  <CardDescription>Adicione os exercícios que compõem o treino</CardDescription>
                </div>
                <Button onClick={addExercise} size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {exercises.map((exercise, index) => (
                <div key={exercise.id} className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Exercício {index + 1}</h4>
                    {exercises.length > 1 && (
                      <Button
                        onClick={() => removeExercise(exercise.id)}
                        size="sm"
                        variant="ghost"
                        className="text-red-600 hover:text-red-700"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Nome do Exercício</Label>
                      <Input
                        placeholder="Ex: Aquecimento, 5x1000m, Volta à calma"
                        value={exercise.name}
                        onChange={(e) => updateExercise(exercise.id, "name", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Duração/Repetições</Label>
                      <Input
                        placeholder="Ex: 10min, 5x1000m, 200m"
                        value={exercise.duration}
                        onChange={(e) => updateExercise(exercise.id, "duration", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Intensidade/Ritmo</Label>
                      <Input
                        placeholder="Ex: Fácil, 4:30/km, Z4"
                        value={exercise.intensity}
                        onChange={(e) => updateExercise(exercise.id, "intensity", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Recuperação</Label>
                      <Input
                        placeholder="Ex: 2min caminhada, 90s parado"
                        value={exercise.description}
                        onChange={(e) => updateExercise(exercise.id, "description", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Atribuir Alunos</CardTitle>
              <CardDescription>Selecione os alunos que receberão este treino</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {students.map((student) => (
                  <div key={student.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={student.id}
                      checked={selectedStudents.includes(student.id)}
                      onCheckedChange={() => handleStudentToggle(student.id)}
                    />
                    <Label htmlFor={student.id} className="flex-1 cursor-pointer">
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-xs text-gray-500">{student.email}</p>
                      </div>
                    </Label>
                  </div>
                ))}
              </div>

              {selectedStudents.length > 0 && (
                <div className="pt-3 border-t">
                  <p className="text-sm text-gray-600 mb-2">{selectedStudents.length} aluno(s) selecionado(s)</p>
                  <div className="flex flex-wrap gap-1">
                    {selectedStudents.map((studentId) => {
                      const student = students.find((s) => s.id === studentId)
                      return (
                        <Badge key={studentId} variant="secondary" className="text-xs">
                          {student?.name}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Agendamento</CardTitle>
              <CardDescription>Quando este treino deve ser realizado?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="date">Data</Label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Horário (opcional)</Label>
                <Input id="time" type="time" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Local (opcional)</Label>
                <Input id="location" placeholder="Ex: Parque Ibirapuera" />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <Button className="w-full bg-orange-600 hover:bg-orange-700">
              <Send className="h-4 w-4 mr-2" />
              Criar e Enviar
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              <Save className="h-4 w-4 mr-2" />
              Salvar como Rascunho
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
