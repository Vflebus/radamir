import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CarteWiki from '../CarteWiki'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <CarteWiki />
        </Route> 
      </Switch>
    </Router>
  );
};

export default App;
