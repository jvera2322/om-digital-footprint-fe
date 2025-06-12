import DigitalFootprintForm from "@/components/digital-footprint-form"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#faf5f1" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "#29231f" }}>
            Get Your Digital Footprint Report
          </h1>
          <div className="space-y-3" style={{ color: "#505050" }}>
            <p className="text-lg font-medium">What you'll receive:</p>
            <ul className="list-disc list-inside space-y-1 text-md">
              <li>Complete digital footprint analysis</li>
              <li>Privacy risk assessment</li>
              <li>Personalized protection recommendations</li>
              <li>Instant delivery to your email (for reports) or prompt replies (for inquiries)</li>
            </ul>
          </div>
        </div>
        <div className="relative">
          {/* Decorative background elements */}
          <div
            className="absolute -top-16 -right-16 w-72 h-72 rounded-full filter blur-2xl opacity-50"
            style={{ backgroundColor: "#f9f3f0" }}
          ></div>
          
          <DigitalFootprintForm />
        </div>
      </div>
    </section>
  )
}
