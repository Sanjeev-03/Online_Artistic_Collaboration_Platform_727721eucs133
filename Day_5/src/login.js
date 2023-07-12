// App.js
import { Link } from "react-router-dom";

import "./login.css";

function login() {
  return (
    <div className="App">
      <br></br>
      <h1>Login Form</h1>
      <fieldset>
        <div className="img">
          <form action="#" method="get">
            <label for="email">Enter Email :</label>
            <input
              style={{ marginLeft: "10px" }}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              required
            />
            <br />
            <br />
            <label for="pwd">Password :</label>
            <input
              style={{ marginLeft: "34px" }}
              type="password"
              name="pwd"
              id="pwd"
              placeholder="Enter password"
              required
            />
            <br />
            <br />
            <label>Submit OR Reset :</label>
            <br />
            <button type="reset" value="reset">
              Reset
            </button>

            
            <nav>
              <button type="submit" value="submit">
              <Link to="/home">Submit</Link>
              </button>
            </nav>      
  

            <br></br>
            <b></b>
          </form>
        </div>
      </fieldset>
    </div>
  );
}

export default login;
