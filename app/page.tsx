import { Github, Linkedin, Mail, Phone, ExternalLink, MapPin, GraduationCap, Briefcase, Award, BookOpen, Code, ChevronRight } from "lucide-react"

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
  
]

const skills = {
  languages: ["C", "C++", "Java", "HTML", "CSS", "JavaScript", "TypeScript", "Python"],
  frameworks: ["Next.js", "React", "Node.js", "Tailwind CSS"],
  tools: ["Git", "GitHub", "Render", "Vercel"],
}

const certifications = [
  {
    title: "AWS - Solutions Architecture Simulation",
    issuer: "Amazon Web Services",
    logo: "/aws.svg",
    date: "Jul 2025",
    skills: ["Cloud Architecture Design", "AWS Services"],
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Deloitte - Cyber Job Simulation",
    issuer: "Forage",
    logo: "/deloitte.png",
    date: "Jul 2025",
    skills: ["Cybersecurity", "Threat & Vulnerability Management"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Mastering Generative AI and ChatGPT",
    issuer: "GeeksforGeeks",
     logo: "/gfg.svg",
    date: "Aug 2025",
    skills: ["Prompt Engineering", "Artificial Intelligence", "Machine Learning"],
    color: "from-purple-500 to-pink-500",
  },
]

const experience = [

  { role: "Web Developer Intern",
    organization: "Zidio Development",
    period: "Jun 2026 - Present",
    location: "Remote",
    description:
      "Developing responsive web applications using React.js, modern frontend technologies, and industry-standard development practices while collaborating in a remote team.",
    skills: ["React.js", "Next.js", "Web Development","Web Infrastructure"],
    logo: "/zidio.png",
    certificate: "/certificates/zidio-offer-letter.pdf",
    button: "View Offer Letter",
  },
  {
    role: "AI & Drone Technology Intern",
    organization: "Flytium Drones",
    period: "May 2026 - Jun 2026",
    location: "Hybrid",
    description:
      "Worked on AI-powered drone applications and explored intelligent automation, computer vision concepts, and real-world drone technology.",
    skills: [
      "Artificial Intelligence",
      "Computer Vision",
      "Drone Technology",
    ],
    logo: "/flytium.png",
    certificate: "/certificates/flytium-certificate.pdf",
    button: "View Certificate",
  },
  {
    role: "Treasurer",
    organization: "The Editorial Board",
    logo: "/EDB.png",
    period: "May 2025 - Present",
    description: "Contributing to editorial initiatives and content management for university publications.",
  },
]

const openSourceContributions = [
  {
    title: "GirlScript Summer of Code (GSSoC)",
    role: "Open Source Contributor",
    period: "October 2024",
    description: "Contributed to open source projects as part of the GirlScript Summer of Code extended program. Collaborated with maintainers and other contributors to improve codebases, fix bugs, and add new features.",
    tech: ["Open Source", "Git", "Collaboration", "Code Review"],
  },
]

const achievements = [
  
  "Active Contributor to Open Source communities",
  "Completed multiple Industry Certifications",
]

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-[#f0f0f5]">
      {/* Gradient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2a3a] bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SKG
            </span>
            <div className="hidden md:flex items-center gap-8">
              {["About", "Education", "Experience", "Projects", "Contact"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm text-[#8a8a9a] hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Available for opportunities
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-white via-white to-[#8a8a9a] bg-clip-text text-transparent">
                  Shivam Kumar
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Gupta 
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[#8a8a9a] mb-4">
                Aspiring Software Developer
              </p>
              <p className="text-base text-[#6a6a7a] leading-relaxed max-w-lg mb-8">
                Building web applications, exploring AI, and sharpening problem-solving skills through DSA.
                B.Tech ECE student at MMMUT Gorakhpur.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#8a8a9a]">
                <MapPin className="h-4 w-4 text-cyan-400" />
                Gorakhpur, India
              </div>
            </div>
            
            {/* Social Links Card */}
            <div className="lg:self-center">
              <div className="p-6 rounded-2xl bg-[#12121a] border border-[#2a2a3a] hover:border-cyan-500/30 transition-all duration-300">
                <p className="text-sm text-[#8a8a9a] mb-4">Connect with me</p>
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://github.com/shivamgupta911" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#1a1a24] hover:bg-[#2a2a3a] border border-transparent hover:border-cyan-500/30 transition-all duration-300 group"
                  >
                    <Github className="h-5 w-5 text-[#8a8a9a] group-hover:text-cyan-400 transition-colors" />
                    <span className="text-sm text-[#8a8a9a] group-hover:text-white transition-colors">GitHub</span>
                    <ChevronRight className="h-4 w-4 text-[#4a4a5a] group-hover:text-cyan-400 ml-auto transition-colors" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/shivam-gupta573b18324" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#1a1a24] hover:bg-[#2a2a3a] border border-transparent hover:border-cyan-500/30 transition-all duration-300 group"
                  >
                    <Linkedin className="h-5 w-5 text-[#8a8a9a] group-hover:text-cyan-400 transition-colors" />
                    <span className="text-sm text-[#8a8a9a] group-hover:text-white transition-colors">LinkedIn</span>
                    <ChevronRight className="h-4 w-4 text-[#4a4a5a] group-hover:text-cyan-400 ml-auto transition-colors" />
                  </a>
                  <a 
                    href="mailto:shivamkgupta911@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#1a1a24] hover:bg-[#2a2a3a] border border-transparent hover:border-cyan-500/30 transition-all duration-300 group"
                  >
                    <Mail className="h-5 w-5 text-[#8a8a9a] group-hover:text-cyan-400 transition-colors" />
                    <span className="text-sm text-[#8a8a9a] group-hover:text-white transition-colors">Email</span>
                    <ChevronRight className="h-4 w-4 text-[#4a4a5a] group-hover:text-cyan-400 ml-auto transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <Code className="h-5 w-5 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-semibold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-[#12121a] border border-[#2a2a3a] hover:border-cyan-500/30 transition-all duration-300">
              <p className="text-[#a0a0b0] leading-relaxed text-lg">
                I&apos;m a Aspiring software Developer passionate about creating elegant solutions to complex problems. 
                My work spans across full-stack development, with expertise in modern JavaScript frameworks 
                and a strong foundation in computer science fundamentals.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#12121a] border border-[#2a2a3a] hover:border-cyan-500/30 transition-all duration-300">
              <p className="text-[#a0a0b0] leading-relaxed text-lg">
                Alongside my academic journey, I serve as an Executive Member of The Editorial Board, which helps me develop strong techno-managerial, organizational, and interpersonal skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <GraduationCap className="h-5 w-5 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl bg-[#12121a] border border-[#2a2a3a] hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-cyan-400 transition-colors">{edu.degree}</h3>
                    <p className="text-[#8a8a9a]">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
                      {edu.grade}
                    </span>
                    <span className="text-sm text-[#6a6a7a] whitespace-nowrap">{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <Briefcase className="h-5 w-5 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-semibold">Experience</h2>
          </div>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl bg-[#12121a] border border-[#2a2a3a] hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{exp.role}</h3>
                    <p className="text-cyan-400 font-medium">{exp.organization}</p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-[#1a1a24] border border-[#2a2a3a] text-sm text-[#8a8a9a] whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[#a0a0b0] leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Contributions Section */}
      <section id="projects" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <Github className="h-5 w-5 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-semibold">Open Source Contributions</h2>
          </div>
          <div className="space-y-6">
            {openSourceContributions.map((contribution, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-[#12121a] border border-[#2a2a3a] hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-xl mb-2 group-hover:text-cyan-400 transition-colors">
                      {contribution.title}
                    </h3>
                    <span className="text-sm text-cyan-400/80 font-medium">{contribution.role}</span>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-[#1a1a24] border border-[#2a2a3a] text-sm text-[#8a8a9a] whitespace-nowrap">
                    {contribution.period}
                  </span>
                </div>
                <p className="text-[#a0a0b0] leading-relaxed mb-6">{contribution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {contribution.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 text-sm bg-[#1a1a24] border border-[#2a2a3a] rounded-lg text-[#a0a0b0] hover:border-cyan-500/30 hover:text-cyan-400 transition-all"
                    >
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
      <section id="skills" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <Code className="h-5 w-5 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-semibold">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#12121a] border border-[#2a2a3a] hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="font-semibold text-lg mb-4 text-cyan-400">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 text-sm bg-[#1a1a24] border border-[#2a2a3a] rounded-lg text-[#d0d0e0] hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-[#12121a] border border-[#2a2a3a] hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="font-semibold text-lg mb-4 text-cyan-400">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 text-sm bg-[#1a1a24] border border-[#2a2a3a] rounded-lg text-[#d0d0e0] hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-[#12121a] border border-[#2a2a3a] hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="font-semibold text-lg mb-4 text-cyan-400">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 text-sm bg-[#1a1a24] border border-[#2a2a3a] rounded-lg text-[#d0d0e0] hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <Award className="h-5 w-5 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-semibold">Achievements</h2>
          </div>
          <div className="p-8 rounded-2xl bg-[#12121a] border border-[#2a2a3a]">
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shrink-0" />
                  <span className="text-[#a0a0b0] text-lg">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <Award className="h-5 w-5 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-semibold">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="group p-6 rounded-2xl bg-[#12121a] border border-[#2a2a3a] hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 flex items-center justify-center mb-4`}>
  <img
    src={cert.logo}
    alt={cert.issuer}
    className="h-14 w-14 object-contain"
  />
</div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
                <p className="text-sm text-[#8a8a9a] mb-1">{cert.issuer}</p>
                <p className="text-xs text-[#6a6a7a] mb-4">{cert.date}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-1 text-xs bg-[#1a1a24] border border-[#2a2a3a] rounded text-[#a0a0b0]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section id="learning" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <BookOpen className="h-5 w-5 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-semibold">Learning Journey</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-[#12121a] border border-[#2a2a3a] hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="font-semibold text-lg mb-6 text-cyan-400">Currently Exploring</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-[#a0a0b0]">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  Cloud Architecture & AWS Services
                </li>
                <li className="flex items-center gap-4 text-[#a0a0b0]">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  Generative AI & Large Language Models
                </li>
                <li className="flex items-center gap-4 text-[#a0a0b0]">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  System Design Patterns
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-[#12121a] border border-[#2a2a3a] hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="font-semibold text-lg mb-6 text-cyan-400">Professional Development</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-[#a0a0b0]">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  AWS Solutions Architecture
                </li>
                <li className="flex items-center gap-4 text-[#a0a0b0]">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  Cybersecurity & Threat Management
                </li>
                <li className="flex items-center gap-4 text-[#a0a0b0]">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  Generative AI & Prompt Engineering
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <Mail className="h-5 w-5 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-semibold">Get In Touch</h2>
          </div>
          <div className="p-8 rounded-2xl bg-[#12121a] border border-[#2a2a3a]">
            <p className="text-xl text-[#a0a0b0] mb-8 max-w-lg">
              Interested in collaborating or have a question? Feel free to reach out.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="mailto:shivamkgupta911@gmail.com" 
                className="flex items-center gap-4 p-5 rounded-xl bg-[#1a1a24] border border-[#2a2a3a] hover:border-cyan-500/30 hover:bg-[#1a1a24]/80 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <Mail className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-[#6a6a7a]">Email</p>
                  <p className="font-medium text-[#d0d0e0] group-hover:text-cyan-400 transition-colors">shivamkgupta911@gmail.com</p>
                </div>
              </a>
              <a 
                href="tel:+918787010548" 
                className="flex items-center gap-4 p-5 rounded-xl bg-[#1a1a24] border border-[#2a2a3a] hover:border-cyan-500/30 hover:bg-[#1a1a24]/80 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <Phone className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-[#6a6a7a]">Phone</p>
                  <p className="font-medium text-[#d0d0e0] group-hover:text-cyan-400 transition-colors">+91 87870 10548</p>
                </div>
              </a>
              <a 
                href="https://github.com/shivamgupta911" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-[#1a1a24] border border-[#2a2a3a] hover:border-cyan-500/30 hover:bg-[#1a1a24]/80 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <Github className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-[#6a6a7a]">GitHub</p>
                  <p className="font-medium text-[#d0d0e0] group-hover:text-cyan-400 transition-colors">shivamgupta911</p>
                </div>
              </a>
              <a 
                href="https://linkedin.com/in/shivam-gupta573b18324" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-[#1a1a24] border border-[#2a2a3a] hover:border-cyan-500/30 hover:bg-[#1a1a24]/80 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <Linkedin className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-[#6a6a7a]">LinkedIn</p>
                  <p className="font-medium text-[#d0d0e0] group-hover:text-cyan-400 transition-colors">Shivam Gupta</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#2a2a3a]">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#6a6a7a]">
              &copy; 2025 Shivam Kumar Gupta. All rights reserved.
            </p>
            <p className="text-sm text-[#6a6a7a]">
              Built with <span className="text-cyan-400">Next.js</span> & <span className="text-cyan-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
