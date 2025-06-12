import Link from "next/link"
import { TwinMinderLogo } from "@/components/icons"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-brand-deepPurpleGray text-brand-palestPeach">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
        {/* Top part: Logo and Nav Links - Centered */}
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="mb-4">
            <TwinMinderLogo className="h-8 w-auto text-brand-palestPeach" />
          </Link>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
            <Link href="#" className="hover:text-brand-lightPeach transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-brand-lightPeach transition-colors">
              About TwinMinder
            </Link>
            <Link href="#" className="hover:text-brand-lightPeach transition-colors">
              FAQs
            </Link>
            <Link href="#" className="hover:text-brand-lightPeach transition-colors">
              Login
            </Link>
          </nav>
        </div>

        <Separator className="my-8 bg-brand-darkPurpleGray w-full max-w-3xl" />

        {/* Bottom part: Copyright and Legal Links - Centered group, items spread on wider screens */}
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between w-full max-w-3xl text-xs text-brand-grayText space-y-3 md:space-y-0">
          <p>&copy; {currentYear} Relume. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Link href="#" className="hover:text-brand-lightPeach transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-lightPeach transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-brand-lightPeach transition-colors">
              Cookies Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
