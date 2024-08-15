import { useEffect, useState } from "react";
import "./App.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import chatON from "./assets/chatON.svg";
import shopON from "./assets/shopON.svg";
import profile from "./assets/profile.png";

function App() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [contentKey, setContentKey] = useState<number>(0); // Key to force re-render

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-on-load");
    elements.forEach((element) => {
      element.classList.add("fade-in");
    });
  }, []);

  useEffect(() => {
    // Trigger re-render with a new key when activeSection changes
    setContentKey((prevKey) => prevKey + 1);
  }, [activeSection]);

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <div key={contentKey} className="content fade-in-on-load">
            <div className="about-me">
              <p>
                I'm a software developer from a small town called Vinkovci in Croatia. In 2020, I
                became interested in web development and over the years the love for it slowly grew.
                In December 2023, I decided to quit my job as an occupational therapist and go all
                in on web development. I specialize in React and Express.
              </p>
            </div>
          </div>
        );
      case "projects":
        return (
          <div key={contentKey} className="content fade-in-on-load">
            <div className="projects">
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
          </div>
        );
      case "contact":
        return (
          <div key={contentKey} className="content fade-in-on-load">
            <div className="contact-me">
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
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="page1 fade-in-on-load">
        <div className="header">
          <h1>
            <span>D</span>
            <span>a</span>
            <span>m</span>
            <span>i</span>
            <span>r</span>
            <span>G</span>
            <span>r</span>
            <span>o</span>
            <span>š</span>
          </h1>
          <hr />
          <p>Software Developer</p>
        </div>
        <nav className="navbar">
          <button onClick={() => setActiveSection("about")}>About Me</button>
          <button onClick={() => setActiveSection("projects")}>Projects</button>
          <button onClick={() => setActiveSection("contact")}>Contact Me</button>
        </nav>
        {renderContent()}
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
