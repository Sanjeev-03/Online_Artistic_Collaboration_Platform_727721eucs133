import React, { useEffect } from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { type } from "@testing-library/user-event/dist/type";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <br></br>
      <div className="tit">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to the collaboration app...")
              .pauseFor(1000)
              // .deleteAll()
              // .typeString("Welcome to the collaboration app...")
              .start();
          }}
        />
      </div>

      <br></br>
      <br></br>
      <div className="he1"data-aos="flip-up">
        <div className="p1">
          <p>
            Collaboration is a partnership, a union, the act of producing or
            making something together. Collaboration can take place between two
            people or many people, strangers or best friends. To collaborate is
            to commit to the possibility of producing an outcome greater than
            one that would be developed in a silo
          </p>
        </div>
        <div className="im1">
          <img src="/images/hm1.jpg" />
        </div>
      </div>

      <div className="he2"data-aos="zoom-in-up">
        <div className="im2">
          <img src="/images/im2.jpg" />
        </div>
        <div className="p2">
          <p>
            <b>Communication</b> builds comradeship and a sense of community as
            the young artists move toward a common goal. Researchers found that
            students working together on an art project participated more in
            thoughtful discussion than those who were working solo.
          </p>
        </div>
      </div>

      <div className="he3"data-aos="zoom-in-up">
        <div className="p3">
          <p>
            This is the place where you can find the right teammate and select
            the project and collaborate themselves and make the <b>project</b>{" "}
            best without depending on their physical location.
          </p>
        </div>
        <div className="im3">
          <img src="/images/im3.jpg" />
        </div>
      </div>
      {/* data-aos="zoom-out" data-aos-duration="3000" */}
      <div className="he4"data-aos="zoom-in-up">
        <div className="im4">
          <img src="/images/im4.png" />
        </div>
        <div className="p4">
          <p>
            "Alone we can do so little; together we can do so much." ...
            <br />
            <br />
            "If everyone is moving forward together, then success takes care of
            itself."
          </p>
        </div>
      </div>

      <div className="bt">
        <div className="pro">
          <ul className="no-bullets">
            <h4>Product</h4>
            <br />
            <li>Home</li>
            <li>Projects</li>
            <li>Community</li>
            <li>My Team</li>
          </ul>
        </div>

        <div className="pro">
          <ul className="no-bullets">
            <h4>Support</h4>
            <br />
            <li>Help</li>
            <li>need help ?</li>
            <li>+91 9361799048</li>
            <li>+91 8899334471</li>
          </ul>
        </div>

        <div className="pro">
          <ul className="no-bullets">
            <h4>Contact us on</h4>
            <br />
            <h6>Artistic collab</h6>
            <li>1671 Coastal Highway</li>
            <li>Lewes Delaware 15576</li>
            <li>USA</li>
            <li>contact@artisticcollab.com</li>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>GDPR</li>
          </ul>
        </div>

        <div className="ta">
          <a href="https://www.instagram.com/">
            <FaSquareInstagram fontSize={40} />
          </a>&nbsp;&nbsp;&nbsp;
          <a href="https://twitter.com/login?lang=en">
            <FaSquareTwitter fontSize={40} />
          </a>&nbsp;&nbsp;&nbsp;
          <a href="https://in.linkedin.com/">
            <FaLinkedinIn fontSize={40} />
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://www.facebook.com/">
            <FaSquareFacebook fontSize={40} />
          </a>
        </div>
      </div>
      <div className="copy">
        <p>
          Copyright 2020 <FaRegCopyright /> artisticcollab. All rights reserved{" "}
        </p>
      </div>
    </>
  );
};

export default Home;
