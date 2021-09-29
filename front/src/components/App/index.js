import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "../../styles/index.scss";

import CarteWiki from "../CarteWiki";
import Wikis from "../Wikis";
import Wiki from "../Wiki";
import About from "../About";
import Terms from "../Terms";

import logo from "../../assets/images/logo-decoupe.png";

const App = () => {
  const location = useLocation();
  const loading = false;

  if (loading) {
    return <img
                src={logo}
                alt="logo Radamir"
                className="logo loading"
                id="logo"
            />
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
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
    </AnimatePresence>
  );
};

export default App;
