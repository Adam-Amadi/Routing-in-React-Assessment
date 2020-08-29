import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import { Switch } from "react-router-dom";
import Jeopardy from "./components/jeopardy/Jeopardy";

//This website help lot .https://medium.com/@leonardobrunolima/react-tips-handling-404-pages-24d27191a8dd
const Page404 = ({ location }) => (
  <div>
    <h1>
      Sorry no match found for <code>{location.pathname}</code>
    </h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Adam" />}
        />
        <Route
          exact
          path="/welcome/:name"
          render={(props) => (
            <Welcome {...props} name={props.match.params.name} />
          )}
        />
        <Route exact path="/jeopardy" component={Jeopardy} />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
