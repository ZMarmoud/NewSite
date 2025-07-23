
import React from 'react';
import './App.css';
import { FaEnvelope } from 'react-icons/fa';
<FaEnvelope />
function App() {
  return (
    <>
      {/* Header / Navigation */}
      <header>
        <div className="logo">NewSite</div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to NewSite</h1>
        <p>Professional solutions for your digital presence.</p>
        <a href="#contact" className="cta-button">Get Started</a>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>We help brands build impactful websites and applications that engage users and drive results.</p>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Web Design</li>
          <li>Frontend Development</li>
          <li>Backend Integration</li>
          <li>SEO Optimization</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Recent Projects</h2>
        <div className="project-grid">
          <div className="project-card">Project 1</div>
          <div className="project-card">Project 2</div>
          <div className="project-card">Project 3</div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 NewSite. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
