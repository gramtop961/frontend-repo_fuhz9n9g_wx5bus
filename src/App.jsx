import { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Mail, Server, Database, Cloud, Shield, Sparkles, ArrowRight } from 'lucide-react'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/15 border border-white/20 px-3 py-1 text-sm text-white/90 shadow-sm shadow-blue-500/10">
      <Sparkles className="h-3.5 w-3.5 text-sky-200" />
      {children}
    </span>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="text-xs uppercase tracking-widest text-sky-200/90 mb-2">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-sky-300 via-indigo-200 to-fuchsia-200 bg-clip-text text-transparent drop-shadow-[0_1px_10px_rgba(56,189,248,0.25)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-100/80">{subtitle}</p>
      )}
    </div>
  )
}

export default function App() {
  const skills = useMemo(
    () => [
      'FastAPI',
      'Python',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'AWS',
      'CI/CD',
      'gRPC',
      'REST APIs',
      'Auth & OAuth2',
      'Distributed Systems',
    ],
    []
  )

  const projects = [
    {
      title: 'Realtime Analytics Pipeline',
      desc: 'Stream processing with Kafka, FastAPI ingestion, and OLAP queries — built for low latency insights.',
      icon: <Server className="h-6 w-6 text-sky-300" />,
      tags: ['FastAPI', 'Kafka', 'ClickHouse', 'Docker'],
    },
    {
      title: 'Secure User Service',
      desc: 'JWT-based authentication, RBAC, and rate-limited endpoints with audit trails.',
      icon: <Shield className="h-6 w-6 text-sky-300" />,
      tags: ['FastAPI', 'PostgreSQL', 'Auth', 'Redis'],
    },
    {
      title: 'Cloud-native Task Runner',
      desc: 'Containerized workers, job queues, and autoscaling on Kubernetes.',
      icon: <Cloud className="h-6 w-6 text-sky-300" />,
      tags: ['K8s', 'Celery', 'RabbitMQ', 'Helm'],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1f] via-[#0b1130] to-[#0d1238] text-white">
      {/* Top Nav */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between px-4 py-3">
              <a href="#" className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-300 via-indigo-300 to-fuchsia-300 shadow-inner flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-indigo-700" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-indigo-200 via-sky-200 to-fuchsia-200 bg-clip-text text-transparent">
                  Blue Starry Backend
                </span>
              </a>

              <nav className="hidden sm:flex items-center gap-6">
                <a href="#about" className="text-slate-100/90 hover:text-white transition-colors">About</a>
                <a href="#skills" className="text-slate-100/90 hover:text-white transition-colors">Skills</a>
                <a href="#projects" className="text-slate-100/90 hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="text-slate-100/90 hover:text-white transition-colors">Contact</a>
                <div className="h-6 w-px bg-white/20" />
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-100/80 hover:text-white">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-100/80 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
              </nav>

              <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500/90 to-indigo-600/90 hover:from-sky-400 hover:to-indigo-500 text-white px-4 py-2 shadow shadow-indigo-700/20">
                <Mail className="h-4 w-4" />
                Hire me
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <section className="relative pt-28 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/0CT1-dbOQTa-XJKt/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1f]/40 via-[#0b1130]/50 to-[#0d1238]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge>Pastel anime • Blue starry night</Badge>
            <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Building reliable, scalable backends with a cosmic touch
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-100/85">
              I design and ship robust APIs, data pipelines, and cloud-native services — wrapped in clean architecture and observability.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 px-5 py-3 font-semibold shadow-lg shadow-sky-500/20"
              >
                View projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 px-5 py-3"
              >
                Contact
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 text-slate-100/80">
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-sky-300" />
                <span>Databases</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="h-5 w-5 text-sky-300" />
                <span>APIs</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="h-5 w-5 text-sky-300" />
                <span>Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="About"
            title="Back-end first, craftsmanship always"
            subtitle="I love designing systems that are simple to operate, secure by default, and delightful to extend."
          />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/10 border border-white/15 p-6 backdrop-blur">
              <Server className="h-6 w-6 text-sky-300" />
              <h3 className="mt-3 font-semibold">API Design</h3>
              <p className="mt-2 text-slate-100/80">Versioned, well-documented endpoints with strong typing and validation.</p>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/15 p-6 backdrop-blur">
              <Database className="h-6 w-6 text-sky-300" />
              <h3 className="mt-3 font-semibold">Data & Storage</h3>
              <p className="mt-2 text-slate-100/80">From relational models to distributed stores, tuned for performance.</p>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/15 p-6 backdrop-blur">
              <Shield className="h-6 w-6 text-sky-300" />
              <h3 className="mt-3 font-semibold">Security</h3>
              <p className="mt-2 text-slate-100/80">Auth, RBAC, secrets, and defense-in-depth as first principles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Skills" title="Stack I work with" />
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Projects" title="Selected work" />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="group rounded-2xl bg-white/10 border border-white/15 p-6 backdrop-blur hover:bg-white/15 transition">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <h3 className="font-semibold">{p.title}</h3>
                </div>
                <p className="mt-3 text-slate-100/80">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-black/30 border border-white/15 px-2 py-1 text-slate-100/80">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Contact" title="Let’s build something stellar" />
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white/10 border border-white/15 p-6 backdrop-blur">
              <h3 className="font-semibold">Say hello</h3>
              <p className="mt-2 text-slate-100/80">Whether you need an MVP backend, a migration plan, or production hardening — I can help.</p>
              <div className="mt-6 flex items-center gap-3">
                <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 px-5 py-3 font-semibold shadow-lg shadow-sky-500/20">
                  <Mail className="h-4 w-4" />
                  you@example.com
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 px-5 py-3">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 px-5 py-3">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/15 p-6 backdrop-blur">
              <h3 className="font-semibold">Availability</h3>
              <ul className="mt-4 space-y-3 text-slate-100/85">
                <li>• Freelance & contract work</li>
                <li>• Backend architecture reviews</li>
                <li>• API design and documentation</li>
                <li>• Scaling & observability strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-400">
        © {new Date().getFullYear()} Blue Starry Backend — Crafted with pastel anime vibes
      </footer>
    </div>
  )
}
