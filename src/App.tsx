import React, { useEffect, useRef, useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Briefcase,
  GraduationCap,
  Globe,
  Code,
  Heart,
  ExternalLink,
} from 'lucide-react';

const experiences = [
  {
    id: 1,
    period: 'Feb 25 – Sept 25',
    company: 'GoComet',
    logo: 'public/logos/gocomet logo .png',
    companyUrl: 'https://www.gocomet.com',
    location: 'Singapore',
    role: 'Product @ Founders office',
    tagline:
      'Drove product strategy and analytics to scale GoComet’s EXIM business in APAC',
    subtagline: 'Global AI SaaS platform optimizing cross-border logistics, freight intelligence, and trade automation.',
    bullets: [
      'Defined strategy by analysing bottlenecks across $10M+ in trade flows and benchmarking competitors; insights shaped the SEA product roadmap.',
      'Consolidated feedback from 100+ traders, ops teams, and engineers into actionable proposals, leading to 7+ roadmap initiatives improving client retention outlook by 20%.',
      'Improved client retention outlook by ~20% through KPI-aligned rollout across multiple countries.',
    ],
  },
  {
    id: 2,
    period: 'June 25 – Aug 25',
    company: 'Arise IIP',
    logo: 'public/logos/arise iip logo.png',
    companyUrl: 'https://www.ariseiip.com',
    location: 'Libreville, Gabon',
    role: 'Software Engineering Intern',
    tagline:
      'Built optimisation tools improving transport uptime and operational efficiency.',
    subtagline: 'Industrial developer in Africa driving manufacturing, logistics, infrastructure digitalization,and energy solutions.',
    bullets: [
      'Developed & deployed a MILP-based route optimisation system (CBC solver + greedy heuristics), lifting weekly profit margins by ~17%.',
      'Built a bilingual real-time maintenance tracking dashboard, reducing downtime by ~30%.',
      'Partnered with leadership to refine metrics and priortize features, ensuring alignment between commercial objectives and scalable product delivery.',
    ],
  },
  {
    id: 3,
    period: 'June 24 – Aug 24',
    company: 'TimberEye',
    logo: 'public/logos/timbereye_logo.png',
    companyUrl: 'https://www.timbereye.com',
    location: 'San Francisco, USA',
    role: 'Software Engineer Intern',
    tagline:
      'Developed core automation features for the AI-powered raw materials platform.',
    subtagline: 'AI-powered raw material platform streamlining traceability & logistics for global supply chains.',
    bullets: [
      'Built a GCS-integrated drag-and-drop file interface, improving data workflow efficiency by ~40%.',
      'Led technical documentation and cross-functional sprints with design and product teams to iterate UI/UX improvements.',
      'Contributed to platform scalability through structured code optimisation and modular testing.',
    ],
  },
  {
    id: 4,
    period: 'Nov 22 – Jan 23',
    company: '11point2',
    logo: 'public/logos/11point2_logo.png',
    companyUrl: 'https://11point2.io/',
    location: 'Adelaide, Australia',
    role: 'Engineering Intern',
    tagline:
      'Modelled decarbonisation projects shaping investment strategy and idea validation.',
    subtagline: 'Provided techno-economic insights for board-level decision-making.',
    bullets: [
      'Modelled techno-economic cases for $500M+ decarb projects, delivering insights that informed board-level investment decisions.',
      'Deployed Proposed strategic CAPEX and operational optimisations supporting decarbonisation mandates.',
      'Coordinated across engineering and finance teams to deliver high-impact modelling tools for client proposals.',
    ],
  },
];

const projects = [
    {
    id: 5,
    name: 'Native',
    role: 'Founder',
    period: '2025 - current',
    type: 'AI startup',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60',
    summary:
      'An AI assistnat for targetting inefficiencies in the production and business pipelines. \n Turn Messy business goals to formal optimised models + live, customisable dashboards along with clarifying Q&A, solve selection, and "what if" re-plans. Build phase + pitching to investors',
  },
    {
    id: 6,
    name: 'ToDo App',
    role: 'Developer',
    period: '2025',
    type: 'App',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60',
    summary:
      'The most simple To do app which syncs with your default calendar. No more hassle, no extra features, no ads, just straight plain business.',
  },
    {
    id: 2,
    name: 'Green Ridesharing',
    role: 'Founder',
    period: '2025 – 2026',
    type: 'Sustainability app',
    image:
      'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=60',
    summary:
      'Building an eco-friendly ride-sharing platform for Monash students and staff, from UX to GTM experiments.',
  },
  {
    id: 1,
    name: 'TenetIQ',
    role: 'Product Lead',
    period: '2023 – 2024',
    type: 'MedTech startup',
    image:
      'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=60',
    summary:
      'Led product build, strategy, and market analysis for a medical technology platform, working closely with clinicians and engineers.',
  },
  {
    id: 3,
    name: 'SA Environmental Laws',
    role: 'Developer',
    period: '2023',
    type: 'Web platform',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60',
    summary:
      'Built a web platform for South Australian environmental regulations with search and filter capabilities.',
  },
  {
    id: 4,
    name: 'Student Leadership',
    role: 'General Secretary',
    period: '2022 – 2023',
    type: 'Leadership',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60',
    summary:
      'Served as General Secretary at the University of Adelaide, leading initiatives, operations, and stakeholder engagement. Transferred from EEE to CS @ Monash',
  },

];

