import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Code, ExternalLink, Brain, Database, Globe } from "lucide-react";

// Enhanced Social Links Data
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

// Floating particles component (removed for simplicity)


// Basic Card Component
function Card({ title, icon: Icon, children }) {
  return (
    <div>
      <div>
        <div>
          <Icon />
        </div>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}

// Basic Social Link Button
const SocialLinkButton = ({ label, href, icon: Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <div>
      <Icon />
      {label}
    </div>
  </a>
);

// Skill Badge Component
const SkillBadge = ({ skill }) => (
  <div>
    {skill}
  </div>
);

// Project Card Component
const ProjectCard = ({ project }) => (
  <div>
    <div>
      <div>
        <h3>{project.title}</h3>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <ExternalLink />
        </a>
      </div>
      <p>{project.description}</p>
      <div>
        {project.tech.map((tech, i) => (
          <span key={i}>{tech}</span>
        ))}
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <div>
        {socialLinks.map((link, index) => (
          <SocialLinkButton key={index} {...link} />
        ))}
      </div>
      <div>
        {skillCategories.map((category, index) => (
          <Card key={index} title={category.title} icon={category.icon}>
            <div>
              {category.skills.map((skill, i) => (
                <SkillBadge key={i} skill={skill} />
              ))}
            </div>
          </Card>
        ))}
      </div>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
