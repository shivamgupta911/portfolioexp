import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react"

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
  },
  {
    title: "Cyber Job Simulation",
    issuer: "Deloitte",
  },
  {
    title: "Mastering Generative AI and ChatGPT",
    issuer: "GeeksforGeeks",
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

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium tracking-wide">SKG</span>
            <div className="flex items-center gap-6">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experience</a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm text-muted-foreground mb-4">Software Engineer</p>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-balance">
            Shivam Kumar Gupta
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Building robust, scalable applications with modern web technologies. 
            Currently pursuing B.Tech at MMMUT, Gorakhpur with a focus on full-stack development.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <a 
              href="https://github.com/shivamgupta911" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/shivam-gupta573b18324" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:shivamkgupta911@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-t border-border/40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-12">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a software engineer passionate about creating elegant solutions to complex problems. 
                My work spans across full-stack development, with expertise in modern JavaScript frameworks 
                and a strong foundation in computer science fundamentals.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not coding, I contribute to The Editorial Board at my university and continuously 
                explore emerging technologies in cloud computing and AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 border-t border-border/40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-12">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="grid md:grid-cols-[200px_1fr] gap-4">
                <div className="text-sm text-muted-foreground">
                  {edu.period}
                </div>
                <div>
                  <h3 className="font-medium mb-1">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-accent mt-2">{edu.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 border-t border-border/40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="grid md:grid-cols-[200px_1fr] gap-4">
                <div className="text-sm text-muted-foreground">
                  {exp.period}
                </div>
                <div>
                  <h3 className="font-medium mb-1">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.organization}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 border-t border-border/40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-12">Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-medium group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{project.type}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground">
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
      <section id="skills" className="py-20 px-6 border-t border-border/40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-medium mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="text-sm text-muted-foreground">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="text-sm text-muted-foreground">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="text-sm text-muted-foreground">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 border-t border-border/40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-12">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="group">
                <h3 className="font-medium text-sm mb-1 group-hover:text-accent transition-colors">{cert.title}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section id="learning" className="py-20 px-6 border-t border-border/40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-12">Learning Journey</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-medium mb-4">Currently Exploring</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Cloud Architecture & AWS Services</li>
                <li>Generative AI & Large Language Models</li>
                <li>System Design Patterns</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Relevant Coursework</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Data Structures & Algorithms</li>
                <li>Database Management Systems</li>
                <li>Computer Networks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 border-t border-border/40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-12">Contact</h2>
          <p className="text-muted-foreground mb-8 max-w-lg">
            Interested in collaborating or have a question? Feel free to reach out.
          </p>
          <div className="space-y-4">
            <a 
              href="mailto:shivamkgupta911@gmail.com" 
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              shivamkgupta911@gmail.com
            </a>
            <a 
              href="tel:+918787010548" 
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              +91 87870 10548
            </a>
            <a 
              href="https://github.com/shivamgupta911" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              github.com/shivamgupta911
            </a>
            <a 
              href="https://linkedin.com/in/shivam-gupta573b18324" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/40">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Shivam Kumar Gupta. Built with Next.js.
          </p>
        </div>
      </footer>
    </main>
  )
}
