import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IoLogIn } from 'react-icons/io5'

const Register = () => {
  const [newUser, setNewUser] = useState({
    usename: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const history = useHistory();

  const hendleChange = (e) => {
    if (e.target.name == "usename") {
      setNewUser({ ...newUser, usename: e.target.value });
    }
    if (e.target.name == "email") {
      setNewUser({ ...newUser, email: e.target.value });
    }
    if (e.target.name == "password") {
      setNewUser({ ...newUser, password: e.target.value });
    }
    if (e.target.name == "cpassword") {
      setNewUser({ ...newUser, cpassword: e.target.value });
    }
  };
  const Redirect = (data) => {
    console.log("userData11", data);
    localStorage.setItem("user", JSON.stringify(data));
    history.push("/login");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="register-form bg-light border border-success shadow" >
      <h4 style={{ textAlign: "center" }}>Sign up</h4>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    name="usename"
                    required
                    placeholder="UserName"
                    onChange={(e) => hendleChange(e)}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    onChange={(e) => hendleChange(e)}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    onChange={(e) => hendleChange(e)}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    name="cpassword"
                    required
                    placeholder="Confirm password"
                    onChange={(e) => hendleChange(e)}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ textAlign: "center" }}>
            <Button className="btn btn-success my-2" type="submit">
              Sign up
            </Button>
            <br />
            <Link to="/login" style={{ textDecoration: "none", color: "blue" }}>
              <IoLogIn/>Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
