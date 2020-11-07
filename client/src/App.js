import React, { Component } from 'react';
import './App.css';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import SitterProfile from "./pages/SitterProfile";
import Favorites from "./pages/Favorites";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import FooterPage from "./components/Footer";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/sitterProfile" component={SitterProfile} />
          </Switch>
          <FooterPage />
        </div>
      </Router>
    );
  }
}

export default App;
