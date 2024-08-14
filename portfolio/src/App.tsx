import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import chatON from "./assets/chatON.svg";
import shopON from "./assets/shopON.svg";
import profile from "./assets/profile.png";

function App() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-on-load");
    elements.forEach((element) => {
      element.classList.add("fade-in");
    });
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="about-me fade-in-on-load">
            <p>
              I'm a software developer from Vinkovci, Croatia. I specialize in React and Express.
            </p>
          </div>
        );
      case "projects":
        return (
          <div className="projects fade-in-on-load">
            <div className="project-card">
              <div className="project-image">
                <a
                  href="https://chaton-server-bgsr.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={chatON} alt="chatON" />
                </a>
              </div>
              <div className="project-details">
                <p>Social media website</p>
                <p>React, Express, Typescript, PostgresQL</p>
                <small>*Click on the image to open the website</small>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  <img src={shopON} alt="shopON" />
                </a>
              </div>
              <div className="project-details">
                <p>E-commerce website</p>
                <p>Next.js, Express, Typescript, MongoDB</p>
                <small>*Click on the image to open the website</small>
              </div>
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="contact-me fade-in-on-load">
            <div>
              <a
                href="https://www.linkedin.com/in/damir-groš-b18506299"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FaLinkedin />
                Linkedin
              </a>
            </div>
            <div>
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
          </div>
        );
      default:
        return;
    }
  };

  return (
    <div className="container">
      <div className="page1 fade-in-on-load">
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
      <div className="profileImage fade-in-on-load">
        <div>
          <img src={profile} alt="profile-image" />
        </div>
      </div>
    </div>
  );
}

export default App;
