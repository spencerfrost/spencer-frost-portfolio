import { cva, type VariantProps } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "whitespace-nowrap",
    "rounded-md",
    "text-sm",
    "font-medium",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-1",
    "focus-visible:ring-ring",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "[&_svg]:pointer-events-none",
    "[&_svg]:size-4",
    "[&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-card text-foreground shadow hover:bg-card/70",
        primary:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
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
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:text-secondary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-7 rounded px-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
