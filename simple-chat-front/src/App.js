import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Chat from "./components/Chat/Chat";
import UserNameInput from "./components/UserNameInput/UserNameInput";
import { userNameContext } from "./utils/userNameContext";

function App() {
  const [contextName, setContextName] = useState('')
  return (
    <div className="App">
      <Router>
        <Switch>
          <userNameContext.Provider value={{ contextName, setContextName }}>
            <Route exact path="/" component={UserNameInput}></Route>
            <Route exact path="/chat" component={Chat}></Route>
          </userNameContext.Provider>
          <Redirect exact from="*" to="/"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
