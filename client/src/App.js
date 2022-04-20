import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import { toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import "./App.css";
import Header from "./components/Header";
import { getUser } from "./redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

if (typeof window !== "undefined") {
  injectStyle();
}

function App() {
  const dispatch = useDispatch()
  const history = useHistory();
  const isLoggedIn = useSelector(state => state?.userReducer?.isLoggedIn);
  
  useEffect(() => {
    toast.configure()
    const token = localStorage.getItem("token")
    if (token) {
      dispatch(getUser(token))
    } else {
      history.push("/login")
    }
  }, [dispatch, history])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Home /> : <div className="login"> <Login /></div>}
        </Route>
        <Route exact path="/cart">
          {isLoggedIn ? <Cart /> : <div className="login"> <Login /> </div>}
        </Route>
        <Route path="/login">
          <div className="login">
            {!isLoggedIn ? <Login /> : <Home />}
          </div>
        </Route>
        <Route path="/register">
          <div className="register">
            {!isLoggedIn ? <Register /> : <Home />}
          </div>
        </Route>
        <Route path="*">
          <div className="register">
            <PageNotFound />
          </div>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
