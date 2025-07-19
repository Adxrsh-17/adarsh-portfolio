import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Code, ExternalLink, ChevronDown, Star, Zap, Brain, Database, Globe, Smartphone } from "lucide-react";

// Enhanced Social Links Data
const socialLinks = [
  { label: "GitHub", href: "https://github.com/Adxrsh-17", icon: Github, color: "from-gray-700 to-black" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adarshpradeep17/", icon: Linkedin, color: "from-blue-500 to-blue-700" },
  { label: "LeetCode", href: "https://leetcode.com/u/adarsh_coding_17/", icon: Code, color: "from-orange-400 to-orange-600" },
  { label: "Email", href: "mailto:ads.vibgyor.17@gmail.com", icon: Mail, color: "from-red-400 to-red-600" },
];

// Skills with icons and categories
const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "C++", "Java", "C", "Dart"],
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Web & Mobile",
    icon: Globe,
    skills: ["HTML/CSS", "JavaScript", "Flutter", "REST APIs"],
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Data & AI",
    icon: Brain,
    skills: ["MongoDB", "Firebase", "Power BI", "Machine Learning"],
    color: "from-green-400 to-green-600"
  },
  {
    title: "Tools",
    icon: Database,
    skills: ["Git/GitHub", "OpenCV", "VS Code", "MS Office"],
    color: "from-indigo-400 to-indigo-600"
  }
];

// Projects with enhanced data
const projects = [
  {
    title: "Campus Network Intelligence System",
    description: "Advanced WiFi network monitoring and analytics dashboard with real-time insights",
    tech: ["Python", "Network Analysis", "Dashboard"],
    link: "https://github.com/MystCryptBust344/Campus-Network-Intelligence-System-involving-wireless-network-WiFi",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Autonomous Cleaning Robot",
    description: "Arduino-based intelligent robot with path-following and obstacle avoidance",
    tech: ["Arduino", "C++", "Robotics"],
    link: "https://github.com/MystCryptBust344/Arduino-Based-Implementation-of-an-Autonomous-Cleaning-Robot",
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Metagenomic Data Analytics",
    description: "ML-powered genome classification system for biological data analysis",
    tech: ["Python", "ML", "Bioinformatics"],
    link: "https://github.com/MystCryptBust344/Metagenomic-Data-Analytics",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Wind Forecasting Models",
    description: "Advanced time series prediction using Quantum Neural Networks and Echo State Networks",
    tech: ["Python", "QNN", "Time Series"],
    link: "https://github.com/Adxrsh-17/WindForecast-QNN-ESN-Models",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Matrimony Flutter App",
    description: "Full-featured mobile app with chat, profiles, and image sharing capabilities",
    tech: ["Flutter", "Firebase", "Dart"],
    link: "https://github.com/LitenTechnologies/matrimony-flutter-app",
    gradient: "from-pink-500 to-rose-500"
  }
];

// Floating particles component
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 50;
    const newParticles = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 20,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-white/20 rounded-full animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Card Component with glassmorphism
function Card({ title, icon: Icon, children, className = "", delay = 0 }) {
  return (
    <div 
      className={`group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 mb-8 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-3xl ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="p-3 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl mr-4 group-hover:from-white/30 group-hover:to-white/20 transition-all duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-bold text-white tracking-wide">{title}</h2>
      </div>
      {children}
    </div>
  );
}

// Enhanced Social Link Button
const SocialLinkButton = ({ label, href, icon: Icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`group relative overflow-hidden bg-gradient-to-r ${color} rounded-2xl px-6 py-3 font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
  >
    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    <div className="relative flex items-center">
      <Icon className="w-5 h-5 mr-2" />
      {label}
    </div>
  </a>
);

// Skill Badge Component
const SkillBadge = ({ skill, delay }) => (
  <div 
    className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-4 py-2 text-white font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 cursor-default"
    style={{ animationDelay: `${delay}ms` }}
  >
    {skill}
  </div>
);

// Project Card Component
const ProjectCard = ({ project, index }) => (
  <div className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105">
    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">
          {project.title}
        </h3>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 bg-white/20 rounded-xl hover:bg-white/40 transition-all duration-300 hover:scale-110"
        >
          <ExternalLink className="w-5 h-5 text-white" />
        </a>
      </div>
      <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span 
            key={i} 
            className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-3 py-1 text-sm text-white font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window
