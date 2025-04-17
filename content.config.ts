import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'data',
      source: 'projects/**.json',
      schema: z.object({
        id: z.string(),
        slug: z.string(),
        title: z.string(),
        tagline: z.string(),
        description: z.string(),
        role: z.string(),
        challenges: z.array(z.string()),
        features: z.array(z.string()),
        keyTakeaways: z.string(),
        tags: z.array(z.string()),
        links: z.object({
          live: z.string(),
          github: z.string()
        }),
        featured: z.boolean(),
        completionStatus: z.string(),
        contributionMetrics: z.object({
          commits: z.string(),
          role: z.string(),
          timeline: z.string()
        })
      })
    })
  }
})

