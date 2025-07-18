"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Send, Paperclip, Smile, MoreVertical, Phone, Video, Info } from "lucide-react"

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState("1")
  const [newMessage, setNewMessage] = useState("")

  const conversations = [
    {
      id: "1",
      name: "Maria Santos",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MS",
      lastMessage: "Obrigada pelo treino de hoje! Me senti muito bem.",
      timestamp: "14:30",
      unread: 2,
      online: true,
    },
    {
      id: "2",
      name: "João Silva",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JS",
      lastMessage: "Posso fazer o treino de amanhã mais tarde?",
      timestamp: "13:45",
      unread: 0,
      online: false,
    },
    {
      id: "3",
      name: "Ana Costa",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AC",
      lastMessage: "Não consegui completar o long run hoje",
      timestamp: "12:20",
      unread: 1,
      online: true,
    },
    {
      id: "4",
      name: "Pedro Lima",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "PL",
      lastMessage: "Ótimo treino! Consegui bater o tempo.",
      timestamp: "11:15",
      unread: 0,
      online: false,
    },
  ]

  const messages = [
    {
      id: 1,
      senderId: "1",
      senderName: "Maria Santos",
      content: "Oi Carlos! Como você está?",
      timestamp: "14:25",
      type: "received",
    },
    {
      id: 2,
      senderId: "trainer",
      senderName: "Carlos Silva",
      content: "Oi Maria! Tudo bem, e você? Como foi o treino de ontem?",
      timestamp: "14:26",
      type: "sent",
    },
    {
      id: 3,
      senderId: "1",
      senderName: "Maria Santos",
      content: "Foi excelente! Consegui manter o ritmo em todas as repetições do intervalado. Me senti muito forte!",
      timestamp: "14:27",
      type: "received",
    },
    {
      id: 4,
      senderId: "trainer",
      senderName: "Carlos Silva",
      content: "Que ótimo! Isso mostra que você está evoluindo bem. Como está se sentindo para o long run de domingo?",
      timestamp: "14:28",
      type: "sent",
    },
    {
      id: 5,
      senderId: "1",
      senderName: "Maria Santos",
      content: "Obrigada pelo treino de hoje! Me senti muito bem.",
      timestamp: "14:30",
      type: "received",
    },
  ]

  const selectedConversation = conversations.find((c) => c.id === selectedChat)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Aqui você adicionaria a lógica para enviar a mensagem
      console.log("Enviando mensagem:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <div className="flex-1 flex h-[calc(100vh-8rem)]">
      {/* Lista de Conversas */}
      <div className="w-80 border-r bg-white">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold mb-4">Mensagens</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Buscar conversas..." className="pl-10" />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedChat(conversation.id)}
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedChat === conversation.id ? "bg-orange-50 border border-orange-200" : ""
                }`}
              >
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                    <AvatarFallback>{conversation.initials}</AvatarFallback>
                  </Avatar>
                  {conversation.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium truncate">{conversation.name}</h3>
                    <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                </div>

                {conversation.unread > 0 && (
                  <Badge className="bg-orange-500 text-white text-xs">{conversation.unread}</Badge>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Área de Chat */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Header do Chat */}
            <div className="p-4 border-b bg-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={selectedConversation.avatar || "/placeholder.svg"}
                      alt={selectedConversation.name}
                    />
                    <AvatarFallback>{selectedConversation.initials}</AvatarFallback>
                  </Avatar>
                  {selectedConversation.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-medium">{selectedConversation.name}</h3>
                  <p className="text-sm text-gray-500">
                    {selectedConversation.online ? "Online" : "Visto por último às 13:45"}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Info className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Mensagens */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === "sent" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.type === "sent" ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <div className="flex items-center justify-end mt-1">
                        <span className={`text-xs ${message.type === "sent" ? "text-orange-100" : "text-gray-500"}`}>
                          {message.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input de Mensagem */}
            <div className="p-4 border-t bg-white">
              <div className="flex items-end space-x-2">
                <Button variant="ghost" size="sm">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <div className="flex-1">
                  <Textarea
                    placeholder="Digite sua mensagem..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                    rows={1}
                    className="resize-none"
                  />
                </div>
                <Button variant="ghost" size="sm">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button onClick={handleSendMessage} className="bg-orange-500 hover:bg-orange-600" size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Selecione uma conversa</h3>
              <p className="text-gray-500">Escolha uma conversa para começar a trocar mensagens</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
