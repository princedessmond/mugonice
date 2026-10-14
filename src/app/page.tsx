import type { CSSProperties } from "react";
import Script from "next/script";
import { SiteHeader } from "@/components/site-header";
import { LogoMark } from "@/components/logo-mark";

const services = [
  {
    number: "01",
    title: "AI Automation",
    description:
      "Custom AI agents and automated workflows that remove repetitive work, improve response times, and help your team scale without adding complexity.",
    tags: ["AI agents", "Workflow automation", "Chatbots", "Integrations"],
    accent: "violet",
  },
  {
    number: "02",
    title: "Web Experiences",
    description:
      "Fast, conversion-led websites and digital products designed to make your brand feel credible, useful, and impossible to overlook.",
    tags: ["Strategy", "UX/UI design", "Development", "Conversion"],
    accent: "cyan",
  },
  {
    number: "03",
    title: "Performance Marketing",
    description:
      "Focused campaigns that connect the right message with the right audience, then turn real data into better creative and stronger returns.",
    tags: ["Paid media", "Campaigns", "Landing pages", "Analytics"],
    accent: "orange",
  },
  {
    number: "04",
    title: "Brand Systems",
    description:
      "Clear positioning and visual systems built to earn attention, create consistency, and give every customer touchpoint a recognizable edge.",
    tags: ["Positioning", "Identity", "Messaging", "Creative direction"],
    accent: "lime",
  },
];

const systems = [
  {
    label: "Automate",
    title: "AI growth engine",
    description:
      "Connect lead capture, qualification, follow-up, and reporting into one intelligent workflow.",
    metric: "Always on",
    metricLabel: "Lead response",
    className: "system-card system-card--violet",
    graphic: (
      <div className="automation-map" aria-hidden="true">
        <div className="automation-node automation-node--source">
          <span className="node-dot" />
          New lead
        </div>
        <div className="automation-line automation-line--one" />
        <div className="automation-core">
          <span className="core-orbit" />
          <span className="core-mark">M</span>
        </div>
        <div className="automation-line automation-line--two" />
        <div className="automation-outcomes">
          <span>Qualify</span>
          <span>Personalize</span>
          <span>Follow up</span>
        </div>
      </div>
    ),
  },
  {
    label: "Launch",
    title: "Digital flagship",
    description:
      "A premium website that turns your positioning into a focused, high-converting customer journey.",
    metric: "Built in",
    metricLabel: "Speed + SEO",
    className: "system-card system-card--cyan",
    graphic: (
      <div className="browser-mockup" aria-hidden="true">
        <div className="browser-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-content">
          <div className="browser-copy">
            <span className="browser-kicker" />
            <span className="browser-heading" />
            <span className="browser-heading browser-heading--short" />
            <span className="browser-button" />
          </div>
          <div className="browser-orb" />
        </div>
      </div>
    ),
  },
  {
    label: "Scale",
    title: "Demand system",
    description:
      "A measurable acquisition loop combining campaign creative, landing pages, testing, and insight.",
    metric: "One view",
    metricLabel: "Growth data",
    className: "system-card system-card--orange",
    graphic: (
      <div className="chart-mockup" aria-hidden="true">
        <div className="chart-top">
          <span>Growth signal</span>
          <span className="chart-live">Live</span>
        </div>
        <div className="chart-bars">
          {[36, 48, 43, 65, 59, 78, 92].map((height, index) => (
            <span
              key={height}
              style={{ "--bar-height": `${height}%` } as CSSProperties}
              className={index === 6 ? "chart-bar chart-bar--active" : "chart-bar"}
            />
          ))}
        </div>
        <div className="chart-line">
          <svg viewBox="0 0 300 80" preserveAspectRatio="none">
            <path d="M2 69 C40 66, 48 52, 79 55 S129 35, 160 43 S215 25, 298 8" />
          </svg>
        </div>
      </div>
    ),
  },
];

