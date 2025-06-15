"use client"

import { FormDescription } from "@/components/ui/form"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { type AccessReportFormValues, accessReportFormSchema } from "@/lib/schemas"
import { ChevronLeft, Router } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { authClient } from "@/lib/auth-client"





export default function AccessReportForm() {

  const router = useRouter()

  const form = useForm<AccessReportFormValues>({
    resolver: zodResolver(accessReportFormSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (values: AccessReportFormValues) => {
    console.log("Access Report Form Submitted:", values)

    const {data,error} = await authClient.emailOtp.sendVerificationOtp({
      email: values.email,
      type: "sign-in"
    })

    if (data?.success){
      router.push(`${window.location.pathname}/verify-otp-code`)
    }

    form.reset()
  }

  return (
    <div className="relative w-full max-w-sm">
      <Button
        variant="default"
        size="icon"
        className="absolute top-0 left-0 -mt-3 -ml-3 bg-brand-deepBrown text-white rounded-full w-10 h-10 hover:bg-brand-deepBrown/90 z-10"
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Back</span>
      </Button>
      <Card className="w-full bg-card shadow-xl rounded-lg">
        <CardHeader className="text-center pt-10 pb-6 sm:pt-12 sm:pb-8">
          <CardTitle className="text-xl font-semibold text-brand-deepBrown">
            Access your digital footprint report
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pb-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                        className="bg-brand-palestPeach border-input focus:ring-ring placeholder:text-muted-foreground"
                      />
                    </FormControl>
                    <FormDescription className="text-xs text-brand-grayText px-1">
                      Enter the email you used when purchasing your report
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-brand-brown hover:bg-opacity-90 text-white font-semibold py-3 rounded-md"
              >
                Send login code
              </Button>
            </form>
          </Form>
          <div className="text-center text-sm space-y-1 pt-2">
            <p className="text-brand-grayText">Don't have a report yet?</p>
            <Link href="#" className="block font-semibold text-brand-brown hover:underline">
              Get Your Digital Footprint Report
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
