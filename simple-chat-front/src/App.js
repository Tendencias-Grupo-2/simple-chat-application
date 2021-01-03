import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Chat from "./components/Chat/Chat";
import UserNameInput from "./components/UserNameInput/UserNameInput";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={UserNameInput}></Route>
          <Route exact path="/chat" component={Chat}></Route>
          <Redirect exact from="*" to="/"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
