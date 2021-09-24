import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../../styles/index.scss";

import CarteWiki from "../CarteWiki";
import Wikis from "../Wikis";
import Wiki from "../Wiki";
import About from "../About";
import Terms from "../Terms";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CarteWiki />
        </Route>
        <Route exact path="/wiki/:title">
          <Wiki />
        </Route>
        <Route exact path="/wiki">
          <Wikis />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/terms">
          <Terms />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
