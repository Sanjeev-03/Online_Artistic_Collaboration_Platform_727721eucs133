import React, { useEffect, useState } from "react";
import "./Update_profile.css";
import { useNavigate, useParams } from "react-router-dom";
import ResponsiveAppBar from "./navbar";
import axios from "axios";

const Update_profile = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [users, setUsers] = useState({
    artist_id: "",
    artist_Name: "",
    mail_id: "",
    experience: "",
    domain: "",
    projects_completed: "",
  });

  const {
    artist_id,
    artist_Name,
    mail_id,
    experience,
    domain,
    projects_completed,
  } = users;

  const onInputChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8888/show");
    setUsers(result.data);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !artist_id ||
      !artist_Name ||
      !mail_id ||
      !experience ||
      !domain ||
      !projects_completed
    ) {
      setError("Please fill in all fields.");
      return;
    }

    // console.log(
    //   "Registering with firstname:",
    //   firstName,
    //   "lastname:",
    //   lastName,
    //   "email:",
    //   email,
    //   "and password:",
    //   password
    // );

    e.preventDefault();
    await axios.post("http://localhost:8888/add", users);
    navigate("/Community");
  };

  return (
    <>
      <ResponsiveAppBar />
      <div className="update-profile-body">
        <div className="upform" onSubmit={handleSubmit}>
          <h2 style={{ marginBottom: "20px" }}>Update Profile</h2>
          <div className="update-form-group">
            <label>Artist Id:</label>
            <input
              type="text"
              name="artist_id"
              value={artist_id}
              onChange={onInputChange}
            />
          </div>
          <div className="update-form-group">
            <label>Artist Name:</label>
            <input
              type="text"
              name="artist_Name"
              value={artist_Name}
              onChange={onInputChange}
            />
          </div>
          <div className="update-form-group">
            <label>Email:</label>
            <input
              type="email"
              name="mail_id"
              value={mail_id}
              onChange={onInputChange}
            />
          </div>
          <div className="update-form-group">
            <label>Domain:</label>
            <input
              type="text"
              name="domain"
              value={domain}
              onChange={onInputChange}
            />
          </div>
          <div className="update-form-group">
            <label>Experience:</label>
            <input
              type="text"
              name="experience"
              value={experience}
              onChange={onInputChange}
            />
          </div>
          <div className="update-form-group">
            <label>Projects completed:</label>
            <input
              type="text"
              name="projects_completed"
              value={projects_completed}
              onChange={onInputChange}
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button
            type="submit"
            className="update-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <br />
          
        </div>
      </div>
    </>
  );
};

export default Update_profile;
