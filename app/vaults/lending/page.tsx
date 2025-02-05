import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MetricsCard } from "@/components/metrics-card"
import { VaultTable } from "@/components/vault-table"

export default function LendingVaultsPage() {
  return (
    <main className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Lending Vaults</h1>
          <div className="text-sm text-muted-foreground">Earn interest by lending your assets</div>
        </div>
        <Button>Create New Vault</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <MetricsCard
          title="Total Lending"
          value="$67,832"
          change={{ value: "$3,240", percentage: "+5.0%", isPositive: true }}
        />
        <MetricsCard
          title="Interest Earned"
          value="$4,892"
          change={{ value: "$440", percentage: "+9.9%", isPositive: true }}
        />
        <MetricsCard
          title="Average APY"
          value="15.4%"
          change={{ value: "2.2%", percentage: "+16.7%", isPositive: true }}
        />
      </div>

      <Card className="mt-6">
        <VaultTable />
      </Card>
    </main>
  )
}

