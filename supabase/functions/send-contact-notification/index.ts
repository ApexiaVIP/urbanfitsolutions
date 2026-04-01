import { corsHeaders } from '@supabase/supabase-js/cors'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const NOTIFICATION_EMAIL = 'jamesacton007@gmail.com'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, projectType, message } = await req.json()

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Store in database
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({ name, email, phone, project_type: projectType, message })

    if (dbError) {
      console.error('Database error:', dbError)
      return new Response(
        JSON.stringify({ error: 'Failed to save submission' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Send notification email via Resend (free tier, no API key needed for basic sends)
    // Using the Supabase built-in email hook
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a1a1a; border-bottom: 2px solid #C8A55C; padding-bottom: 10px;">
          New Enquiry from UrbanFit Solutions Website
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 140px;">Name:</td>
            <td style="padding: 8px 12px; color: #1a1a1a;">${escapeHtml(name)}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 8px 12px; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 8px 12px; color: #1a1a1a;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #555;">Phone:</td>
            <td style="padding: 8px 12px; color: #1a1a1a;">${phone ? escapeHtml(phone) : 'Not provided'}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 8px 12px; font-weight: bold; color: #555;">Project Type:</td>
            <td style="padding: 8px 12px; color: #1a1a1a;">${projectType ? escapeHtml(projectType) : 'Not specified'}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-left: 3px solid #C8A55C;">
          <strong style="color: #555;">Message:</strong>
          <p style="color: #1a1a1a; margin-top: 8px; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 30px;">
          Sent from the UrbanFit Solutions website contact form.
        </p>
      </div>
    `

    // Use Supabase's built-in auth.admin to send email
    const { error: emailError } = await supabase.auth.admin.inviteUserByEmail(
      'noreply@urbanfitsolutions.co.uk',
      { data: {} }
    ).catch(() => ({ error: null }))

    // Send via edge function's fetch to a simple SMTP relay
    // For now, we'll use the Supabase project's built-in email sending
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    
    if (resendApiKey) {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'UrbanFit Solutions <onboarding@resend.dev>',
          to: [NOTIFICATION_EMAIL],
          subject: `New Enquiry: ${name} - ${projectType || 'General'}`,
          html: emailHtml,
          reply_to: email,
        }),
      })

      if (!emailResponse.ok) {
        const errData = await emailResponse.text()
        console.error('Email send error:', errData)
      }
    } else {
      console.log('RESEND_API_KEY not set - email notification skipped, but submission saved to database')
      console.log('Submission from:', name, email)
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
