import React from "react";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Redirect, Link, Switch, withRouter } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>

        <Route exact path="/search" component={Search} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route component={NoMatch} />

      </Switch>
    </div>
    </Router>
  );
}

export default App;
