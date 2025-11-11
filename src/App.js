import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    const moveCursor = (e) => {
      if (cursor && cursorDot) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(cursorDot, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'experience', 'certifications', 'events', 'hackathons', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e27 0%, #0f1137 50%, #0a0e27 100%)',
      color: '#e8e8e8',
      fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      position: 'relative',
      cursor: 'none',
      overflow: 'hidden'
    }}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(88, 166, 255, 0.5);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(88, 166, 255, 0.8);
        }
      `}</style>

      <div ref={cursorRef} style={{
        width: '40px',
        height: '40px',
        border: '2px solid rgba(88, 166, 255, 0.4)',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'screen'
      }} />
      <div ref={cursorDotRef} style={{
        width: '8px',
        height: '8px',
        background: 'rgba(88, 166, 255, 0.8)',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 20px rgba(88, 166, 255, 0.6)'
      }} />

      <Navigation activeSection={activeSection} />
      <HeroSection />
      <MarqueeSection />
      <ProjectsGrid />
      <ExperienceTimeline />
      <CertificationsSection />
      <EventsSection />
      <HackathonsSection />
      <SkillsCanvas />
      <ContactSection />
      <Footer />

      {/* Background Gradient Elements */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(88, 166, 255, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        bottom: '-10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(166, 88, 255, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
    </div>
  );
}

function Navigation({ activeSection }) {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
      });
    }
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Journey' },
    { id: 'certifications', label: 'Certs' },
    { id: 'events', label: 'Events' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'skills', label: 'Stack' },
    { id: 'contact', label: 'Connect' }
  ];

  return (
    <nav ref={navRef} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(10, 14, 39, 0.75)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(88, 166, 255, 0.1)',
      overflowX: 'auto'
    }}>
      <div style={{
        fontSize: '18px',
        fontWeight: 700,
        letterSpacing: '2px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        background: 'linear-gradient(135deg, #58a6ff 0%, #7dd8ff 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }} onClick={() => scrollTo('home')}>
        ADARSH
      </div>
      
      <div style={{ display: 'flex', gap: '50px', alignItems: 'center', overflowX: 'auto' }}>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            style={{
              background: 'none',
              border: 'none',
              color: activeSection === item.id ? '#58a6ff' : '#888',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              padding: '8px 0',
              fontWeight: activeSection === item.id ? 600 : 400,
              whiteSpace: 'nowrap',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => e.target.style.color = '#58a6ff'}
            onMouseLeave={(e) => {
              if (activeSection !== item.id) e.target.style.color = '#888';
            }}
          >
            {item.label}
            {activeSection === item.id && (
              <div style={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, #58a6ff 0%, transparent 100%)',
                borderRadius: '1px'
              }} />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}

function HeroSection() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3
      })
      .from(titleRef.current?.children || [], {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15
      }, '-=0.5')
      .from(descRef.current, {
        y: 30,
        opacity: 0,
        duration: 1
      }, '-=0.8')
      .from(ctaRef.current?.children || [], {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }, '-=0.5');

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (heroRef.current) {
            gsap.set(heroRef.current, {
              y: self.progress * 300,
              opacity: 1 - self.progress * 0.7
            });
          }
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const title = "Crafting Intelligent Systems";
  
  return (
    <section ref={heroRef} id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 40px',
      position: 'relative',
      overflow: 'hidden',
      marginTop: '60px'
    }}>
      <div style={{ maxWidth: '1100px', position: 'relative', zIndex: 1 }}>
        <div ref={subtitleRef} style={{
          fontSize: '12px',
          letterSpacing: '3px',
          color: '#58a6ff',
          marginBottom: '20px',
          textTransform: 'uppercase',
          fontWeight: 600
        }}>
          Welcome to my portfolio
        </div>
        
        <h1 ref={titleRef} style={{
          fontSize: 'clamp(52px, 9vw, 98px)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '30px',
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, #ffffff 0%, #b3d9ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          {title.split(' ').map((word, i) => (
            <span key={i} style={{ display: 'inline-block', marginRight: '25px' }}>
              {word}
            </span>
          ))}
        </h1>
        
        <div ref={descRef} style={{ marginBottom: '50px' }}>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.8,
            color: '#aaa',
            maxWidth: '700px',
            fontWeight: 300
          }}>
            Third-year AI enthusiast specializing in machine learning, deep learning, speech recognition, and full-stack development. Passionate about building scalable solutions that bridge theory and practice.
          </p>
        </div>

        <div ref={ctaRef} style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <ScrollButton label="Explore My Work" targetId="work" />
          <SocialLinks />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        <div style={{
          fontSize: '12px',
          color: '#888',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          Scroll to explore
        </div>
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid rgba(88, 166, 255, 0.4)',
          borderRadius: '12px',
          position: 'relative',
          animation: 'scroll-down 2s infinite'
        }}>
          <div style={{
            width: '2px',
            height: '8px',
            background: '#58a6ff',
            borderRadius: '1px',
            position: 'absolute',
            top: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'scroll-down-inner 2s infinite'
          }} />
        </div>
      </div>

      <style>{`
        @keyframes scroll-down {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes scroll-down-inner {
          0% { transform: translateX(-50%) translateY(0); opacity: 1; }
          100% { transform: translateX(-50%) translateY(20px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

function ScrollButton({ label, targetId }) {
  const buttonRef = useRef(null);

  return (
    <button
      ref={buttonRef}
      onClick={() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }}
      style={{
        padding: '14px 32px',
        background: 'linear-gradient(135deg, #58a6ff 0%, #3d8fd1 100%)',
        color: '#fff',
        border: 'none',
        fontSize: '14px',
        fontWeight: 600,
        cursor: 'pointer',
        borderRadius: '8px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 8px 24px rgba(88, 166, 255, 0.3)',
        letterSpacing: '0.5px'
      }}
      onMouseEnter={(e) => {
        gsap.to(e.target, { 
          scale: 1.05, 
          boxShadow: '0 12px 32px rgba(88, 166, 255, 0.5)',
          duration: 0.3 
        });
      }}
      onMouseLeave={(e) => {
        gsap.to(e.target, { 
          scale: 1, 
          boxShadow: '0 8px 24px rgba(88, 166, 255, 0.3)',
          duration: 0.3 
        });
      }}
    >
      {label}
    </button>
  );
}

function SocialLinks() {
  const socials = [
    { icon: 'GitHub', url: 'https://github.com/Adxrsh-17', label: 'GitHub' },
    { icon: 'LinkedIn', url: 'https://linkedin.com/in/adarshpradeep17', label: 'LinkedIn' },
    { icon: 'LeetCode', url: 'https://leetcode.com/u/adarsh_coding_17/', label: 'LeetCode' }
  ];

  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '44px',
            height: '44px',
            border: '2px solid rgba(88, 166, 255, 0.3)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            fontWeight: 600,
            color: '#aaa',
            textDecoration: 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            background: 'rgba(88, 166, 255, 0.05)'
          }}
          onMouseEnter={(e) => {
            gsap.to(e.target, { 
              scale: 1.1, 
              borderColor: '#58a6ff', 
              color: '#58a6ff',
              background: 'rgba(88, 166, 255, 0.15)',
              duration: 0.3 
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.target, { 
              scale: 1, 
              borderColor: 'rgba(88, 166, 255, 0.3)', 
              color: '#aaa',
              background: 'rgba(88, 166, 255, 0.05)',
              duration: 0.3 
            });
          }}
        >
          {social.icon.slice(0, 2)}
        </a>
      ))}
    </div>
  );
}

