import React from 'react';

// Main App component for the resume
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 p-4 sm:p-6 md:p-8 flex justify-center items-start">
      {/* Main content container with responsive width */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6 sm:p-8 md:p-10 lg:p-12">

        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-2 rounded-lg p-2 bg-indigo-50 shadow-sm">
            Adarsh Pradeep
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">@Adxrsh-17</p>
          <p className="mt-4 text-md sm:text-lg leading-relaxed text-gray-700">
            I am an aspiring AI Engineer currently pursuing a B.Tech in Computer Science and Artificial Intelligence Engineering at Amrita Vishwa Vidyapeetham. With a strong foundation in programming, problem-solving, and creative development, I am passionate about building intelligent systems that address real-world challenges.
          </p>
        </header>

        {/* Profile Summary Section */}
        <section className="mb-8 p-6 bg-blue-50 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">
            <span role="img" aria-label="pin">📌</span> Profile Summary
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Strong foundation in data structures, object-oriented programming, and machine learning.</li>
            <li>Experience in developing AI models, embedded robotic systems, and data-driven web applications.</li>
            <li>Proficient in both academic research projects and hackathon-oriented innovation.</li>
            <li>Participant in NASA Space Apps Challenge 2024 and PSG STEP Entrepreneurship Program.</li>
          </ul>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-8 p-6 bg-green-50 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
            <span role="img" aria-label="brain">🧠</span> Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg text-green-700">Languages:</h3>
              <p>Python, C++, Java, C, Dart</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-green-700">Web Technologies:</h3>
              <p>HTML, CSS, JS, Flutter, REST API</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-green-700">Databases:</h3>
              <p>MongoDB, Firebase</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-green-700">Data Analysis:</h3>
              <p>Power BI</p>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-lg text-green-700">Tools & Frameworks:</h3>
              <p>Git, GitHub, OpenCV, Regex, VS Code, MS Office</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8 p-6 bg-purple-50 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4 border-b-2 border-purple-200 pb-2">
            <span role="img" aria-label="graduation cap">🎓</span> Education
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-xl text-purple-700">B.Tech in Computer Science and Artificial Intelligence Engineering</h3>
              <p className="italic">Amrita Vishwa Vidyapeetham, Coimbatore (2023 – 2027)</p>
              <p>CGPA: 7.79 / 10</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-purple-700">12th Grade – AISSCE (2023)</h3>
              <p>Vidhya Niketan Public School, Tamil Nadu — 87%</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-purple-700">10th Grade – AISSE (2021)</h3>
              <p>Vivekam Senior Secondary School, Tamil Nadu — 91%</p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-8 p-6 bg-yellow-50 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-800 mb-4 border-b-2 border-yellow-200 pb-2">
            <span role="img" aria-label="certificate">📄</span> Certifications
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><span className="font-semibold">AI for All: From Basics to GenAI Practice</span> — NVIDIA (March 2025)</li>
            <li><span className="font-semibold">Supervised Machine Learning: Regression and Classification</span> — DeepLearning.AI (Feb 2025)</li>
            <li><span className="font-semibold">Foundations: Data, Data Everywhere</span> — Google (Nov 2024)</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="mb-8 p-6 bg-red-50 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800 mb-4 border-b-2 border-red-200 pb-2">
            <span role="img" aria-label="rocket">🚀</span> Projects
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-xl text-red-700">
                <a href="https://github.com/LitenTechnologies/matrimony-flutter-app" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">Matrimony Flutter App</a>
              </h3>
              <p className="italic">Flutter, Firebase</p>
              <p>Chat, image uploads, profile editing.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-red-700">
                <a href="https://github.com/MystCryptBust344/Campus-Network-Intelligence-System-involving-wireless-network-WiFi" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">Campus Network Intelligence System</a>
              </h3>
              <p className="italic">WiFi Monitoring</p>
              <p>WiFi monitoring dashboard.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-red-700">
                <a href="https://github.com/MystCryptBust344/Arduino-Based-Implementation-of-an-Autonomous-Cleaning-Robot" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">Autonomous Cleaning Robot (Arduino)</a>
              </h3>
              <p className="italic">Arduino</p>
              <p>Obstacle detection + path-following.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-red-700">
                <a href="https://github.com/MystCryptBust344/Metagenomic-Data-Analytics" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">Metagenomic Data Analytics</a>
              </h3>
              <p className="italic">ML</p>
              <p>Genome classification using machine learning techniques.</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-8 p-6 bg-orange-50 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-4 border-b-2 border-orange-200 pb-2">
            <span role="img" aria-label="trophy">🏆</span> Experience
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-xl text-orange-700">NASA Space Apps Challenge (Oct 2024)</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Participated in an international hackathon focused on Earth observation using open datasets.</li>
                <li>Built and presented an AI-based vacuum robot.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-orange-700">Entrepreneurship Development Program — PSG STEP (May–June 2024)</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Completed a 6-week bootcamp on innovation in drone and robotics technology.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="mb-10 p-6 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
            <span role="img" aria-label="link">🔗</span> Links
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <a href="mailto:ads.vibgyor.17@gmail.com" className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium flex items-center">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              Email
            </a>
            <a href="tel:+918807227858" className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium flex items-center">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              Phone
            </a>
            <a href="https://github.com/Adxrsh-17" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium flex items-center">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.417 2.865 8.17 6.839 9.504.499.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.909-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.116-4.555-4.949 0-1.092.39-1.983 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.29 2.747-1.022 2.747-1.022.546 1.379.202 2.398.099 2.65.64.699 1.029 1.59 1.029 2.682 0 3.841-2.339 4.681-4.566 4.929.359.307.678.915.678 1.846 0 1.334-.012 2.41-.012 2.727 0 .268.18.581.687.483C17.146 18.183 20 14.429 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd"></path></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/adarshpradeep17/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium flex items-center">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.957-.068-2.187-1.334-2.187-1.335 0-1.541 1.04-1.541 2.122v4.243H8.338V8.67h2.513v1.157h.035c.35-.664 1.204-1.363 2.47-1.363 2.64 0 3.12 1.73 3.12 3.987v4.887zM5.67 7.338a1.667 1.667 0 110-3.334 1.667 1.667 0 010 3.334z" clipRule="evenodd"></path><path fillRule="evenodd" d="M3.67 8.67H6.33V16.338H3.67V8.67z" clipRule="evenodd"></path></svg>
              LinkedIn
            </a>
            <a href="https://leetcode.com/u/adarsh_coding_17/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium flex items-center">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 1.5c4.69 0 8.5 3.81 8.5 8.5s-3.81 8.5-8.5 8.5S1.5 14.69 1.5 10 5.31 1.5 10 1.5zM9 4.5v11H8V4.5h1zm2 0v11h1V4.5h-1z"></path></svg>
              LeetCode
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm mt-8">
          <p className="italic">Let's connect and collaborate on intelligent, meaningful innovations.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
