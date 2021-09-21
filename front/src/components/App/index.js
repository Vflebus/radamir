import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import CarteWiki from '../CarteWiki'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <div>App !</div>
        </Route> 
      </Switch>
    </Router>
  );
};

export default App;
