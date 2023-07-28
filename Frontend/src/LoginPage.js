import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setEmail, setPass, setName } from "./action";
import axios from "axios";

const styles = {
  container: {
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  login: {
    width: "400px",
    padding: "40px",
    border: "2px solid black",
    borderRadius: "4px",
    backgroundColor: "#F7F7F7",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    textTransform: "uppercase",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "16px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    width: "30%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#33bbff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginLeft: "140px",
  },
  registerLink: {
    display: "block",
    marginTop: "10px",
    textAlign: "center",
    textDecoration: "none",
    color: "#333",
  },
};

function LoginPage({ email, pass, name, setEmail, setName, setPass }) {
  const check = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8181/api/v1/auth/authenticate",
        {
          email: email,
          password: pass,
        }
      );

      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      console.log(localStorage.getItem("token"));

      window.alert("Successfully Logged In");

      navigate("/home");
    } catch (error) {
      console.log(error);
      window.alert("Invalid Credentials");
    }
  };

  const navigate = useNavigate();
  const [checkpass, setCheckPass] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.login}>
        <form onSubmit={check}>
          <h2 style={styles.title}>Login</h2>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <input
              style={styles.input}
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button style={styles.button} type="submit">
            Login
          </button>
          {checkpass && alert("Successful login " + name)}
          {checkpass && navigate("/home")}
          <Link to="/signup" style={styles.registerLink}>
            Don't have an account? Register
          </Link>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name: state.login.name,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

// import React, { useState } from "react";
// import "./login.css";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const email = useSelector((state) => state.email);
//   const dispatch = useDispatch();
//   const handlechange = (e) => {
//     dispatch({ type: "SET_EMAIL", payload: e.target.value });
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter your email and password.");
//       return;
//     }

//     if (!validateEmail(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     // Handle login logic here
//     console.log("Logging in with email:", email, "and password:", password);

//     // Navigate to the home page upon successful login
//     navigate("/home");
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   return (
//     <div className="rebd">
//       <div className="login-page">
//         <br />
//         <br />
//         <h1>Login</h1>
//         <br />
//         <br />
//         <br />
//         <br />
//         {/* <br/>  */}
//         <fieldset>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;
//               <input type="email" value={email} onChange={handlechange} />
//             </div>
//             <br />
//             <div className="form-group">
//               <label>Password:</label>&nbsp;&nbsp;&nbsp;&nbsp;
//               <input
//                 type="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//               />
//               <br />
//               <br />
//             </div>
//             {error && <div className="error">{error}</div>}
//             <button type="submit" className="login-button">
//               Login
//             </button>
//             <div className="dha">
//               <p>Don't have an account?</p>
//               <Link to="/SignUp">SignUp</Link>
//             </div>
//           </form>
//         </fieldset>
//       </div>
//     </div>
//   );
// };
// export default LoginPage;
