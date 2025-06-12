"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { type DigitalFootprintFormValues, digitalFootprintFormSchema } from "@/lib/schemas"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DigitalFootprintForm() {
  const form = useForm<DigitalFootprintFormValues>({
    resolver: zodResolver(digitalFootprintFormSchema),
    defaultValues: {
      fullName: "",
      yearOfBirth: "",
      currentAddress: "",
      phoneNumber: "",
      email: "",
      currentEmployer: "",
    },
  })

  function onSubmit(values: DigitalFootprintFormValues) {
    console.log("Digital Footprint Form Submitted:", values)
    alert("Report request submitted! Check console for details.")
    form.reset()
  }

  return (
    <Card className="w-full max-w-lg bg-card shadow-xl rounded-lg">
      <CardHeader className="pb-4 pt-6">
        {/* Ensure "Professional" is plain text without special background */}
        <CardTitle className="text-xl font-semibold text-center text-brand-deepBrown">
          Professional AI analysis delivered instantly
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-brand-darkBrown">Full name</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-brand-palestPeach border-input focus:ring-brand-brown" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="yearOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-brand-darkBrown">Year of birth</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-brand-palestPeach border-input focus:ring-brand-brown" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="currentAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-brand-darkBrown">Current address</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-brand-palestPeach border-input focus:ring-brand-brown" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-brand-darkBrown">Phone number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        {...field}
                        className="bg-brand-palestPeach border-input focus:ring-brand-brown"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-brand-darkBrown">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        className="bg-brand-palestPeach border-input focus:ring-brand-brown"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currentEmployer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-brand-darkBrown">
                      Current employer <span className="text-brand-grayText">(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-brand-palestPeach border-input focus:ring-brand-brown" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-brand-deepBrown hover:bg-brand-darkest text-white font-semibold py-3 rounded-md mt-6 !pt-3 !pb-3"
            >
              Get my report
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
