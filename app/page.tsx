import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MetricsCard } from "@/components/metrics-card"
import { StatsChart } from "@/components/stats-chart"
import { VaultTable } from "@/components/vault-table"
import { ChevronDown } from "lucide-react"

export default function Page() {
  return (
    <main className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Overview</h1>
          <div className="text-sm text-muted-foreground">Aug 13, 2023 - Aug 18, 2023</div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              Ethereum Network
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <img src="/placeholder.svg?height=32&width=32" className="mr-2 h-5 w-5" alt="Ethereum" />
              Ethereum Network
            </DropdownMenuItem>
            <DropdownMenuItem>
              <img src="/placeholder.svg?height=32&width=32" className="mr-2 h-5 w-5" alt="BSC" />
              BSC Network
            </DropdownMenuItem>
            <DropdownMenuItem>
              <img src="/placeholder.svg?height=32&width=32" className="mr-2 h-5 w-5" alt="Polygon" />
              Polygon Network
            </DropdownMenuItem>
            <DropdownMenuItem>
              <img src="/placeholder.svg?height=32&width=32" className="mr-2 h-5 w-5" alt="Avalanche" />
              Avalanche Network
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <MetricsCard
          title="Your Balance"
          value="$74,892"
          change={{ value: "$1,340", percentage: "-2.1%", isPositive: false }}
        />
        <MetricsCard
          title="Your Deposits"
          value="$54,892"
          change={{ value: "$1,340", percentage: "+13.2%", isPositive: true }}
        />
        <MetricsCard
          title="Accrued Yield"
          value="$20,892"
          change={{ value: "$1,340", percentage: "+1.2%", isPositive: true }}
        />
      </div>
      <Card className="mt-6 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">General Statistics</h2>
          <div className="flex gap-2">
            <Button size="sm" variant="ghost">
              Today
            </Button>
            <Button size="sm" variant="ghost">
              Last week
            </Button>
            <Button size="sm" variant="ghost">
              Last month
            </Button>
            <Button size="sm" variant="ghost">
              Last 6 month
            </Button>
            <Button size="sm" variant="ghost">
              Year
            </Button>
          </div>
        </div>
        <StatsChart />
      </Card>
      <div className="mt-6">
        <VaultTable />
      </div>
    </main>
  )
}