const process = [
  {
    number: "01",
    title: "Find the leverage",
    text: "We clarify the business goal, customer, friction points, and the single biggest opportunity to create momentum.",
  },
  {
    number: "02",
    title: "Design the system",
    text: "We shape the strategy, journey, creative direction, and technology around measurable outcomes—not a list of deliverables.",
  },
  {
    number: "03",
    title: "Build with precision",
    text: "We work in focused cycles, sharing progress early so the final product is refined, useful, and ready to perform.",
  },
  {
    number: "04",
    title: "Learn and compound",
    text: "After launch, we use real signals to improve the system and turn one successful move into repeatable growth.",
  },
];

const faqs = [
  {
    question: "What kind of companies do you work with?",
    answer:
      "MugoNice is built for ambitious startups and growing businesses that need sharper positioning, stronger digital experiences, or practical AI automation. We can lead a complete transformation or solve one focused growth challenge.",
  },
  {
    question: "Can we start with one service?",
    answer:
      "Yes. A focused website, automation workflow, campaign, or brand sprint is often the best place to begin. We define a clear first win, then expand only where it creates meaningful value.",
  },
  {
    question: "Do you use ready-made AI tools?",
    answer:
      "We use the right mix of proven platforms, custom integrations, and purpose-built workflows. The goal is not to add AI for appearance—it is to create a dependable system your team can actually use.",
  },
  {
    question: "How does a project begin?",
    answer:
      "We start with a short discovery conversation. If there is a strong fit, we recommend a focused scope, timeline, and success measure before any work begins.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MugoNice",
  url: "https://mugonice.com",
  logo: "https://mugonice.com/icon.svg",
  email: "info@mugonice.com",
  telephone: "+254795175988",
  description:
    "AI automation, web design, performance marketing, and brand strategy for ambitious businesses.",
  areaServed: "Worldwide",
  serviceType: [
    "AI Automation",
    "Web Design and Development",
    "Performance Marketing",
    "Brand Strategy",
  ],
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2c.7 6.2 3.8 9.3 10 10-6.2.7-9.3 3.8-10 10-.7-6.2-3.8-9.3-10-10 6.2-.7 9.3-3.8 10-10Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Script
        id="mugonice-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow--one" aria-hidden="true" />
          <div className="hero-glow hero-glow--two" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span className="eyebrow-pulse" />
                AI + creative growth partner
              </p>
              <h1>
                Turn bold ideas into{" "}
                <span className="gradient-text">intelligent growth.</span>
              </h1>
              <p className="hero-lede">
                We combine AI automation, standout digital experiences, and
                performance marketing to help ambitious businesses move faster
                and grow smarter.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#contact">
                  Start a project
                  <ArrowIcon />
                </a>
                <a className="button button--ghost" href="#services">
                  Explore our services
                </a>
              </div>
              <div className="hero-proof">
                <div className="proof-avatars" aria-hidden="true">
                  <span>AI</span>
                  <span>UX</span>
                  <span>↗</span>
                </div>
                <p>
                  <strong>One focused partner</strong>
                  Strategy, creative, technology, and growth.
                </p>
              </div>
            </div>

            <div className="hero-visual" aria-label="Connected growth system">
              <div className="orbit orbit--outer" aria-hidden="true" />
              <div className="orbit orbit--inner" aria-hidden="true" />
              <div className="hero-sphere">
                <span className="sphere-ring sphere-ring--one" />
                <span className="sphere-ring sphere-ring--two" />
                <span className="sphere-shine" />
                <LogoMark className="sphere-logo" />
              </div>
              <div className="floating-card floating-card--top">
                <span className="floating-icon floating-icon--violet">
                  <SparkIcon />
                </span>
                <span>
                  <small>AI workflow</small>
                  Running smoothly
                </span>
                <span className="status-dot" />
              </div>
              <div className="floating-card floating-card--right">
                <span className="mini-chart" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <span>
                  <small>Growth signal</small>
                  Moving upward
                </span>
              </div>
              <div className="floating-card floating-card--bottom">
                <span className="floating-icon floating-icon--cyan">◎</span>
                <span>
                  <small>Experience</small>
                  Built to convert
                </span>
              </div>
            </div>
          </div>

          <div className="capabilities-strip">
            <div className="capabilities-track">
              {[
                "AI AUTOMATION",
                "WEB EXPERIENCES",
                "PERFORMANCE MARKETING",
                "BRAND SYSTEMS",
                "AI AUTOMATION",
                "WEB EXPERIENCES",
                "PERFORMANCE MARKETING",
                "BRAND SYSTEMS",
              ].map((item, index) => (
                <span key={`${item}-${index}`}>
                  {item}
                  <i>✦</i>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--services" id="services">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">What we do</p>
                <h2>
                  Everything you need to{" "}
                  <span className="text-muted">move forward.</span>
                </h2>
              </div>
              <p className="section-intro">
                No disconnected tactics. We bring strategy, creativity, and
                technology together around the outcomes that matter.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article
                  className={`service-card service-card--${service.accent}`}
                  key={service.title}
                >
                  <div className="service-card-header">
                    <div className="service-identity">
                      <span className="service-number">{service.number}</span>
                      <div className="service-icon" aria-hidden="true">
                        {service.number === "01" && (
                          <svg viewBox="0 0 48 48">
                            <circle cx="24" cy="24" r="7" />
                            <path d="M24 4v8M24 36v8M4 24h8M36 24h8M9.9 9.9l5.7 5.7M32.4 32.4l5.7 5.7M38.1 9.9l-5.7 5.7M15.6 32.4l-5.7 5.7" />
                          </svg>
                        )}
                        {service.number === "02" && (
                          <svg viewBox="0 0 48 48">
                            <rect x="5" y="8" width="38" height="32" rx="4" />
                            <path d="M5 17h38M13 12.5h.1M19 12.5h.1M25 12.5h.1M12 25h14M12 31h24" />
                          </svg>
                        )}
                        {service.number === "03" && (
                          <svg viewBox="0 0 48 48">
                            <path d="M7 38V26M17 38V18M27 38V23M37 38V9" />
                            <path d="m7 18 10-6 10 3 10-9" />
                          </svg>
                        )}
                        {service.number === "04" && (
                          <svg viewBox="0 0 48 48">
                            <path d="M24 5 42 15v18L24 43 6 33V15L24 5Z" />
                            <path d="m6 15 18 10 18-10M24 25v18" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="service-arrow">
                      <ArrowIcon />
                    </span>
                  </div>
                  <div className="service-card-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-capabilities">
                    <span>Core capabilities</span>
                    <ul className="tag-list" aria-label={`${service.title} capabilities`}>
                    {service.tags.map((tag) => (
                        <li key={tag}>
                          <i aria-hidden="true" />
                          {tag}
                        </li>
                    ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--systems" id="work">
          <div className="container">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">Built as connected systems</p>
              <h2>
                Not just deliverables.{" "}
                <span className="gradient-text">Growth infrastructure.</span>
              </h2>
              <p>
                We design every engagement to keep creating value after launch.
              </p>
            </div>

            <div className="systems-grid">
              {systems.map((system) => (
                <article className={system.className} key={system.title}>
                  <div className="system-copy">
                    <span className="system-label">{system.label}</span>
                    <h3>{system.title}</h3>
                    <p>{system.description}</p>
                  </div>
                  {system.graphic}
                  <div className="system-metric">
                    <strong>{system.metric}</strong>
                    <span>{system.metricLabel}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--difference" id="about">
          <div className="container difference-grid">
            <div className="difference-visual" aria-hidden="true">
              <div className="difference-grid-lines" />
              <div className="difference-orb">
                <LogoMark className="difference-logo" />
              </div>
              <div className="difference-chip difference-chip--one">
                <span>01</span> Think clearly
              </div>
              <div className="difference-chip difference-chip--two">
                <span>02</span> Build boldly
              </div>
              <div className="difference-chip difference-chip--three">
                <span>03</span> Grow intelligently
              </div>
            </div>
            <div className="difference-copy">
              <p className="eyebrow">Why MugoNice</p>
              <h2>
                Small enough to care.{" "}
                <span className="text-muted">Built to think big.</span>
              </h2>
              <p className="difference-lede">
                The best work happens when strategy, creative, and technology
                share the same room. That is how we work from day one.
              </p>
              <div className="principles">
                <div>
                  <span>01</span>
                  <section>
                    <h3>Clarity before complexity</h3>
                    <p>
                      We simplify the challenge before choosing tools, channels,
                      or technology.
                    </p>
                  </section>
                </div>
                <div>
                  <span>02</span>
                  <section>
                    <h3>Senior thinking, hands-on work</h3>
                    <p>
                      The people shaping the strategy stay close to the details
                      that make it real.
                    </p>
                  </section>
                </div>
                <div>
                  <span>03</span>
                  <section>
                    <h3>Momentum over theatre</h3>
                    <p>
                      Less presentation for presentation&apos;s sake. More
                      useful progress you can see and test.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--process" id="process">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">How we work</p>
                <h2>
                  From ambition to{" "}
                  <span className="gradient-text">measurable momentum.</span>
                </h2>
              </div>
              <p className="section-intro">
                A focused process that keeps decisions clear, collaboration
                close, and every phase connected to the bigger goal.
              </p>
            </div>
            <div className="process-list">
              {process.map((step) => (
                <article className="process-step" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--faq">
          <div className="container faq-grid">
            <div className="faq-heading">
              <p className="eyebrow">Questions, answered</p>
              <h2>
                Good work starts with{" "}
                <span className="text-muted">a good conversation.</span>
              </h2>
              <p>
                Have something more specific in mind? Tell us what you are
                building and where you feel stuck.
              </p>
              <a href="mailto:info@mugonice.com">
                info@mugonice.com <ArrowIcon />
              </a>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>
                    {faq.question}
                    <span aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-grid" aria-hidden="true" />
          <div className="container contact-inner">
            <p className="eyebrow">Your next move</p>
            <h2>
              Let&apos;s build what moves
              <br />
              your business <span className="gradient-text">forward.</span>
            </h2>
            <p>
              Tell us where you want to go. We&apos;ll help you find the
              smartest way to get there.
            </p>
            <a
              className="button button--primary button--large"
              href="mailto:info@mugonice.com?subject=Project%20inquiry%20for%20MugoNice"
            >
              Start a conversation
              <ArrowIcon />
            </a>
            <div className="contact-options" aria-label="MugoNice contact details">
              <a href="mailto:info@mugonice.com">
                <span className="contact-option-icon" aria-hidden="true">
                  @
                </span>
                <span className="contact-option-copy">
                  <small>Email us</small>
                  <strong>info@mugonice.com</strong>
                  <em>Send us your brief anytime</em>
                </span>
                <ArrowIcon />
              </a>
              <a href="tel:+254795175988">
                <span className="contact-option-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M7.1 3.5 9.7 7a1.5 1.5 0 0 1-.1 1.9l-1.5 1.5a14.2 14.2 0 0 0 5.5 5.5l1.5-1.5a1.5 1.5 0 0 1 1.9-.1l3.5 2.6a1.5 1.5 0 0 1 .5 1.7l-.7 2.1a2 2 0 0 1-1.9 1.3C9.3 22 2 14.7 2 5.6a2 2 0 0 1 1.3-1.9L5.4 3a1.5 1.5 0 0 1 1.7.5Z" />
                  </svg>
                </span>
                <span className="contact-option-copy">
                  <small>Call us</small>
                  <strong>0795 175 988</strong>
                  <em>Speak directly with our team</em>
                </span>
                <ArrowIcon />
              </a>
            </div>
            <span className="contact-note">
              <i />
              Open for select projects
            </span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <a className="brand brand--footer" href="#home" aria-label="MugoNice home">
              <LogoMark className="brand-mark" />
              <span className="brand-name">
                Mugo<span>Nice</span>
              </span>
            </a>
            <div className="footer-contact">
              <a href="mailto:info@mugonice.com">info@mugonice.com</a>
              <a href="tel:+254795175988">0795 175 988</a>
            </div>
            <nav aria-label="Footer navigation">
              <a href="#services">Services</a>
              <a href="#work">What we build</a>
              <a href="#about">About</a>
              <a href="#process">Process</a>
            </nav>
          </div>
          <div className="footer-bottom">
            <span>© 2026 MugoNice. All rights reserved.</span>
            <span>AI × Creative × Growth</span>
          </div>
        </div>
      </footer>
    </>
  );
}
