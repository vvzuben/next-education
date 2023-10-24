import { z } from "zod";

export const NewsletterSchema = z.object({
  email: z.string().email()
});

export type NewsletterSubmission = z.infer<typeof NewsletterSchema>;

export const ContactFormSchema = z.object({
  first_name: z.string()
    .min(1, { message: "First Name must be at least 1 character long" })
    .max(50, { message: "Name must be less than 25 characters long" }),
  last_name: z.string()
    .min(1, { message: "Last Name must be at least 1 character long" })
    .max(50, { message: "Name must be less than 25 characters long" }),
  email: z.string()
    .email({ message: "Invalid email address" }),
  phone_number: z.string()
    .regex(/^[0-9]{10,}$/, { message: "Phone number must consists of a minimum of ten digits, without any characters." }),
  message: z.string()
    .min(25, { message: "Message must be at least 25 characters long" })
    .max(1000, { message: "Message must be less than 1000 characters long" }),
  contact_reason: z.string()
    .min(5, { message: "Please select a reason for contacting us" }),
  privacy: z.boolean().refine(val => val === true, {
    message: "Please confirm you have read and agree with our Privacy Policy"
  }),
  add_to_newsletter: z.boolean()
});

export type ContactSubmission = z.infer<typeof ContactFormSchema>;
