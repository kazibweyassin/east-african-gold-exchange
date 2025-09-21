import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

export const supplierFormSchema = z.object({
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  contactName: z.string().min(2, 'Contact name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  goldType: z.enum(['raw', 'refined', 'jewelry', 'other']).refine(val => !!val, {
    message: 'Please select a gold type'
  }),
  quantity: z.string().min(1, 'Please enter a quantity'),
  location: z.string().min(2, 'Location must be at least 2 characters'),
  experience: z.string().min(1, 'Please enter years of experience'),
  license: z.any(), // TODO: Add proper file validation
  additionalInfo: z.string().optional()
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
export type SupplierFormValues = z.infer<typeof supplierFormSchema>