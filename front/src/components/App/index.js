import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Wikis from "../Wikis";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Wikis />
        </Route>
      </Switch>
    </Router>
  );
};
// const App = () => {
//   return <div>APP</div>;
// };

export default App;
