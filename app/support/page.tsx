"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot, User } from "lucide-react"

interface Message {
  id: number
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function SupportPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: newMessage,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        content: "Thank you for your message. Our team will get back to you shortly.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)

    setNewMessage("")
  }

  return (
    <main className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Support</h1>
          <div className="text-sm text-muted-foreground">Get help from our support team</div>
        </div>
        <Select defaultValue="general">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Support</SelectItem>
            <SelectItem value="technical">Technical Support</SelectItem>
            <SelectItem value="billing">Billing Support</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <Card className="p-4">
          <div className="space-y-4">
            <h2 className="font-semibold">Common Questions</h2>
            {[
              "How do I create a new vault?",
              "How to withdraw funds?",
              "What are the fees?",
              "How to enable 2FA?",
              "Supported networks",
            ].map((question, i) => (
              <Button key={i} variant="ghost" className="w-full justify-start text-left">
                {question}
              </Button>
            ))}
          </div>
        </Card>

        <Card className="flex h-[600px] flex-col">
          <div className="flex items-center gap-4 border-b p-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>CS</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">Customer Support</div>
              <div className="text-sm text-muted-foreground">Usually replies within 10 minutes</div>
            </div>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <Avatar className="h-8 w-8">
                    {message.sender === "bot" ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
                  </Avatar>
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <p>{message.content}</p>
                    <span className="text-xs opacity-50">{message.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <form onSubmit={handleSendMessage} className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </main>
  )
}

