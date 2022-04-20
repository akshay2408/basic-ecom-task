import Button from "@restart/ui/esm/Button";
import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser } from "../redux/actions/userAction";
import {userLogin} from "../redux/operations/user";

const Login = () => {
    const [user, setuser] = useState({ email: "", password: "" })
    const dispatch = useDispatch();
    const history = useHistory()
    const handleLogin = (e) => {
        e.preventDefault()
        userLogin(user).then((res) => {
            localStorage.setItem("token", res.data.token)
            dispatch(getUser(res.data.token))
            toast("login successfully!", { type: "success" });
            history.push("/");
        }).catch((err) => {
            toast(err.response.data, { type: "error" });
        })
    }

    const handleChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div className="login-form bg-light border border-success">
            <h4 style={{ textAlign: "center" }}>Login</h4>
            <form onSubmit={(e) => handleLogin(e)}>
                <table>
                    <tbody>
                        <tr>
                            <td><input type="email" name="email" required placeholder="Email" onChange={(e) => handleChange(e)}></input></td>
                        </tr>
                        <tr>
                            <td><input type="password" name="password" required placeholder="Password" onChange={(e) => handleChange(e)}></input></td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ textAlign: "center" }}>
                    <div style={{ margin: "10px" }}>
                        <Button className="btn btn-success" type="submit">Login</Button>

                    </div>
                    <Link to="/register" style={{ textDecoration: "none", color: "blue" }}>
                        Sign up
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login;