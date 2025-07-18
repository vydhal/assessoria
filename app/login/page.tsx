"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Activity, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (userType: string, email: string) => {
    setIsLoading(true)
    // Simular login
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirecionar baseado no tipo de usuário
    switch (userType) {
      case "superadmin":
        router.push("/superadmin")
        break
      case "admin":
        router.push("/dashboard")
        break
      case "student":
        router.push("/student")
        break
      default:
        router.push("/dashboard")
    }
    setIsLoading(false)
  }

  const testUsers = [
    {
      type: "superadmin",
      email: "superadmin@runcoach.com",
      password: "super123",
      name: "SuperAdmin",
      description: "Controle total do sistema",
      color: "bg-red-100 text-red-800",
    },
    {
      type: "admin",
      email: "treinador@runcoach.com",
      password: "treino123",
      name: "Treinador",
      description: "Gestão de alunos e treinos",
      color: "bg-orange-100 text-orange-800",
    },
    {
      type: "student",
      email: "aluno@runcoach.com",
      password: "aluno123",
      name: "Aluno",
      description: "Visualização de treinos",
      color: "bg-green-100 text-green-800",
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50 p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Activity className="h-12 w-12 text-orange-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">RunCoach Pro</h1>
          <p className="text-gray-600 mt-2">Plataforma de Gerenciamento de Treinos</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="demo">Usuários Demo</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Entrar na Plataforma</CardTitle>
                <CardDescription>Digite suas credenciais para acessar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" required />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  disabled={isLoading}
                  onClick={() => handleLogin("admin", "treinador@runcoach.com")}
                >
                  {isLoading ? "Entrando..." : "Entrar"}
                </Button>
                <div className="text-center">
                  <Link href="/register" className="text-sm text-orange-600 hover:underline">
                    Não tem conta? Cadastre-se
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="demo">
            <Card>
              <CardHeader>
                <CardTitle>Usuários de Demonstração</CardTitle>
                <CardDescription>Clique para testar diferentes perfis de acesso</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {testUsers.map((user) => (
                  <div key={user.type} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium">{user.name}</h3>
                          <Badge className={user.color}>{user.type}</Badge>
                        </div>
                        <p className="text-sm text-gray-600">{user.description}</p>
                      </div>
                    </div>
                    <div className="text-xs space-y-1 text-gray-500">
                      <p>
                        <strong>Email:</strong> {user.email}
                      </p>
                      <p>
                        <strong>Senha:</strong> {user.password}
                      </p>
                    </div>
                    <Button
                      className="w-full bg-transparent"
                      variant="outline"
                      onClick={() => handleLogin(user.type, user.email)}
                      disabled={isLoading}
                    >
                      {isLoading ? "Entrando..." : `Entrar como ${user.name}`}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center text-sm text-gray-500">
          <p>© 2024 RunCoach Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  )
}
