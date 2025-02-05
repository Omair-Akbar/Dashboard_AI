import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Star } from "lucide-react"
import Image from "next/image"

const markets = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$43,680.21",
    change: "+5.67%",
    marketCap: "$846.12B",
    volume: "$28.54B",
    isPositive: true,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$2,317.08",
    change: "-2.34%",
    marketCap: "$278.69B",
    volume: "$15.23B",
    isPositive: false,
  },
  // Add more market data...
]

export default function MarketPage() {
  return (
    <main className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Market</h1>
          <div className="text-sm text-muted-foreground">Live cryptocurrency prices and market data</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search markets..." className="pl-8 w-[250px]" />
          </div>
          <Button variant="outline">
            <Star className="mr-2 h-4 w-4" />
            Watchlist
          </Button>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>24h Change</TableHead>
              <TableHead>Market Cap</TableHead>
              <TableHead>Volume (24h)</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {markets.map((market) => (
              <TableRow key={market.symbol}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Image
                      src={`https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/orange_prodpictdollar_1484336219.png`}
                      alt={market.name}
                      className="h-8 w-8 rounded-full"
                    />
                    <div>
                      <div className="font-medium">{market.name}</div>
                      <div className="text-sm text-muted-foreground">{market.symbol}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{market.price}</TableCell>
                <TableCell className={market.isPositive ? "text-green-500" : "text-red-500"}>{market.change}</TableCell>
                <TableCell>{market.marketCap}</TableCell>
                <TableCell>{market.volume}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Trade
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </main>
  )
}

