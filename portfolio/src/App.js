import React from "react";

// Social/Profile Links Data
const socialLinks = [
  { label: "GitHub", href: "https://github.com/Adxrsh-17", icon: "🐙" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adarshpradeep17/", icon: "🔗" },
  { label: "LeetCode", href: "https://leetcode.com/u/adarsh_coding_17/", icon: "💡" },
  { label: "Email", href: "mailto:ads.vibgyor.17@gmail.com", icon: "✉️" },
  { label: "Phone", href: "tel:+918807227858", icon: "📞" },
];

// Section Component
function Card({ title, icon, children }) {
  return (
    <div className="bg-white/90 rounded-xl shadow-md p-6 mb-6">
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-3">{icon}</span>
        <h2 className="text-lg font-bold tracking-wider text-indigo-800">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center items-center px-2 py-10">
      <div className="w-full max-w-2xl">
        {/* Main Header */}
        <div className="mb-10 bg-indigo-600 text-white rounded-lg shadow-lg px-8 py-7 text-center">
          <h1 className="text-3xl font-extrabold mb-1 tracking-tight">Adarsh Pradeep</h1>
          <div className="text-lg font-light">@Adxrsh-17</div>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {socialLinks.map(link =>
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white/20 hover:bg-white/40 text-white rounded px-3 py-1 font-medium text-base transition-all"
              >
                <span className="mr-2">{link.icon}</span>{link.label}
              </a>
            )}
          </div>
        </div>

        {/* Sections */}
        <Card icon="📑" title="Professional Summary">
          <div className="text-gray-800 text-base leading-relaxed">
            B.Tech in Computer Science & AI (Amrita Vishwa Vidyapeetham). Builder of AI models, robotics, and web apps. Hackathon innovator (NASA Space Apps 2024). Passion for intelligent, real-world solutions.
          </div>
        </Card>

        <Card icon="🧰" title="Skills">
          <ul className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
            <li><b>Languages:</b> Python, C++, Java, C, Dart</li>
            <li><b>Web & Mobile:</b> HTML, CSS, JS, Flutter, REST</li>
            <li><b>Databases:</b> MongoDB, Firebase</li>
            <li><b>Data:</b> Power BI</li>
            <li className="col-span-2"><b>Tools:</b> Git, GitHub, OpenCV, Regex, VS Code, MS Office</li>
          </ul>
        </Card>

        <Card icon="🎓" title="Education">
          <ul className="text-gray-800 space-y-2">
            <li><b>B.Tech:</b> Amrita Vishwa Vidyapeetham, 2023–27, CGPA: 7.79/10</li>
            <li><b>12th:</b> Vidhya Niketan, Tamil Nadu, 87%</li>
            <li><b>10th:</b> Vivekam Senior Secondary, Tamil Nadu, 91%</li>
          </ul>
        </Card>

        <Card icon="📃" title="Certifications">
          <ul className="text-gray-800 list-disc pl-5 space-y-1">
            <li><b>AI for All</b>, NVIDIA (Mar 2025)</li>
            <li><b>Supervised Machine Learning</b>, DeepLearning.AI (Feb 2025)</li>
            <li><b>Foundations: Data Everywhere</b>, Google (Nov 2024)</li>
          </ul>
        </Card>

        <Card icon="🚀" title="Projects">
          <ul className="text-indigo-800 font-medium space-y-2">
            <li>
              <a href="https://github.com/LitenTechnologies/matrimony-flutter-app" target="_blank" rel="noopener noreferrer">Matrimony App</a>
              <span className="text-gray-600 text-sm"> – Chat, Images, Profiles</span>
            </li>
            <li>
              <a href="https://github.com/MystCryptBust344/Campus-Network-Intelligence-System-involving-wireless-network-WiFi" target="_blank" rel="noopener noreferrer">Campus Network Intelligence System</a>
              <span className="text-gray-600 text-sm"> – WiFi dashboard</span>
            </li>
            <li>
              <a href="https://github.com/MystCryptBust344/Arduino-Based-Implementation-of-an-Autonomous-Cleaning-Robot" target="_blank" rel="noopener noreferrer">Autonomous Cleaning Robot</a>
              <span className="text-gray-600 text-sm"> – Arduino, path following</span>
            </li>
            <li>
              <a href="https://github.com/MystCryptBust344/Metagenomic-Data-Analytics" target="_blank" rel="noopener noreferrer">Metagenomic Data Analytics</a>
              <span className="text-gray-600 text-sm"> – ML genome classification</span>
            </li>
          </ul>
        </Card>

        <Card icon="🏆" title="Experience">
          <ul className="text-gray-800 space-y-1">
            <li><b>NASA Space Apps 2024:</b> Built AI vacuum robot for hackathon</li>
            <li><b>PSG STEP 2024:</b> 6-week bootcamp, robotics and drones</li>
          </ul>
        </Card>
        
        <footer className="text-center text-gray-400 text-xs mt-10">
          Open to collaborations and new opportunities.
        </footer>
      </div>
    </div>
  );
}
