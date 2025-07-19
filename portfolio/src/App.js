import React from "react";

// Social/Profile Links Data
const socialLinks = [
  { label: "GitHub", href: "https://github.com/Adxrsh-17", icon: "🐙" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adarshpradeep17/", icon: "🔗" },
  { label: "LeetCode", href: "https://leetcode.com/u/adarsh_coding_17/", icon: "💡" },
  { label: "Email", href: "mailto:ads.vibgyor.17@gmail.com", icon: "✉" },
];

// Reusable Card Component
function Card({ title, icon, children }) {
  return (
    <div className="bg-white/90 rounded-2xl shadow-xl p-6 mb-6 backdrop-blur">
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-3">{icon}</span>
        <h2 className="text-lg font-bold tracking-wide text-indigo-800">{title}</h2>
      </div>
      {children}
    </div>
  );
}

// Social Link Button
const SocialLinkButton = ({ label, href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex items-center bg-white/20 hover:bg-white/40 text-white rounded px-3 py-1 font-medium text-base transition-all shadow-sm hover:shadow-md"
  >
    <span className="mr-2">{icon}</span>{label}
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-2xl">
        
        {/* Header */}
        <div className="mb-10 bg-indigo-600 text-white rounded-xl shadow-2xl px-8 py-7 text-center">
          <img 
            src="https://avatars.githubusercontent.com/u/12345678?v=4" 
            alt="Adarsh Pradeep Avatar"
            className="mx-auto w-24 h-24 rounded-full border-4 border-white shadow-md mb-4"
          />
          <h1 className="text-3xl font-extrabold mb-1 tracking-tight">Adarsh Pradeep</h1>
          <div className="text-lg font-light">@Adxrsh-17</div>
          <div className="flex flex-wrap justify-center gap-4 mt-5">
            {socialLinks.map(link => (
              <SocialLinkButton key={link.label} {...link} />
            ))}
          </div>
        </div>

        {/* Content Cards */}
        <Card icon="📑" title="Professional Summary">
          <p className="text-gray-800 leading-relaxed text-base">
            B.Tech in Computer Science & AI at Amrita Vishwa Vidyapeetham. Passionate about AI, robotics, and full-stack development. NASA Space Apps 2024 hackathon innovator.
          </p>
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
            <li><b>B.Tech:</b> Amrita Vishwa Vidyapeetham (2023–27), CGPA: 7.79</li>
            <li><b>12th:</b> Vidhya Niketan – 87%</li>
            <li><b>10th:</b> Vivekam Senior Secondary – 91%</li>
          </ul>
        </Card>

        <Card icon="📃" title="Certifications">
          <ul className="text-gray-800 list-disc pl-5 space-y-1">
            <li><b>AI for All</b> – NVIDIA, Mar 2025</li>
            <li><b>Supervised ML</b> – DeepLearning.AI, Feb 2025</li>
            <li><b>Data Everywhere</b> – Google, Nov 2024</li>
          </ul>
        </Card>

        <Card icon="🚀" title="Projects">
          <ul className="text-indigo-800 font-medium space-y-2">
            <li>
              <a href="https://github.com/MystCryptBust344/Campus-Network-Intelligence-System-involving-wireless-network-WiFi" target="_blank" rel="noopener noreferrer">
                Campus Network Intelligence System
              </a>
              <span className="text-gray-600 text-sm"> – WiFi dashboard</span>
            </li>
            <li>
              <a href="https://github.com/MystCryptBust344/Arduino-Based-Implementation-of-an-Autonomous-Cleaning-Robot" target="_blank" rel="noopener noreferrer">
                Autonomous Cleaning Robot
              </a>
              <span className="text-gray-600 text-sm"> – Arduino, path following</span>
            </li>
            <li>
              <a href="https://github.com/MystCryptBust344/Metagenomic-Data-Analytics" target="_blank" rel="noopener noreferrer">
                Metagenomic Data Analytics
              </a>
              <span className="text-gray-600 text-sm"> – ML genome classification</span>
            </li>
            <li>
              <a href="https://github.com/Adxrsh-17/WindForecast-QNN-ESN-Models" target="_blank" rel="noopener noreferrer">
                Wind Forecasting: QNN & ESN Models
              </a>
              <span className="text-gray-600 text-sm"> – Time series prediction models</span>
            </li>
            <li>
              <a href="https://github.com/LitenTechnologies/matrimony-flutter-app" target="_blank" rel="noopener noreferrer">
                Matrimony App
              </a>
              <span className="text-gray-600 text-sm"> – Chat, Images, Profiles</span>
            </li>
          </ul>
        </Card>

        <Card icon="🏆" title="Experience">
          <ul className="text-gray-800 space-y-1">
            <li><b>NASA Space Apps 2024:</b> AI vacuum robot innovator</li>
            <li><b>PSG STEP 2024:</b> Bootcamp on robotics & drones</li>
          </ul>
        </Card>

        <footer className="text-center text-gray-500 text-xs mt-12 pb-4">
          © 2025 Adarsh Pradeep — Open to collaboration & new opportunities.
        </footer>
      </div>
    </div>
  );
}
