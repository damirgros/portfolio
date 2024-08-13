import "./App.css";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="about-me">
            <p>
              My name is Damir Groš. I'm a software developer from Vinkovci, Croatia. I specialize
              in React and Express.
            </p>
          </div>
        );
      case "projects":
        return (
          <div className="projects">
            <div className="project-card">
              <div className="project-image">
                <a
                  href="https://chaton-server-bgsr.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/chatON.svg" alt="chatON" />
                </a>
              </div>
              <div className="project-details">
                <p>Social media website</p>
                <p>React, Express, Typescript</p>
                <small>
                  *Page loading time is approx. 30 seconds (a limitation of the Renders free tier
                  account) - click on the image to open the website
                </small>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/shopON.svg" alt="shopON" />
                </a>
              </div>
              <div className="project-details">
                <p>E-commerce website</p>
                <p>Next.js, Express, Typescript</p>
                <small>
                  *Page loading time is approx. 30 seconds (a limitation of the Renders free tier
                  account) - click on the image to open the website
                </small>
              </div>
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="contact-me">
            <a
              href="https://www.linkedin.com/in/damir-groš-b18506299"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaLinkedin />
              Linkedin
            </a>
            <a
              href="https://github.com/damirgros"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaGithub />
              Github
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="page1">
        <div className="header">
          <h1>Damir Groš</h1>
          <hr />
          <p>Software Developer</p>
        </div>
        <nav className="navbar">
          <button onClick={() => setActiveSection("about")}>About Me</button>
          <button onClick={() => setActiveSection("projects")}>Projects</button>
          <button onClick={() => setActiveSection("contact")}>Contact Me</button>
        </nav>
        <div className="content">{renderContent()}</div>
      </div>
      <div className="profileImage">
        <img src="/images/profile.png" alt="profile-image" />
      </div>
    </div>
  );
}

export default App;
