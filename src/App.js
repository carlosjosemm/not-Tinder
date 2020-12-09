import React from "react";
import './App.css';
import Main from './pages/Main';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chats from "./pages/Chats";
import Profile from "./pages/Profile";
import { useDataLayer } from "./StateProvider";
import Login from "./pages/Login";

function App() {
  const [{user}, dispatch] = useDataLayer();

  return (
    <div className="app">
    {console.log(`user is ${user}`)}
      {!user ? (
        <Login />
      ) : (
        <Router>
        <Switch>

        <Route path="/chats">
            <Chats />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/">
          <Main />
          </Route>

        </Switch>
      </Router>
      )}
               
    </div>
  );
}

export default App;
