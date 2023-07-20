import React from "react";
// import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import "./Domain.css";
import Typewriter from "typewriter-effect";
import ResponsiveAppBar from "./navbar";

function Projects() {
  return (
    <>
      <ResponsiveAppBar />
      <div className="wel">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to domain page...")
              .pauseFor(2000)
              .start();
          }}
        />

        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(3100)
              .typeString("where you can choose your project domain ...")
              .start();
          }}
        />
      </div>

      <div className="h1">

        <div className="t1">
            <img src="/images/t1h1.png" style={{ height: 480, width: 490 }} />
          </div>

        <div className="t2">
          <img src="/images/t1h2.png" style={{ height: 450, width: 460 }}/>
        </div>

      </div>


      <div className="h2">

        <div className="t3">
            <img src="/images/t1h3.png" style={{ height: 480, width: 490 }} />
          </div>

        <div className="t4">
          <img src="/images/t1h4.png" style={{ height: 450, width: 460 }}/>
        </div>

      </div>
     
      <div className="h3">

        <div className="t5">
            <img src="/images/t1h3.png" style={{ height: 480, width: 490 }} />
          </div>

        <div className="t6">
          <img src="/images/t1h4.png" style={{ height: 450, width: 460 }}/>
        </div>

      </div>








    </>
  );
}

export default Projects;
