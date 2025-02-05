import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { ArrowDownToLine, ArrowUpToLine, Wallet } from "lucide-react"

export default function FundingPage() {
  return (
    <main className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Funding</h1>
          <div className="text-sm text-muted-foreground">Deposit or withdraw funds from your account</div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <Tabs defaultValue="deposit" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="deposit">
                <ArrowDownToLine className="mr-2 h-4 w-4" />
                Deposit
              </TabsTrigger>
              <TabsTrigger value="withdraw">
                <ArrowUpToLine className="mr-2 h-4 w-4" />
                Withdraw
              </TabsTrigger>
            </TabsList>
            <TabsContent value="deposit" className="space-y-4">
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select asset" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                      <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                      <SelectItem value="usdt">USDT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Input type="number" placeholder="Enter amount" />
                </div>
                <Button className="w-full">
                  <Wallet className="mr-2 h-4 w-4" />
                  Deposit Now
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="withdraw" className="space-y-4">
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select asset" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                      <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                      <SelectItem value="usdt">USDT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Input type="number" placeholder="Enter amount" />
                </div>
                <Button className="w-full" variant="destructive">
                  <Wallet className="mr-2 h-4 w-4" />
                  Withdraw Now
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  {i % 2 === 0 ? (
                    <ArrowUpToLine className="text-red-500" />
                  ) : (
                    <ArrowDownToLine className="text-green-500" />
                  )}
                  <div>
                    <div className="font-medium">{i % 2 === 0 ? "Withdrawal" : "Deposit"}</div>
                    <div className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">
                    {i % 2 === 0 ? "-" : "+"}0.{i}234 BTC
                  </div>
                  <div className="text-sm text-muted-foreground">${(i * 1234).toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  )
}

