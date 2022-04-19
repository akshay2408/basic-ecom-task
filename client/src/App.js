import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Cart from "./pages/Cart";

import "./App.css";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
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
