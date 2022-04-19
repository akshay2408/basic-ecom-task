import Button from "@restart/ui/esm/Button";
import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
    injectStyle();
}

const Login = () => {
    const [user, setuser] = useState({ email: "", password: "" })
    const hestory = useHistory()
    toast.configure()
    const redirect = () => {
        console.log("for redirect")
        hestory.push("/")
    }

    const handleLogin = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {

        if (e.target.name == "email") {
            setuser({ ...user, email: e.target.value })
        }
        if (e.target.name == "password") {
            setuser({ ...user, password: e.target.value })
        }

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
                        <Button  className="btn btn-success" type="submit"><a>Login</a></Button>

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