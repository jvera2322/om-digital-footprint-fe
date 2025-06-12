import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { TwinMinderLogo } from "@/components/icons"

export default function Header() {
  return (
    <header className="bg-brand-offWhite sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <TwinMinderLogo className="h-7 w-auto text-brand-deepBrown" />
        </Link>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-brand-deepBrown">
            <Link href="/" className="hover:text-brand-brown transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-brand-brown transition-colors">
              TwinMinder Guardian
            </Link>
            <Link href="#" className="hover:text-brand-brown transition-colors">
              FAQs
            </Link>
          </nav>
           <Link
            href="/login"
            className={cn(
              buttonVariants(),
              "bg-brand-deepBrown hover:bg-brand-darkest text-white px-6 py-2 rounded-md text-sm font-medium",
            )}
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}
