import React,{useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import PrivateRoute from "./util/PrivateRoute";
import PublicRoute from "./util/PublicRoute";
import { getToken } from './util/Common';

function App() {
  const [authLoading, setAuthLoading] = useState(true);
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }   
      setAuthLoading(false);
    
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
  return (
    <Router>
      <Switch>
      <PublicRoute exact path="/" component={Login} />
      <PublicRoute path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
