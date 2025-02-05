import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MetricsCard } from "@/components/metrics-card"
import { VaultTable } from "@/components/vault-table"

export default function SavingsVaultsPage() {
  return (
    <main className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Savings Vaults</h1>
          <div className="text-sm text-muted-foreground">Earn interest on your deposits</div>
        </div>
        <Button>Create New Vault</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <MetricsCard
          title="Total Savings"
          value="$28,954"
          change={{ value: "$1,240", percentage: "+4.5%", isPositive: true }}
        />
        <MetricsCard
          title="Interest Earned"
          value="$1,892"
          change={{ value: "$140", percentage: "+8.0%", isPositive: true }}
        />
        <MetricsCard
          title="Average APY"
          value="8.2%"
          change={{ value: "0.5%", percentage: "+6.5%", isPositive: true }}
        />
      </div>

      <Card className="mt-6">
        <VaultTable />
      </Card>
    </main>
  )
}

