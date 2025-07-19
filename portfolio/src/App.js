import React from "react";

const links = [
  {
    label: "Email",
    href: "mailto:ads.vibgyor.17@gmail.com",
    svg: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+918807227858",
    svg: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Adxrsh-17",
    svg: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.417 2.865 8.17 6.839 9.504.499.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.909-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.116-4.555-4.949 0-1.092.39-1.983 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.29 2.747-1.022 2.747-1.022.546 1.379.202 2.398.099 2.65.64.699 1.029 1.59 1.029 2.682 0 3.841-2.339 4.681-4.566 4.929.359.307.678.915.678 1.846 0 1.334-.012 2.41-.012 2.727 0 .268.18.581.687.483C17.146 18.183 20 14.429 20 10.017 20 4.484 15.522 0 10 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adarshpradeep17/",
    svg: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M16.338 16.338H13.67V12.16c0-.957-.068-2.187-1.334-2.187-1.335 0-1.541 1.04-1.541 2.122v4.243H8.338V8.67h2.513v1.157h.035c.35-.664 1.204-1.363 2.47-1.363 2.64 0 3.12 1.73 3.12 3.987v4.887zM5.67 7.338a1.667 1.667 0 110-3.334 1.667 1.667 0 010 3.334z"
          clipRule="evenodd"
        ></path>
        <path
          fillRule="evenodd"
          d="M3.67 8.67H6.33V16.338H3.67V8.67z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/adarsh_coding_17/",
    svg: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 1.5c4.69 0 8.5 3.81 8.5 8.5s-3.81 8.5-8.5 8.5S1.5 14.69 1.5 10 5.31 1.5 10 1.5zM9 4.5v11H8V4.5h1zm2 0v11h1V4.5h-1z"></path>
      </svg>
    ),
  },
];

