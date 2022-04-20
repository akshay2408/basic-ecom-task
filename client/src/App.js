import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import { toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

import "./App.css";
import Header from "./components/Header";
import { getUser } from "./redux/actions/userAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

if (typeof window !== "undefined") {
  injectStyle();
}

function App() {
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      dispatch(getUser(token))
    } else {
      history.push("/login")
    }

  }, [])

  toast.configure()

  // const userinfo = JSON.parse(localStorage.getItem("userinfo"))

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          {/* {userinfo?.token ?  */}
          <Home />
          {/* : <Login />} */}
        </Route>
        <Route exact path="/cart">
          {/* {userinfo?.token ? */}
          <Cart />
          {/* :<Login />} */}
        </Route>
        <Route path="/login">
          <div className="login">
            <Login />
          </div>
        </Route>
        <Route path="/register">
          <div className="register">
            <Register />
          </div>
        </Route>


        <Route path="*" exact={true} component={Error} />
      </Switch>
    </div>
  );
}

export default App;
