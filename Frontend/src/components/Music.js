import React, { useEffect, useState } from "react";
import "./Project.css";
import ResponsiveAppBar from "./navbar";
import axios from "axios";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

function Music() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:9991/show");
    setUsers(result.data);
  };

  return (
    <>
      <ResponsiveAppBar />
      <div className="probody">
        <Container className="card-container">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            style={{ paddingTop: "150px" }}
          >
            {users.map((user, index) => (
              <Grid item key={index}>
                <Card className="card">
                  <CardContent
                    className="card-content"
                    style={{ backgroundColor: "lightgray" }}
                  >
                    <Typography
                      variant="h5"
                      component="h2"
                      className="card-title"
                    >
                      Artist ID: {user.artist_id}
                    </Typography>
                    <Typography color="textSecondary" className="card-text">
                      Artist Name: {user.artist_Name}
                    </Typography>
                    <Typography color="textSecondary" className="card-text">
                      Mail ID: {user.mail_id}
                    </Typography>
                    <Typography color="textSecondary" className="card-text">
                      Projects Completed: {user.projects_completed}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Music;
