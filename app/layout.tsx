import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Backend Developer Portfolio",
  description: "Backend developer portfolio website",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#40B093] min-h-screen">{children}</body>
    </html>
  )
}



import './globals.css'