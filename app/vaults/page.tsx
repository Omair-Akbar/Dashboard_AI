import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MetricsCard } from "@/components/metrics-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VaultTable } from "@/components/vault-table"
import { Lock, PiggyBank, Landmark } from "lucide-react"
import Link from "next/link"

export default function VaultsPage() {
  return (
    <main className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Yield Vaults</h1>
          <div className="text-sm text-muted-foreground">Manage your yield-generating vaults</div>
        </div>
        <Button>Create New Vault</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <MetricsCard
          title="Total Value Locked"
          value="$142,678"
          change={{ value: "$6,920", percentage: "+5.1%", isPositive: true }}
        />
        <MetricsCard
          title="Total Earnings"
          value="$12,234"
          change={{ value: "$890", percentage: "+7.8%", isPositive: true }}
        />
        <MetricsCard title="Active Vaults" value="8" change={{ value: "2", percentage: "+33.3%", isPositive: true }} />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <Link href="/vaults/staking">
          <Card className="p-6 hover:bg-muted/50 transition-colors">
            <div className="mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Staking Vaults</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Earn rewards by staking your assets in our secure vaults
            </p>
            <div className="mt-4 text-sm">
              <div className="flex justify-between py-1">
                <span>APY Range</span>
                <span className="font-medium">4.2% - 12.5%</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Lock Period</span>
                <span className="font-medium">30 - 365 days</span>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="/vaults/savings">
          <Card className="p-6 hover:bg-muted/50 transition-colors">
            <div className="mb-4">
              <PiggyBank className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Savings Vaults</h3>
            <p className="text-sm text-muted-foreground mt-2">Earn interest on your deposits with flexible terms</p>
            <div className="mt-4 text-sm">
              <div className="flex justify-between py-1">
                <span>APY Range</span>
                <span className="font-medium">2.8% - 8.5%</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Lock Period</span>
                <span className="font-medium">No lock</span>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="/vaults/lending">
          <Card className="p-6 hover:bg-muted/50 transition-colors">
            <div className="mb-4">
              <Landmark className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Lending Vaults</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Earn interest by lending your assets to verified borrowers
            </p>
            <div className="mt-4 text-sm">
              <div className="flex justify-between py-1">
                <span>APY Range</span>
                <span className="font-medium">6.5% - 15.4%</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Lock Period</span>
                <span className="font-medium">7 - 90 days</span>
              </div>
            </div>
          </Card>
        </Link>
      </div>

      <Card className="mt-6">
        <Tabs defaultValue="all" className="p-6">
          <TabsList>
            <TabsTrigger value="all">All Vaults</TabsTrigger>
            <TabsTrigger value="staking">Staking</TabsTrigger>
            <TabsTrigger value="savings">Savings</TabsTrigger>
            <TabsTrigger value="lending">Lending</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <VaultTable />
          </TabsContent>
          <TabsContent value="staking" className="mt-4">
            <VaultTable />
          </TabsContent>
          <TabsContent value="savings" className="mt-4">
            <VaultTable />
          </TabsContent>
          <TabsContent value="lending" className="mt-4">
            <VaultTable />
          </TabsContent>
        </Tabs>
      </Card>
    </main>
  )
}

