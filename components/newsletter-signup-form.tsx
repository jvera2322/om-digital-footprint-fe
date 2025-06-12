"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ChromeIcon, AppleIcon, MailIcon, SparklesIcon, ShieldCheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export default function NewsletterSignupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission (e.g., send data to your newsletter service)
    console.log(values)
    // You would typically show a success message or redirect here
    alert(`Subscribed with ${values.email}! (Check console for details)`)
    form.reset()
  }

  return (
    <Card className="w-full max-w-md shadow-lg rounded-xl">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4">
          {/* Placeholder for Logo */}
          <SparklesIcon className="h-12 w-12 text-purple-600" />
        </div>
        <CardTitle className="text-2xl font-bold">Subscribe to Our Newsletter</CardTitle>
        <CardDescription className="text-muted-foreground">
          Get the latest updates, insights, and special offers delivered straight to your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button variant="outline" className="w-full">
            <ChromeIcon className="mr-2 h-4 w-4" />
            Sign up with Google
          </Button>
          <Button variant="outline" className="w-full">
            <AppleIcon className="mr-2 h-4 w-4" />
            Sign up with Apple
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or continue with email</span>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MailIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input type="email" placeholder="your@email.com" className="pl-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Subscribe Now
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col items-center space-y-3 text-xs text-muted-foreground">
        <div className="flex space-x-4">
          <Link href="/terms" className="hover:text-purple-600">
            Terms of Service
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <Link href="/privacy" className="hover:text-purple-600">
            Privacy Policy
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <Link href="/help" className="hover:text-purple-600">
            Help
          </Link>
        </div>
        <div className="flex items-center pt-2">
          <ShieldCheckIcon className="mr-1.5 h-4 w-4 text-green-600" />
          <span>We respect your privacy. No spam, ever.</span>
        </div>
      </CardFooter>
    </Card>
  )
}
