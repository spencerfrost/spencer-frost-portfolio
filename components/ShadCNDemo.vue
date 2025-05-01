<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from '@/components/ui/toast/use-toast'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from '@/components/ui/sheet'
import { Textarea } from '@/components/ui/textarea'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/toast'

const { toast } = useToast()

// Refs for interactive components
const radioValue = ref('option-one')
const inputValue = ref('')
const textareaValue = ref('')
const formSubmitted = ref(false)

const handleFormSubmit = () => {
  formSubmitted.value = true
  toast({
    title: 'Form Submitted',
    description: 'Demo form data processed.',
  })
  // Reset form state after a delay for demo purposes
  setTimeout(() => formSubmitted.value = false, 3000);
}

// Carousel items example
const carouselItems = ref([
  { id: 1, content: 'Slide 1' },
  { id: 2, content: 'Slide 2' },
  { id: 3, content: 'Slide 3' },
])
</script>

<template>
  <div class="container mx-auto p-4 space-y-8">
    <h1 class="text-3xl font-bold text-foreground mb-6">Shadcn/Vue Component Showcase</h1>

    <Toaster />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <Card>
        <CardHeader>
          <CardTitle>Badge</CardTitle>
        </CardHeader>
        <CardContent class="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Button</CardTitle>
        </CardHeader>
        <CardContent class="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </CardContent>
        <CardContent class="flex flex-wrap gap-2">
          <Button variant="rosewater">Rosewater</Button>
          <Button variant="flamingo">Flamingo</Button>
          <Button variant="pink">Pink</Button>
          <Button variant="mauve">Mauve</Button>
          <Button variant="red">Red</Button>
          <Button variant="maroon">Maroon</Button>
          <Button variant="peach">Peach</Button>
          <Button variant="yellow">Yellow</Button>
          <Button variant="green">Green</Button>
          <Button variant="teal">Teal</Button>
          <Button variant="sky">Sky</Button>
          <Button variant="sapphire">Sapphire</Button>
          <Button variant="blue">Blue</Button>
          <Button variant="lavender">Lavender</Button>
        </CardContent>
        <CardContent class="flex flex-wrap gap-2">
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button :disabled="true">Disabled</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Card Example</CardTitle>
          <CardDescription>This is a card description.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here.</p>
        </CardContent>
        <CardFooter>
          <Button class="w-full">
            <Check class="mr-2 h-4 w-4" /> Mark all as read
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Carousel</CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel class="relative w-full max-w-xs mx-auto">
            <CarouselContent>
              <CarouselItem v-for="item in carouselItems" :key="item.id">
                <div class="p-1">
                  <Card>
                    <CardContent class="flex aspect-square items-center justify-center p-6">
                      <span class="text-4xl font-semibold">{{ item.content }}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dialog</CardTitle>
        </CardHeader>
        <CardContent>
          <Dialog>
            <DialogTrigger as-child>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a dialog description. Make changes and save.
                </DialogDescription>
              </DialogHeader>
              <div class="grid gap-4 py-4">
                <p>Dialog content can go here.</p>
              </div>
              <DialogFooter>
                <DialogClose as-child>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dropdown Menu</CardTitle>
        </CardHeader>
        <CardContent>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardContent>
      </Card>

      <Card class="md:col-span-2">
        <CardHeader>
          <CardTitle>Form Elements</CardTitle>
          <CardDescription>Showcasing Input, Label, RadioGroup, Textarea</CardDescription>
        </CardHeader>
        <CardContent>
          <form @submit.prevent="handleFormSubmit" class="space-y-4">
            <div class="grid w-full max-w-sm items-center gap-1.5">
              <Label for="email">Email</Label>
              <Input id="email" type="email" placeholder="Email" v-model="inputValue" />
            </div>

            <div class="grid w-full gap-1.5">
              <Label for="message">Your message</Label>
              <Textarea id="message" placeholder="Type your message here." v-model="textareaValue" />
            </div>

            <RadioGroup v-model="radioValue" default-value="option-one" class="space-y-1">
              <Label>Notify me about...</Label>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="option-one" value="option-one" />
                <Label for="option-one">All new messages</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="option-two" value="option-two" />
                <Label for="option-two">Direct messages</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="option-three" value="option-three" />
                <Label for="option-three">Nothing</Label>
              </div>
            </RadioGroup>

            <Button type="submit">Submit Form</Button>

            <p v-if="formSubmitted" class="text-sm text-green-600 dark:text-green-400">Form submitted successfully!</p>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Navigation Menu</CardTitle>
        </CardHeader>
        <CardContent>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Introduction</NavigationMenuLink>
                  <NavigationMenuLink>Installation</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NuxtLink to="/dev/components">
                  <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                    Components
                  </NavigationMenuLink>
                </NuxtLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sheet</CardTitle>
        </CardHeader>
        <CardContent class="flex flex-wrap gap-2">
          <Sheet>
            <SheetTrigger as-child>
              <Button variant="outline">Open Sheet (Right)</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Sheet Title</SheetTitle>
                <SheetDescription>
                  This is a sheet description. Place content here.
                </SheetDescription>
              </SheetHeader>
              <div class="py-4">Sheet Content</div>
              <SheetFooter>
                <SheetClose as-child>
                  <Button type="button" variant="secondary">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger as-child>
              <Button variant="outline">Open Sheet (Top)</Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Top Sheet</SheetTitle>
              </SheetHeader>
              <div class="py-4">Sheet Content</div>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Toast</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="outline" @click="() => {
                  toast({
                    title: 'Scheduled: Catch up',
                    description: 'Friday, February 10, 2023 at 5:57 PM',
                  })
                }">
            Show Toast
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tooltip</CardTitle>
        </CardHeader>
        <CardContent>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <Button variant="outline">Hover Me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>
      </Card>

    </div>
  </div>
</template>