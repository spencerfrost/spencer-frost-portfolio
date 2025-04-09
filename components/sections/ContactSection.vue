<template>
  <section id="contact" class="py-24 bg-bg flex flex-col justify-center items-center">
    <h2 class="text-3xl font-bold mb-4 text-heading">Contact Me</h2>
    <form @submit.prevent="submitForm" class="w-full max-w-lg">
      <div class="mb-4">
        <label for="name" class="block mb-2 text-foreground">Name:</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          class="w-full p-2 rounded bg-input-bg border border-input-border text-foreground"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block mb-2 text-foreground">Email:</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="w-full p-2 rounded bg-input-bg border border-input-border text-foreground"
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block mb-2 text-foreground">Message:</label>
        <textarea
          id="message"
          v-model="form.message"
          required
          class="w-full p-2 rounded bg-input-bg border border-input-border text-foreground"
          rows="5"
        ></textarea>
      </div>
      <button class="bg-primary text-primary-foreground font-bold px-4 py-2 rounded-full hover:bg-primary/90 transition-colors duration-200">
        Send Message
      </button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);

async function submitForm() {
  isSubmitting.value = true;
  try {
    const response = await axios.post(
      'https://email.mrspinn.ca/api/portfolio/contact',
      form.value
    );
    
    if (response.data.message === 'Message sent successfully') {
      alert('Thank you for your message! I will get back to you soon.');
      form.value = { name: '', email: '', message: '' };
    } else {
      throw new Error('Unexpected response from server');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    alert('There was an error sending your message. Please try again later.');
  } finally {
    isSubmitting.value = false;
  }
}
</script>
