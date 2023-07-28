import React from "react";
import "./Domain.css";
import Typewriter from "typewriter-effect";
import ResponsiveAppBar from "./navbar";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <ResponsiveAppBar />
      <div className="wel-container">
        <div className="wel">
          Welcome to the domain page...
          <br />
          <br />
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Where you can choose your project domain...")
                .start();
            }}
          />
        </div>
      </div>

      <div className="project-container">
        <div className="project-row">
          <div className="project-item">
            <Link to="/hackethon">
              <img
                src="/images/t1h1.png"
                alt="Hackethon"
                className="project-image"
              />
            </Link>
            <b /><b />
            <div className="project-title">Hackethon</div>
          </div>

          <div className="project-item">
            <Link to="/fashion">
              <img
                src="/images/t1h2.png"
                alt="Fashion"
                className="project-image"
              />
            </Link>
            <b /><b />
            <div className="project-title">Fashion</div>
          </div>
        </div>

        <div className="project-row">
          <div className="project-item">
            <Link to="/litrary">
              <img
                src="/images/t1h3.png"
                alt="Literary"
                className="project-image"
              />
            </Link>
            <b /><b />
            <div className="project-title">Literary</div>
          </div>

          <div className="project-item">
            <Link to="/comic">
              <img
                src="/images/t1h4.png"
                alt="Comic"
                className="project-image"
              />
            </Link>
            <b /><b />
            <div className="project-title">Comic</div>
          </div>
        </div>

        <div className="project-row">
          <div className="project-item">
            <Link to="/music">
              <img
                src="/images/t1h5.png"
                alt="Music"
                className="project-image"
              />
            </Link>
            <b /><b />
            <div className="project-title">Music</div>
          </div>

          <div className="project-item">
            <Link to="/entertainer">
              <img
                src="/images/t1h6.png"
                alt="Entertainer"
                className="project-image"
              />
            </Link>
            <b /><b />
            <div className="project-title">Entertainer</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
