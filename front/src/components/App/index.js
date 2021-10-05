import { useEffect } from "react";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import "../../styles/index.scss";

import CarteWiki from "../CarteWiki";
import Wikis from "../Wikis";
import Wiki from "../Wiki";
import About from "../About";
import Terms from "../Terms";
import MobileWikiPage from "../MobileWikiPage";
import SignUp from "../SignUp";
import Page404 from "../Page404";
import CampaignList from "../CampaignList";
import UserProfile from "../UserProfile";

import { fetchWikis } from "../../actions/wikis";

import logo from "../../assets/images/logo-decoupe.webp";
import Menu from "../Menu";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading } = useSelector(({ wikis }) => wikis);
  const { logged } = useSelector(({ user }) => user);

  useEffect(() => {
    dispatch(fetchWikis());
  }, [dispatch]);

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
      <Menu />
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
        <Route exact path="/campagnes">
          <CampaignList />
        </Route>
        {logged && (
          <Route exact path="/profile">
            <UserProfile />
          </Route>
        )}
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default App;
