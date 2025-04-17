<template>
  <div class="flex min-h-[60vh] h-full w-full items-center justify-center">
    <Card>
      <CardHeader>
        <CardTitle class="text-2xl">Contact Us</CardTitle>
        <CardDescription>
          Please fill out the form below and we will get back to you shortly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit="onSubmit">
          <div class="grid gap-4">
            <FormField v-slot="{ componentField }" name="name">
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    autocomplete="name"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
                <!-- Display validation error for 'name' -->
                <p v-if="errors.name" class="text-red-500 text-sm">
                  {{ errors.name }}
                </p>
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="johndoe@mail.com"
                    autocomplete="email"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
                <!-- Display validation error for 'email' -->
                <p v-if="errors.email" class="text-red-500 text-sm">
                  {{ errors.email }}
                </p>
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="message">
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message..."
                    autocomplete="off"
                    v-bind="componentField"
                    class="min-h-[100px]"
                  />
                </FormControl>
                <FormMessage />
                <!-- Display validation error for 'message' -->
                <p v-if="errors.message" class="text-red-500 text-sm">
                  {{ errors.message }}
                </p>
              </FormItem>
            </FormField>

            <Button type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/toast/use-toast';

const formSchema = toTypedSchema(
  z.object({
    name: z
      .string({ required_error: 'Name is required.' })
      .min(2, { message: 'Name must be at least 2 characters long.' }),
    email: z
      .string({ required_error: 'Email is required.' })
      .email({ message: 'Invalid email address.' }),
    message: z
      .string({ required_error: 'Message is required.' })
      .min(10, { message: 'Message must be at least 10 characters long.' })
      .max(500, { message: 'Message must not exceed 500 characters.' }),
  })
);

const { toast } = useToast();

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: {
    name: '',
    email: '',
    message: '',
  },
});

const onSubmit = handleSubmit(async (values) => {
  try {
    console.log('Form Submitted Successfully:', values);
    toast({
      title: 'Success!',
      description: 'Your message has been sent successfully.',
      variant: 'default',
    });

    resetForm();
  } catch (error) {
    console.error('Error during submission action:', error);
    toast({
      title: 'Submission Error',
      description: 'Failed to send your message. Please try again later.',
      variant: 'destructive',
    });
  }
});
</script>