function Section({ icon, title, children }) {
  return (
    <section className="mb-8 p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
      <div className="flex items-center mb-4">
        <span className="text-xl mr-2">{icon}</span>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans text-gray-800 flex items-start justify-center py-8 px-2">
      <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl overflow-hidden">
        {/* Header */}
        <header className="px-8 pt-10 pb-8 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-white">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-1">Adarsh Pradeep</h1>
          <div className="text-md text-gray-500 mb-2">@Adxrsh-17</div>
          <div className="flex flex-wrap gap-1 mt-2">
            {links.map(({ label, href, svg }) => (
              <a
                href={href}
                key={label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900 rounded px-3 py-1 text-sm font-medium mr-2 mb-2 transition"
              >
                {svg}
                {label}
              </a>
            ))}
          </div>
        </header>

        {/* Professional Summary */}
        <Section icon="📌" title="Professional Summary">
          <ul className="list-disc pl-4 space-y-1 text-gray-700 text-base">
            <li>B.Tech candidate in Computer Science & AI Engineering, Amrita Vishwa Vidyapeetham.</li>
            <li>Strong background in data structures, OOP, and machine learning technologies.</li>
            <li>Skilled in AI model development, embedded robotics, and web applications.</li>
            <li>Effective collaborator with academic and innovation experience (NASA Space Apps 2024, PSG STEP program).</li>
            <li>Keen interest in building intelligent systems addressing practical challenges.</li>
          </ul>
        </Section>

        {/* Core Skills */}
        <Section icon="🛠️" title="Core Technical Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base">
            <div>
              <span className="font-semibold">Programming:</span>
              <span> Python, C++, Java, C, Dart</span>
            </div>
            <div>
              <span className="font-semibold">Web & Mobile:</span>
              <span> HTML, CSS, Javascript, Flutter, REST API</span>
            </div>
            <div>
              <span className="font-semibold">Databases:</span>
              <span> MongoDB, Firebase</span>
            </div>
            <div>
              <span className="font-semibold">Analytics:</span>
              <span> Power BI</span>
            </div>
            <div>
              <span className="font-semibold">Frameworks & Tools:</span>
              <span> Git, GitHub, OpenCV, Regex, VS Code, MS Office</span>
            </div>
          </div>
        </Section>

        {/* Education */}
        <Section icon="🎓" title="Education">
          <ul className="space-y-4 text-base">
            <li>
              <span className="font-semibold text-gray-800">B.Tech, Computer Science & AI Engineering</span>
              <br />
              <span className="text-gray-600">Amrita Vishwa Vidyapeetham, Coimbatore (2023–2027)</span>
              <br />
              CGPA: 7.79 / 10
            </li>
            <li>
              <span className="font-semibold text-gray-800">12th Grade (AISSCE, 2023)</span>
              <br />
              Vidhya Niketan Public School, Tamil Nadu — 87%
            </li>
            <li>
              <span className="font-semibold text-gray-800">10th Grade (AISSE, 2021)</span>
              <br />
              Vivekam Senior Secondary School, Tamil Nadu — 91%
            </li>
          </ul>
        </Section>

        {/* Certifications */}
        <Section icon="📃" title="Certifications">
          <ul className="list-disc pl-4 space-y-1 text-gray-700 text-base">
            <li>
              <span className="font-semibold">AI for All: From Basics to GenAI Practice</span> — NVIDIA (March 2025)
            </li>
            <li>
              <span className="font-semibold">Supervised Machine Learning: Regression and Classification</span> — DeepLearning.AI (Feb 2025)
            </li>
            <li>
              <span className="font-semibold">Foundations: Data, Data Everywhere</span> — Google (Nov 2024)
            </li>
          </ul>
        </Section>

        {/* Projects */}
        <Section icon="🚀" title="Selected Projects">
          <ul className="space-y-5 text-base">
            <li>
              <a
                href="https://github.com/LitenTechnologies/matrimony-flutter-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 font-semibold hover:underline"
              >
                Matrimony Flutter App
              </a>
              <span className="text-sm font-normal text-gray-600 ml-2">(Flutter, Firebase)</span>
              <div className="text-gray-700">Features chat, image uploads, and profile editing.</div>
            </li>
            <li>
              <a
                href="https://github.com/MystCryptBust344/Campus-Network-Intelligence-System-involving-wireless-network-WiFi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 font-semibold hover:underline"
              >
                Campus Network Intelligence System
              </a>
              <span className="text-sm font-normal text-gray-600 ml-2">(WiFi Monitoring)</span>
              <div className="text-gray-700">Dashboard for live WiFi analytics and usage monitoring.</div>
            </li>
            <li>
              <a
                href="https://github.com/MystCryptBust344/Arduino-Based-Implementation-of-an-Autonomous-Cleaning-Robot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 font-semibold hover:underline"
              >
                Autonomous Cleaning Robot (Arduino)
              </a>
              <span className="text-sm font-normal text-gray-600 ml-2">(Arduino Robotics)</span>
              <div className="text-gray-700">Path-following and obstacle avoidance robot.</div>
            </li>
            <li>
              <a
                href="https://github.com/MystCryptBust344/Metagenomic-Data-Analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 font-semibold hover:underline"
              >
                Metagenomic Data Analytics
              </a>
              <span className="text-sm font-normal text-gray-600 ml-2">(Machine Learning)</span>
              <div className="text-gray-700">Genome classification using ML techniques.</div>
            </li>
          </ul>
        </Section>

        {/* Experience */}
        <Section icon="🏆" title="Experience & Activities">
          <ul className="space-y-3 text-base">
            <li>
              <span className="font-semibold text-gray-800">NASA Space Apps Challenge (Oct 2024):</span>
              <ul className="list-disc pl-5">
                <li>Developed and demonstrated an AI-powered vacuum robot using Earth data.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-gray-800">PSG STEP Entrepreneurship Development Program (May–June 2024):</span>
              <ul className="list-disc pl-5">
                <li>Completed 6-week training in robotics and innovation for drones.</li>
              </ul>
            </li>
          </ul>
        </Section>

        <footer className="text-center text-gray-500 text-sm py-5 px-4 bg-gray-50 border-t border-gray-100">
          <p>
            Open to collaboration and opportunities in AI, data science, and innovative technology projects.
          </p>
        </footer>
      </div>
    </div>
  );
}
