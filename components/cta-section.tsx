import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-lightPeach/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-lightPeach p-8 md:p-12 rounded-xl shadow-xl grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold text-brand-deepBrown">Already Have a Report?</h2>
            <p className="text-brand-darkBrown">
              Access your personalized digital footprint analysis and view your complete report.
            </p>
            <Link
              href="/login" // Updated link to point to the login page
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-brand-deepBrown hover:bg-brand-darkest text-white font-semibold px-8 py-3 rounded-md",
              )}
            >
              Access to my dashboard
            </Link>
          </div>
          <div className="relative aspect-video max-w-md mx-auto md:max-w-none md:mx-0 rounded-lg overflow-hidden">
            <Image src="/already-have.png" alt="Access Dashboard" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
