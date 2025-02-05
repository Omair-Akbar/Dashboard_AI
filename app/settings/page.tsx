"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell } from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <Card className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Dark Mode</Label>
            <div className="text-sm text-muted-foreground">Toggle dark/light theme</div>
          </div>
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Two Factor Authentication</Label>
            <div className="text-sm text-muted-foreground">Add an extra layer of security</div>
          </div>
          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Notifications</Label>
            <div className="text-sm text-muted-foreground">Manage notification preferences</div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Notification Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center justify-between">
                Email Notifications
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} className="ml-2" />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center justify-between">
                Push Notifications
                <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} className="ml-2" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button variant="destructive" className="w-full">
          Logout
        </Button>
      </Card>
    </div>
  )
}

