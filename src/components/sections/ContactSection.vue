<template>
  <section id="contact" class="py-24 bg-background flex flex-col justify-center items-center">
    <h2 class="text-3xl font-bold mb-4 text-white">Contact Me</h2>
    <form @submit.prevent="submitForm" class="w-full max-w-lg">
      <div class="mb-4">
        <label for="name" class="block mb-2 text-white">Name:</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          class="w-full p-2 rounded"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block mb-2 text-white">Email:</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="w-full p-2 rounded"
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block mb-2 text-white">Message:</label>
        <textarea
          id="message"
          v-model="form.message"
          required
          class="w-full p-2 rounded"
          rows="5"
        ></textarea>
      </div>
      <button class="bg-secondary font-bold px-4 py-2 rounded-full hover:bg-secondary-dark transition-colors duration-200">
        Send Message
      </button>
    </form>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      isSubmitting: false,
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      try {
        const response = await axios.post(
          'https://email.mrspinn.ca/api/portfolio/contact',
          this.form,
        )
        if (response.data.message === 'Message sent successfully') {
          alert('Thank you for your message! I will get back to you soon.')
          this.form = { name: '', email: '', message: '' } 
        } else {
          throw new Error('Unexpected response from server')
        }
      } catch (error) {
        console.error('Error sending email:', error)
        alert('There was an error sending your message. Please try again later.')
      } finally {
        this.isSubmitting = false
      }
    },
  },
}
</script>
