import { readBody, sendError, createError } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, email, message } = body

    if (!name || !email || !message) {
      return sendError(
        event,
        createError({ statusCode: 400, statusMessage: 'Missing fields' })
      )
    }

    // POST to your email server's HTTP API
    const response = await $fetch('https://email.spencerfrost.ca/api/portfolio/contact', {
      method: 'POST',
      body: { name, email, message },
    })

    return { success: true, response }
  } catch (error: any) {
    console.error('Proxy email send error:', error)
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: 'Failed to send email' })
    )
  }
})
