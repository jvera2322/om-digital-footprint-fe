import * as z from "zod"

export const digitalFootprintFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  yearOfBirth: z
    .string()
    .regex(/^\d{4}$/, { message: "Please enter a valid 4-digit year." })
    .refine(
      (year) => {
        const currentYear = new Date().getFullYear()
        const y = Number.parseInt(year, 10)
        return y > 1900 && y <= currentYear
      },
      { message: "Please enter a realistic year of birth." },
    ),
  currentAddress: z.string().min(5, { message: "Current address must be at least 5 characters." }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .regex(/^[\d\s()+-]*$/, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  currentEmployer: z.string().optional(),
})

export type DigitalFootprintFormValues = z.infer<typeof digitalFootprintFormSchema>

export const accessReportFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
})

export type AccessReportFormValues = z.infer<typeof accessReportFormSchema>
