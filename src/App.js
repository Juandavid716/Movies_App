import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navigation";
import Landing from "./components/Landing";
import Login from "./components/Login";
import MovieList from "./components/MoviesList";
import Signup from "./components/Signup";
// import ScrollToTop from "./components/ScrollToTop";
// import Movie from "./components/Movie";
import Auth from "./context/store/Auth";
import Dashboard from "./components/Dashboard";
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
    <Auth>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />

          <Route exact path="/search" component={Dashboard} />
          {/* <Navbar></Navbar > */}
          {/* <Dashboard></Dashboard> */}
          <Route exact path="/movies" component={MovieList} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Landing} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
    </Auth>
  );
}

export default App;
