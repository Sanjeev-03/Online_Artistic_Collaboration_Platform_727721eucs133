import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import "./community.css";
import ResponsiveAppBar from "./navbar";
import axios from "axios";

function Community() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8888/show");
    setUsers(result.data);
  };

  const deleteUsers = async (id) => {
    await axios.delete(`http://localhost:8888/delete/${id}`);
    loadUsers();
  };

  return (
    <>
      <ResponsiveAppBar />

      <div className="prob">
        <div style={{ alignItems: "center" }}>
          <table style={{ color: "black", margin: 30 }}>
            <thead>
              <tr>
                <th>Artist_id:</th>
                <th>Artist_Name:</th>
                <th>Mail_id:</th>
                <th>Experience:</th>
                <th>Domain:</th>
                <th>Projects_completed:</th>
              </tr>
            </thead>
            <tbody>
              {users.map((users, index) => (
                <tr>
                  {/* <th scope="row" key={index}>
                    {index + 1}
                  </th> */}
                  <td>{users.artist_id}</td>
                  <td>{users.artist_Name}</td>
                  <td>{users.mail_id}</td>
                  <td>{users.experience}</td>
                  <td>{users.domain}</td>
                  <td>{users.projects_completed}</td>
                  {/* <td>
                    <button
                      className="update-button"
                      onClick={() => deleteUsers(users.id)}
                    >
                      Delete
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Community;

{
  /* <Container className="card-container">
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          style={{ paddingTop: "150px" }}
        >
          <Grid item>
            <Card className="card">
              <CardContent
                className="card-content"
                style={{ backgroundColor: "lightgray" }}
              >
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
              <CardContent
                className="card-content"
                style={{ backgroundColor: "lightgray" }}
              >
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
      </Container> */
}
