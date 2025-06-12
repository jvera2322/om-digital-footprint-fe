import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion" // [^2]

const faqs = [
  {
    question: "Question text goes here. What is TwinMinder?",
    answer:
      "TwinMinder is a service that helps you understand and manage your digital footprint. We provide detailed analysis and recommendations for your online privacy and security.",
  },
  {
    question: "Question text goes here. How accurate is the report?",
    answer:
      "Our reports are generated using advanced AI and data aggregation techniques to provide the most accurate snapshot of your publicly available digital footprint. However, the digital world is vast and constantly changing.",
  },
  {
    question: "Question text goes here. Is my data safe?",
    answer:
      "Yes, we prioritize your privacy and security. All data is encrypted, and we follow strict data handling protocols. Your personal information used to generate the report is not stored long-term unless you opt-in for continuous monitoring services.",
  },
  {
    question: "Question text goes here. How long does it take to get a report?",
    answer:
      "Typically, reports are delivered to your email within minutes of submitting your information. Complex cases might take slightly longer, but we strive for quick delivery.",
  },
  {
    question: "Question text goes here. Can I delete my data?",
    answer:
      "Yes, you can request the deletion of your data and report from our systems. Please contact our support team for assistance with data deletion requests.",
  },
]

export default function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-offWhite relative overflow-hidden">
      {/* Simplified decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-palestPeach rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-lightPeach/50 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-deepBrown mb-4">FAQs</h2>
        <p className="text-lg text-brand-grayText max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
        <div className="max-w-3xl mx-auto text-left">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="bg-brand-palestPeach/70 border-none rounded-lg px-6 py-1 shadow"
              >
                <AccordionTrigger className="text-md font-semibold text-brand-deepBrown hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-brand-darkBrown pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
