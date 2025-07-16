import './App.css';

function App() {
  return (
    <div className="App">
      {/* Sidebar Navigation */}
      <nav className="sidebar" role="navigation" aria-label="Main navigation">
        <div className="sidebar-header">
          <h3>Adarsh Pradeep</h3>
        </div>
        <ul className="nav-list">
          <li><a href="#home" className="nav-link active">Home</a></li>
          <li><a href="#profile" className="nav-link">Profile</a></li>
          <li><a href="#education" className="nav-link">Education</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#interests" className="nav-link">Interests</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="main-container">

          {/* Hero */}
          <section className="hero" id="home">
            <div className="hero-content">
              <h1>Welcome to My Portfolio</h1>
              <p>Adarsh Pradeep | Aspiring AI Engineer | Building Intelligent Solutions</p>
            </div>
          </section>

          {/* Profile */}
          <section className="section" id="profile">
            <h2>Profile</h2>
            <div className="card">
              <p>I'm an aspiring AI engineer passionate about crafting intelligent solutions. Skilled in problem-solving and collaboration, I thrive on pushing the boundaries of technology in AI, ML, full-stack, and robotics.</p>
            </div>
          </section>

          {/* Education */}
          <section className="section" id="education">
            <h2>Education</h2>
            <div className="card-grid">
              <div className="card">
                <h3>B.Tech - Computer Science & AI</h3>
                <p>Amrita Vishwa Vidyapeetham, Coimbatore (2023–2027)</p>
                <p>CGPA: 7.79/10</p>
              </div>
              <div className="card">
                <h3>AISSCE (12th Grade)</h3>
                <p>Vidhya Niketan Public School, TN (2021–2023)</p>
                <p>87%</p>
              </div>
              <div className="card">
                <h3>AISSE (10th Grade)</h3>
                <p>Vivekam Senior Secondary School, TN (2021)</p>
                <p>91%</p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="section" id="skills">
            <h2>Skills & Certifications</h2>
            <div className="card-grid">
              <div className="card">
                <h3>Technical Skills</h3>
                <p><strong>Languages:</strong> C++, Java, Python, C, Dart</p>
                <p><strong>Databases:</strong> MongoDB, Firebase</p>
                <p><strong>Web/App:</strong> HTML, CSS, JavaScript, Flutter</p>
                <p><strong>Tools:</strong> VS Code, OpenCV, Git</p>
                <p><strong>Data Analysis:</strong> Power BI</p>
              </div>
              <div className="card">
                <h3>Certifications</h3>
                <ul>
                  <li>AI for All — NVIDIA (Mar 2025)</li>
                  <li>Supervised ML — DeepLearning.AI (Feb 2025)</li>
                  <li>Foundations: Data Everywhere — Google (Nov 2024)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="section" id="projects">
            <h2>Projects</h2>
            <div className="card-grid">
              <div className="card">
                <h3>Matrimony App</h3>
                <p>Flutter, Firebase</p>
                <p>Real-time chat, image uploads, profile editing.</p>
                <a href="https://github.com/Adxrsh-17/Matrimony-App" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div className="card">
                <h3>Campus Network Intelligence</h3>
                <p>WiFi Monitoring Dashboard</p>
                <a href="https://github.com/Adxrsh-17/Campus-Network-Intelligence-System-involving-wireless-network-WiFi" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div className="card">
                <h3>Autonomous Cleaning Robot</h3>
                <p>Arduino, Obstacle Avoidance</p>
                <a href="https://github.com/Adxrsh-17/Arduino-Based-Implementation-of-an-Autonomous-Cleaning-Robot" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div className="card">
                <h3>Metagenomic Analytics</h3>
                <p>ML for Genome Classification</p>
                <a href="https://github.com/Adxrsh-17/Metagenomic-Data-Analytics" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="section" id="experience">
            <h2>Experience</h2>
            <div className="card-grid">
              <div className="card">
                <h3>NASA Space Apps Challenge</h3>
                <p>Participant, Oct 2024</p>
                <p>Worked with Earth observation datasets.</p>
              </div>
              <div className="card">
                <h3>PSG STEP Bootcamp</h3>
                <p>Drones & Robotics (May–June 2024)</p>
                <p>6-week hands-on entrepreneurship program.</p>
              </div>
            </div>
          </section>

          {/* Interests */}
          <section className="section" id="interests">
            <h2>Technical Interests</h2>
            <div className="card-grid">
              <div className="card"><p>Data Structures & Algorithms</p></div>
              <div className="card"><p>Machine Learning & DL</p></div>
              <div className="card"><p>Full Stack & Mobile Dev</p></div>
            </div>
          </section>

          {/* Contact */}
          <section className="section" id="contact">
            <h2>Contact</h2>
            <div className="card">
              <p>Email: <a href="mailto:ads.vibgyor.17@gmail.com">ads.vibgyor.17@gmail.com</a></p>
              <p>LinkedIn: <a href="https://linkedin.com/in/adarshpradeep17" target="_blank" rel="noopener noreferrer">linkedin.com/in/adarshpradeep17</a></p>
              <p>GitHub: <a href="https://github.com/Adxrsh-17" target="_blank" rel="noopener noreferrer">github.com/Adxrsh-17</a></p>

              <form id="contact-form" className="contact-form">
                <label htmlFor="message">Send Me a Message:</label>
                <textarea id="message" name="message" rows="4" placeholder="Type your message here..." required></textarea>
                <button type="submit">Send</button>
              </form>
              <p id="form-response" className="form-response"></p>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer">
            <p>© 2025 Adarsh Pradeep. Built with Precision.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
