<template>
  <main class="container mx-auto px-4 py-8 md:px-6 lg:px-8">
    <h1 class="text-4xl font-bold mb-8 text-center md:text-left">About Spencer Frost</h1>

    <div class="grid grid-cols-1 md:grid-cols-6 gap-6">

      <Card class="md:col-span-4 p-6">
        <CardHeader>
          <CardTitle class="text-2xl font-semibold">Overview</CardTitle>
        </CardHeader>
        <CardContent class="text-lg leading-relaxed">
          <p>
            Spencer is a highly motivated and technically proficient web developer with a strong foundation in frontend
            development, a growing expertise in DevOps and infrastructure management, and a proven ability to lead and
            contribute effectively in project environments, including significant open-source contributions. With formal
            education in web development and hands-on professional experience, Spencer has leveraged a recent period of
            self-directed learning to dramatically expand their skill set, particularly in modern React and robust Linux
            server administration. Known for a commitment to building "clean solutions, not qck fixes," Spencer values
            sustainable code practices, technical excellence, and bringing a unique blend of technical precision and
            creative problem-solving derived from diverse personal experiences.
          </p>
        </CardContent>
      </Card>

      <Card class="md:col-span-2 p-6">
        <CardHeader>
          <CardTitle class="text-2xl font-semibold">Key Highlights</CardTitle>
        </CardHeader>
        <CardContent class="text-lg leading-relaxed">
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Frontend Expertise:</strong> Specializing in component-driven architecture, UI development, and
              modern JavaScript frameworks (Vue, React, Nuxt).</li>
            <li><strong>DevOps & Infrastructure:</strong> Extensive practical experience building, securing, and
              managing a robust self-hosted Linux server environment with 40+ Docker containers.</li>
            <li><strong>Leadership & Project Management:</strong> Currently serving as Lead Frontend Developer for a
              significant open-source project (400+ commits).</li>
            <li><strong>Technical Depth:</strong> Proficient in TypeScript, modern CSS (Tailwind, SCSS, Shadcn UI),
              state management, build tools (Vite), CI/CD, Python/Flask.</li>
            <li><strong>Problem Solver:</strong> Enjoys diving into complex challenges and implementing the "right"
              solution.</li>
            <li><strong>Unique Perspective:</strong> Background in music, event organization, and travel fosters
              creativity and collaboration.</li>
          </ul>
        </CardContent>
      </Card>

      <Card class="md:col-span-3 p-6">
        <CardHeader>
          <CardTitle class="text-2xl font-semibold">Professional Experience (Pre-Gap)</CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div>
            <h3 class="text-xl font-medium mb-2">Vue.js Front-End Developer (First Role)</h3>
            <ul class="list-disc list-inside space-y-1 leading-relaxed">
              <li>Initially focused on core frontend development using Vue.js.</li>
              <li>Stepped into an interim lead developer role during a period of transition.</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2">UI/Full-Stack Developer (Second Role)</h3>
            <ul class="list-disc list-inside space-y-1 leading-relaxed">
              <li>Began as a dedicated frontend developer, successfully building a comprehensive component library.</li>
              <li>Collaborated closely on a complex feature involving a sports bracketing system.</li>
              <li>Later transitioned to full-stack tasks.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card class="md:col-span-3 p-6">
        <CardHeader>
          <CardTitle class="text-2xl font-semibold">The Pivotal "Career Break"</CardTitle>
        </CardHeader>
        <CardContent class="text-lg leading-relaxed">
          <p class="mb-4">
            Following a period of intense professional challenges and personal focus on mental health, Spencer took an
            intentional break from traditional employment (approx. 1.5-2 years). This time was strategically utilized as
            a period of intensive self-directed learning and practical skill acquisition, transforming existing
            knowledge and adding significant new areas of expertise. This period was marked by:
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>Deepening existing web development skills.</li>
            <li>Aggressively learning and gaining hands-on experience with the React ecosystem.</li>
            <li>Building and mastering personal DevOps and server administration skills through a large-scale home lab
              project.</li>
            <li>Taking a lead role in a significant open-source project.</li>
            <li>Initiating and developing a new open-source, AI-powered full-stack application.</li>
          </ul>
        </CardContent>
      </Card>

      <Card class="md:col-span-4 p-6">
        <CardHeader>
          <CardTitle class="text-2xl font-semibold">Skills & Experience (Acquired/Deepened During the Gap)</CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div>
            <h3 class="text-xl font-medium mb-2">Advanced Frontend Development</h3>
            <ul class="list-disc list-inside space-y-1 leading-relaxed">
              <li>React Proficiency</li>
              <li>TypeScript Mastery</li>
              <li>Modern Frameworks & Styling (React 19, Tailwind v4, Shadcn UI, SCSS)</li>
              <li>Build Tools (Vite)</li>
              <li>State Management & Data Fetching (Pinia, Zustand, TanStack Query)</li>
              <li>Performance & Best Practices (useMemo, Error Boundaries)</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2">Backend Development (Python/Flask)</h3>
            <ul class="list-disc list-inside space-y-1 leading-relaxed">
              <li>RESTful API Development</li>
              <li>Core Backend Logic Implementation</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2">AI/ML Integration</h3>
            <ul class="list-disc list-inside space-y-1 leading-relaxed">
              <li>Integration of Demucs (PyTorch-based) AI model</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2">DevOps & Infrastructure Management ("Spencer Plus")</h3>
            <ul class="list-disc list-inside space-y-1 leading-relaxed">
              <li>Linux Server Administration</li>
              <li>Docker Ecosystem (40+ containers)</li>
              <li>Web Server & Proxying (NGINX, Cloudflare)</li>
              <li>Security (UFW, Fail2ban, Let's Encrypt)</li>
              <li>Networking & DNS (Pi-hole, Unbound)</li>
              <li>Monitoring & Logging (Grafana, Prometheus, Loki, cAdvisor)</li>
              <li>Self-Hosting Philosophy</li>
            </ul>
            <p class="text-sm italic mt-2">Acknowledges foundational Linux/Docker/Networking skills applicable to cloud
              environments (AWS/Azure/GCP).</p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2">Project Leadership & Management</h3>
            <ul class-="list-disc list-inside space-y-1 leading-relaxed">
              <li>Lead Frontend Developer (Open Source Project)</li>
              <li>Managing and Contributing (400+ commits)</li>
              <li>Leading Major Migrations</li>
              <li>Implementing Structured Project Management</li>
              <li>Initiating and Leading New Projects</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2">CI/CD & Deployment</h3>
            <ul class="list-disc list-inside space-y-1 leading-relaxed">
              <li>Automated Deployments (CircleCI)</li>
              <li>Deployment Strategies (PM2, SCP, rsync, Docker)</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2">General Technical Proficiency</h3>
            <ul class="list-disc list-inside space-y-1 leading-relaxed">
              <li>Linux Command Line</li>
              <li>Networking Fundamentals (DNS, Routing)</li>
              <li>Monorepo Management (pnpm)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card class="md:col-span-2 p-6">
        <CardHeader>
          <CardTitle class="text-2xl font-semibold">Key Projects</CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div>
            <h3 class="text-xl font-medium mb-2">Open Karaoke Studio</h3>
            <p class="leading-relaxed">AI-powered web application for creating karaoke tracks.</p>
            <p class="text-sm italic mt-1">Technologies: React 19, Python/Flask, Demucs, Docker, etc.</p>
            <p class="text-sm italic mt-1">Contribution: Initiated, designed, and built core functionality.</p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2">Create Mod Website</h3>
            <p class="leading-relaxed">Official website for a popular Minecraft mod.</p>
            <p class="text-sm italic mt-1">Technologies: React 19, TypeScript, Tailwind v4, Shadcn UI, etc.</p>
            <p class="text-sm italic mt-1">Contribution: Led frontend development, implemented type safety, handled
              migrations.</p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2">Minecraft Skin Merger</h3>
            <p class="leading-relaxed">Application for merging Minecraft skins.</p>
            <p class="text-sm italic mt-1">Technologies: React, Tailwind, Canvas API, Node.js backend.</p>
            <p class="text-sm italic mt-1">Contribution: Designed and built unique application demonstrating complex
              interactions.</p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2">Artist Portfolio</h3>
            <p class="leading-relaxed">Implemented a self-hosted CMS solution for a client.</p>
            <p class="text-sm italic mt-1">Technologies: Strapi JS.</p>
            <p class="text-sm italic mt-1">Contribution: Demonstrated ability to work with content management systems.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2">PowerLevel10K Catppuccin Theme</h3>
            <p class="leading-relaxed">Created a popular, niche theme for a ZSH prompt.</p>
            <p class="text-sm italic mt-1">Contribution: Demonstrates attention to detail and contributing to the
              developer tool ecosystem.</p>
          </div>
        </CardContent>
      </Card>

      <Card class="md:col-span-3 p-6">
        <CardHeader>
          <CardTitle class="text-2xl font-semibold">Education</CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <div>
            <h3 class="text-xl font-medium mb-1">College Diploma, Internet Applications and Web Development</h3>
            <p class="leading-relaxed">Graduated with Honors, Dean's List, 4.2 GPA. Graduated: 2018</p>
            <p class="leading-relaxed">Completed an online course focusing on Vue.js which provided the foundation for
              first professional role.</p>
          </div>
        </CardContent>
      </Card>

      <Card class="md:col-span-3 p-6">
        <CardHeader>
          <CardTitle class="text-2xl font-semibold">Philosophy, Values, & Personal Brand</CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div>
            <h3 class="text-xl font-medium mb-2">Core Philosophy: "Clean Solutions, Not Qck Fixes."</h3>
            <p class="leading-relaxed">Strong belief in building sustainable, maintainable code bases.</p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2">Problem-Solving</h3>
            <p class="leading-relaxed">Enjoys tackling challenging technical problems and finding the most effective
              solution.</p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2">Learning & Curiosity</h3>
            <p class="leading-relaxed">Constantly learning new technologies and skills. Known for having a broad base of
              knowledge.</p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2">UI/Aesthetic</h3>
            <p class="leading-relaxed">Drawn to clean, fun, and visually appealing designs.</p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2">Unique Perspective</h3>
            <p class="leading-relaxed">Life experiences outside of tech foster a creative, adaptable, and user-centered
              approach.</p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2">Work Style</h3>
            <p class="leading-relaxed">Described as "good vibes" and "chill," while internally driven by a desire for
              technical correctness.</p>
          </div>
        </CardContent>
      </Card>

      <Card class="md:col-span-6 p-6">
        <CardHeader>
          <CardTitle class="text-2xl font-semibold">Target Career Direction</CardTitle>
        </CardHeader>
        <CardContent class="text-lg leading-relaxed">
          <p>
            Primarily targeting Frontend Developer roles initially, leveraging extensive experience in UI, component
            development, Vue, and React. Also open to roles involving DevOps or a blend of frontend and infrastructure
            where acquired skills in Linux, Docker, and system management could provide unique value. Seeking a role
            where skills can be fully utilized, contribution is valued, and there's opportunity for continued learning
            and growth in a positive technical environment that aligns with a philosophy of building quality,
            sustainable software.
          </p>
        </CardContent>
      </Card>

    </div>
  </main>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui/card'
// Import UiButton if you plan to use it later, e.g., for a "Download Resume" button
// import { UiButton } from '~/components/ui/button'

useHead({
  title: 'About Spencer Frost',
  meta: [
    { name: 'description', content: 'Learn about Spencer Frost\'s web development career, skills, experience, and philosophy.' }
  ]
})
</script>

<style scoped>
/* Scoped styles can be added here if needed, but Tailwind utilities should suffice */
</style>