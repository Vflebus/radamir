import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "../../styles/index.scss";

import CarteWiki from "../CarteWiki";
import Wikis from "../Wikis";
import Wiki from "../Wiki";
import About from "../About";
import Terms from "../Terms";
import MobileWikiPage from "../MobileWikiPage"

import logo from "../../assets/images/logo-decoupe.webp";

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
          {document.body.clientWidth > 1000 && <Wikis />}
          {document.body.clientWidth <= 1000 && <MobileWikiPage />}
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/terms">
          <Terms />
        </Route>
        <Route path="/">
          <h1>404 !</h1>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default App;
