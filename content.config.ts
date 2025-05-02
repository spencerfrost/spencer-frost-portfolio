import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    about: defineCollection({
      type: 'data',
      source: 'about.json',
      schema: z.object({
        title: z.string(),
        overview: z.string(),
        keyHighlights: z.array(
          z.object({
            title: z.string(),
            desc: z.string(),
          })
        ),
        professionalExperience: z.object({
          title: z.string(),
          jobs: z.array(
            z.object({
              role: z.string(),
              points: z.array(z.string()),
            })
          ),
        }),
        careerBreak: z.object({
          title: z.string(),
          desc: z.string(),
          points: z.array(z.string()),
        }),
        skills: z.array(
          z.object({
            title: z.string(),
            points: z.array(z.string()),
          })
        ),
        projects: z.array(
          z.object({
            title: z.string(),
            desc: z.string(),
            tech: z.string(),
            contribution: z.string(),
          })
        ),
        education: z.array(
          z.object({
            degree: z.string(),
            desc: z.string(),
            extra: z.string().optional(),
          })
        ),
        philosophy: z.array(
          z.object({
            title: z.string(),
            desc: z.string(),
          })
        ),
        targetCareer: z.string().optional(),

      }),
    }),
    spencerPlus: defineCollection({
      type: 'data',
      source: 'spencer-plus.json',
      schema: z.object({
        services: z.array(
          z.object({
            name: z.string(),
            description: z.string(),
            url: z.string().url(),
            image: z.string(),
          })
        ),
      }),
    }),
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
            description: z.string(),
          })
        ),
        challenges: z.array(
          z.object({
            challenge: z.string(),
            solution: z.string(),
          })
        ),
        learnings: z.string(),
        openSource: z.boolean(),
      }),
    }),
  },
})

