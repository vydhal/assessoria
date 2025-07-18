"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Palette, Bell, Shield, CreditCard, Upload, Save, Eye, EyeOff } from "lucide-react"

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [brandColor, setBrandColor] = useState("#ea580c")
  const [logo, setLogo] = useState("")

  const handleSave = () => {
    console.log("Salvando configurações...")
  }

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setLogo(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Configurações</h1>
          <p className="text-gray-600">Personalize sua assessoria e preferências</p>
        </div>
        <Button onClick={handleSave} className="bg-orange-600 hover:bg-orange-700">
          <Save className="h-4 w-4 mr-2" />
          Salvar Alterações
        </Button>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="branding">Marca</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
          <TabsTrigger value="billing">Cobrança</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-orange-600" />
                    <span>Informações Pessoais</span>
                  </CardTitle>
                  <CardDescription>Atualize suas informações básicas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nome</Label>
                      <Input id="firstName" defaultValue="Carlos" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Sobrenome</Label>
                      <Input id="lastName" defaultValue="Silva" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="carlos@runfast.com" />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" defaultValue="(11) 99999-9999" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Input id="city" defaultValue="São Paulo, SP" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografia</Label>
                    <Textarea
                      id="bio"
                      placeholder="Conte um pouco sobre você e sua experiência como treinador..."
                      rows={4}
                      defaultValue="Treinador de corrida há mais de 10 anos, especializado em preparação para maratonas e corridas de rua. Formado em Educação Física e pós-graduado em Fisiologia do Exercício."
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Informações Profissionais</CardTitle>
                  <CardDescription>Dados sobre sua atuação profissional</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="cref">CREF</Label>
                      <Input id="cref" placeholder="000000-G/SP" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialty">Especialidade</Label>
                      <Input id="specialty" defaultValue="Corrida de Rua e Maratona" />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="experience">Anos de Experiência</Label>
                      <Input id="experience" defaultValue="10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="certification">Certificações</Label>
                      <Input id="certification" placeholder="Ex: IAAF Level 1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Foto de Perfil</CardTitle>
                  <CardDescription>Sua foto aparecerá para os alunos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Carlos Silva" />
                      <AvatarFallback className="text-2xl">CS</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Alterar Foto
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Status da Conta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Plano:</span>
                    <Badge className="bg-blue-100 text-blue-800">Pro</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Alunos:</span>
                    <span className="text-sm font-medium">24/100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Próximo pagamento:</span>
                    <span className="text-sm font-medium">15/02/2024</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="branding" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="h-5 w-5 text-orange-600" />
                <span>Identidade Visual</span>
              </CardTitle>
              <CardDescription>Personalize as cores e logo que aparecerão para seus alunos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="brandName">Nome da Assessoria</Label>
                    <Input id="brandName" defaultValue="RunFast Assessoria" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="brandColor">Cor Principal</Label>
                    <div className="flex items-center space-x-3">
                      <Input
                        id="brandColor"
                        type="color"
                        value={brandColor}
                        onChange={(e) => setBrandColor(e.target.value)}
                        className="w-16 h-10 p-1 border rounded"
                      />
                      <Input
                        value={brandColor}
                        onChange={(e) => setBrandColor(e.target.value)}
                        placeholder="#ea580c"
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="logo">Logo da Assessoria</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      {logo ? (
                        <img src={logo || "/placeholder.svg"} alt="Logo" className="h-16 mx-auto" />
                      ) : (
                        <div className="space-y-2">
                          <Upload className="h-8 w-8 mx-auto text-gray-400" />
                          <p className="text-sm text-gray-600">Clique para fazer upload da logo</p>
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="hidden"
                        id="logoUpload"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2 bg-transparent"
                        onClick={() => document.getElementById("logoUpload")?.click()}
                      >
                        Escolher Arquivo
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Pré-visualização</h4>
                  <div className="border rounded-lg p-4 space-y-4">
                    <div
                      className="h-16 rounded-lg flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: brandColor }}
                    >
                      {logo ? (
                        <img src={logo || "/placeholder.svg"} alt="Logo" className="h-12" />
                      ) : (
                        "RunFast Assessoria"
                      )}
                    </div>
                    <div className="space-y-2">
                      <div
                        className="h-8 rounded text-white flex items-center justify-center text-sm"
                        style={{ backgroundColor: brandColor }}
                      >
                        Botão Principal
                      </div>
                      <div className="text-sm text-gray-600">
                        Esta será a aparência dos elementos da sua marca na plataforma
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-orange-600" />
                <span>Preferências de Notificação</span>
              </CardTitle>
              <CardDescription>Configure quando e como receber notificações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Novos alunos</h4>
                    <p className="text-sm text-gray-600">Quando um novo aluno se cadastrar</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Treinos concluídos</h4>
                    <p className="text-sm text-gray-600">Quando um aluno completar um treino</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Mensagens</h4>
                    <p className="text-sm text-gray-600">Novas mensagens dos alunos</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Pagamentos</h4>
                    <p className="text-sm text-gray-600">Notificações sobre pagamentos e cobranças</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Relatórios semanais</h4>
                    <p className="text-sm text-gray-600">Resumo semanal de atividades</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Lembretes de eventos</h4>
                    <p className="text-sm text-gray-600">Lembrar sobre aulas e eventos agendados</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="pt-6 border-t">
                <h4 className="font-medium mb-4">Canais de Notificação</h4>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Email</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Push (navegador)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">SMS</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">WhatsApp</span>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-orange-600" />
                <span>Segurança da Conta</span>
              </CardTitle>
              <CardDescription>Mantenha sua conta segura</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Senha Atual</Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Digite sua senha atual"
                    />
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

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Nova Senha</Label>
                    <Input id="newPassword" type="password" placeholder="Digite a nova senha" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                    <Input id="confirmPassword" type="password" placeholder="Confirme a nova senha" />
                  </div>
                </div>

                <Button className="bg-orange-600 hover:bg-orange-700">Alterar Senha</Button>
              </div>

              <div className="pt-6 border-t space-y-4">
                <h4 className="font-medium">Autenticação de Dois Fatores</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Adicione uma camada extra de segurança à sua conta</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="pt-6 border-t space-y-4">
                <h4 className="font-medium">Sessões Ativas</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Chrome - Windows</p>
                      <p className="text-xs text-gray-600">São Paulo, Brasil • Agora</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Atual</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Safari - iPhone</p>
                      <p className="text-xs text-gray-600">São Paulo, Brasil • 2 horas atrás</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Encerrar
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5 text-orange-600" />
                <span>Informações de Cobrança</span>
              </CardTitle>
              <CardDescription>Gerencie seu plano e forma de pagamento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">Plano Atual</h4>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">Plano Pro</h5>
                      <Badge className="bg-blue-100 text-blue-800">Ativo</Badge>
                    </div>
                    <p className="text-2xl font-bold">
                      R$ 197<span className="text-sm font-normal">/mês</span>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">Próxima cobrança: 15 de fevereiro de 2024</p>
                    <Button variant="outline" className="mt-3 bg-transparent">
                      Alterar Plano
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Forma de Pagamento</h4>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-8 w-8 text-gray-400" />
                      <div>
                        <p className="font-medium">•••• •••• •••• 4532</p>
                        <p className="text-sm text-gray-600">Visa • Expira 12/2025</p>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-3 bg-transparent">
                      Alterar Cartão
                    </Button>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h4 className="font-medium mb-4">Histórico de Pagamentos</h4>
                <div className="space-y-3">
                  {[
                    { date: "15/01/2024", amount: "R$ 197,00", status: "Pago" },
                    { date: "15/12/2023", amount: "R$ 197,00", status: "Pago" },
                    { date: "15/11/2023", amount: "R$ 197,00", status: "Pago" },
                  ].map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="text-sm font-medium">{payment.date}</p>
                        <p className="text-xs text-gray-600">Plano Pro</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{payment.amount}</p>
                        <Badge className="bg-green-100 text-green-800 text-xs">{payment.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
