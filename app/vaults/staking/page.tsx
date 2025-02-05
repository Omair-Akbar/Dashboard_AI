import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MetricsCard } from "@/components/metrics-card"
import { VaultTable } from "@/components/vault-table"

export default function StakingVaultsPage() {
  return (
    <main className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Staking Vaults</h1>
          <div className="text-sm text-muted-foreground">Earn rewards by staking your assets</div>
        </div>
        <Button>Create New Vault</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <MetricsCard
          title="Total Staked"
          value="$45,892"
          change={{ value: "$2,340", percentage: "+5.2%", isPositive: true }}
        />
        <MetricsCard
          title="Total Rewards"
          value="$3,892"
          change={{ value: "$340", percentage: "+8.7%", isPositive: true }}
        />
        <MetricsCard
          title="Average APY"
          value="12.4%"
          change={{ value: "1.2%", percentage: "+10.2%", isPositive: true }}
        />
      </div>

      <Card className="mt-6">
        <VaultTable />
      </Card>
    </main>
  )
}

