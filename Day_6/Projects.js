import React from "react";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import "./Project.css";
import ResponsiveAppBar from "./navbar";

function Projects() {
  return (
    <Container className="card-container">
      <ResponsiveAppBar />
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{paddingTop:"150px"}}>
        <Grid item>
          <Card className="card" >
            <CardContent className="card-content" style={{backgroundColor:"lightgray"}}>
              <Typography variant="h5" component="h2" className="card-title">
                Project 1
              </Typography>
              <Typography color="textSecondary" className="card-text">
                Content for Project 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className="card">
            <CardContent className="card-content" style={{backgroundColor:"lightgray"}}>
              <Typography variant="h5" component="h2" className="card-title">
              Project 2
              </Typography>
              <Typography color="textSecondary" className="card-text">
                Content for Project 2
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Projects;

