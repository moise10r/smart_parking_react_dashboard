import React, { Component } from "react";
import "./sass/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navBar";
import Home from "./components/home";
import Login from './components/LogIn';
import ProtectedRoute from './components/protectedRoute';

class App extends Component {
  state = {
    isAuth: false,
  }
  handleLogin = () => {
    this.setState({
      isAuth: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isAuth: false,
    });
  };
render() {
    const {isAuth} = this.state;
    console.log(isAuth);
    return (
      <div>
        <Switch>
          <Route path="/" exact render={(props) => <Login {...props} handleLogin={this.handleLogin} />} />

          <Route
            path="/"
            render={(props) => <Navbar {...props} handleLogout={this.handleLogout}/>}
          />
        </Switch>
        
        <ProtectedRoute
          path="/home"
          isAuth={isAuth}
          component={Home}
        />
      </div>
    );
  }
}

export default App;