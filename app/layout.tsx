import "./globals.css"
import { Inter } from "next/font/google"
import { Sidebar } from "@/components/sidebar"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-black text-white">
          <div className="grid lg:grid-cols-[280px_1fr]">
            <Sidebar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}



import './globals.css'