import { useEffect, useState } from "react";
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
import WikiAdmin from "../WikiAdmin";
import Campaign from "../Campaign"

import { fetchWikis } from "../../actions/wikis";
import { checkConnection } from "../../actions/user";

import logo from "../../assets/images/logo-decoupe.webp";
import Menu from "../Menu";
import TermsAndAboutLinks from "../TermsAndAboutLinks";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(true);
  const { loading } = useSelector(({ wikis }) => wikis);
  const { logged } = useSelector(({ user }) => user);
  const isAdmin = useSelector(({ user: { loggedUser } }) => loggedUser.is_admin);

  const onResize = () => {
    setIsDesktop(window.innerWidth > 1200);
  };

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    dispatch(checkConnection());
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
      <Menu key="menu" />
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Redirect to={window.innerWidth > 767 ? "/carte" : "/wiki"} />
        </Route>
        <Route exact path="/carte">
          <CarteWiki />
        </Route>
        {isAdmin ? (
          <Route exact path="/wiki/:title">
            <WikiAdmin />
          </Route>
        ) : (
          <Route exact path="/wiki/:title">
            <Wiki />
          </Route>
        )}
        {isDesktop ? (
          <Route exact path="/wiki">
            <Wikis />
          </Route>        
        ) : (
          <Route exact path="/wiki">
            <MobileWikiPage />
          </Route>        
        )}
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/terms">
          <Terms />
        </Route>
        {!logged && (
          <Route exact path="/signup">
            <SignUp />
          </Route>
        )}
        {logged ? (
          <>
            <Route exact path="/campagnes/:id">
              <Campaign />
            </Route> 
            <Route exact path="/campagnes">
              <CampaignList />
            </Route>
            <Route exact path="/profile">
              <UserProfile />
            </Route>
          </>
        ) : (
          <Redirect to="/" />
        )}
        <Route>
          <Page404 />
        </Route>
      </Switch>
      <TermsAndAboutLinks key="footer" />
    </AnimatePresence>
  );
};

export default App;
