'use client';
import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';

const NAV_LINKS = ['home', 'experience', 'projects', 'skills', 'education', 'hackathons', 'certifications'];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [resumeDropdown, setResumeDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    };
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    NAV_LINKS.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl' : 'bg-transparent'}`}
        style={{
          background: isScrolled ? 'var(--nav-bg)' : 'transparent',
          borderBottom: isScrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 32px var(--nav-shadow)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex justify-between items-center gap-6">

          {/* Logo */}
          <div
            className="text-2xl font-black tracking-tight select-none shrink-0"
            style={{
              background: 'linear-gradient(135deg, #C2185B, #AD1457)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AP
          </div>

          {/* Nav links (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="capitalize text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ 
                  color: activeSection === s ? 'var(--primary-pink)' : 'var(--foreground)',
                  background: activeSection === s ? 'var(--nav-pill-bg)' : 'transparent',
                  border: activeSection === s ? '1px solid var(--primary-pink)' : '1px solid transparent',
                  boxShadow: activeSection === s ? '0 4px 12px rgba(194,24,91,0.15), inset 0 1px 0 rgba(255,255,255,0.06)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== s) {
                    e.currentTarget.style.borderColor = 'var(--nav-pill-border)';
                    e.currentTarget.style.background = 'var(--nav-pill-bg)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== s) {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {s}
              </a>
            ))}
          </div>

          {/* Right actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Hover Dropdown Resume Button */}
            <div 
              className="relative"
              onMouseEnter={() => setResumeDropdown(true)}
              onMouseLeave={() => setResumeDropdown(false)}
            >
              <button
                className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #C2185B, #880E4F)',
                  boxShadow: resumeDropdown ? '0 6px 24px rgba(194,24,91,0.55)' : '0 4px 16px rgba(194,24,91,0.35)',
                }}
              >
                Resume 
                <i className={`fas fa-chevron-down text-[0.6rem] transition-transform duration-300 ${resumeDropdown ? 'rotate-180' : ''}`}></i>
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute top-full right-0 mt-3 w-44 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300 origin-top-right ${resumeDropdown ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}>
                 <a href="/ADARSH_PRADEEP_RESUME.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3.5 text-sm font-bold text-[var(--foreground)] hover:bg-[var(--primary-pink)]/10 hover:text-[var(--primary-pink)] transition-colors border-b border-[var(--border-color)]">
                    <i className="fas fa-eye text-[var(--primary-pink)]"></i> View Resume
                 </a>
                 <a href="/ADARSH_PRADEEP_RESUME.pdf" download="Adarsh_Pradeep_Resume.pdf" className="flex items-center gap-3 px-4 py-3.5 text-sm font-bold text-[var(--foreground)] hover:bg-[var(--primary-pink)]/10 hover:text-[var(--primary-pink)] transition-colors">
                    <i className="fas fa-download text-[var(--primary-pink)]"></i> Download PDF
                 </a>
              </div>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-11 h-11 flex items-center justify-center rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                color: 'var(--primary-pink)',
                border: '1.5px solid var(--primary-pink)',
                background: 'var(--nav-toggle-bg)',
                boxShadow: theme === 'dark'
                  ? '0 0 0 0px rgba(194,24,91,0)'
                  : '0 0 12px rgba(194,24,91,0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#C2185B';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(194,24,91,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--nav-toggle-bg)';
                e.currentTarget.style.color = 'var(--primary-pink)';
                e.currentTarget.style.boxShadow = theme === 'dark'
                  ? '0 0 0 0px rgba(194,24,91,0)'
                  : '0 0 12px rgba(194,24,91,0.15)';
              }}
            >
              <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 transition-all duration-300 pointer-events-auto" style={{
          background: 'var(--nav-bg)',
          borderTop: '1px solid var(--nav-border)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          paddingBottom: 'env(safe-area-inset-bottom)'
        }}>
        <div className="flex justify-around items-center h-[72px] px-2 relative z-50">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className={`flex-1 flex flex-col items-center justify-center transition-colors ${activeSection === 'home' ? 'text-[var(--primary-pink)] opacity-100' : 'text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary-pink)]'}`}>
            <i className="fas fa-home text-xl mb-1.5"></i>
            <span className="text-[0.65rem] font-bold">Home</span>
          </a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className={`flex-1 flex flex-col items-center justify-center transition-colors ${activeSection === 'projects' ? 'text-[var(--primary-pink)] opacity-100' : 'text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary-pink)]'}`}>
            <i className="fas fa-briefcase text-xl mb-1.5"></i>
            <span className="text-[0.65rem] font-bold">Projects</span>
          </a>
          <button onClick={toggle} className="flex-1 flex flex-col items-center justify-center text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary-pink)] transition-colors">
            <i className={theme === 'dark' ? 'fas fa-sun text-xl mb-1.5' : 'fas fa-moon text-xl mb-1.5'}></i>
            <span className="text-[0.65rem] font-bold">Theme</span>
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`flex-1 flex flex-col items-center justify-center pb-1 transition-colors ${mobileMenuOpen ? 'text-[var(--primary-pink)] opacity-100' : 'text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary-pink)]'}`}>
            {/* Animated hamburger icon */}
            <div className="relative w-6 h-5 mb-1.5 flex flex-col justify-between items-center group">
              <span className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
              <span className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
            </div>
            <span className="text-[0.65rem] font-bold">{mobileMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>

        {/* Mobile Full Menu Overlay */}
        <div className={`fixed bottom-[72px] left-0 w-full bg-[var(--bg-card)] border-t border-[var(--border-color)] transition-transform duration-300 ease-in-out z-40 rounded-t-3xl shadow-[0_-15px_40px_rgba(0,0,0,0.15)] ${mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="p-6 pb-8 grid grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto">
            <div className="col-span-2 flex justify-between items-center mb-2 px-1">
              <span className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-wider">Navigation Menu</span>
            </div>
            {NAV_LINKS.filter(s => s !== 'home' && s !== 'projects').map(s => (
               <a key={s} href={`#${s}`} onClick={() => setMobileMenuOpen(false)} className={`capitalize text-sm font-bold text-center p-3.5 rounded-xl border flex flex-col items-center justify-center active:scale-95 transition-all shadow-sm ${activeSection === s ? 'border-[var(--primary-pink)] text-[var(--primary-pink)] bg-[var(--primary-pink)]/5' : 'border-[var(--border-color)] bg-[var(--background)] hover:border-[var(--primary-pink)] hover:text-[var(--primary-pink)]'}`}>
                  {s}
               </a>
            ))}
            
            {/* Mobile Resume Options */}
            <div className="col-span-2 mt-4 space-y-3 relative before:content-[''] before:absolute before:-top-3 before:left-4 before:right-4 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[var(--border-color)] before:to-transparent">
              <a href="/ADARSH_PRADEEP_RESUME.pdf" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 capitalize text-sm font-bold text-center p-4 rounded-xl bg-gradient-to-r from-[var(--primary-pink)] to-[var(--dark-pink)] text-white shadow-lg active:scale-95 transition-all">
                 <i className="fas fa-eye text-lg"></i> View Resume
              </a>
              <a href="/ADARSH_PRADEEP_RESUME.pdf" download="Adarsh_Pradeep_Resume.pdf" className="flex items-center justify-center gap-3 capitalize text-sm font-bold text-center p-4 rounded-xl bg-[var(--background)] border-2 border-[var(--primary-pink)] text-[var(--primary-pink)] shadow-sm active:scale-95 transition-all hover:bg-[var(--primary-pink)] hover:text-white">
                 <i className="fas fa-download text-lg"></i> Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
