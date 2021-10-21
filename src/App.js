import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/login/login";
import Profile from "./components/profile/profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
