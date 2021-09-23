import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../../styles/index.scss'

import CarteWiki from '../CarteWiki'
import Wikis from "../Wikis";
import Wiki from "../Wiki";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <CarteWiki />
        </Route> 
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