function MarqueeSection() {
  const skills = [
    'Python', 'C++', 'PyTorch', 'TensorFlow', 'Flutter', 'React',
    'Quantum ML', 'Computer Vision', 'NLP', 'MongoDB', 'Docker', 'Kubernetes'
  ];

  return (
    <div style={{
      padding: '80px 0',
      borderTop: '1px solid rgba(88, 166, 255, 0.1)',
      borderBottom: '1px solid rgba(88, 166, 255, 0.1)',
      overflow: 'hidden',
      background: 'rgba(88, 166, 255, 0.02)'
    }}>
      <div style={{
        display: 'flex',
        gap: '80px',
        animation: 'marquee 40s linear infinite',
        width: 'max-content'
      }}>
        {[...skills, ...skills, ...skills].map((skill, i) => (
          <span key={i} style={{
            fontSize: '28px',
            fontWeight: 700,
            color: 'rgba(88, 166, 255, 0.3)',
            whiteSpace: 'nowrap',
            letterSpacing: '-0.02em'
          }}>
            {skill}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}

function ProjectsGrid() {
  const gridRef = useRef(null);

  const projects = [
    {
      title: 'SkyFleet - Multi-Tenant Airline Ops',
      desc: 'Cloud-native airline management platform on Azure with Firebase, role-based portals',
      tags: ['Azure', 'Firebase', 'Web Dev'],
      url: 'https://github.com/Adxrsh-17/multi-tenant-airline-operations',
      year: '2025',
      highlight: true
    },
    {
      title: 'Train Scheduling - CFG & PDA',
      desc: 'Formal language theory approach to collision-free railway scheduling with automata',
      tags: ['Automata Theory', 'Python', 'Flask'],
      url: 'https://github.com/Adxrsh-17/Train-Scheduling-CFG-PDA',
      year: '2025'
    },
    {
      title: 'Lightweight ASR Architectures',
      desc: 'Optimized speech recognition models for resource-constrained environments',
      tags: ['ASR', 'Deep Learning', 'PyTorch'],
      url: 'https://github.com/Adxrsh-17/Lightweight-ASR-Architectures',
      year: '2025',
      highlight: true
    },
    {
      title: 'GMM-HMM Tamil ASR (Noisy)',
      desc: 'Gaussian Mixture Model speech transcription for noisy Tamil audio datasets',
      tags: ['Speech Recognition', 'Tamil', 'GMM-HMM'],
      url: 'https://github.com/Adxrsh-17/GMM-HMM-Speech-Transcription_Tamil_noisy',
      year: '2024'
    },
    {
      title: 'Laser Audio Transmission',
      desc: 'Optical wireless communication system transmitting audio via laser modulation',
      tags: ['Hardware', 'Signal Processing', 'IoT'],
      url: 'https://github.com/Adxrsh-17/Laser-Audio-Transmission-System',
      year: '2024'
    },
    {
      title: 'Travelitin Services',
      desc: 'Full-stack travel booking platform with itinerary management and real-time updates',
      tags: ['Full-Stack', 'Travel Tech', 'API'],
      url: 'https://github.com/travelitinservices/travelitin-services',
      year: '2024',
      highlight: true
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.project-card');
        if (cards.length > 0) {
          gsap.from(cards, {
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
          });
        }
      }
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" style={{
      padding: '140px 40px',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <SectionHeader title="Featured Projects" subtitle="WORK" />

        <div ref={gridRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px',
          marginTop: '80px'
        }}>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      ref={cardRef}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      style={{
        padding: '32px',
        background: isHovered 
          ? 'rgba(88, 166, 255, 0.1)' 
          : 'rgba(255, 255, 255, 0.03)',
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '320px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        border: project.highlight 
          ? '1px solid rgba(88, 166, 255, 0.5)' 
          : '1px solid rgba(88, 166, 255, 0.15)',
        borderRadius: '12px',
        opacity: 1,
        boxShadow: project.highlight && isHovered
          ? '0 20px 60px rgba(88, 166, 255, 0.2)'
          : 'none'
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        gsap.to(cardRef.current, { y: -10, duration: 0.3 });
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        gsap.to(cardRef.current, { y: 0, duration: 0.3 });
      }}
    >
      {project.highlight && (
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          fontSize: '11px',
          padding: '4px 10px',
          background: 'rgba(88, 166, 255, 0.2)',
          border: '1px solid rgba(88, 166, 255, 0.4)',
          borderRadius: '4px',
          color: '#58a6ff',
          fontWeight: 600,
          letterSpacing: '0.5px'
        }}>
          Featured
        </div>
      )}

      <div style={{
        fontSize: '11px',
        color: '#666',
        marginBottom: '20px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontWeight: 600
      }}>
        {project.year}
      </div>

      <h3 style={{
        fontSize: '22px',
        fontWeight: 700,
        marginBottom: '16px',
        letterSpacing: '-0.01em',
        lineHeight: 1.3
      }}>
        {project.title}
      </h3>

      <p style={{
        fontSize: '14px',
        color: '#999',
        lineHeight: 1.7,
        marginBottom: '28px',
        flex: 1
      }}>
        {project.desc}
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '20px'
      }}>
        {project.tags.map((tag) => (
          <span key={tag} style={{
            fontSize: '11px',
            padding: '6px 12px',
            background: 'rgba(88, 166, 255, 0.1)',
            border: '1px solid rgba(88, 166, 255, 0.2)',
            borderRadius: '4px',
            color: '#58a6ff',
            fontWeight: 500,
            letterSpacing: '0.3px'
          }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={{
        fontSize: '18px',
        color: '#58a6ff',
        transform: isHovered ? 'translate(6px, -6px)' : 'translate(0, 0)',
        transition: 'transform 0.3s ease',
        opacity: isHovered ? 1 : 0.5
      }}>
        ↗
      </div>
    </a>
  );
}

function ExperienceTimeline() {
  const timelineRef = useRef(null);

  const timeline = [
    {
      year: '2023 - 2027',
      title: 'B.Tech CSE AI',
      org: 'Amrita Vishwa Vidyapeetham',
      desc: 'Specializing in AI/ML, algorithms, and full-stack development with focus on research projects'
    },
    {
      year: 'Jul 2025 - Present',
      title: 'Web Developer',
      org: 'Tensor AI Club @ Amrita',
      desc: 'Building and optimizing digital platforms with modern frameworks and AI integrations'
    },
    {
      year: '2024 - Present',
      title: 'App Developer',
      org: 'Travelitin Services',
      desc: 'Full-stack mobile and web development for travel booking platform with real-time features'
    },
    {
      year: '2024',
      title: 'App Developer',
      org: 'Liten Technologies',
      desc: 'Flutter app development for matrimony platform with advanced matching algorithms'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = timelineRef.current?.querySelectorAll('.timeline-item');
      if (items && items.length > 0) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          },
          x: (i) => i % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out'
        });
      }
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" style={{
      padding: '140px 40px',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <SectionHeader title="Professional Journey" subtitle="EXPERIENCE" />

        <div ref={timelineRef} style={{ position: 'relative', marginTop: '80px' }}>
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, #58a6ff 0%, transparent 100%)',
            transform: 'translateX(-50%)'
          }} />

          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  return (
    <div
      className="timeline-item"
      style={{
        display: 'flex',
        justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
        marginBottom: '80px',
        position: 'relative'
      }}
    >
      <div style={{
        width: '45%',
        padding: '32px',
        background: 'rgba(88, 166, 255, 0.05)',
        border: '1px solid rgba(88, 166, 255, 0.15)',
        borderRadius: '12px',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(88, 166, 255, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(88, 166, 255, 0.3)';
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(88, 166, 255, 0.05)';
        e.currentTarget.style.borderColor = 'rgba(88, 166, 255, 0.15)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}>
        <div style={{
          fontSize: '11px',
          color: '#58a6ff',
          marginBottom: '12px',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          fontWeight: 600
        }}>
          {item.year}
        </div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 700,
          marginBottom: '8px'
        }}>
          {item.title}
        </h3>
        <div style={{
          fontSize: '14px',
          color: '#aaa',
          marginBottom: '16px',
          fontWeight: 500
        }}>
          {item.org}
        </div>
        <p style={{
          fontSize: '14px',
          color: '#888',
          lineHeight: 1.7
        }}>
          {item.desc}
        </p>
      </div>

      <div style={{
        position: 'absolute',
        left: '50%',
        top: '32px',
        width: '16px',
        height: '16px',
        background: '#0a0e27',
        border: '3px solid #58a6ff',
        borderRadius: '50%',
        transform: 'translateX(-50%)',
        boxShadow: '0 0 20px rgba(88, 166, 255, 0.4)'
      }} />
    </div>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div>
      <div style={{
        fontSize: '11px',
        letterSpacing: '3px',
        color: '#58a6ff',
        marginBottom: '16px',
        textTransform: 'uppercase',
        fontWeight: 700
      }}>
        {subtitle}
      </div>
      <h2 style={{
        fontSize: 'clamp(36px, 6vw, 52px)',
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        background: 'linear-gradient(135deg, #ffffff 0%, #b3d9ff 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        {title}
      </h2>
    </div>
  );
}

function CertificationsSection() {
  const certsRef = useRef(null);
  const titleRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const certifications = [
    {
      title: 'AI for All: From Basics to GenAI Practice',
      issuer: 'NVIDIA',
      date: 'March 2025',
      skill: 'Gen-AI',
      badgeColor: '#58a6ff',
      icon: '🤖'
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'DeepLearning.AI',
      date: 'February 2025',
      skill: 'Machine Learning',
      badgeColor: '#7dd8ff',
      icon: '📊'
    },
    {
      title: 'Foundations: Data, Data, Everywhere',
      issuer: 'Google',
      date: 'November 2024',
      skill: 'Data Analytics',
      badgeColor: '#58e6ff',
      icon: '📈'
    },
    {
      title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
      issuer: 'DeepLearning.AI & Stanford Online',
      date: 'November 2, 2025',
      skill: 'Advanced ML',
      badgeColor: '#5896ff',
      icon: '🧠'
    },
    {
      title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
      issuer: 'IBM',
      date: 'November 5, 2025',
      skill: 'Cloud Infra',
      badgeColor: '#6aa6ff',
      icon: '☁️'
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const ctx = gsap.context(() => {
      // Animate section title
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 50,
          scale: 0.9,
          duration: 1,
          ease: 'power3.out'
        });
      }

      if (certsRef.current) {
        const cards = certsRef.current.querySelectorAll('.cert-card');
        if (cards.length > 0) {
          // Staggered entrance animation with 3D rotation
          gsap.from(cards, {
            scrollTrigger: {
              trigger: certsRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none'
            },
            y: 100,
            opacity: 0,
            rotationY: 45,
            scale: 0.8,
            duration: 1,
            stagger: {
              each: 0.12,
              from: 'start',
              ease: 'power2.out'
            },
            ease: 'back.out(1.4)'
          });

          // Continuous floating animation
          cards.forEach((card, index) => {
            gsap.to(card, {
              y: index % 2 === 0 ? -10 : 10,
              duration: 2 + (index * 0.3),
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              delay: index * 0.2
            });
          });
        }
      }
    }, certsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="certifications" style={{
      padding: '140px 40px',
      minHeight: '90vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: `rgba(88, 166, 255, ${0.2 + (i * 0.1)})`,
              borderRadius: '50%',
              top: `${i * 20}%`,
              left: `${i * 15}%`,
              animation: `particle-float ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
        <div ref={titleRef}>
          <SectionHeader title="Professional Certifications" subtitle="CREDENTIALS" />
        </div>

        <div ref={certsRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginTop: '80px',
          perspective: '1000px'
        }}>
          {isLoaded && certifications.map((cert, i) => (
            <EnhancedCertificationCard key={i} cert={cert} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          50% { transform: translate(30px, -50px); opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}

function EnhancedCertificationCard({ cert, index }) {
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Icon pulse animation
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        scale: 1.2,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.3
      });
    }
  }, [index]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -15,
        rotationY: 5,
        scale: 1.03,
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className="cert-card"
      style={{
        padding: '36px',
        background: isHovered 
          ? `linear-gradient(135deg, rgba(88, 166, 255, 0.12) 0%, rgba(88, 166, 255, 0.05) 100%)`
          : 'rgba(88, 166, 255, 0.03)',
        border: `2px solid ${isHovered ? cert.badgeColor : 'rgba(88, 166, 255, 0.15)'}`,
        borderRadius: '16px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        opacity: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '280px',
        position: 'relative',
        overflow: 'hidden',
        transformStyle: 'preserve-3d',
        boxShadow: isHovered
          ? `0 20px 60px ${cert.badgeColor}40, 0 0 40px ${cert.badgeColor}20`
          : '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated shine effect */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: `linear-gradient(45deg, transparent 30%, ${cert.badgeColor}15 50%, transparent 70%)`,
        transform: isHovered ? 'rotate(45deg) translate(50%, 50%)' : 'rotate(45deg) translate(-100%, -100%)',
        transition: 'transform 0.6s ease',
        pointerEvents: 'none'
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div ref={iconRef} style={{
          fontSize: '48px',
          marginBottom: '20px',
          display: 'inline-block',
          filter: isHovered ? `drop-shadow(0 0 12px ${cert.badgeColor})` : 'none',
          transition: 'filter 0.3s ease'
        }}>
          {cert.icon}
        </div>

        <h3 style={{
          fontSize: '18px',
          fontWeight: 700,
          marginBottom: '12px',
          lineHeight: 1.3,
          color: isHovered ? cert.badgeColor : '#fff',
          transition: 'color 0.3s ease'
        }}>
          {cert.title}
        </h3>

        <div style={{
          fontSize: '13px',
          color: '#aaa',
          marginBottom: '8px',
          fontWeight: 500
        }}>
          {cert.issuer}
        </div>

        <div style={{
          fontSize: '12px',
          color: '#777',
          marginBottom: '20px'
        }}>
          {cert.date}
        </div>

        <div style={{ marginTop: 'auto' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: `${cert.badgeColor}22`,
            border: `2px solid ${cert.badgeColor}`,
            borderRadius: '8px',
            fontSize: '12px',
            color: cert.badgeColor,
            fontWeight: 700,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            boxShadow: isHovered ? `0 0 20px ${cert.badgeColor}40` : 'none',
            transition: 'box-shadow 0.3s ease'
          }}>
            {cert.skill}
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '80px',
        height: '80px',
        background: `radial-gradient(circle at top right, ${cert.badgeColor}30, transparent)`,
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }} />
    </div>
  );
}

function EventsSection() {
  const eventsRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const events = [
    {
      title: 'Technology Based Entrepreneurship Development Programme',
      org: 'PSG STEP',
      date: 'May - June 2024',
      desc: '6-week innovation bootcamp on drones, robotics, and startup methodology',
      badgeColor: '#a658ff'
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const ctx = gsap.context(() => {
      if (eventsRef.current) {
        const cards = eventsRef.current.querySelectorAll('.event-card');
        if (cards.length > 0) {
          gsap.from(cards, {
            scrollTrigger: {
              trigger: eventsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            },
            y: 80,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
          });
        }
      }
    }, eventsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="events" style={{
      padding: '140px 40px',
      minHeight: '60vh',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <SectionHeader title="Events" subtitle="SPECIAL EVENTS" />

        <div ref={eventsRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginTop: '80px'
        }}>
          {isLoaded && events.map((event, i) => (
            <EventCard key={i} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, index }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      className="event-card"
      style={{
        padding: '28px',
        background: isHovered 
          ? 'rgba(166, 88, 255, 0.1)' 
          : 'rgba(166, 88, 255, 0.03)',
        border: '1px solid rgba(166, 88, 255, 0.15)',
        borderRadius: '12px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        opacity: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '240px'
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        if (cardRef.current) {
          gsap.to(cardRef.current, { y: -8, duration: 0.3 });
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (cardRef.current) {
          gsap.to(cardRef.current, { y: 0, duration: 0.3 });
        }
      }}
    >
      <div style={{
        fontSize: '32px',
        fontWeight: 700,
        color: event.badgeColor,
        marginBottom: '16px',
        letterSpacing: '-0.02em'
      }}>
        ■
      </div>

      <h3 style={{
        fontSize: '16px',
        fontWeight: 700,
        marginBottom: '10px',
        lineHeight: 1.3,
        color: '#fff'
      }}>
        {event.title}
      </h3>

      <div style={{
        fontSize: '13px',
        color: '#aaa',
        marginBottom: '6px',
        fontWeight: 500
      }}>
        {event.org}
      </div>

      <div style={{
        fontSize: '11px',
        color: '#777',
        marginBottom: '12px'
      }}>
        {event.date}
      </div>

      <p style={{
        fontSize: '13px',
        color: '#888',
        marginBottom: '16px',
        lineHeight: 1.5
      }}>
        {event.desc}
      </p>

      <div style={{ marginTop: 'auto' }}>
        <div style={{
          display: 'inline-block',
          padding: '6px 12px',
          background: `rgba(166, 88, 255, 0.12)`,
          border: `1px solid ${event.badgeColor}33`,
          borderRadius: '6px',
          fontSize: '11px',
          color: event.badgeColor,
          fontWeight: 600,
          letterSpacing: '0.3px'
        }}>
          Event
        </div>
      </div>
    </div>
  );
}

function HackathonsSection() {
  const hackathonsRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const hackathons = [
    {
      title: 'NASA Space Apps Challenge',
      org: 'Global Hackathon',
      date: 'October 2024',
      desc: 'Earth observation & climate monitoring with international team',
      badgeColor: '#ffa658'
    },
    {
      title: 'Sparkathon | Converge',
      org: 'Walmart Global Tech',
      date: 'November 2025',
      desc: 'Certificate of Appreciation for participating in Walmart Global Tech\'s open innovation challenge',
      badgeColor: '#ffa658'
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const ctx = gsap.context(() => {
      if (hackathonsRef.current) {
        const cards = hackathonsRef.current.querySelectorAll('.hackathon-card');
        if (cards.length > 0) {
          gsap.from(cards, {
            scrollTrigger: {
              trigger: hackathonsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            },
            y: 80,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
          });
        }
      }
    }, hackathonsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hackathons" style={{
      padding: '140px 40px',
      minHeight: '80vh',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <SectionHeader title="Hackathons & Challenges" subtitle="COMPETITIONS" />

        <div ref={hackathonsRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginTop: '80px'
        }}>
          {isLoaded && hackathons.map((hackathon, i) => (
            <HackathonCard key={i} hackathon={hackathon} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HackathonCard({ hackathon, index }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      className="hackathon-card"
      style={{
        padding: '28px',
        background: isHovered 
          ? 'rgba(255, 166, 88, 0.1)' 
          : 'rgba(255, 166, 88, 0.03)',
        border: '1px solid rgba(255, 166, 88, 0.15)',
        borderRadius: '12px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        opacity: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '240px'
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        if (cardRef.current) {
          gsap.to(cardRef.current, { y: -8, duration: 0.3 });
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (cardRef.current) {
          gsap.to(cardRef.current, { y: 0, duration: 0.3 });
        }
      }}
    >
      <div style={{
        fontSize: '32px',
        fontWeight: 700,
        color: hackathon.badgeColor,
        marginBottom: '16px',
        letterSpacing: '-0.02em'
      }}>
        ◇
      </div>

      <h3 style={{
        fontSize: '16px',
        fontWeight: 700,
        marginBottom: '10px',
        lineHeight: 1.3,
        color: '#fff'
      }}>
        {hackathon.title}
      </h3>

      <div style={{
        fontSize: '13px',
        color: '#aaa',
        marginBottom: '6px',
        fontWeight: 500
      }}>
        {hackathon.org}
      </div>

      <div style={{
        fontSize: '11px',
        color: '#777',
        marginBottom: '12px'
      }}>
        {hackathon.date}
      </div>

      <p style={{
        fontSize: '13px',
        color: '#888',
        marginBottom: '16px',
        lineHeight: 1.5
      }}>
        {hackathon.desc}
      </p>

      <div style={{ marginTop: 'auto' }}>
        <div style={{
          display: 'inline-block',
          padding: '6px 12px',
          background: `rgba(255, 166, 88, 0.12)`,
          border: `1px solid ${hackathon.badgeColor}33`,
          borderRadius: '6px',
          fontSize: '11px',
          color: hackathon.badgeColor,
          fontWeight: 600,
          letterSpacing: '0.3px'
        }}>
          Hackathon
        </div>
      </div>
    </div>
  );
}

function SkillsCanvas() {
  const skillsRef = useRef(null);

  const skills = [
    { name: 'Python', size: 85, proficiency: 90 },
    { name: 'C++', size: 75, proficiency: 80 },
    { name: 'PyTorch', size: 80, proficiency: 85 },
    { name: 'TensorFlow', size: 70, proficiency: 75 },
    { name: 'Flutter', size: 65, proficiency: 80 },
    { name: 'React', size: 70, proficiency: 75 },
    { name: 'Quantum ML', size: 75, proficiency: 70 },
    { name: 'Computer Vision', size: 72, proficiency: 82 },
    { name: 'MongoDB', size: 60, proficiency: 75 },
    { name: 'Docker', size: 65, proficiency: 78 },
    { name: 'Kubernetes', size: 60, proficiency: 72 },
    { name: 'Git', size: 55, proficiency: 90 }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (skillsRef.current) {
        const bubbles = skillsRef.current.querySelectorAll('.skill-bubble');
        if (bubbles.length > 0) {
          gsap.from(bubbles, {
            scrollTrigger: {
              trigger: skillsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            },
            scale: 0,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: 'back.out(1.7)'
          });
        }
      }
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" style={{
      padding: '140px 40px',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <SectionHeader title="Technical Stack" subtitle="SKILLS & TOOLS" />

        <div ref={skillsRef} style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
          padding: '80px 0'
        }}>
          {skills.map((skill, i) => (
            <SkillBubble key={i} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBubble({ skill }) {
  const bubbleRef = useRef(null);

  return (
    <div
      ref={bubbleRef}
      className="skill-bubble"
      style={{
        width: `${skill.size}px`,
        height: `${skill.size}px`,
        borderRadius: '50%',
        background: 'rgba(88, 166, 255, 0.08)',
        border: '2px solid rgba(88, 166, 255, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: `${skill.size / 6}px`,
        fontWeight: 700,
        color: '#aaa',
        cursor: 'pointer',
        animation: 'float 3s ease-in-out infinite',
        opacity: 1,
        transition: 'all 0.3s ease',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        gsap.to(e.target, {
          scale: 1.2,
          background: 'rgba(88, 166, 255, 0.15)',
          borderColor: '#58a6ff',
          color: '#58a6ff',
          duration: 0.3
        });
      }}
      onMouseLeave={(e) => {
        gsap.to(e.target, {
          scale: 1,
          background: 'rgba(88, 166, 255, 0.08)',
          borderColor: 'rgba(88, 166, 255, 0.15)',
          color: '#aaa',
          duration: 0.3
        });
      }}
    >
      {skill.name}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </div>
  );
}

function ContactSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      if (rightRef.current) {
        const items = rightRef.current.querySelectorAll('.contact-item');
        if (items.length > 0) {
          gsap.from(items, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none'
            },
            x: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contacts = [
    { label: 'Email', value: 'ads.vibgyor.17@gmail.com', url: 'mailto:ads.vibgyor.17@gmail.com' },
    { label: 'GitHub', value: 'Adxrsh-17', url: 'https://github.com/Adxrsh-17' },
    { label: 'LinkedIn', value: 'adarshpradeep17', url: 'https://linkedin.com/in/adarshpradeep17' },
    { label: 'LeetCode', value: 'adarsh_coding_17', url: 'https://leetcode.com/u/adarsh_coding_17/' }
  ];

  return (
    <section ref={sectionRef} id="contact" style={{
      padding: '140px 40px',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '80px',
          alignItems: 'center'
        }}>
          <div ref={leftRef}>
            <h2 style={{
              fontSize: 'clamp(36px, 6vw, 52px)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '30px',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #ffffff 0%, #b3d9ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Let's Connect
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#aaa',
              lineHeight: 1.8,
              maxWidth: '500px'
            }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>
          </div>

          <div ref={rightRef}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contacts.map((contact, i) => (
                <ContactItem key={i} contact={contact} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ contact }) {
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef(null);

  return (
    <a
      ref={itemRef}
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-item"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 24px',
        background: isHovered 
          ? 'rgba(88, 166, 255, 0.1)' 
          : 'rgba(88, 166, 255, 0.03)',
        border: '1px solid rgba(88, 166, 255, 0.15)',
        borderRadius: '8px',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: 1
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        gsap.to(itemRef.current, { x: 10, duration: 0.3 });
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        gsap.to(itemRef.current, { x: 0, duration: 0.3 });
      }}
    >
      <div>
        <div style={{
          fontSize: '11px',
          color: '#58a6ff',
          marginBottom: '6px',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          fontWeight: 700
        }}>
          {contact.label}
        </div>
        <div style={{
          fontSize: '15px',
          color: isHovered ? '#58a6ff' : '#aaa',
          fontWeight: 600,
          transition: 'color 0.3s ease'
        }}>
          {contact.value}
        </div>
      </div>
      <div style={{
        fontSize: '18px',
        color: '#58a6ff',
        opacity: isHovered ? 1 : 0.5,
        transform: isHovered ? 'translate(5px, -5px)' : 'translate(0, 0)',
        transition: 'all 0.3s ease'
      }}>
        ↗
      </div>
    </a>
  );
}

function Footer() {
  const footerLinks = {
    explore: [
      { label: 'About', href: '#home' },
      { label: 'Projects', href: '#work' },
      { label: 'Experience', href: '#experience' },
      { label: 'Certifications', href: '#certifications' },
      { label: 'Events', href: '#events' },
      { label: 'Hackathons', href: '#hackathons' },
      { label: 'Skills', href: '#skills' }
    ],
    connect: [
      { label: 'GitHub', href: 'https://github.com/Adxrsh-17' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/adarshpradeep17' },
      { label: 'LeetCode', href: 'https://leetcode.com/u/adarsh_coding_17/' },
      { label: 'Email', href: 'mailto:ads.vibgyor.17@gmail.com' }
    ]
  };

  return (
    <footer style={{
      padding: '60px 40px 40px',
      borderTop: '1px solid rgba(88, 166, 255, 0.1)',
      background: 'rgba(10, 14, 39, 0.8)',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '60px',
          marginBottom: '60px'
        }}>
          <div>
            <div style={{
              fontSize: '22px',
              fontWeight: 800,
              letterSpacing: '2px',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #58a6ff 0%, #7dd8ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              ADARSH
            </div>
            <p style={{
              fontSize: '13px',
              color: '#888',
              lineHeight: 1.8,
              marginBottom: '20px'
            }}>
              AI Engineer & Full-Stack Developer crafting intelligent systems through machine learning and innovative software engineering.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: 'GH', url: 'https://github.com/Adxrsh-17' },
                { icon: 'LI', url: 'https://linkedin.com/in/adarshpradeep17' },
                { icon: 'EM', url: 'mailto:ads.vibgyor.17@gmail.com' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(88, 166, 255, 0.05)',
                    border: '1px solid rgba(88, 166, 255, 0.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#58a6ff',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(88, 166, 255, 0.1)';
                    e.target.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(88, 166, 255, 0.05)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1px',
              marginBottom: '20px',
              textTransform: 'uppercase',
              color: '#58a6ff'
            }}>
              Explore
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {footerLinks.explore.map((link, i) => (
                <li key={i} style={{ marginBottom: '12px' }}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '13px',
                      color: '#888',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#58a6ff'}
                    onMouseLeave={(e) => e.target.style.color = '#888'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1px',
              marginBottom: '20px',
              textTransform: 'uppercase',
              color: '#58a6ff'
            }}>
              Connect
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {footerLinks.connect.map((link, i) => (
                <li key={i} style={{ marginBottom: '12px' }}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '13px',
                      color: '#888',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#58a6ff'}
                    onMouseLeave={(e) => e.target.style.color = '#888'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{
          paddingTop: '30px',
          borderTop: '1px solid rgba(88, 166, 255, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{
            fontSize: '12px',
            color: '#666'
          }}>
            © {new Date().getFullYear()} Adarsh Pradeep. All rights reserved.
          </div>
          
          <div style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'center'
          }}>
            <a
              href="#"
              style={{
                fontSize: '12px',
                color: '#666',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#58a6ff'}
              onMouseLeave={(e) => e.target.style.color = '#666'}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                fontSize: '12px',
                color: '#666',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#58a6ff'}
              onMouseLeave={(e) => e.target.style.color = '#666'}
            >
              Terms of Service
            </a>
            <div style={{
              fontSize: '11px',
              color: '#555',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              Built with 
              <span style={{ color: '#58a6ff' }}>React</span> & 
              <span style={{ color: '#7dd8ff' }}>GSAP</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
