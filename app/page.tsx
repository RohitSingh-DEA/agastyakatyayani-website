import Link from "next/link";
import { Header } from "@/components/header";
import { ContactForm } from "@/components/contact-form";
import { Logo } from "@/components/logo";
import { services, site } from "@/lib/site";

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
  },
  {
    title: "Multi-Sector Strength",
    text: "Construction, mining, advisory, and trading under one roof lets us de-risk and integrate complex projects.",
  },
  {
    title: "Public & Private Sector Ready",
    text: "Structured to serve government bodies, PSUs, institutions, and private enterprises alike.",
  },
  {
    title: "Compliance First",
    text: "Statutory, environmental, and safety compliance built into every engagement from day one.",
  },
  {
    title: "Engineering-Led Decisions",
    text: "Civil engineers, surveyors, and technical consultants drive planning — not guesswork.",
  },
  {
    title: "Transparent Engagement",
    text: "Clear scopes, honest timelines, and proactive communication at every stage.",
  },
];

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-900 text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              Infrastructure · Mining · Consultancy · Trading
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Building infrastructure.
              <br />
              Powering industry.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {site.legalName}{" "}delivers civil and infrastructure projects,
              responsible mining operations, expert consultancy, and reliable
              trading &amp; supply — for government, public sector, and private
              clients across India.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="rounded-lg bg-amber-500 px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/20 transition-colors hover:bg-amber-400"
              >
                Discuss Your Project
              </Link>
              <Link
                href="#services"
                className="rounded-lg border border-slate-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-slate-400 hover:bg-slate-800"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Capability strip */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 py-8 text-center sm:px-6 md:grid-cols-4">
            {[
              "Civil & Structural Works",
              "Minerals & Aggregates",
              "Project Advisory",
              "Import · Export · Supply",
            ].map((item) => (
              <div key={item} className="px-3 py-2 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              What we do
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Four verticals. One accountable partner.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.id}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900">
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
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.summary}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm text-slate-700">
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
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700"
                  >
                    Enquire about {service.title}
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 bg-slate-900 py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div>
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
                className="mt-8 inline-block rounded-lg bg-amber-500 px-7 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400"
              >
                Partner With Us
              </Link>
            </div>
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
              ].map((row) => (
                <div
                  key={row.k}
                  className="rounded-xl border border-slate-700/80 bg-slate-800/60 p-5"
                >
                  <p className="text-sm font-bold text-amber-400">{row.k}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{row.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section id="why-us" className="scroll-mt-20 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              Why Agastya Katyayani
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built to deliver, structured to last
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyUs.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-amber-500">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Have a project or requirement in mind?
              </h2>
              <p className="mt-2 text-slate-800">
                Tell us what you need — we&apos;ll respond with a clear, practical next step.
              </p>
            </div>
            <Link
              href="#contact"
              className="shrink-0 rounded-lg bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Get in Touch
            </Link>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Let&apos;s talk about your project
              </h2>
              <p className="mt-5 leading-relaxed text-slate-600">
                Whether it&apos;s an infrastructure tender, a mineral supply
                requirement, an advisory mandate, or a trading enquiry — write
                to us and we&apos;ll get back to you promptly.
              </p>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-900">Email us directly</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block break-all text-lg font-bold text-amber-600 hover:text-amber-700"
                >
                  {site.email}
                </a>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {site.legalName}
                  <br />
                  India
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 text-slate-400">
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
                { href: "#about", label: "About" },
                { href: "#why-us", label: "Why Us" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              ))}
              <a href={`mailto:${site.email}`} className="col-span-2 mt-2 font-medium text-amber-400 hover:text-amber-300">
                {site.email}
              </a>
            </nav>
          </div>
          <p className="mt-10 border-t border-slate-800 pt-6 text-xs">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
