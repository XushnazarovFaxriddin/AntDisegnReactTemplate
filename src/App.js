
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Empty from "./pages/Empty";
import Main from "./components/layout/Main";
import "antd/dist/reset.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/empty" component={Empty} />
          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
