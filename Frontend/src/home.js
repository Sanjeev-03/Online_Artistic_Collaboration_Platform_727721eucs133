import React, { useEffect } from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FaSquareInstagram,
  FaSquareTwitter,
  FaLinkedinIn,
  FaSquareFacebook,
  FaRegCopyright,
} from "react-icons/fa6";
import ResponsiveAppBar from "./navbar";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const dispatch = useDispatch();
  const Email = useSelector((state) => state.email);
  const handlechange = (e) => {
    dispatch({ type: "SET_USERNAME", payload: e.target.value });
  };

  return (
    <>
      <ResponsiveAppBar />
      <div className="container">
        <div className="tit">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome to the collaboration app...")
                .pauseFor(1000)
                .start();
            }}
          />
        </div><br/><br/>
        <h2>Welcome {Email}</h2><br/><br/>
        {/* Section 1 */}
        <div className="section" data-aos="zoom-in-up">
          <div className="section-content">
            <img src="/images/hm1.jpg" alt="Image1" />
          </div>
          <div className="section-content">
            <h2 className="hm">Collaboration</h2>
            <p>
              Collaboration is a partnership, a union, the act of producing or
              making something together. Collaboration can take place between
              two people or many people, strangers or best friends. To
              collaborate is to commit to the possibility of producing an
              outcome greater than one that would be developed in a silo.
            </p>
          </div>
        </div>
        {/* Section 2 */}
        <div className="section" data-aos="zoom-in-up">
          <div className="section-content">
            <h2 className="hm">Communication</h2>
            <p>
              <b>Communication</b> builds comradeship and a sense of community
              as the young artists move toward a common goal. Researchers found
              that students working together on an art project participated more
              in thoughtful discussion than those who were working solo.
            </p>
          </div>
          <div className="section-content">
            <img src="/images/im2.jpg" alt="Image2" />
          </div>
        </div>
        {/* Section 3 */}
        <div className="section" data-aos="zoom-in-up">
          <div className="section-content">
            <img src="/images/im3.jpg" alt="Image3" />
          </div>
          <div className="section-content">
            <h2 className="hm">Project Collaboration</h2>
            <p>
              This is the place where you can find the right teammate and select
              the project and collaborate themselves and make the <b>project</b>{" "}
              best without depending on their physical location.
            </p>
          </div>
        </div>
        {/* Section 4 */}
        <div className="section" data-aos="zoom-in-up">
          <div className="section-content">
            <h2 className="hm">Alone vs. Together</h2>
            <p>
              "Alone we can do so little; together we can do so much." ...
              <br />
              <br />
              "If everyone is moving forward together, then success takes care
              of itself."
            </p>
          </div>
          <div className="section-content">
            <img src="/images/im4.png" alt="Image4" />
          </div>
        </div>
        <br />
        <br />
        {/* Bottom Content */}
        <div className="section">
          <div className="section-content">
            <h2>Product</h2>
            <ul className="list">
              <li className="list-item">Home</li>
              <li className="list-item">Projects</li>
              <li className="list-item">Community</li>
              <li className="list-item">My Team</li>
            </ul>
          </div>
          <div className="section-content">
            <h2>Support</h2>
            <ul className="list">
              <li className="list-item">Help</li>
              <li className="list-item">need help ?</li>
              <li className="list-item">+91 9361799048</li>
              <li className="list-item">+91 8899334471</li>
            </ul>
          </div>
          <div className="section-content">
            <h2>Contact us on</h2>
            <h6 className="hm">Artistic collab</h6>
            <ul className="list">
              <li className="list-item">1671 Coastal Highway</li>
              <li className="list-item">Lewes Delaware 15576</li>
              <li className="list-item">USA</li>
              <li className="list-item">contact@artisticcollab.com</li>
              <li className="list-item">Privacy Policy</li>
              <li className="list-item">Terms of use</li>
              <li className="list-item">GDPR</li>
            </ul>
          </div>
          <div className="section-content ta">
            <a href="https://www.instagram.com/">
              <FaSquareInstagram fontSize={40} />
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://twitter.com/login?lang=en">
              <FaSquareTwitter fontSize={40} />
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://in.linkedin.com/">
              <FaLinkedinIn fontSize={40} />
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://www.facebook.com/">
              <FaSquareFacebook fontSize={40} />
            </a>
          </div>
        </div>{" "}
        <br />
        <br />
        {/* Copyright */}
        <div className="copy">
          <p>
            © {new Date().getFullYear()} artisticcollab. All rights reserved{" "}
            <FaRegCopyright />
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
