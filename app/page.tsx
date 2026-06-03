import { Github, Linkedin, Mail, Phone, ExternalLink, MapPin, GraduationCap, Briefcase, Award, BookOpen, Code } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    institution: "MMMUT, Gorakhpur",
    period: "2024 - 2028",
    grade: "8.2 CGPA",
  },
  {
    degree: "Class XII (ISC)",
    institution: "Sacred Heart School, Ballia",
    period: "2023",
    grade: "93.0%",
  },
  {
    degree: "Class X (ICSE)",
    institution: "Sacred Heart School, Ballia",
    period: "2021",
    grade: "95.0%",
  },
]

const skills = {
  languages: ["C", "C++", "Java", "HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Python"],
  frameworks: ["Next.js", "React", "Node.js", "Tailwind CSS"],
  tools: ["Git", "GitHub", "Render", "Vercel"],
}

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "☁️",
  },
  {
    title: "Cyber Job Simulation",
    issuer: "Deloitte",
    icon: "🔐",
  },
  {
    title: "Mastering Generative AI and ChatGPT",
    issuer: "GeeksforGeeks",
    icon: "🤖",
  },
]

const experience = [
  {
    role: "Executive Member",
    organization: "The Editorial Board",
    period: "May 2025 - Present",
    description: "Contributing to editorial initiatives and content management for university publications.",
  },
]

const projects = [
  {
    title: "College Resource Management System",
    type: "Full Stack",
    description: "MERN-based college management system enabling students to access notes, track announcements, and upload resources.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
]

const achievements = [
  "Top performer in Data Structures & Algorithms coursework",
  "Active contributor to university tech community",
  "Completed multiple industry certifications",
]

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold tracking-tight">SKG</span>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experience</a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for opportunities
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                Shivam Kumar<br />
                <span className="text-muted-foreground">Gupta</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                Software Engineer
              </p>
              <p className="text-base text-muted-foreground/80 leading-relaxed max-w-lg">
                Building robust, scalable applications with modern web technologies. 
                Currently pursuing B.Tech at MMMUT, Gorakhpur.
              </p>
              <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Gorakhpur, India
              </div>
            </div>
            <div className="flex md:flex-col items-center gap-4">
              <a 
                href="https://github.com/shivamgupta911" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border hover:border-accent/50 hover:bg-card/80 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/shivam-gupta573b18324" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border hover:border-accent/50 hover:bg-card/80 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:shivamkgupta911@gmail.com"
                className="p-3 rounded-lg bg-card border border-border hover:border-accent/50 hover:bg-card/80 transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
              <Code className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold">About</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a software engineer passionate about creating elegant solutions to complex problems. 
                My work spans across full-stack development, with expertise in modern JavaScript frameworks 
                and a strong foundation in computer science fundamentals.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not coding, I contribute to The Editorial Board at my university and continuously 
                explore emerging technologies in cloud computing and AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
              <GraduationCap className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border hover:border-border/80 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-4 md:text-right">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      {edu.grade}
                    </span>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
              <Briefcase className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold">Experience</h2>
          </div>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{exp.role}</h3>
                    <p className="text-accent">{exp.organization}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
              <ExternalLink className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold">Projects</h2>
          </div>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="group p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{project.type}</span>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm bg-secondary rounded-lg text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
              <Code className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-secondary rounded-lg text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-secondary rounded-lg text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-secondary rounded-lg text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
              <Award className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold">Achievements</h2>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
              <Award className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors">
                <div className="text-3xl mb-4">{cert.icon}</div>
                <h3 className="font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section id="learning" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
              <BookOpen className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold">Learning Journey</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-4">Currently Exploring</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Cloud Architecture & AWS Services
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Generative AI & Large Language Models
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  System Design Patterns
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-4">Relevant Coursework</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Data Structures & Algorithms
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Database Management Systems
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Computer Networks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
              <Mail className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold">Contact</h2>
          </div>
          <div className="p-8 rounded-xl bg-card border border-border">
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Interested in collaborating or have a question? Feel free to reach out.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="mailto:shivamkgupta911@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">shivamkgupta911@gmail.com</p>
                </div>
              </a>
              <a 
                href="tel:+918787010548" 
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 87870 10548</p>
                </div>
              </a>
              <a 
                href="https://github.com/shivamgupta911" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Github className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium">shivamgupta911</p>
                </div>
              </a>
              <a 
                href="https://linkedin.com/in/shivam-gupta573b18324" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Linkedin className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">Shivam Gupta</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Shivam Kumar Gupta
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  )
}
