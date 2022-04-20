import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IoLogIn } from 'react-icons/io5'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { userRegister } from "../redux/opretions/user";
import { getUser } from "../redux/actions/userAction";
import { useDispatch } from "react-redux";



const Register = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const history = useHistory();
  toast.configure()
  const dispatch = useDispatch()
  const hendleChange = (e) => {
    if (e.target.name == "usename") {
      setNewUser({ ...newUser, name: e.target.value });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    userRegister(newUser).then((res) => {

      localStorage.setItem("token", res.data.token)
      dispatch(getUser(res.data.token))
      toast("registration successfully!", { type: "success" });
      setTimeout(() => {
        history.push("/");
      }, 500)

    }).catch((err) => {
      toast(err.response?.data?.message, { type: "error" });
    })
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
              <IoLogIn />Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
