import React, { useState } from 'react';
import { Mail, Linkedin, Github, Menu, X, User, Code, Briefcase, MessageSquare, GraduationCap, Award, BrainCircuit, FileText } from 'lucide-react';

// --- Data from your resume ---
const resumeData = {
    name: "Adarsh Pradeep",
    headline: "Aspiring AI engineer with strong analytical and problem-solving skills. Passionate about developing intelligent solutions and contributing to innovative projects.",
    email: "ads.vibgyor.17@gmail.com",
    socials: {
        github: "https://github.com/Adxrsh-17",
        linkedin: "https://www.linkedin.com/in/adarshpradeep17/",
        leetcode: "https://leetcode.com/u/adarsh_coding_17/",
    },
    education: [
        {
            degree: "B.Tech Computer Science and Artificial Intelligence",
            institution: "Amrita Vishwa Vidyapeetham, Coimbatore, TN",
            period: "2023 - 2027",
            details: "CGPA: 7.79/10",
        },
        {
            degree: "AISSCE (12th Grade)",
            institution: "Vidhya Niketan Public School, Tamil Nadu",
            period: "2021 - 2023",
            details: "87% in Maths, Physics, Chemistry, CS, English",
        },
    ],
    skills: {
        "Languages": ["C++", "Java", "Python", "C", "Dart"],
        "Web/App": ["HTML", "CSS", "JavaScript", "Flutter", "REST API"],
        "Database": ["MongoDB", "Firebase"],
        "Data Analysis": ["Power BI"],
        "Tools": ["OpenCV", "Regex", "VS Code"],
        "Version Control": ["Git", "GitHub"],
    },
    projects: [
        {
            title: "Matrimony Flutter App",
            description: "A full-featured matrimony app with chat, image uploads, and profile editing.",
            tags: ["Flutter", "Firebase", "Mobile App"],
            link: "https://github.com/LitenTechnologies/matrimony-flutter-app",
        },
        {
            title: "Wind Forecasting Models",
            description: "Time-series forecasting using Quantum Neural Networks (QNN) and Echo State Networks (ESN).",
            tags: ["Python", "QNN", "ESN", "Machine Learning"],
            link: "https://github.com/Adxrsh-17/WindForecast-QNN-ESN-Models",
        },
        {
            title: "Campus Network Intelligence System",
            description: "A system for monitoring WiFi network performance and visualizing data on a dashboard.",
            tags: ["Python", "Networking", "Data Viz"],
            link: "https://github.com/MystCryptBust344/Campus-Network-Intelligence-System-involving-wireless-network-WiFi-",
        },
        {
            title: "Autonomous Cleaning Robot",
            description: "An Arduino-based robot with obstacle detection and autonomous path-following capabilities.",
            tags: ["Arduino", "C++", "Robotics", "Hardware"],
            link: "https://github.com/MystCryptBust344/Arduino-Based-Implementation-of-an-Autonomous-Cleaning-Robot",
        },
        {
            title: "Metagenomic Data Analytics",
            description: "Utilized Machine Learning techniques for the classification of genome sequences.",
            tags: ["Python", "Machine Learning", "Bioinformatics"],
            link: "https://github.com/MystCryptBust344/Metagenomic-Data-Analytics",
        },
    ],
    experience: [
        {
            role: "Participant",
            company: "NASA Space Apps Challenge",
            period: "October 2024",
            description: "Worked on a project involving Earth observation using open datasets to tackle real-world problems.",
        },
        {
            role: "Innovation Bootcamp Participant",
            company: "Entrepreneurship Development Program, PSG STEP",
            period: "May - June 2024",
            description: "Completed a 6-week intensive innovation bootcamp with a focus on drone technology and its applications.",
        },
    ],
    certifications: [
        { name: "AI for All: From Basics to GenAI Practice", issuer: "NVIDIA", date: "Mar 2025" },
        { name: "Supervised ML: Regression and Classification", issuer: "DeepLearning.AI", date: "Feb 2025" },
        { name: "Foundations: Data, Data Everywhere", issuer: "Google", date: "Nov 2024" },
    ]
};


// --- Reusable Components ---
const SectionWrapper = ({ children, id, title }) => (
    <section id={id} className="py-16 md:py-20 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400 flex items-center justify-center gap-3">
            {title}
        </h2>
        <div className="max-w-4xl mx-auto">{children}</div>
    </section>
);

const SkillBadge = ({ skill }) => (
    <span className="bg-gray-700 text-cyan-300 text-sm font-medium px-3 py-1.5 rounded-full shadow-md hover:bg-gray-600 transition-all duration-300 cursor-pointer">
        {skill}
    </span>
);

// --- Page Sections ---

