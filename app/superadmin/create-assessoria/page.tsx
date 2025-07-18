"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Save,
  Building,
  Shield,
  Users,
  Target,
  Calendar,
  MessageSquare,
  CreditCard,
  BarChart3,
  Trophy,
  Camera,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CreateAssessoriaPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedModules, setSelectedModules] = useState<string[]>(["students", "workouts", "calendar", "messages"])

  const availableModules = [
    {
      id: "students",
      name: "Gestão de Alunos",
      description: "Cadastro e acompanhamento de alunos",
      icon: Users,
      required: true,
      color: "text-blue-600",
    },
    {
      id: "workouts",
      name: "Módulo de Treinos",
      description: "Criação e atribuição de treinos personalizados",
      icon: Target,
      required: true,
      color: "text-orange-600",
    },
    {
      id: "calendar",
      name: "Agenda Integrada",
      description: "Agendamento de aulas e eventos",
      icon: Calendar,
      required: false,
      color: "text-green-600",
    },
    {
      id: "messages",
      name: "Sistema de Mensagens",
      description: "Comunicação direta com alunos",
      icon: MessageSquare,
      required: false,
      color: "text-purple-600",
    },
    {
      id: "billing",
      name: "Gestão Financeira",
      description: "Controle de pagamentos e mensalidades",
      icon: CreditCard,
      required: false,
      color: "text-yellow-600",
    },
    {
      id: "reports",
      name: "Relatórios e Analytics",
      description: "Análises de performance e relatórios",
      icon: BarChart3,
      required: false,
      color: "text-indigo-600",
    },
    {
      id: "races",
      name: "Gestão de Provas",
      description: "Cadastro e acompanhamento de provas",
      icon: Trophy,
      required: false,
      color: "text-amber-600",
    },
    {
      id: "social",
      name: "Rede Social",
      description: "Feed social para alunos compartilharem treinos",
      icon: Camera,
      required: false,
      color: "text-pink-600",
    },
    {
      id: "integrations",
      name: "Integrações",
      description: "Conexão com Strava, Garmin e outros dispositivos",
      icon: Settings,
      required: false,
      color: "text-gray-600",
    },
  ]

  const plans = [
    {
      id: "basic",
      name: "Plano Básico",
      price: "R$ 97/mês",
      maxStudents: 25,
      maxTrainers: 1,
      features: ["Módulos básicos", "Suporte por email", "Backup semanal"],
    },
    {
      id: "pro",
      name: "Plano Pro",
      price: "R$ 197/mês",
      maxStudents: 100,
      maxTrainers: 5,
      features: ["Todos os módulos", "Suporte prioritário", "Backup diário", "Customização de marca"],
    },
    {
      id: "premium",
      name: "Plano Premium",
      price: "R$ 397/mês",
      maxStudents: 500,
      maxTrainers: 20,
      features: ["Todos os módulos", "Suporte 24/7", "Backup em tempo real", "White label", "API personalizada"],
    },
  ]

  const handleModuleToggle = (moduleId: string) => {
    const module = availableModules.find((m) => m.id === moduleId)
    if (module?.required) return // Não permite desmarcar módulos obrigatórios

    setSelectedModules((prev) => (prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId]))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular criação da assessoria
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Aqui você salvaria no banco de dados
    console.log("Criando assessoria com módulos:", selectedModules)

    setIsLoading(false)
    router.push("/superadmin")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex items-center space-x-4 max-w-7xl mx-auto">
          <Link href="/superadmin">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Nova Assessoria</h1>
            <p className="text-gray-600">Configure uma nova assessoria esportiva</p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {/* Informações Básicas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-red-600" />
                    <span>Informações da Assessoria</span>
                  </CardTitle>
                  <CardDescription>Dados básicos da nova assessoria</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome da Assessoria *</Label>
                      <Input id="name" placeholder="Ex: RunFast Assessoria" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subdomain">Subdomínio</Label>
                      <div className="flex">
                        <Input id="subdomain" placeholder="runfast" className="rounded-r-none" />
                        <div className="bg-gray-100 border border-l-0 rounded-r-md px-3 py-2 text-sm text-gray-600">
                          .runcoach.com
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição</Label>
                    <Textarea id="description" placeholder="Descreva a assessoria esportiva..." rows={3} />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="owner-name">Nome do Proprietário *</Label>
                      <Input id="owner-name" placeholder="Carlos Silva" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="owner-email">Email do Proprietário *</Label>
                      <Input id="owner-email" type="email" placeholder="carlos@runfast.com" required />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" placeholder="(11) 99999-9999" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Input id="city" placeholder="São Paulo, SP" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Seleção de Módulos */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-red-600" />
                    <span>Módulos Disponíveis</span>
                  </CardTitle>
                  <CardDescription>
                    Selecione quais funcionalidades estarão disponíveis para esta assessoria
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {availableModules.map((module) => (
                      <div key={module.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                        <Checkbox
                          id={module.id}
                          checked={selectedModules.includes(module.id)}
                          onCheckedChange={() => handleModuleToggle(module.id)}
                          disabled={module.required}
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <module.icon className={`h-4 w-4 ${module.color}`} />
                            <Label htmlFor={module.id} className="font-medium cursor-pointer">
                              {module.name}
                            </Label>
                            {module.required && (
                              <Badge variant="secondary" className="text-xs">
                                Obrigatório
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{module.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Módulos selecionados:</strong> {selectedModules.length} de {availableModules.length}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {selectedModules.map((moduleId) => {
                        const module = availableModules.find((m) => m.id === moduleId)
                        return (
                          <Badge key={moduleId} variant="outline" className="text-xs">
                            {module?.name}
                          </Badge>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Plano e Resumo */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Plano de Assinatura</CardTitle>
                  <CardDescription>Escolha o plano para esta assessoria</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select defaultValue="pro">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um plano" />
                    </SelectTrigger>
                    <SelectContent>
                      {plans.map((plan) => (
                        <SelectItem key={plan.id} value={plan.id}>
                          <div className="flex flex-col">
                            <span className="font-medium">{plan.name}</span>
                            <span className="text-sm text-gray-500">{plan.price}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Máx. alunos:</span>
                      <span className="font-medium">100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Máx. treinadores:</span>
                      <span className="font-medium">5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Suporte:</span>
                      <span className="font-medium">Prioritário</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resumo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Módulos ativos:</span>
                    <Badge>{selectedModules.length}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Plano:</span>
                    <span className="font-medium">Pro</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status inicial:</span>
                    <Badge className="bg-yellow-100 text-yellow-800">Trial (30 dias)</Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isLoading}>
                  <Save className="h-4 w-4 mr-2" />
                  {isLoading ? "Criando..." : "Criar Assessoria"}
                </Button>
                <Button type="button" variant="outline" className="w-full bg-transparent">
                  Salvar como Rascunho
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
