import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CubeIcon } from "@/components/icons" // Using CubeIcon as a placeholder

const features = [
  {
    icon: CubeIcon,
    title: "Comprehensive Scan",
    description: "Advanced AI analysis of your digital presence across multiple platforms and databases.",
  },
  {
    icon: CubeIcon,
    title: "Privacy Protection",
    description: "Get actionable recommendations to secure your personal information online.",
  },
  {
    icon: CubeIcon,
    title: "Detailed Report",
    description: "Receive a comprehensive analysis delivered instantly to your email.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-offWhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <CubeIcon className="h-10 w-10 text-brand-brown mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-brand-deepBrown mb-4">Digital Footprint Report</h2>
        <p className="text-lg text-brand-grayText max-w-2xl mx-auto mb-12">
          Discover what the internet knows about you with our AI-powered privacy analysis.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-brand-lightPeach/50 border-brand-lightPeach shadow-lg rounded-xl text-left p-6"
            >
              <CardHeader className="p-0 mb-3">
                <feature.icon className="h-8 w-8 text-brand-deepBrown mb-3" />
                <CardTitle className="text-xl font-semibold text-brand-deepBrown">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-sm text-brand-darkBrown">{feature.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
