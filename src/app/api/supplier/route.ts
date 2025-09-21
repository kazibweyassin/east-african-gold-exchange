import { NextRequest, NextResponse } from 'next/server'
import { supplierFormSchema } from '@/lib/validations/forms'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the form data
    const validatedData = supplierFormSchema.parse(body)
    
    // Create email content
    const emailContent = `
New Supplier Assessment Submission

Company Information:
- Company Name: ${validatedData.companyName}
- Contact Name: ${validatedData.contactName}
- Email: ${validatedData.email}
- Phone: ${validatedData.phone}

Gold Information:
- Gold Type: ${validatedData.goldType}
- Quantity: ${validatedData.quantity}
- Location: ${validatedData.location}

Experience:
${validatedData.experience}

Additional Information:
${validatedData.additionalInfo}

Submitted at: ${new Date().toISOString()}
    `.trim()

    // For now, we'll log the email content
    // In production, you would integrate with an email service
    console.log('Email would be sent to: kazibweusama@gmail.com')
    console.log('Subject: New Supplier Assessment Submission')
    console.log('Content:', emailContent)

    // You can implement actual email sending here
    // Example with a hypothetical email service:
    /*
    await sendEmail({
      to: 'kazibweusama@gmail.com',
      subject: 'New Supplier Assessment Submission',
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>')
    })
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your submission. We will review your application and get back to you soon!' 
    })
  } catch (error) {
    console.error('Error processing supplier form:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'There was an error submitting your application. Please try again.' 
      },
      { status: 500 }
    )
  }
}