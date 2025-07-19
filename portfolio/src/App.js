import React from "react";
import { Github, Linkedin, Mail, Code, ExternalLink, Brain, Database, Globe } from "lucide-react";

// Social Links Data
const socialLinks = [
  { label: "GitHub", href: "https://github.com/Adxrsh-17", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adarshpradeep17/", icon: Linkedin },
  { label: "LeetCode", href: "https://leetcode.com/u/adarsh_coding_17/", icon: Code },
  { label: "Email", href: "mailto:ads.vibgyor.17@gmail.com", icon: Mail },
];

// Skills with icons and categories
const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "C++", "Java", "C", "Dart"]
  },
  {
    title: "Web & Mobile",
    icon: Globe,
    skills: ["HTML/CSS", "JavaScript", "Flutter", "REST APIs"]
  },
  {
    title: "Data & AI",
    icon: Brain,
    skills: ["MongoDB", "Firebase", "Power BI", "Machine Learning"]
  },
  {
    title: "Tools",
    icon: Database,
    skills: ["Git/GitHub", "OpenCV", "VS Code", "MS Office"]
  }
];

// Projects with enhanced data
const projects = [
  {
    title: "Campus Network Intelligence System",
    description: "Advanced WiFi network monitoring and analytics dashboard with real-time insights",
    tech: ["Python", "Network Analysis", "Dashboard"],
    link: "https://github.com/MystCryptBust344/Campus-Network-Intelligence-System-involving-wireless-network-WiFi"
  },
  {
    title: "Autonomous Cleaning Robot",
    description: "Arduino-based intelligent robot with path-following and obstacle avoidance",
    tech: ["Arduino", "C++", "Robotics"],
    link: "https://github.com/MystCryptBust344/Arduino-Based-Implementation-of-an-Autonomous-Cleaning-Robot"
  },
  {
    title: "Metagenomic Data Analytics",
    description: "ML-powered genome classification system for biological data analysis",
    tech: ["Python", "ML", "Bioinformatics"],
    link: "https://github.com/MystCryptBust344/Metagenomic-Data-Analytics"
  },
  {
    title: "Wind Forecasting Models",
    description: "Advanced time series prediction using Quantum Neural Networks and Echo State Networks",
    tech: ["Python", "QNN", "Time Series"],
    link: "https://github.com/Adxrsh-17/WindForecast-QNN-ESN-Models"
  },
  {
    title: "Matrimony Flutter App",
    description: "Full-featured mobile app with chat, profiles, and image sharing capabilities",
    tech: ["Flutter", "Firebase", "Dart"],
    link: "https://github.com/LitenTechnologies/matrimony-flutter-app"
  }
];

// Card Component
function Card({ title, icon: Icon, children }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
      <div className="flex items-center space-x-3 mb-4">
        <Icon className="w-8 h-8 text-blue-400" />
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
}

// Social Link Button
const SocialLinkButton = ({ label, href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </a>
);

// Skill Badge Component
const SkillBadge = ({ skill }) => (
  <div className="inline-block bg-gray-700 text-white px-3 py-1 rounded-full text-sm m-1 hover:bg-gray-600 transition">
    {skill}
  </div>
);

// Project Card Component
const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View project">
        <ExternalLink className="w-5 h-5 text-blue-400 hover:text-blue-300" />
      </a>
    </div>
    <p className="text-gray-300 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech, i) => (
        <span
          key={i}
          className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

// Main App Component
export default function App() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Adarsh's Portfolio</h1>
        <div className="flex justify-center gap-4 flex-wrap">
          {socialLinks.map((link, index) => (
            <SocialLinkButton key={index} {...link} />
          ))}
        </div>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} title={category.title} icon={category.icon}>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <SkillBadge key={i} skill={skill} />
              ))}
            </div>
          </Card>
        ))}
      </section>
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-white text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
