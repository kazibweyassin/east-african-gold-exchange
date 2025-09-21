# Email Integration Setup

## Current Configuration

Both the contact form and supplier assessment form are now configured to send submissions to: **kazibweusama@gmail.com**

## Form Endpoints

- **Contact Form**: `/api/contact` - Handles contact form submissions
- **Supplier Assessment**: `/api/supplier` - Handles supplier application submissions

## Email Service Integration

Currently, the forms log email content to the console. To enable actual email sending, you need to integrate with an email service:

### Option 1: Using Resend (Recommended)

1. Install Resend:
```bash
npm install resend
```

2. Add environment variable to `.env.local`:
```
RESEND_API_KEY=your_resend_api_key
```

3. Update the API routes to use Resend:
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// In your API route:
await resend.emails.send({
  from: 'noreply@yourdomain.com',
  to: 'kazibweusama@gmail.com',
  subject: 'New Contact Form Submission',
  text: emailContent,
})
```

### Option 2: Using SendGrid

1. Install SendGrid:
```bash
npm install @sendgrid/mail
```

2. Add environment variable:
```
SENDGRID_API_KEY=your_sendgrid_api_key
```

### Option 3: Using Nodemailer with Gmail

1. Install Nodemailer:
```bash
npm install nodemailer
```

2. Set up Gmail App Password and configure SMTP

## Current Features

✅ Form validation using Zod schemas
✅ API routes for form submission
✅ Success/error messaging
✅ Form reset on successful submission
✅ Email addresses updated throughout the site

## Files Modified

- `/src/app/api/contact/route.ts` - Contact form API endpoint
- `/src/app/api/supplier/route.ts` - Supplier form API endpoint
- `/src/components/ContactForm.tsx` - Contact form with API integration
- `/src/components/SupplierForm.tsx` - Supplier form with API integration
- `/src/app/contact/page.tsx` - Updated display email address
- `/src/components/Footer.tsx` - Updated footer email address