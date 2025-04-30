import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'data',
      source: 'projects/**.json',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        longDescription: z.string(),
        liveUrl: z.string().url().optional(),
        repoUrl: z.string().url().optional(),
        tech: z.array(z.string()),
        coverImage: z.string(),
        screenshots: z.array(z.string()),
        goals: z.string(),
        role: z.array(z.string()),
        techStack: z.string(),
        features: z.array(
          z.object({
            title: z.string(),
            description: z.string()
          })
        ),
        challenges: z.array(
          z.object({
            challenge: z.string(),
            solution: z.string()
          })
        ),
        learnings: z.string(),
        openSource: z.boolean()
      })
    })
  }
})
