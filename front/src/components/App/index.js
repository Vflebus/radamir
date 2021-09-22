import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Wikis from "../Wikis";

import "./app.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/wiki">
          <Wikis />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