const HomeSection = () => (
    <div id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center text-center">
        <div className="animate-fade-in-up space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                {resumeData.name}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
                {resumeData.headline}
            </p>
            <div className="flex justify-center items-center space-x-6 pt-4">
                <a href={resumeData.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    <Github size={28} />
                </a>
                <a href={resumeData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    <Linkedin size={28} />
                </a>
                <a href={resumeData.socials.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    <Code size={28} />
                </a>
                <a href={`mailto:${resumeData.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    <Mail size={28} />
                </a>
            </div>
        </div>
    </div>
);

const AboutSection = () => (
    <SectionWrapper id="about" title="About Me & Skills">
        <div className="bg-gray-800/50 p-8 rounded-lg shadow-xl backdrop-blur-sm">
             <h3 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center gap-3"><BrainCircuit/> Skills</h3>
            <div className="space-y-6">
                {Object.entries(resumeData.skills).map(([category, skills]) => (
                    <div key={category}>
                        <h4 className="font-semibold text-lg text-gray-200 mb-3">{category}</h4>
                        <div className="flex flex-wrap gap-3">
                            {skills.map(skill => <SkillBadge key={skill} skill={skill} />)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </SectionWrapper>
);

const EducationSection = () => (
    <SectionWrapper id="education" title="Education">
        <div className="space-y-8">
            {resumeData.education.map((edu, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-lg shadow-xl backdrop-blur-sm flex items-start gap-4">
                    <div className="bg-cyan-500/20 p-3 rounded-full">
                        <GraduationCap className="text-cyan-400 h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-100">{edu.degree}</h3>
                        <p className="text-cyan-400 font-medium">{edu.institution}</p>
                        <p className="text-gray-400 text-sm mt-1">{edu.period} &bull; {edu.details}</p>
                    </div>
                </div>
            ))}
        </div>
    </SectionWrapper>
);

const ProjectsSection = () => (
    <SectionWrapper id="projects" title="My Projects">
        <div className="grid md:grid-cols-2 gap-8">
            {resumeData.projects.map((project, index) => (
                <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className="block bg-gray-800/50 rounded-lg shadow-xl overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">{project.title}</h3>
                        <p className="text-gray-300 mt-2 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-semibold bg-gray-700 text-gray-300 px-2 py-1 rounded-md">{tag}</span>
                            ))}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </SectionWrapper>
);

const ExperienceSection = () => (
     <SectionWrapper id="experience" title="Experience & Certifications">
        <div className="grid lg:grid-cols-2 gap-12">
            <div>
                 <h3 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center gap-3"><Briefcase/> Professional Experience</h3>
                 <div className="space-y-8 relative border-l-2 border-gray-700 pl-8">
                     {resumeData.experience.map((exp, index) => (
                         <div key={index} className="relative">
                            <div className="absolute -left-[38px] top-1 h-4 w-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
                             <h4 className="text-xl font-bold text-gray-100">{exp.role}</h4>
                             <p className="text-cyan-400 font-medium">{exp.company}</p>
                             <p className="text-gray-400 text-sm my-1">{exp.period}</p>
                             <p className="text-gray-300">{exp.description}</p>
                         </div>
                     ))}
                 </div>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center gap-3"><Award/> Certifications</h3>
                <div className="space-y-4">
                    {resumeData.certifications.map((cert, index) => (
                        <div key={index} className="bg-gray-800/50 p-4 rounded-lg shadow-lg flex items-center gap-4">
                             <Award className="text-cyan-400 h-6 w-6 flex-shrink-0" />
                             <div>
                                <p className="font-semibold text-gray-100">{cert.name}</p>
                                <p className="text-sm text-gray-400">{cert.issuer} &bull; {cert.date}</p>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </SectionWrapper>
);

const ContactSection = () => (
    <SectionWrapper id="contact" title="Get In Touch">
        <div className="text-center max-w-xl mx-auto">
            <p className="text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.
            </p>
            <a href={`mailto:${resumeData.email}`}
               className="inline-block bg-cyan-500 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-cyan-600 transform hover:scale-105 transition-all duration-300">
                Say Hello
            </a>
        </div>
    </SectionWrapper>
);

// --- Main App Component ---
const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleNavClick = (section) => {
        setActiveSection(section);
        setIsMenuOpen(false);
        // Use smooth scroll
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    };

    const sections = {
        home: <HomeSection />,
        about: <AboutSection />,
        education: <EducationSection />,
        projects: <ProjectsSection />,
        experience: <ExperienceSection />,
        contact: <ContactSection />,
    };

    const navLinks = [
        { id: 'home', title: 'Home', icon: <User className="w-5 h-5" /> },
        { id: 'about', title: 'Skills', icon: <Code className="w-5 h-5" /> },
        { id: 'projects', title: 'Projects', icon: <Briefcase className="w-5 h-5" /> },
        { id: 'education', title: 'Education', icon: <GraduationCap className="w-5 h-5" /> },
        { id: 'experience', title: 'Experience', icon: <FileText className="w-5 h-5" /> },
        { id: 'contact', title: 'Contact', icon: <MessageSquare className="w-5 h-5" /> },
    ];

    return (
        <div className="bg-gray-900 text-gray-100 font-sans antialiased">
            <style>{`
                html { scroll-behavior: smooth; }
                @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
                @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
                .animate-fade-in { animation: fade-in 1s ease-in-out; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
            `}</style>
            
            {/* Header & Navigation */}
            <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-cyan-500/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                                {resumeData.name}
                            </a>
                        </div>
                        <nav className="hidden md:flex md:items-center md:space-x-6">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => handleNavClick(link.id)}
                                    className={`text-base font-medium transition-colors duration-300 px-3 py-2 rounded-md ${
                                        activeSection === link.id
                                            ? 'text-cyan-400'
                                            : 'text-gray-300 hover:text-cyan-400'
                                    }`}
                                >
                                    {link.title}
                                </button>
                            ))}
                        </nav>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => handleNavClick(link.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                                        activeSection === link.id
                                            ? 'bg-cyan-500/20 text-cyan-300'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                                >
                                    {link.icon}
                                    {link.title}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main>
                <HomeSection />
                <AboutSection />
                <ProjectsSection />
                <EducationSection />
                <ExperienceSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-gray-800 py-6">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
                    <div className="flex justify-center items-center space-x-6 mb-4">
                       <a href={resumeData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><Github size={24} /></a>
                       <a href={resumeData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><Linkedin size={24} /></a>
                       <a href={resumeData.socials.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><Code size={24} /></a>
                       <a href={`mailto:${resumeData.email}`} className="hover:text-cyan-400 transition-colors duration-300"><Mail size={24} /></a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} {resumeData.name}. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
