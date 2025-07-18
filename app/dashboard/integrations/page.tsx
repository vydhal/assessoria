"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Smartphone,
  Activity,
  Wifi,
  Settings,
  CheckCircle,
  AlertCircle,
  FolderSyncIcon as Sync,
  Download,
  Clock,
  Heart,
  Zap,
} from "lucide-react"

export default function IntegrationsPage() {
  const [syncInProgress, setSyncInProgress] = useState(false)

  const integrations = [
    {
      id: "strava",
      name: "Strava",
      description: "Sincronize atividades e métricas de performance",
      icon: Activity,
      connected: true,
      lastSync: "2024-01-18 14:30",
      status: "active",
      features: ["Atividades", "Segmentos", "Kudos", "Fotos"],
      color: "text-orange-600",
    },
    {
      id: "garmin",
      name: "Garmin Connect",
      description: "Dados de dispositivos Garmin (relógios, sensores)",
      icon: Smartphone,
      connected: true,
      lastSync: "2024-01-18 15:45",
      status: "active",
      features: ["FC", "Cadência", "Potência", "VO2 Max"],
      color: "text-blue-600",
    },
    {
      id: "zeblaze",
      name: "Zeblaze",
      description: "Smartwatches Zeblaze e métricas de saúde",
      icon: Smartphone,
      connected: false,
      lastSync: null,
      status: "disconnected",
      features: ["FC", "Sono", "Passos", "Calorias"],
      color: "text-purple-600",
    },
    {
      id: "polar",
      name: "Polar Flow",
      description: "Dispositivos Polar e análise de treino",
      icon: Heart,
      connected: false,
      lastSync: null,
      status: "disconnected",
      features: ["Training Load", "Recovery", "Zonas FC"],
      color: "text-red-600",
    },
  ]

  const syncData = [
    {
      student: "Maria Santos",
      device: "Garmin Forerunner 945",
      lastActivity: "Corrida - 8.5km",
      syncTime: "14:30",
      status: "success",
    },
    {
      student: "João Silva",
      device: "Strava Mobile",
      lastActivity: "Corrida - 6.2km",
      syncTime: "13:45",
      status: "success",
    },
    {
      student: "Pedro Lima",
      device: "Garmin Fenix 7",
      lastActivity: "Intervalado - 5x1000m",
      syncTime: "12:20",
      status: "success",
    },
    {
      student: "Ana Costa",
      device: "Strava Mobile",
      lastActivity: "Erro de sincronização",
      syncTime: "11:15",
      status: "error",
    },
  ]

  const handleConnect = (integrationId: string) => {
    console.log(`Conectando com ${integrationId}`)
    // Aqui você implementaria a lógica de OAuth/conexão
  }

  const handleDisconnect = (integrationId: string) => {
    console.log(`Desconectando ${integrationId}`)
    // Aqui você implementaria a lógica de desconexão
  }

  const handleSync = () => {
    setSyncInProgress(true)
    // Simular sincronização
    setTimeout(() => {
      setSyncInProgress(false)
    }, 3000)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Conectado
          </Badge>
        )
      case "disconnected":
        return (
          <Badge className="bg-gray-100 text-gray-800">
            <AlertCircle className="h-3 w-3 mr-1" />
            Desconectado
          </Badge>
        )
      case "error":
        return (
          <Badge className="bg-red-100 text-red-800">
            <AlertCircle className="h-3 w-3 mr-1" />
            Erro
          </Badge>
        )
      default:
        return <Badge variant="secondary">Desconhecido</Badge>
    }
  }

  const getSyncStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Sucesso
          </Badge>
        )
      case "error":
        return (
          <Badge className="bg-red-100 text-red-800">
            <AlertCircle className="h-3 w-3 mr-1" />
            Erro
          </Badge>
        )
      default:
        return <Badge variant="secondary">Pendente</Badge>
    }
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Integrações</h1>
          <p className="text-gray-600">Conecte dispositivos e plataformas de treino</p>
        </div>
        <Button onClick={handleSync} disabled={syncInProgress} className="bg-orange-600 hover:bg-orange-700">
          <Sync className={`h-4 w-4 mr-2 ${syncInProgress ? "animate-spin" : ""}`} />
          {syncInProgress ? "Sincronizando..." : "Sincronizar Tudo"}
        </Button>
      </div>

      <Tabs defaultValue="devices" className="space-y-6">
        <TabsList>
          <TabsTrigger value="devices">Dispositivos</TabsTrigger>
          <TabsTrigger value="sync">Sincronização</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="devices" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {integrations.map((integration) => (
              <Card key={integration.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gray-100`}>
                        <integration.icon className={`h-6 w-6 ${integration.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{integration.name}</CardTitle>
                        <CardDescription>{integration.description}</CardDescription>
                      </div>
                    </div>
                    {getStatusBadge(integration.status)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Recursos disponíveis:</h4>
                    <div className="flex flex-wrap gap-1">
                      {integration.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {integration.connected && integration.lastSync && (
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Última sincronização: {integration.lastSync}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    {integration.connected ? (
                      <>
                        <Button variant="outline" size="sm" onClick={() => handleSync()} disabled={syncInProgress}>
                          <Sync className="h-4 w-4 mr-2" />
                          Sincronizar
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDisconnect(integration.id)}>
                          <Wifi className="h-4 w-4 mr-2" />
                          Desconectar
                        </Button>
                      </>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => handleConnect(integration.id)}
                        className="bg-orange-600 hover:bg-orange-700"
                      >
                        <Zap className="h-4 w-4 mr-2" />
                        Conectar
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sync" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Status de Sincronização</CardTitle>
              <CardDescription>Últimas sincronizações dos dispositivos dos alunos</CardDescription>
            </CardHeader>
            <CardContent>
              {syncInProgress && (
                <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Sync className="h-5 w-5 text-orange-600 animate-spin" />
                    <div className="flex-1">
                      <h4 className="font-medium text-orange-800">Sincronização em andamento</h4>
                      <p className="text-sm text-orange-600">
                        Atualizando dados de todos os dispositivos conectados...
                      </p>
                    </div>
                  </div>
                  <Progress value={65} className="mt-3" />
                </div>
              )}

              <div className="space-y-4">
                {syncData.map((sync, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{sync.student}</h4>
                        {getSyncStatusBadge(sync.status)}
                      </div>
                      <p className="text-sm text-gray-600">{sync.device}</p>
                      <p className="text-sm text-gray-500">{sync.lastActivity}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{sync.syncTime}</div>
                      <div className="flex items-center space-x-1 mt-1">
                        {sync.status === "success" ? (
                          <Download className="h-4 w-4 text-green-500" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Sincronização</CardTitle>
              <CardDescription>Personalize como os dados são sincronizados</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Sincronização Automática</h4>
                    <p className="text-sm text-gray-600">Sincronizar dados automaticamente a cada hora</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notificações de Sync</h4>
                    <p className="text-sm text-gray-600">Receber notificações quando a sincronização falhar</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Backup de Dados</h4>
                    <p className="text-sm text-gray-600">Fazer backup automático dos dados sincronizados</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Sincronizar Fotos</h4>
                    <p className="text-sm text-gray-600">Incluir fotos das atividades na sincronização</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="pt-6 border-t">
                <h4 className="font-medium mb-4">Frequência de Sincronização</h4>
                <div className="grid gap-3">
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="frequency" value="realtime" className="text-orange-600" />
                    <span className="text-sm">Tempo real (recomendado)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="frequency" value="hourly" defaultChecked className="text-orange-600" />
                    <span className="text-sm">A cada hora</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="frequency" value="daily" className="text-orange-600" />
                    <span className="text-sm">Diariamente</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="frequency" value="manual" className="text-orange-600" />
                    <span className="text-sm">Apenas manual</span>
                  </label>
                </div>
              </div>

              <div className="pt-6 border-t">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <Settings className="h-4 w-4 mr-2" />
                  Salvar Configurações
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
