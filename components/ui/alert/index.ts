import { cva, type VariantProps } from 'class-variance-authority'

export { default as Alert } from './Alert.vue'
export { default as AlertDescription } from './AlertDescription.vue'
export { default as AlertTitle } from './AlertTitle.vue'

export const alertVariants = cva(
  'relative w-full rounded-lg border-2 px-5 py-4 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        warning:
          'border-yellow text-yellow dark:border-yellow [&>svg]:text-yellow',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
        rosewater:
          'bg-rosewater text-semantic-foreground shadow-sm hover:bg-rosewater/80',
        flamingo:
          'bg-flamingo text-semantic-foreground shadow-sm hover:bg-flamingo/80',
        pink: 'bg-pink text-semantic-foreground shadow-sm hover:bg-pink/80',
        mauve: 'bg-mauve text-semantic-foreground shadow-sm hover:bg-mauve/80',
        red: 'bg-red text-semantic-foreground shadow-sm hover:bg-red/80',
        maroon:
          'bg-maroon text-semantic-foreground shadow-sm hover:bg-maroon/80',
        peach: 'bg-peach text-semantic-foreground shadow-sm hover:bg-peach/80',
        yellow: 'bg-yellow text-semantic-foreground shadow-sm hover:bg-yellow/80',
        green: 'bg-green text-semantic-foreground shadow-sm hover:bg-green/80',
        teal: 'bg-teal text-semantic-foreground shadow-sm hover:bg-teal/80',
        sky: 'bg-sky text-semantic-foreground shadow-sm hover:bg-sky/80',
        sapphire:
          'bg-sapphire text-semantic-foreground shadow-sm hover:bg-sapphire/80',
        blue: 'bg-blue text-semantic-foreground shadow-sm hover:bg-blue/80',
        lavender:
          'bg-lavender text-semantic-foreground shadow-sm hover:bg-lavender/80',

      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type AlertVariants = VariantProps<typeof alertVariants>
