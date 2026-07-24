import Link from "next/link";
import { Header } from "@/components/header";
import { BackToTop } from "@/components/back-to-top";
import { ContactForm } from "@/components/contact-form";
import { Counter } from "@/components/counter";
import { Faq } from "@/components/faq";
import { Logo } from "@/components/logo";
import { Magnetic } from "@/components/magnetic";
import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { TiltCard } from "@/components/tilt-card";
import { faqs, marqueeItems, process, services, site, stats } from "@/lib/site";

const serviceIcons: Record<string, React.ReactNode> = {
  construction: (
    <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6M9 12h.01M15 12h.01" />
  ),
  mining: (
    <path d="M14 4l6 6M11 7l6 6-9 9H2v-6l9-9zM16 2l1.5 1.5M20.5 6L22 7.5" />
  ),
  consultancy: (
    <path d="M9 7h6M9 11h6M9 15h3M5 3h14a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" />
  ),
  trading: (
    <path d="M3 17l5-5 4 4 7-7M16 9h5v5M3 21h18" />
  ),
};

const whyUs = [
  {
    title: "End-to-End Capability",
    text: "From feasibility and design to execution, commissioning, and maintenance — a single accountable partner.",
    icon: <path d="M12 2l9 4.5v9L12 20l-9-4.5v-9L12 2zM12 2v18M3 6.5l9 4.5 9-4.5" />,
  },
  {
    title: "Multi-Sector Strength",
    text: "Construction, mining, advisory, and trading under one roof lets us de-risk and integrate complex projects.",
    icon: <path d="M3 3v18h18M7 15l4-5 3 3 5-7" />,
  },
  {
    title: "Public & Private Sector Ready",
    text: "Structured to serve government bodies, PSUs, institutions, and private enterprises alike.",
    icon: <path d="M4 21V9l8-5 8 5v12M9 21v-6h6v6M4 21h16" />,
  },
  {
    title: "Compliance First",
    text: "Statutory, environmental, and safety compliance built into every engagement from day one.",
    icon: <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3zM9 12l2 2 4-4" />,
  },
  {
    title: "Engineering-Led Decisions",
    text: "Civil engineers, surveyors, and technical consultants drive planning — not guesswork.",
    icon: <path d="M12 3a4 4 0 100 8 4 4 0 000-8zM5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />,
  },
  {
    title: "Transparent Engagement",
    text: "Clear scopes, honest timelines, and proactive communication at every stage.",
    icon: <path d="M21 11.5a8.5 8.5 0 01-12.3 7.6L3 20l1.2-5.4A8.5 8.5 0 1121 11.5zM8 11h8M8 14h5" />,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <Spotlight className="relative overflow-hidden bg-slate-900 text-white dark:bg-slate-950">
          <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-[0.06]" />
          <div aria-hidden="true" className="bg-noise absolute inset-0 opacity-[0.35] mix-blend-soft-light" />
          <div
            aria-hidden="true"
            className="animate-aurora absolute -top-24 right-[-6rem] h-96 w-96 rounded-full bg-amber-500/25 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="animate-float-slower absolute -bottom-32 left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="animate-float-slow absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-orange-500/10 blur-[90px]"
          />

          <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
            <Reveal className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-2 w-2 rounded-full bg-amber-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
              </span>
              Infrastructure · Mining · Consultancy · Trading
            </Reveal>

            <Reveal delay={80} as="h1" className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Building infrastructure.
              <br />
              <span className="text-gradient-amber text-shimmer">Powering industry.</span>
            </Reveal>

            <Reveal delay={160} as="p" className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {site.legalName}{" "}delivers civil and infrastructure projects,
              responsible mining operations, expert consultancy, and reliable
              trading &amp; supply — for government, public sector, and private
              clients across India.
            </Reveal>

            <Reveal delay={240} className="mt-10 flex flex-wrap gap-4">
              <Magnetic>
                <Link
                  href="#contact"
                  className="group relative inline-block overflow-hidden rounded-lg bg-amber-500 px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/20 transition-colors hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30"
                >
                  <span className="relative z-10">Discuss Your Project →</span>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="#services"
                  className="inline-block rounded-lg border border-slate-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-slate-400 hover:bg-slate-800"
                >
                  Explore Our Services
                </Link>
              </Magnetic>
            </Reveal>

            {/* Stats */}
            <Reveal delay={320} className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 border-t border-slate-700/60 pt-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </Spotlight>

        {/* Sector marquee */}
        <section aria-label="Sectors and materials we handle" className="border-b border-slate-200 bg-slate-50 py-6 dark:border-slate-800 dark:bg-slate-900/50">
          <Marquee items={marqueeItems} />
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400">
                What we do
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Four verticals. One accountable partner.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service, i) => (
                <Reveal key={service.id} delay={i * 90}>
                  <TiltCard className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors duration-300 hover:border-amber-200 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-amber-500/30">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-amber-400 to-amber-600 transition-transform duration-300 group-hover:scale-x-100"
                    />
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 transition-transform duration-300 group-hover:scale-110 dark:bg-slate-800">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {serviceIcons[service.id]}
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {service.summary}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {service.points.map((point) => (
                        <li key={point} className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mt-0.5 shrink-0"
                            aria-hidden="true"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 transition-all hover:gap-2.5 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                    >
                      Enquire about {service.title}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-20 border-y border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/50 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400">
                How we work
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                From first enquiry to delivered project
              </h2>
            </Reveal>
            <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              <div aria-hidden="true" className="absolute top-6 hidden h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700 lg:block" />
              {process.map((item, i) => (
                <Reveal key={item.step} delay={i * 90} className="relative">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-500 bg-white text-sm font-bold text-amber-600 shadow-sm dark:bg-slate-900 dark:text-amber-400">
                    {item.step}
                  </div>
                  <h3 className="mt-4 font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 relative overflow-hidden bg-slate-900 py-20 text-white dark:bg-slate-950 sm:py-24">
          <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-[0.05]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                About us
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                An integrated infrastructure &amp; resources company
              </h2>
              <p className="mt-6 leading-relaxed text-slate-300">
                {site.legalName} brings construction, mining, consultancy, and
                trading together as one integrated business. That breadth means
                we can take a project from feasibility study to finished asset —
                sourcing the materials, executing the works, and advising on
                policy and implementation along the way.
              </p>
              <p className="mt-4 leading-relaxed text-slate-300">
                We work with government bodies, public sector undertakings,
                institutions, and private enterprises, and we hold ourselves to
                the same standard on every engagement: engineering rigour,
                statutory compliance, and delivery you can plan around.
              </p>
              <Link
                href="#contact"
                className="mt-8 inline-block rounded-lg bg-amber-500 px-7 py-3.5 text-sm font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-amber-400"
              >
                Partner With Us
              </Link>
            </Reveal>
            <div className="grid content-center gap-4">
              {[
                {
                  k: "Integrated delivery",
                  v: "Construction, mining, advisory, and trading under one accountable entity.",
                },
                {
                  k: "Sectors served",
                  v: "Roads, bridges, buildings, townships, industrial parks, utilities, and public infrastructure.",
                },
                {
                  k: "Resources handled",
                  v: "Coal, iron ore, bauxite, limestone, stone aggregates, sand, and allied minerals.",
                },
                {
                  k: "Clients we serve",
                  v: "Government, PSUs, institutions, and private enterprises across India.",
                },
              ].map((row, i) => (
                <Reveal
                  key={row.k}
                  delay={i * 80}
                  className="group rounded-xl border border-slate-700/80 bg-slate-800/60 p-5 transition-colors duration-300 hover:border-amber-500/40 hover:bg-slate-800 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:bg-slate-900"
                >
                  <p className="text-sm font-bold text-amber-400">{row.k}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{row.v}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why us — bento grid */}
        <section id="why-us" className="scroll-mt-20 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400">
                Why Agastya Katyayani
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Built to deliver, structured to last
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyUs.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 70}
                  className={`group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:hover:border-amber-500/30 dark:hover:bg-slate-800/80 ${
                    i === 0 || i === 3 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-slate-900 dark:text-amber-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 border-t border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/50 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <Reveal className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400">
                Common questions
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Before you get in touch
              </h2>
            </Reveal>
            <Reveal delay={100} className="mt-10">
              <Faq />
            </Reveal>
          </div>
        </section>

        {/* CTA band */}
        <section className="relative overflow-hidden bg-gradient-to-r from-amber-500 via-amber-500 to-amber-400">
          <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-[0.08]" />
          <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Have a project or requirement in mind?
              </h2>
              <p className="mt-2 text-slate-800">
                Tell us what you need — we&apos;ll respond with a clear, practical next step.
              </p>
            </div>
            <Magnetic>
              <Link
                href="#contact"
                className="inline-block shrink-0 rounded-lg bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 hover:shadow-xl"
              >
                Get in Touch
              </Link>
            </Magnetic>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Let&apos;s talk about your project
              </h2>
              <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">
                Whether it&apos;s an infrastructure tender, a mineral supply
                requirement, an advisory mandate, or a trading enquiry — write
                to us and we&apos;ll get back to you promptly.
              </p>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Email us directly</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block break-all text-lg font-bold text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                >
                  {site.email}
                </a>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {site.legalName}
                  <br />
                  India
                </p>
              </div>
            </Reveal>
            <Reveal delay={100} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:col-span-3">
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 text-slate-400 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <div className="max-w-sm">
              <Logo dark />
              <p className="mt-4 text-sm leading-relaxed">
                Construction &amp; infrastructure, mining &amp; minerals,
                consultancy &amp; advisory, and trading &amp; supply — delivered
                with engineering rigour and compliance-first execution.
              </p>
            </div>
            <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
              {[
                { href: "#services", label: "Services" },
                { href: "#process", label: "Process" },
                { href: "#about", label: "About" },
                { href: "#why-us", label: "Why Us" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
              <a href={`mailto:${site.email}`} className="col-span-2 mt-2 font-medium text-amber-400 transition-colors hover:text-amber-300">
                {site.email}
              </a>
            </nav>
          </div>
          <p className="mt-10 border-t border-slate-800 pt-6 text-xs">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
        </div>
      </footer>

      <BackToTop />

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-slate-200 bg-white/95 p-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
        <a
          href={`mailto:${site.email}`}
          className="flex-1 rounded-lg border border-slate-300 py-2.5 text-center text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
        >
          Email Us
        </a>
        <Link
          href="#contact"
          className="flex-1 rounded-lg bg-amber-500 py-2.5 text-center text-sm font-semibold text-slate-900"
        >
          Get a Quote
        </Link>
      </div>
      <div aria-hidden="true" className="h-16 md:hidden" />
    </div>
  );
}
