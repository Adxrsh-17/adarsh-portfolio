import React, { useEffect, useState } from 'react';
import './App.css';

function WelcomeScreen() {
  return (
    <div className="welcome-screen">
      <div className="welcome-message">
        <h1>
          <span className="wave">👋</span> Welcome!
        </h1>
        <p>
          I'm <b>Adarsh Pradeep</b>.<br />
          Let’s explore my AI Engineering journey.
        </p>
      </div>
    </div>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showWelcome ? (
        <WelcomeScreen />
      ) : (
        <>
      {/* Sticky Navigation Bar */}
      <nav className="navbar" aria-label="Primary">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#interests">Interests</a></li>
        </ul>
      </nav>

      {/* Header / Hero With Contact Details */}
      <header className="hero" id="home">
        {/* <div className="avatar-wrap">
          <img src="your-photo.jpg" className="avatar" alt="Adarsh Pradeep" />
        </div> */}
        <h1>Adarsh Pradeep</h1>
        <p>
          Aspiring AI engineer with strong analytical and problem-solving skills.<br/>
          Passionate about developing intelligent solutions and contributing to innovative projects.
        </p>
        <div className="hero-contact">
          <a href="https://github.com/Adxrsh-17"
             title="GitHub"
             aria-label="GitHub"
             target="_blank"
             rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/adarshpradeep17/"
             title="LinkedIn"
             aria-label="LinkedIn"
             target="_blank"
             rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://leetcode.com/u/adarsh_coding_17/"
             title="LeetCode"
             aria-label="LeetCode"
             target="_blank"
             rel="noopener noreferrer">
            <i className="fa-solid fa-code"></i>
          </a>
          <a href="mailto:ads.vibgyor.17@gmail.com"
             title="Email"
             aria-label="Email"
             target="_blank"
             rel="noopener noreferrer">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </header>

      <main className="main-content">
        {/* Education */}
        <section className="section" id="education">
          <h2>Education</h2>
          <div className="entry">
            <h3>B.Tech Computer Science and Artificial Intelligence Engineering</h3>
            <span className="entry-sub">Amrita Vishwa Vidyapeetham, Coimbatore, TN | 2023-2027</span>
            <span className="badge">CGPA: 7.79/10</span>
          </div>
          <div className="entry">
            <h3>AISSCE (12th Grade)</h3>
            <span className="entry-sub">Vidhya Niketan Public School, Tamil Nadu | 2021-2023</span>
            <span className="badge">87% (Maths, Physics, Chemistry, CS, English)</span>
          </div>
          <div className="entry">
            <h3>AISSE (10th Grade)</h3>
            <span className="entry-sub">Vivekam Senior Secondary School, TN | 2021</span>
            <span className="badge">91%</span>
          </div>
        </section>

        {/* Skills & Certifications */}
        <section className="section" id="skills">
          <h2>Skills & Certifications</h2>
          <div className="entry-group">
            <div className="entry small">
              <h3>Languages</h3>
              <ul className="tags">
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>C</li>
                <li>Dart</li>
              </ul>
            </div>
            <div className="entry small">
              <h3>Tools & Technologies</h3>
              <ul className="tags">
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>OpenCV</li>
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
            <div className="entry small">
              <h3>Certifications</h3>
              <ul>
                <li>
                  <span className="badge">Feb 2025</span> AI for All: From Basics to GenAI Practice <span className="cert-org">- DeepLearning.AI</span>
                </li>
                <li>
                  <span className="badge">Mar 2025</span> Supervised ML: Regression and Classification <span className="cert-org">- NVIDIA</span>
                </li>
                <li>
                  <span className="badge">Nov 2024</span> Foundations: Data, Data Everywhere <span className="cert-org">- Google</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="section" id="projects">
          <h2>Projects</h2>
          <div className="entry">
            <h3>Matrimony Flutter App <span className="project-stack">(Flutter, Firebase)</span></h3>
            <p>
              Matrimony platform featuring chat, image uploads, and profile editing.{' '}
              <a href="https://github.com/LitenTechnologies/matrimony-flutter-app" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>
          <div className="entry">
            <h3>Campus Network Intelligence System <span className="project-stack">(WiFi Monitoring, IoT, ML)</span></h3>
            <p>
              Dashboard for monitoring WiFi network activity and optimizing campus networks.{' '}
              <a href="https://github.com/MystCryptBust344/Campus-Network-Intelligence-System-involving-wireless-network-WiFi-" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>
          <div className="entry">
            <h3>Arduino-Based Autonomous Cleaning Robot <span className="project-stack">(Robotics, Embedded)</span></h3>
            <p>
              Implementation of an autonomous cleaning robot using Arduino and sensors.{' '}
              <a href="https://github.com/MystCryptBust344/Arduino-Based-Implementation-of-an-Autonomous-Cleaning-Robot" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>
          <div className="entry">
            <h3>Metagenomic Data Analytics <span className="project-stack">(ML, Bioinformatics)</span></h3>
            <p>
              Analytics framework for metagenomic data using machine learning techniques.{' '}
              <a href="https://github.com/MystCryptBust344/Metagenomic-Data-Analytics" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>
          <div className="entry">
            <h3>WindForecast: QNN & ESN Models <span className="project-stack">(Quantum Neural, Hybrid Networks)</span></h3>
            <p>
              Wind forecasting models using Quantum Neural Networks and Echo State Networks.{' '}
              <a href="https://github.com/Adxrsh-17/WindForecast-QNN-ESN-Models" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="section" id="experience">
          <h2>Experience</h2>
          <div className="entry">
            <h3>Participant – NASA Space Apps Challenge</h3>
            <span className="entry-sub">October 2024</span>
            <p>Worked on Earth observation using open datasets.</p>
          </div>
        </section>

        {/* Technical Interests */}
        <section className="section" id="interests">
          <h2>Technical Interests</h2>
          <ul className="tags">
            <li>DSA</li>
            <li>OOPS</li>
            <li>Networks</li>
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Full Stack</li>
            <li>Mobile App Development</li>
          </ul>
        </section>
        <footer>
          <p>&copy; {new Date().getFullYear()} Adarsh Pradeep. All rights reserved.</p>
        </footer>
      </main>
      </>
      )}
    </div>
  );
}

export default App;
