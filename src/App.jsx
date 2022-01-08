import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import NavBar from "../src/components/NavBar";
import "./App.css";
import Welcome from "./Pages/Welcome";
import OurStory from "./Pages/OurStory";
import Mentorship from "./Pages/Mentorship";
import PrivateMentorship from "./Pages/PrivateMentorship";
import PrivateCoaching from "./Pages/PrivateCoaching";
import CorporateTrainings from "./Pages/CorporateTrainings";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="bg-[#FEFEFE]">
        <div className="fixed w-full">
          <NavBar />
        </div>
        <div className="content w-full">
          <ScrollToTop />
          <Switch>
            <Route path="/" exact>
              <Welcome />
            </Route>
            <Route path="/our-story" exact>
              <OurStory />
            </Route>
            <Route path="/mentorship" exact>
              <Mentorship />
            </Route>
            <Route path="/private-mentorship" exact>
              <PrivateMentorship />
            </Route>
            <Route path="/private-coaching" exact>
              <PrivateCoaching />
            </Route>
            <Route path="/corporate-trainings" exact>
              <CorporateTrainings />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
