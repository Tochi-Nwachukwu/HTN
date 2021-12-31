import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Switch} from "react-router-dom"
import NavBar from '../src/components/NavBar'
import './App.css'
import Welcome from './Pages/Welcome'
import OurStory from './Pages/OurStory'





function App() {

  return (

    <Router>
      <div className="App">
        <div className="fixed w-full">
          <NavBar />
        </div>
        <div className="content w-full">

          <Switch>
            <Route path='/' exact>
              <Welcome />
            </Route>
            <Route path='/our-story' exact>
              <OurStory />
            </Route>
          </Switch>
        </div>




      </div>

    </Router >
  )
}

export default App
