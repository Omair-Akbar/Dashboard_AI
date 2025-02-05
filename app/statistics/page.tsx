import { Card } from "@/components/ui/card"
import { StatsChart } from "@/components/stats-chart"
import { MetricsCard } from "@/components/metrics-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function StatisticsPage() {
  return (
    <main className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Statistics & Income</h1>
          <div className="text-sm text-muted-foreground">Track your earnings and performance</div>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Time</SelectItem>
            <SelectItem value="year">Past Year</SelectItem>
            <SelectItem value="month">Past Month</SelectItem>
            <SelectItem value="week">Past Week</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <MetricsCard
          title="Total Earnings"
          value="$128,420"
          change={{ value: "$12,340", percentage: "+23.1%", isPositive: true }}
        />
        <MetricsCard
          title="Average APY"
          value="12.4%"
          change={{ value: "2.3%", percentage: "+18.2%", isPositive: true }}
        />
        <MetricsCard
          title="Active Positions"
          value="8"
          change={{ value: "2", percentage: "+33.3%", isPositive: true }}
        />
      </div>

      <Card className="mt-6 p-6">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Earnings Over Time</h2>
        </div>
        <StatsChart />
      </Card>
    </main>
  )
}

