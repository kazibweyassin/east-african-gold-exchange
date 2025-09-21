import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations/forms'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body)
    
    // Create email content
    const emailContent = `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}
Phone: ${validatedData.phone}

Message:
${validatedData.message}

Submitted at: ${new Date().toISOString()}
    `.trim()

    // For now, we'll log the email content
    // In production, you would integrate with an email service like:
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP
    // - Resend
    console.log('Email would be sent to: kazibweusama@gmail.com')
    console.log('Subject: New Contact Form Submission')
    console.log('Content:', emailContent)

    // You can implement actual email sending here
    // Example with a hypothetical email service:
    /*
    await sendEmail({
      to: 'kazibweusama@gmail.com',
      subject: 'New Contact Form Submission',
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>')
    })
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message. We will get back to you soon!' 
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'There was an error sending your message. Please try again.' 
      },
      { status: 500 }
    )
  }
}