import portfolioData from "../portfolio-data.json";
import Navbar from "../components/Navbar";

// Each entry is { cls: "icon class(es)", colored: true|false }
// "colored" = use Devicons colored variant; false = single-color FA icon
const SKILL_ICONS = {
  // ── Programming ──────────────────────────────────────────
  "Python": { cls: "devicon-python-plain", colored: true },
  "C++": { cls: "devicon-cplusplus-plain", colored: true },
  "C": { cls: "devicon-c-plain", colored: true },
  // ── Computer Vision ──────────────────────────────────────
  "OpenCV": { cls: "devicon-opencv-plain", colored: true },
  "Image Processing": { cls: "fas fa-image", colored: false },
  "Geometry and Perspective": { cls: "fas fa-cube", colored: false },
  "Feature Extraction": { cls: "fas fa-filter", colored: false },
  // ── Machine Learning ─────────────────────────────────────
  "PyTorch": { cls: "devicon-pytorch-plain", colored: true },
  "Scikit-learn": { cls: "devicon-scikitlearn-plain", colored: true },
  "Model Optimization": { cls: "fas fa-microchip", colored: false },
  "Multimodal Models (Vision + Text)": { cls: "fas fa-layer-group", colored: false },
  "ASR Pipelines": { cls: "fas fa-microphone", colored: false },
  // ── AI Concepts ──────────────────────────────────────────
  "CNNs": { cls: "fas fa-network-wired", colored: false },
  "Embeddings": { cls: "fas fa-braille", colored: false },
  "Similarity Search": { cls: "fas fa-magnifying-glass", colored: false },
  "Quantization": { cls: "fas fa-compress", colored: false },
  "Pruning": { cls: "fas fa-scissors", colored: false },
  // ── Systems & Performance ─────────────────────────────────
  "Linux": { cls: "devicon-linux-plain", colored: true },
  "Shell": { cls: "devicon-bash-plain", colored: true },
  "WASM basics": { cls: "fas fa-bolt", colored: false },
  "Performance Debugging": { cls: "fas fa-gauge-high", colored: false },
  // ── Web / App ─────────────────────────────────────────────
  "Flutter": { cls: "devicon-flutter-plain", colored: true },
  "HTML": { cls: "devicon-html5-plain", colored: true },
  "CSS": { cls: "devicon-css3-plain", colored: true },
  "JavaScript": { cls: "devicon-javascript-plain", colored: true },
  // ── Tools & Platforms ─────────────────────────────────────
  "Git": { cls: "devicon-git-plain", colored: true },
  "Firebase": { cls: "devicon-firebase-plain", colored: true },
  "Azure": { cls: "devicon-azure-plain", colored: true },
  "VS Code": { cls: "devicon-vscode-plain", colored: true },
  // ── Database ─────────────────────────────────────────────
  "SQL": { cls: "devicon-mysql-plain", colored: true },
};

function getIcon(skill) {
  return SKILL_ICONS[skill] || { cls: "fas fa-star", colored: false };
}

// Category accent colors
const CAT_COLORS = {
  "Programming": { bg: "from-violet-500/20 to-purple-500/5", ring: "ring-violet-500/30", text: "text-violet-400" },
  "Computer Vision": { bg: "from-blue-500/20 to-cyan-500/5", ring: "ring-blue-500/30", text: "text-blue-400" },
  "Machine Learning": { bg: "from-orange-500/20 to-yellow-500/5", ring: "ring-orange-500/30", text: "text-orange-400" },
  "AI Concepts": { bg: "from-pink-500/20 to-rose-500/5", ring: "ring-pink-500/30", text: "text-pink-400" },
  "Systems and Performance": { bg: "from-green-500/20 to-emerald-500/5", ring: "ring-green-500/30", text: "text-green-400" },
  "Web/App": { bg: "from-cyan-500/20 to-teal-500/5", ring: "ring-cyan-500/30", text: "text-cyan-400" },
  "Tools and Platforms": { bg: "from-amber-500/20 to-yellow-500/5", ring: "ring-amber-500/30", text: "text-amber-400" },
  "Database": { bg: "from-indigo-500/20 to-blue-500/5", ring: "ring-indigo-500/30", text: "text-indigo-400" },
};