const skills = {
  coding: 'C++, C, Python, Java, Solidity, HTML/CSS, PHP, JS/TS, Swift',
  frameworks: 'CRM, Streamlit, OR-Tools (CBC), Agile/Scrum, AI-powered tools',
  product:
    'Product strategy, GTM, Techno-economic modelling, Market intelligence, UI/UX, Logistics & supply chain',
  soft: 'Cross-functional Collaboration, Data storytelling, Research, Leadership',
};

const App: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const copyTimer = useRef<NodeJS.Timeout | null>(null);
  // Reveal-on-scroll hook for elements with `data-reveal` attribute
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll('[data-reveal]')
    ) as HTMLElement[];
    if (nodes.length === 0) return;
    const baseStagger = 90;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const isCTA = el.classList.contains('cta');
            el.classList.add('is-inview');
            // prefer a distinct animation for CTA vs others
            if (isCTA) {
              el.classList.add('animate-pop');
            } else {
              el.classList.add('animate-fade-up');
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    nodes.forEach((n, i) => {
      const order = Number(n.dataset.revealOrder);
      const delay = Number.isFinite(order) ? order * baseStagger : i * baseStagger;
      n.style.setProperty('--reveal-delay', `${delay}ms`);
      n.style.animationDelay = `${delay}ms`;
      n.style.transitionDelay = `${delay}ms`;
      observer.observe(n);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    return () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('AgastyaMudgal@outlook.com');
      setCopiedEmail(true);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopiedEmail(false), 2400);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };
  // const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 text-slate-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex w-[90vw] items-center justify-between px-4 py-4">
          <div data-reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Resume
            </p>
            <h1 className="text-lg font-light text-slate-900">
              Agastya <span className="font-semibold">Mudgal</span>
            </h1>
          </div>
          <nav className="hidden gap-6 text-xs font-medium text-slate-700 sm:flex">
            <a href="#about" className="hover:text-refresh-500 hover:-translate-y-0.5 transition-transform">
              About
            </a>
            <a href="#experience" className="hover:text-refresh-500 hover:-translate-y-0.5 transition-transform">
              Experience
            </a>
            <a href="#projects" className="hover:text-refresh-500 hover:-translate-y-0.5 transition-transform">
              Projects
            </a>
            <a href="#skills" className="hover:text-refresh-500 hover:-translate-y-0.5 transition-transform">
              Skills
            </a>
            <a href="#contact" className="hover:text-refresh-500 hover:-translate-y-0.5 transition-transform">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-[96vw] max-w-[1400px] flex-col gap-12 px-4 pb-16 pt-12 sm:pt-16">
        {/* HERO / ABOUT */}
        <section id="about" className="space-y-4">
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-[0.25em] text-refresh-400">
              SOFTWARE x PRODUCT x FINANCE
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl leading-tight">
              Designing products informed by{' '}
              <span className="bg-gradient-to-r from-refresh-600 to-refresh-500 bg-clip-text text-transparent font-semibold drop-shadow-sm">data</span>,{' '}
              <span className="bg-gradient-to-r from-refresh-600 to-refresh-500 bg-clip-text text-transparent font-semibold drop-shadow-sm">shaped by strategy</span>, and{' '}
              <span className="bg-gradient-to-r from-refresh-600 to-refresh-500 bg-clip-text text-transparent font-semibold drop-shadow-sm">grounded in real operations</span>.
            </h2>
            <p className="text-s text-slate-700 leading-relaxed">
              I blend product insight, analytical thinking, and cross industry experience to create durable solutions; from optimisation and AI workflows to financial insight tools and user facing products. Interest in the space where tech, finance, and strategy converge. 
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                data-reveal
                className="cta inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-refresh-600 to-refresh-500 px-4 py-2 text-xs font-medium text-white hover:scale-105 transition-transform duration-200 ease-out"
              >
                <Mail className="h-4 w-4" />
                Email me
              </button>
              <a
                href="https://www.linkedin.com/in/agastyamudgal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 hover:translate-y-[-1px] hover:text-refresh-500 transition-transform duration-150"
                data-reveal
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="public/logos/Agastya_Mudgal_CV_Dec25.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm hover:-translate-y-[2px] hover:text-refresh-500 transition-transform duration-150"
                data-reveal
              >
                <ExternalLink className="h-4 w-4" />
                View full CV
              </a>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div
                data-reveal
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/95 via-white/90 to-refresh-50/60 p-4 shadow-md backdrop-blur"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-refresh-600 via-refresh-500 to-refresh-300"
                />
                <div className="pl-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-refresh-500">
                    Contact
                  </p>
                  <p className="mt-1 text-sm text-slate-800">
                    Based between UAE, SG, and AU. <br />
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-sm font-medium text-slate-800">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-2 rounded-full border border-refresh-200 bg-refresh-50 px-4 py-2 hover:border-refresh-400 hover:bg-refresh-100 shadow-sm transition"
                    >
                      <Mail className="h-4 w-4 text-refresh-500" />
                      Email me
                    </button>
                    <a
                      href="https://www.linkedin.com/in/agastyamudgal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-refresh-200 bg-white px-4 py-2 hover:border-refresh-400 hover:bg-refresh-50 shadow-sm transition"
                    >
                      <Linkedin className="h-4 w-4 text-refresh-500" />
                      LinkedIn
                    </a>
                    <a
                      href="/Agastya_Mudgal_CV_Nov25.pdf"
                      className="inline-flex items-center gap-2 rounded-full border border-refresh-200 bg-white px-4 py-2 hover:border-refresh-400 hover:bg-refresh-50 shadow-sm transition"
                    >
                      <ExternalLink className="h-4 w-4 text-refresh-500" />
                      View full CV
                    </a>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2 text-sm font-medium text-slate-700">
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5">
                      <Phone className="h-4 w-4 text-slate-500" />
                      +971 58 210 2346 (UAE)
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5">
                      <Phone className="h-4 w-4 text-slate-500" />
                      +65 9487 3376 (SG - WhatsApp)
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5">
                      <Phone className="h-4 w-4 text-slate-500" />
                      +61 433 912 598 (AU)
                    </span>
                  </div>
                </div>
              </div>

              <div
                data-reveal
                className="space-y-2 rounded-2xl bg-white/92 p-4 shadow-md backdrop-blur"
              >
                <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
                  {/* <div className="flex h-10 w-10 items-center justify-center rounded-xl border-l-4 border-refresh-500/25 bg-gradient-to-br from-refresh-500/35 to-refresh-300/25">
                    <span className="text-lg font-bold text-slate-950">A</span>
                  </div> */}
                  <div>
                    <p className="text-xs text-slate-400">Currently</p>
                    <p className="text-m font-semibold text-slate-900">
                      B.CompSci (Advanced Algorithms)
                    </p>
                    <p className="text-s text-refresh-300">
                      Monash University · 2024 – 2026
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-s text-slate-600">
                  <div className="flex items-center gap-2">
                    <Globe className="h-3 w-3 text-refresh-300" />
                    <span>Singaporean citizen · UAE (golden visa) · AU (student visa) </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-refresh-300" />
                    <span>Feel free to reach out for opportunities, collaborations, or a chat about Tech, Finance, or Product!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {copiedEmail && (
          <div className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur transition-all duration-300">
            <Mail className="h-3 w-3 text-refresh-200" />
            Email copied to clipboard
          </div>
        )}

        {/* EXPERIENCE */}
        <section id="experience" className="space-y-5">
          <div className="flex items-center justify-between gap-4" data-reveal>
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Briefcase className="h-5 w-5 text-refresh-400" />
              Work Experience
            </h3>
            <p className="text- m text-slate-400">
              Looking for Product, Finance, and Software Engineering roles 
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2" data-reveal>
            {experiences.map((exp) => (
              <article
                key={exp.id}
                className="group relative overflow-hidden rounded-2xl bg-white/95 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute left-0 top-4 h-10 w-0.5 bg-gradient-to-b from-refresh-400/80 to-transparent" />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="pr-2">
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base font-semibold text-slate-900 hover:text-refresh-600"
                      title={`Visit ${exp.company}`}
                      aria-label={`Visit ${exp.company} website`}
                    >
                      {exp.logo && (
                        <span className="inline-flex flex-shrink-0 h-12 w-12 items-center justify-center overflow-hidden rounded-md bg-gray-100 p-1.5">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1">
                        {exp.company}
                        <ExternalLink className="h-3 w-3 text-slate-400" />
                      </span>
                    </a>
                    <p className="text-sm text-slate-600">{exp.role}</p>
                  </div>
                  <div className="flex flex-shrink-0 flex-col items-end text-right text-[12px] text-slate-500">
                    <span className="font-semibold uppercase tracking-wide">{exp.period}</span>
                    <span className="mt-1 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="mt-2 space-y-1">
                  <p className="text-sm italic text-slate-700">{exp.tagline}</p>
                  {exp.subtagline && (
                    <p className="text-sm italic text-slate-500">{exp.subtagline}</p>
                  )}
                </div>

                <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-refresh-400" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS & LEADERSHIP */}
        <section id="projects" className="space-y-5">
          <div className="flex items-center justify-between gap-4" data-reveal>
            <h3 className="text-lg font-semibold">Projects & Leadership</h3>
            <p className="text-xs text-slate-400">
              Start ups· Apps ·student leadership  
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2" data-reveal>
            {projects.map((p) => (
              <article
                key={p.id}
                className="group overflow-hidden rounded-2xl bg-white/95 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                {p.image && (
                  <div className="relative h-36 w-full overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.name} cover`}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/25 to-transparent" />
                    <span className="absolute right-2 top-2 rounded-full bg-white/85 px-2 py-[2px] text-[10px] font-semibold text-slate-700 shadow-sm">
                      {p.type}
                    </span>
                  </div>
                )}
                <div className="p-4">
                  <div className="mb-1 flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 group-hover:text-refresh-500">
                        {p.name}
                      </h4>
                      <p className="text-xs text-refresh-300">{p.role}</p>
                    </div>
                    <div className="text-right text-[11px] text-slate-400">
                      <p className="font-medium uppercase tracking-wide">
                        {p.period}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {p.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-5">
          <div className="flex items-center gap-2" data-reveal>
            <Code className="h-5 w-5 text-refresh-400" />
            <h3 className="text-xl font-semibold">Skills & Toolbox</h3>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl bg-white/90 p-5 shadow-md ring-1 ring-slate-200" data-reveal>
              <p className="text-[12px] font-semibold uppercase tracking-wide text-slate-400">
                Coding
              </p>
              <p className="mt-2 text-sm text-slate-800 leading-relaxed">{skills.coding}</p>
              <p className="mt-4 text-[12px] font-semibold uppercase tracking-wide text-slate-400">
                Frameworks & Tools
              </p>
              <p className="mt-2 text-sm text-slate-800 leading-relaxed">
                {skills.frameworks}
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 p-5 shadow-md ring-1 ring-slate-200" data-reveal>
              <p className="text-[12px] font-semibold uppercase tracking-wide text-slate-400">
                Product & Business
              </p>
              <p className="mt-2 text-sm text-slate-800 leading-relaxed">{skills.product}</p>
              <p className="mt-4 text-[12px] font-semibold uppercase tracking-wide text-slate-400">
                Soft skills
              </p>
              <p className="mt-2 text-sm text-slate-800 leading-relaxed">{skills.soft}</p>
            </div>

            <div className="rounded-2xl bg-white/90 p-5 shadow-md ring-1 ring-slate-200 space-y-3" data-reveal>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-refresh-400" />
                  <h4 className="text-sm font-semibold">A little about me</h4>
                </div>
                <p className="text-sm  text-slate-900">
                  B.CompSci (Advanced Algorithms)
                </p>
                <p className="text-sm ">Monash University (Australia)</p>
                <p className="text-xs text-slate-500">2024 – June 2026</p>
                <p className="mt-2 text-[12px] text-slate-500">
                  Previously EEE at University of Adelaide; transferred to computer science at Monash 
                </p>
              </div>
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-wide text-slate-400 mb-1">
                  Languages
                </p>
                <p className="text-sm text-slate-800">English (Native) · Hindi (Fluent) · Spanish (Basic) · French (Basic)</p>
              </div>
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-wide text-slate-400 mb-1">
                  Interests (Outside work and study)
                </p>
                <p className="text-sm text-slate-800">
                  Football, Tennis, Surfing, Stocks, Horology, Business news, Creating AI agents, and exploring new tech.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="py-4 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} Agastya Mudgal
        </footer>
      </main>
    </div>
  );
};
 
export default App;
