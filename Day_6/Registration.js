// App.js

import { Link } from "react-router-dom";
import "./Registeration.css";

function reg() {
  return (
    <div className="Apps">
      <h1>Registeration Form</h1>
      <fieldset>
        <div className="img">
          <form action="#" method="get">
            <label for="firstname">First Name :</label>
            <input
              style={{ marginLeft: "18px" }}
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter First Name"
              required
            />
            <br />
            <br />
            <label for="lastname">Last Name :</label>
            <input
              style={{ marginLeft: "19px" }}
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter Last Name"
              required
            />
            <br />
            <br />
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
            <label for="tel">Contact :</label>
            <input
              style={{ marginLeft: "34px" }}
              type="tel"
              name="tel"
              id="tel"
              placeholder="Enter Mobile number"
              required
            />
            <br />
            <br />
            <div className="gen">
            <label for="gender">Gender</label>
            <br />
            <br></br>
            <input type="radio" name="gender" value="" id="male" />
            Male
            <input type="radio" name="gender" value="" id="female" />
            Female
            <input type="radio" name="gender" value="" id="other" />
            Other
            </div>
            <br />
            <br />
            <div className="skills">
            <label for="date">Date of Birth :</label>
            <input
              type="date"
              name="date"
              id="date"
              placeholder="DOB"
              required
            ></input>
            <br />
            <br />
            <label for="about">Skills :</label>
            </div>
            <br ></br>
            <textarea
              name="about"
              id="about"
              cols="60"
              rows="7"
              placeholder="expert in..."
              required
            ></textarea>
            <br />
            <br />
            <label>Submit OR Reset :</label>
            <br />
            <button type="reset" value="reset">
              Reset
            </button>

            <nav>
              <button type="submit" value="submit">
              <Link to="/home" style={{textDecoration:'none',color:'white'}}>Submit</Link>
              </button>
            </nav>
            <br></br>
              
            <nav>
            <button type="button">
              <Link to="/login" style={{textDecoration:'none',color:'white'}}>Login</Link>
            </button>
            </nav>

         

            <b></b>
          </form>
        </div>
      </fieldset>
    </div>
  );
}

export default reg;
