import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Cart from "./pages/Cart";

import "./App.css";
import Header from "./components/Header";

function App() {
  const token = localStorage.getItem("token")
  return (
    <div className="App">
      <Header />
      <Switch>      
        
        <Route exact path="/">
         { token ? <Home /> : <Error/> }
        </Route>
        <Route exact path="/cart">
          { token ? <Cart /> : <Error/> }
        </Route>
        
        <Route path="/login">
          <div className="login">
           { !token ? <Login /> : <Error/> }
          </div>
        </Route>
        <Route path="/register">
          <div className="register">
            { !token ? <Register /> : <Error/> }
          </div>
        </Route>
       
        
        <Route path="*" exact={true} component={Error} />
      </Switch>
    </div>
  );
}

export default App;
