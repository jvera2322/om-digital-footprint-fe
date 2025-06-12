import Image from "next/image"
import { ShieldCheckIcon, ZapIcon, BrainCircuitIcon } from "@/components/icons"

const guardianFeatures = [
  {
    icon: ShieldCheckIcon,
    title: "Secure & Private",
    description: "Your data is encrypted and never stored. We prioritize your privacy.",
  },
  {
    icon: ZapIcon,
    title: "Instant Results",
    description: "Reports delivered within minutes. Get insights quickly and efficiently.",
  },
  {
    icon: BrainCircuitIcon,
    title: "AI-Powered",
    description: "Advanced artificial intelligence analysis for comprehensive insights.",
  },
]

export default function AiGuardianSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-palestPeach">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square max-w-md mx-auto md:max-w-none md:mx-0 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/discover.png"
            alt="AI Guardian Privacy Analysis"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-deepBrown leading-tight">
            Discover what the internet knows about you with our AI-Guardian privacy analysis!
          </h2>
          <ul className="space-y-6">
            {guardianFeatures.map((feature) => (
              <li key={feature.title} className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-brand-brown/10 p-2 rounded-full">
                  <feature.icon className="h-6 w-6 text-brand-brown" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-deepBrown">{feature.title}</h3>
                  <p className="text-brand-grayText">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
