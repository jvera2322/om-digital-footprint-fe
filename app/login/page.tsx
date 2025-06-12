import AccessReportForm from "@/components/access-report-form"

export default function LoginPage() {
  return (
    <div className="flex-grow flex items-center justify-center bg-brand-offWhite relative overflow-hidden">
      {/* Decorative background elements to match the image */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-palestPeach rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-lightPeach/50 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-palestPeach rounded-full filter blur-3xl"></div>
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-lightPeach/50 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 p-4">
        <AccessReportForm />
      </div>
    </div>
  )
}
