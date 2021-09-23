import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Wikis from "../Wikis";
import Wiki from "../Wiki";

import "./app.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/wiki/:title">
          <Wiki />
        </Route>
        <Route exact path="/wiki">
          <Wikis />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
