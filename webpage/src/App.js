import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";

import MainPage from "./components/MainPage";
import Dashboard from "./components/Dashboard";
import SessionsPerStation from "./components/SessionsPerStation";
import SessionsPerPoint from "./components/SessionsPerPoint";
import Login from "./components/Login";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/SessionsPerStation">
            <SessionsPerStation />
          </Route>
          <Route path="/SessionsPerPoint">
            <SessionsPerPoint />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <MainPage />
            <nav>
              <button>
                <Link to="/Login">Login</Link>
              </button>
              <button>
                <Link to="/Dashboard">Profile</Link>
              </button>
              <button>
                <Link to="/SessionsPerStation">Station Session Search</Link>
              </button>
              <button>
                <Link to="/SessionsPerPoint">Point Session Search</Link>
              </button>
            </nav>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
