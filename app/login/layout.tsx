import type React from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-brand-offWhite">
      <Header />
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer />
    </div>
  )
}
