import React from "react";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import "./Project.css";
import ResponsiveAppBar from "./navbar";

function Community() {
  return (
    <Container className="card-container">
      <ResponsiveAppBar />
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{paddingTop:"150px"}}>
        <Grid item>
          <Card className="card" >
            <CardContent className="card-content" style={{backgroundColor:"lightgray"}}>
              <Typography variant="h5" component="h2" className="card-title">
                Author 1
              </Typography>
              <Typography color="textSecondary" className="card-text">
                Profile of Author 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className="card">
            <CardContent className="card-content" style={{backgroundColor:"lightgray"}}>
              <Typography variant="h5" component="h2" className="card-title">
              Author 2
              </Typography>
              <Typography color="textSecondary" className="card-text">
              Profile of Author 1
              </Typography>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent className="card-content" style={{backgroundColor:"lightgray"}}>
              <Typography variant="h5" component="h2" className="card-title">
              Author 3
              </Typography>
              <Typography color="textSecondary" className="card-text">
              Profile of Author 3
              </Typography>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent className="card-content" style={{backgroundColor:"lightgray"}}>
              <Typography variant="h5" component="h2" className="card-title">
              Author 4
              </Typography>
              <Typography color="textSecondary" className="card-text">
              Profile of Author 4
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Community;

