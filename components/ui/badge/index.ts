import { cva, type VariantProps } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-background text-foreground shadow hover:bg-background/50',
        primary:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        rosewater:
          "bg-rosewater text-semantic-foreground shadow-sm hover:bg-rosewater/80",
        flamingo:
          "bg-flamingo text-semantic-foreground shadow-sm hover:bg-flamingo/80",
        pink:
          "bg-pink text-semantic-foreground shadow-sm hover:bg-pink/80",
        mauve:
          "bg-mauve text-semantic-foreground shadow-sm hover:bg-mauve/80",
        red:
          "bg-red text-semantic-foreground shadow-sm hover:bg-red/80",
        maroon:
          "bg-maroon text-semantic-foreground shadow-sm hover:bg-maroon/80",
        peach:
          "bg-peach text-semantic-foreground shadow-sm hover:bg-peach/80",
        yellow:
          "bg-yellow text-semantic-foreground shadow-sm hover:bg-yellow/80",
        green:
          "bg-green text-semantic-foreground shadow-sm hover:bg-green/80",
        teal:
          "bg-teal text-semantic-foreground shadow-sm hover:bg-teal/80",
        sky:
          "bg-sky text-semantic-foreground shadow-sm hover:bg-sky/80",
        sapphire:
          "bg-sapphire text-semantic-foreground shadow-sm hover:bg-sapphire/80",
        blue:
          "bg-blue text-semantic-foreground shadow-sm hover:bg-blue/80",
        lavender:
          "bg-lavender text-semantic-foreground shadow-sm hover:bg-lavender/80",
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