export default function Home() {
  const { personal, experience, projects, skills, education, hackathons, certifications } = portfolioData;

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* ── Background grid ────────────────────────── */}
      <div className="fixed inset-0 z-[-2] pointer-events-none bg-grid" />

      {/* ── Background animated blobs ────────────────────────── */}
      <div aria-hidden="true" className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="bg-blob absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full opacity-[0.12]"
          style={{ background: 'radial-gradient(circle, #C2185B, transparent 70%)' }} />
        <div className="bg-blob-2 absolute top-1/2 -left-64 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #7C3AED, transparent 70%)' }} />
        <div className="bg-blob absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
      </div>

      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section id="home" className="min-h-[100svh] flex flex-col justify-center pt-24 pb-12 px-6 max-w-4xl mx-auto text-center relative">
        {/* Spinning deco rings (ensure they stay behind text) */}
        <div aria-hidden="true" className="spin-ring absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 mt-10 w-[700px] h-[700px] border-[1.5px] border-[var(--primary-pink)] rounded-full pointer-events-none shadow-[0_0_80px_rgba(194,24,91,0.05)_inset]" />
        <div aria-hidden="true" className="spin-ring2 absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 mt-10 w-[950px] h-[950px] border border-[var(--primary-pink)]/20 rounded-full pointer-events-none shadow-[0_0_120px_rgba(194,24,91,0.03)_inset]" />

        <div className="relative z-10">
          <p className="hero-a1 hero-label font-black tracking-[0.35em] uppercase text-xs mb-6">
            Welcome to my portfolio
          </p>
          <h1 className="hero-a2 text-5xl md:text-7xl font-extrabold mb-5 tracking-tight leading-tight">
            {personal.name}
          </h1>
          <p className="hero-a3 text-xl md:text-2xl font-bold text-[var(--primary-pink)] mb-6">
            {personal.title}
          </p>
          <p className="hero-a4 text-base md:text-lg text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
            {personal.tagline}
          </p>

          {/* Social links */}
          <div className="hero-a4 flex gap-5 justify-center mb-12">
            {[
              { href: `mailto:${personal.email}`, icon: "fas fa-envelope", label: "Email" },
              { href: `tel:${personal.phone}`, icon: "fas fa-phone", label: "Phone" },
              { href: personal.linkedin, icon: "fab fa-linkedin-in", label: "LinkedIn", external: true },
              { href: personal.github, icon: "fab fa-github", label: "GitHub", external: true },
            ].map(({ href, icon, label, external }) => (
              <a
                key={label}
                href={href}
                title={label}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="w-14 h-14 rounded-2xl border-2 border-[var(--primary-pink)] flex items-center justify-center text-[var(--foreground)] text-xl hover:bg-gradient-to-tr hover:from-[var(--primary-pink)] hover:to-[var(--dark-pink)] hover:text-white hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(194,24,91,0.25)] transition-all duration-300"
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="hero-a5 flex gap-4 justify-center">
          <a href="#projects" className="px-7 py-3 rounded-xl border-2 border-[var(--primary-pink)] text-[var(--primary-pink)] font-bold hover:bg-[var(--primary-pink)] hover:text-white transition-all duration-300">
            View Projects
          </a>
          <a href="#experience" className="px-7 py-3 rounded-xl bg-gradient-to-r from-[var(--primary-pink)] to-[var(--dark-pink)] text-white font-bold hover:shadow-[0_6px_20px_rgba(194,24,91,0.4)] hover:-translate-y-0.5 transition-all duration-300">
            Experience
          </a>
        </div>
      </section>

      {/* ─── EXPERIENCE ───────────────────────────────────────────── */}
      <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-[var(--primary-pink)] text-xs font-bold tracking-widest uppercase mb-2">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Journey</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {experience.map((exp, idx) => (
            <div key={idx} className="reveal glass-card rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-2"
              style={{ transitionDelay: `${idx * 0.12}s` }}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--background)] rounded-full blur-3xl group-hover:bg-[var(--primary-pink)]/20 transition-all pointer-events-none" />
              <h3 className="text-xl font-bold text-[var(--primary-pink)] mb-2">{exp.position}</h3>
              <p className="font-semibold text-lg mb-1">{exp.company}</p>
              <p className="text-sm text-[var(--text-secondary)] mb-4">{exp.period}</p>
              <span className="text-xs font-bold bg-[var(--background)] text-[var(--primary-pink)] px-3 py-1 rounded-full inline-block mb-6">{exp.tech}</span>
              <ul className="space-y-3">
                {exp.achievements.map((ach, i) => (
                  <li key={i} className="text-[var(--text-secondary)] text-sm leading-relaxed flex items-start gap-3">
                    <i className="fas fa-chevron-right text-[var(--primary-pink)] text-xs mt-1.5 shrink-0"></i>
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROJECTS ─────────────────────────────────────────────── */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-[var(--primary-pink)] text-xs font-bold tracking-widest uppercase mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="reveal glass-card rounded-2xl p-7 flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(194,24,91,0.18)]"
              style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}>
              <span className="text-[0.65rem] font-extrabold uppercase tracking-wider bg-[var(--primary-pink)] text-white px-3 py-1 rounded-full mb-4 self-start">{project.tag}</span>
              <h3 className="text-base font-bold mb-3 group-hover:text-[var(--primary-pink)] transition-colors leading-snug">{project.title}</h3>
              <p className="text-xs font-medium text-[var(--primary-pink)]/80 mb-4">{project.tech}</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-grow mb-6">{project.description}</p>
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-pink)] hover:bg-[var(--primary-pink)] hover:text-white px-4 py-2 rounded-lg transition-all duration-200 self-start border border-[var(--primary-pink)] hover:border-transparent mt-auto">
                  <i className="fab fa-github"></i> View Repo
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── SKILLS ───────────────────────────────────────────────── */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-[var(--primary-pink)] text-xs font-bold tracking-widest uppercase mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Expertise</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills)
            .filter(([cat]) => cat !== "Technical Interests")
            .map(([category, items], idx) => {
              const colors = CAT_COLORS[category] || { bg: "from-[var(--primary-pink)]/20 to-transparent", ring: "ring-[var(--primary-pink)]/30", text: "text-[var(--primary-pink)]" };
              return (
                <div key={category} className={`reveal glass-card rounded-2xl p-7 bg-gradient-to-br ${colors.bg}`}
                  style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <h3 className={`text-lg font-bold mb-6 ${colors.text}`}>{category}</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {items.map((skill) => {
                      const icon = getIcon(skill);
                      return (
                        <div
                          key={skill}
                          title={skill}
                          className={`flex flex-col items-center gap-2 p-3 rounded-xl bg-[var(--bg-card)]/60 ring-1 ${colors.ring} hover:scale-110 hover:shadow-lg transition-all duration-200 cursor-default`}
                        >
                          <i
                            className={`${icon.cls}${icon.colored ? ' colored' : ''} text-3xl`}
                            style={icon.colored ? {} : { color: 'currentColor' }}
                          ></i>
                          <span className="text-[0.6rem] text-center text-[var(--text-secondary)] font-semibold leading-tight line-clamp-2">{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      {/* ─── EDUCATION ────────────────────────────────────────────── */}
      <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--primary-pink)] text-xs font-bold tracking-widest uppercase mb-2">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold">Academic Background</h2>
        </div>
        <div className="reveal glass-card rounded-2xl p-10 max-w-3xl mx-auto text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-pink)]/10 to-transparent pointer-events-none rounded-2xl" />
          <i className="float-icon fas fa-graduation-cap text-5xl text-[var(--primary-pink)] mb-6 block"></i>
          <h3 className="text-2xl font-bold mb-3">{education.degree}</h3>
          <p className="text-[var(--primary-pink)] font-semibold text-lg mb-2">{education.school}</p>
          <p className="text-[var(--text-secondary)] text-sm">{education.period} &nbsp;•&nbsp; CGPA: <strong className="text-[var(--foreground)]">{education.cgpa}</strong></p>
        </div>
      </section>

      {/* ─── HACKATHONS ───────────────────────────────────────────── */}
      <section id="hackathons" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-[var(--primary-pink)] text-xs font-bold tracking-widest uppercase mb-2">Hackathons</p>
          <h2 className="text-3xl md:text-4xl font-bold">Competitions & Achievements</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hackathons.map((h, idx) => (
            <div key={idx} className="reveal glass-card rounded-2xl p-8 flex gap-6 items-start group hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${idx * 0.12}s` }}>
              <div className="shrink-0 w-14 h-14 rounded-xl bg-[var(--background)] flex items-center justify-center">
                <i className="fas fa-trophy text-2xl text-[var(--primary-pink)]"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--primary-pink)] mb-1">{h.achievement}</h3>
                <p className="text-sm font-semibold mb-2">{h.event}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{h.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CERTIFICATIONS ───────────────────────────────────────── */}
      <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-[var(--primary-pink)] text-xs font-bold tracking-widest uppercase mb-2">Certifications</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Development</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {certifications.map((cert, idx) => {
            let iconCls = "fas fa-certificate";
            if (cert.issuer.includes("NVIDIA")) iconCls = "fas fa-microchip";
            else if (cert.issuer.includes("Google")) iconCls = "fab fa-google";
            else if (cert.title.includes("Docker") || cert.issuer.includes("IBM")) iconCls = "fab fa-docker";
            else if (cert.issuer.includes("DeepLearning.AI") || cert.title.includes("ML")) iconCls = "fas fa-brain";
            else if (cert.title.includes("Data")) iconCls = "fas fa-database";

            return (
              <div key={idx} className="reveal glass-card rounded-xl px-7 py-5 flex items-center gap-6 group hover:-translate-y-0.5 transition-all duration-300"
                style={{ transitionDelay: `${idx * 0.08}s` }}>
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[var(--background)] flex items-center justify-center">
                  <i className={`${iconCls} text-xl text-[var(--primary-pink)]`}></i>
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="font-bold text-sm leading-snug mb-1">{cert.title}</h4>
                  <p className="text-[var(--primary-pink)] text-xs font-semibold">{cert.issuer}</p>
                </div>
                <span className="shrink-0 text-xs text-[var(--text-secondary)] font-medium">{cert.issued}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── CONTACT & FOOTER ───────────────────────────────────────────────── */}
      <section id="contact" className="py-32 px-6 mt-12 relative">
        <div className="reveal max-w-4xl mx-auto text-center">
          <p className="text-[var(--primary-pink)] text-xs font-bold tracking-widest uppercase mb-6">What's Next?</p>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Get in touch.</h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] font-medium mb-12 leading-relaxed max-w-2xl mx-auto">
            I'm currently exploring new opportunities. Whether you have a project, need a technical consultation, or just want to say hi, my inbox is always open!
          </p>
          
          <form action="https://formspree.io/f/mwvabvvv" method="POST" className="max-w-2xl mx-auto flex flex-col gap-6 text-left mt-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 group">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] group-focus-within:text-[var(--primary-pink)] transition-colors ml-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full bg-[var(--foreground)]/5 border border-[var(--border-color)] px-5 py-4 rounded-2xl text-[var(--foreground)] outline-none focus:border-[var(--primary-pink)] focus:ring-1 focus:ring-[var(--primary-pink)] transition-all placeholder-[var(--text-secondary)]/40 backdrop-blur-xl" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2 group">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] group-focus-within:text-[var(--primary-pink)] transition-colors ml-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full bg-[var(--foreground)]/5 border border-[var(--border-color)] px-5 py-4 rounded-2xl text-[var(--foreground)] outline-none focus:border-[var(--primary-pink)] focus:ring-1 focus:ring-[var(--primary-pink)] transition-all placeholder-[var(--text-secondary)]/40 backdrop-blur-xl" placeholder="john@example.com" />
              </div>
            </div>
            <div className="flex flex-col gap-2 group">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] group-focus-within:text-[var(--primary-pink)] transition-colors ml-2">Message</label>
              <textarea id="message" name="message" rows="5" required className="w-full bg-[var(--foreground)]/5 border border-[var(--border-color)] px-5 py-4 rounded-2xl text-[var(--foreground)] outline-none focus:border-[var(--primary-pink)] focus:ring-1 focus:ring-[var(--primary-pink)] transition-all placeholder-[var(--text-secondary)]/40 backdrop-blur-xl resize-none" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="mt-4 flex items-center justify-center gap-3 w-full py-4.5 text-base font-bold text-white rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] active:scale-95 shadow-[0_4px_20px_rgba(194,24,91,0.3)] hover:shadow-[0_8px_40px_rgba(194,24,91,0.5)] bg-gradient-to-r from-[var(--primary-pink)] to-[var(--dark-pink)]">
              Send Message <i className="fas fa-paper-plane ml-1"></i>
            </button>
          </form>
        </div>

        <div className="max-w-6xl mx-auto mt-32 pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-[var(--text-secondary)] font-medium">
            Designed & Built by <span className="text-[var(--primary-pink)]">{personal.name}</span>.
          </p>
          <div className="flex gap-6">
            <a href={personal.github} target="_blank" rel="noreferrer" className="text-xl text-[var(--text-secondary)] hover:text-white hover:-translate-y-1 transition-all">
              <i className="fab fa-github"></i>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-xl text-[var(--text-secondary)] hover:text-[#0A66C2] hover:-translate-y-1 transition-all">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={`mailto:${personal.email}`} className="text-xl text-[var(--text-secondary)] hover:text-[var(--primary-pink)] hover:-translate-y-1 transition-all">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
