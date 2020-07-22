import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navigation";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ScrollToTop from "./components/ScrollToTop";
import Movie from "./components/Movie";
const Page404 = ({ location }) => (
  <div className="not-found">
    <h1>404 ERROR</h1>
    <h2>
      Oops! This Page <code>{location.pathname}</code> Could Not Be Found
    </h2>
    <p>
      Sorry but the page you are looking for does not exist, have been removed,
      name changed or is temporarily unavailable.
    </p>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Navbar></Navbar>
          <Landing></Landing>
        </Route>

        <Route exact path="/login">
          <Navbar></Navbar>
          <Login></Login>
        </Route>
        <Route exact path="/signup">
          <Navbar></Navbar>
          <Signup></Signup>
        </Route>
        <Route exact path="/movie">
          <Movie></Movie>
        </Route>
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
