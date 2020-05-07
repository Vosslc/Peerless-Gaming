import React from "react";
import { Switch, Route } from "react-router-dom";
// import Login from "./components/Authentication/Login";
// import Register from "./components/Authentication/Register";
// import Dashboard from "./Components/Dashboard/Dashboard";
import ApexWidget from "./Components/GameStatWidget/ApexWidget";

export default (
  
    <Switch>
      {/* <Route exact path="/" component={Dashboard} /> */}
      {/* <Route path="/login" component={Login}></Route> */}
      {/* <Route path="/register" component={Register}></Route> */}
      <Route path="/apex" component={ApexWidget} />
    </Switch>
  
);

