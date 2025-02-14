<template>
  <section id="contact" class="py-24 bg-crust flex flex-col justify-center items-center">
    <h2 class="text-3xl font-bold mb-4 text-text">Contact Me</h2>
    <form @submit.prevent="submitForm" class="w-full max-w-lg">
      <div class="mb-4">
        <label for="name" class="block mb-2 text-text">Name:</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          class="w-full p-2 rounded bg-surface0 text-text border border-surface2 focus:border-mauve focus:outline-none"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block mb-2 text-text">Email:</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="w-full p-2 rounded bg-surface0 text-text border border-surface2 focus:border-mauve focus:outline-none"
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block mb-2 text-text">Message:</label>
        <textarea
          id="message"
          v-model="form.message"
          required
          class="w-full p-2 rounded bg-surface0 text-text border border-surface2 focus:border-mauve focus:outline-none"
          rows="5"
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-mauve text-base font-bold px-4 py-2 rounded-full hover:bg-lavender transition-colors duration-200"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>
    </form>
  </section>
</template>

<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const isSubmitting = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;
  try {
    const response = await axios.post(
      'https://email.mrspinn.ca/api/portfolio/contact',
      form,
    );
    if (response.data.message === 'Message sent successfully') {
      alert('Thank you for your message! I will get back to you soon.');
      form.name = '';
      form.email = '';
      form.message = '';
    } else {
      throw new Error('Unexpected response from server');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    alert('There was an error sending your message. Please try again later.');
  } finally {
    isSubmitting.value = false;
  }
};
</script>