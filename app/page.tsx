import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Mail, Download } from "lucide-react";
import ProjectCard from "@/components/project-card";
import SkillsSection from "@/components/skills-section";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative py-20 md:py-28 lg:py-36 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(var(--primary-rgb),0.12),transparent)]" />
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="px-3 py-1 text-sm rounded-full border-primary/20 bg-primary/10 text-primary"
                >
                  Available for work
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Hi, I'm <span className="text-primary">Rodel</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  A passionate frontend developer crafting beautiful web
                  experiences
                </p>
              </div>
              <p className="text-muted-foreground max-w-[600px]">
                I specialize in building modern, responsive websites and
                applications using the latest technologies. With a keen eye for
                design and a love for clean code, I create digital experiences
                that are both functional and visually appealing.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="#projects">
                    View my work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Contact me</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/resume.pdf" target="_blank">
                    <Download className="mr-2 h-4 w-4" /> Resume
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-4 border-background shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                About Me
              </h2>
              <p className="text-muted-foreground">
                I'm a frontend developer with a passion for creating intuitive
                and engaging user experiences. With 5 years of experience in web
                development, I've worked on a variety of projects from small
                business websites to complex web applications.
              </p>
              <p className="text-muted-foreground">
                My journey in web development began during my computer science
                studies, where I discovered my love for the intersection of
                technology and design. Since then, I've been constantly learning
                and improving my skills to stay at the forefront of web
                development trends.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me hiking in the mountains,
                experimenting with photography, or exploring new coffee shops in
                the city.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">
                  BSc in Computer Science, University of Technology
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-2">Experience</h3>
                <p className="text-sm text-muted-foreground">
                  5+ years of professional web development experience
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">
                  San Francisco, California
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-2">Interests</h3>
                <p className="text-sm text-muted-foreground">
                  UI/UX Design, Photography, Hiking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-[800px]">
              Here are some of the projects I've worked on. Each project
              represents a unique challenge and showcases different aspects of
              my skills and expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-featured e-commerce platform built with Next.js and Stripe integration."
              image="/placeholder.svg?height=400&width=600"
              tags={["Next.js", "React", "Stripe", "Tailwind CSS"]}
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Task Management App"
              description="A drag-and-drop task management application with real-time updates."
              image="/placeholder.svg?height=400&width=600"
              tags={["React", "Firebase", "DnD", "Material UI"]}
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A responsive portfolio website built with Next.js and Tailwind CSS."
              image="/placeholder.svg?height=400&width=600"
              tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Weather Dashboard"
              description="A weather dashboard that displays current and forecasted weather data."
              image="/placeholder.svg?height=400&width=600"
              tags={["React", "OpenWeather API", "Chart.js"]}
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Recipe Finder"
              description="A recipe finder application that allows users to search for recipes by ingredients."
              image="/placeholder.svg?height=400&width=600"
              tags={["Next.js", "Spoonacular API", "Tailwind CSS"]}
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Fitness Tracker"
              description="A fitness tracking application that allows users to track their workouts and progress."
              image="/placeholder.svg?height=400&width=600"
              tags={["React", "Chart.js", "Firebase"]}
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="outline" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="mr-2 h-4 w-4" /> View more on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground max-w-[800px]">
              I've worked with a variety of technologies and tools throughout my
              career. Here are some of the key skills I bring to the table.
            </p>
          </div>
          <SkillsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Get In Touch
              </h2>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                using the contact form or through my social media profiles.
              </p>
              <div className="flex flex-col space-y-3 mt-6">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <a
                    href="mailto:hello@example.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 text-primary mr-3" />
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/username
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