// About Example Object
// {
//   "title": "About Me",
//   "overview": "Spencer is a highly motivated and technically proficient web developer with a strong foundation in frontend development, a growing expertise in DevOps and infrastructure management, and a proven ability to lead and contribute effectively in project environments, including significant open-source contributions. With formal education in web development and hands-on professional experience, Spencer has leveraged a recent period of self-directed learning to dramatically expand their skill set, particularly in modern React and robust Linux server administration. Known for a commitment to building \"clean solutions, not qck fixes,\" Spencer values sustainable code practices, technical excellence, and bringing a unique blend of technical precision and creative problem-solving derived from diverse personal experiences.",
//   "keyHighlights": [
//     {
//       "title": "Frontend Expertise",
//       "desc": "Specializing in component-driven architecture, UI development, and modern JavaScript frameworks (Vue, React, Nuxt)."
//     },
//     {
//       "title": "DevOps & Infrastructure",
//       "desc": "Extensive practical experience building, securing, and managing a robust self-hosted Linux server environment with 40+ Docker containers."
//     },
//     {
//       "title": "Leadership & Project Management",
//       "desc": "Currently serving as Lead Frontend Developer for a significant open-source project (400+ commits)."
//     },
//     {
//       "title": "Technical Depth",
//       "desc": "Proficient in TypeScript, modern CSS (Tailwind, SCSS, Shadcn UI), state management, build tools (Vite), CI/CD, Python/Flask."
//     },
//     {
//       "title": "Problem Solver",
//       "desc": "Enjoys diving into complex challenges and implementing the \"right\" solution."
//     },
//     {
//       "title": "Unique Perspective",
//       "desc": "Background in music, event organization, and travel fosters creativity and collaboration."
//     }
//   ],
//   "professionalExperience": {
//     "title": "Professional Experience",
//     "jobs": [
//     {
//       "role": "Vue.js Front-End Developer (First Role)",
//       "points": [
//         "Initially focused on core frontend development using Vue.js.",
//         "Stepped into an interim lead developer role during a period of transition."
//       ]
//     },
//     {
//       "role": "UI/Full-Stack Developer (Second Role)",
//       "points": [
//         "Began as a dedicated frontend developer, successfully building a comprehensive component library.",
//         "Collaborated closely on a complex feature involving a sports bracketing system.",
//         "Later transitioned to full-stack tasks."
//       ]
//     }
//   ]},
//   "careerBreak": {
//     "title": "The Pivotal \"Career Break\"",
//     "desc": "Following a period of intense professional challenges and personal focus on mental health, Spencer took an intentional break from traditional employment (approx. 1.5-2 years). This time was strategically utilized as a period of intensive self-directed learning and practical skill acquisition, transforming existing knowledge and adding significant new areas of expertise. This period was marked by:",
//     "points": [
//       "Deepening existing web development skills.",
//       "Aggressively learning and gaining hands-on experience with the React ecosystem.",
//       "Building and mastering personal DevOps and server administration skills through a large-scale home lab project.",
//       "Taking a lead role in a significant open-source project.",
//       "Initiating and developing a new open-source, AI-powered full-stack application."
//     ]
//   },
//   "skills": [
//     {
//       "title": "Advanced Frontend Development",
//       "points": [
//         "React Proficiency",
//         "TypeScript Mastery",
//         "Modern Frameworks & Styling (React 19, Tailwind v4, Shadcn UI, SCSS)",
//         "Build Tools (Vite)",
//         "State Management & Data Fetching (Pinia, Zustand, TanStack Query)",
//         "Performance & Best Practices (useMemo, Error Boundaries)"
//       ]
//     },
//     {
//       "title": "Backend Development (Python/Flask)",
//       "points": [
//         "RESTful API Development",
//         "Core Backend Logic Implementation"
//       ]
//     },
//     {
//       "title": "AI/ML Integration",
//       "points": [
//         "Integration of Demucs (PyTorch-based) AI model"
//       ]
//     },
//     {
//       "title": "DevOps & Infrastructure Management (\"Spencer Plus\")",
//       "points": [
//         "Linux Server Administration",
//         "Docker Ecosystem (40+ containers)",
//         "Web Server & Proxying (NGINX, Cloudflare)",
//         "Security (UFW, Fail2ban, Let's Encrypt)",
//         "Networking & DNS (Pi-hole, Unbound)",
//         "Monitoring & Logging (Grafana, Prometheus, Loki, cAdvisor)",
//         "Self-Hosting Philosophy"
//       ],
//       "note": "Acknowledges foundational Linux/Docker/Networking skills applicable to cloud environments (AWS/Azure/GCP)."
//     },
//     {
//       "title": "Project Leadership & Management",
//       "points": [
//         "Lead Frontend Developer (Open Source Project)",
//         "Managing and Contributing (400+ commits)",
//         "Leading Major Migrations",
//         "Implementing Structured Project Management",
//         "Initiating and Leading New Projects"
//       ]
//     },
//     {
//       "title": "CI/CD & Deployment",
//       "points": [
//         "Automated Deployments (CircleCI)",
//         "Deployment Strategies (PM2, SCP, rsync, Docker)"
//       ]
//     },
//     {
//       "title": "General Technical Proficiency",
//       "points": [
//         "Linux Command Line",
//         "Networking Fundamentals (DNS, Routing)",
//         "Monorepo Management (pnpm)"
//       ]
//     }
//   ],
//   "projects": [
//     {
//       "title": "Open Karaoke Studio",
//       "desc": "AI-powered web application for creating karaoke tracks.",
//       "tech": "Technologies: React 19, Python/Flask, Demucs, Docker, etc.",
//       "contribution": "Contribution: Initiated, designed, and built core functionality."
//     },
//     {
//       "title": "Create Mod Website",
//       "desc": "Official website for a popular Minecraft mod.",
//       "tech": "Technologies: React 19, TypeScript, Tailwind v4, Shadcn UI, etc.",
//       "contribution": "Contribution: Led frontend development, implemented type safety, handled migrations."
//     },
//     {
//       "title": "Minecraft Skin Merger",
//       "desc": "Application for merging Minecraft skins.",
//       "tech": "Technologies: React, Tailwind, Canvas API, Node.js backend.",
//       "contribution": "Contribution: Designed and built unique application demonstrating complex interactions."
//     },
//     {
//       "title": "Artist Portfolio",
//       "desc": "Implemented a self-hosted CMS solution for a client.",
//       "tech": "Technologies: Strapi JS.",
//       "contribution": "Contribution: Demonstrated ability to work with content management systems."
//     },
//     {
//       "title": "PowerLevel10K Catppuccin Theme",
//       "desc": "Created a popular, niche theme for a ZSH prompt.",
//       "contribution": "Contribution: Demonstrates attention to detail and contributing to the developer tool ecosystem."
//     }
//   ],
//   "education": [
//     {
//       "degree": "College Diploma, Internet Applications and Web Development",
//       "desc": "Graduated with Honors, Dean's List, 4.2 GPA. Graduated: 2018",
//       "extra": "Completed an online course focusing on Vue.js which provided the foundation for first professional role."
//     }
//   ],
//   "philosophy": [
//     {
//       "title": "Core Philosophy: \"Clean Solutions, Not Qck Fixes.\"",
//       "desc": "Strong belief in building sustainable, maintainable code bases."
//     },
//     {
//       "title": "Problem-Solving",
//       "desc": "Enjoys tackling challenging technical problems and finding the most effective solution."
//     },
//     {
//       "title": "Learning & Curiosity",
//       "desc": "Constantly learning new technologies and skills. Known for having a broad base of knowledge."
//     },
//     {
//       "title": "UI/Aesthetic",
//       "desc": "Drawn to clean, fun, and visually appealing designs."
//     },
//     {
//       "title": "Unique Perspective",
//       "desc": "Life experiences outside of tech foster a creative, adaptable, and user-centered approach."
//     },
//     {
//       "title": "Work Style",
//       "desc": "Described as \"good vibes\" and \"chill,\" while internally driven by a desire for technical correctness."
//     }
//   ],
//   "targetCareer": "Primarily targeting Frontend Developer roles initially, leveraging extensive experience in UI, component development, Vue, and React. Also open to roles involving DevOps or a blend of frontend and infrastructure where acquired skills in Linux, Docker, and system management could provide unique value. Seeking a role where skills can be fully utilized, contribution is valued, and there's opportunity for continued learning and growth in a positive technical environment that aligns with a philosophy of building quality, sustainable software."
// }