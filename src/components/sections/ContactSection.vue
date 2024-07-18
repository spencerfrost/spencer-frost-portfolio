<template>
    <section id="contact" class="full-height d-flex flex-column justify-center align-center">
      <h2 class="text-3xl font-bold mb-4 font-white">Contact Me</h2>
      <form @submit.prevent="submitForm" class="w-100" style="max-width: 500px;">
        <div class="mb-4">
          <label for="name" class="block mb-2 font-white">Name:</label>
          <input type="text" id="name" v-model="form.name" required class="w-100 p-2 rounded">
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-2 font-white">Email:</label>
          <input type="email" id="email" v-model="form.email" required class="w-100 p-2 rounded">
        </div>
        <div class="mb-4">
          <label for="message" class="block mb-2 font-white">Message:</label>
          <textarea id="message" v-model="form.message" required class="w-100 p-2 rounded" rows="5"></textarea>
        </div>
        <button type="submit" class="bg-accent py-2 px-4 font-white font-bold rounded">Send Message</button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        // Here you would typically send the form data to a server
        console.log('Form submitted:', this.form);
        // Reset form after submission
        this.form = { name: '', email: '', message: '' };
        alert('Thank you for your message! I will get back to you soon.');
      }
    }
  }
  </script>
  