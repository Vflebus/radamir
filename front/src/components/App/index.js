import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import "../../styles/index.scss";

import CarteWiki from "../CarteWiki";
import Wikis from "../Wikis";
import Wiki from "../Wiki";
import About from "../About";
import Terms from "../Terms";
import MobileWikiPage from "../MobileWikiPage";
import SignUp from "../SignUp";

import logo from "../../assets/images/logo-decoupe.webp";

const App = () => {
  const location = useLocation();
  const loading = false;

  if (loading) {
    return (
        <AnimatePresence exitBeforeEnter>
          <motion.img
              src={logo}
              alt="logo Radamir"
              className="logo loading"
              id="logo"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transitions={{ transition: "linear", duration: 3 }}
          />
        </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          {document.body.clientWidth > 1000 ? <Redirect to="/carte" /> : <Redirect to="/wiki" />}
        </Route>
        <Route exact path="/carte">
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
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route>
          <h1>404 !</h1>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default App;
