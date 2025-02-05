"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  ChevronRight,
  Globe,
  Home,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  Wallet,
  Landmark,
  PiggyBank,
  Lock,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    label: "Statistics & Income",
    icon: BarChart3,
    href: "/statistics",
  },
  {
    label: "Market",
    icon: Globe,
    href: "/market",
  },
  {
    label: "Funding",
    icon: Home,
    href: "/funding",
  },
  {
    label: "Yield Vaults",
    icon: Wallet,
    isDropdown: true,
    items: [
      {
        label: "Staking Vaults",
        icon: Lock,
        href: "/vaults/staking",
      },
      {
        label: "Savings Vaults",
        icon: PiggyBank,
        href: "/vaults/savings",
      },
      {
        label: "Lending Vaults",
        icon: Landmark,
        href: "/vaults/lending",
      },
    ],
  },
  {
    label: "Support",
    icon: LifeBuoy,
    href: "/support",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [search, setSearch] = useState("")
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([])

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  const filteredRoutes = routes.filter(
    (route) =>
      route.label.toLowerCase().includes(search.toLowerCase()) ||
      route.items?.some((item) => item.label.toLowerCase().includes(search.toLowerCase())),
  )

  return (
    <aside className="border-r bg-background/50 backdrop-blur">
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <Wallet className="h-6 w-6" />
        <span className="font-bold">Vaultify</span>
      </div>
      <div className="px-4 py-4">
        <Input
          placeholder="Search"
          className="bg-background/50"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <nav className="space-y-2 px-2">
        {filteredRoutes.map((route) => {
          if (route.isDropdown) {
            return (
              <Collapsible
                key={route.label}
                open={openDropdowns.includes(route.label)}
                onOpenChange={() => toggleDropdown(route.label)}
              >
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <route.icon className="h-4 w-4" />
                    {route.label}
                    <ChevronRight
                      className={cn(
                        "ml-auto h-4 w-4 transition-transform",
                        openDropdowns.includes(route.label) && "rotate-90",
                      )}
                    />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-6 space-y-2">
                  {route.items?.map((item) => (
                    <Button
                      key={item.href}
                      variant="ghost"
                      className={cn("w-full justify-start gap-2", pathname === item.href && "bg-muted")}
                      asChild
                    >
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    </Button>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            )
          }

          return (
            <Button
              key={route.href}
              variant="ghost"
              className={cn("w-full justify-start gap-2", pathname === route.href && "bg-muted")}
              asChild
            >
              <Link href={route.href}>
                <route.icon className="h-4 w-4" />
                {route.label}
              </Link>
            </Button>
          )
        })}
      </nav>
    </aside>
  )
}

