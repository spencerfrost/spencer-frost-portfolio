<template>
  <Card class="max-w-lg">
    <CardHeader>
      <div class="flex items-center justify-center">
        <CircleImage
          src="/images/spencer/mailman.webp"
          color="sapphire"
          size="md"
          alt="Spencer as a friendly mailman"
        />
      </div>
      <CardTitle class="text-2xl">Drop Me a Line!</CardTitle>
      <CardDescription>
        Spencer's Digital Post Office is now accepting messages! Whether you
        have a project idea, a question about my work, or just want to say
        hello, I'll make sure your message gets delivered.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form @submit="onSubmit">
        <div class="grid gap-4">
          <FormField v-slot="{ componentField }" name="name">
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Jane Smith"
                  autocomplete="name"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Return Address (Email)</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="jane@example.com"
                  autocomplete="email"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="message">
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What's on your mind? I'd love to hear about your project, answer questions, or just chat about web development!"
                  autocomplete="off"
                  v-bind="componentField"
                  class="min-h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <Button type="submit">
            <Icon name="gravity-ui:envelope" size="18" class="mr-2" />
            Send It My Way
          </Button>
        </div>
      </form>
    </CardContent>
    <CardFooter class="text-center text-sm text-muted-foreground">
      I typically reply within 24-48 hours. No spam, promise!
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/toast/use-toast'

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
)

const { toast } = useToast()

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: {
    name: '',
    email: '',
    message: '',
  },
})

const onSubmit = handleSubmit(async values => {
  try {
    const res = await $fetch('/api/contact', {
      method: 'POST',
      body: values,
    })

    if (res.success) {
      toast({
        title: 'Success!',
        description: 'Your message has been sent successfully.',
        variant: 'default',
      })
      resetForm()
    } else {
      throw new Error('Failed to send')
    }
  } catch (error) {
    console.error('Error during submission action:', error)
    toast({
      title: 'Submission Error',
      description: 'Failed to send your message. Please try again later.',
      variant: 'destructive',
    })
  }
})
</script>
