import './index.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Auth from './pages/Sign-in'
import HMO from './pages/HMO'
import Dashboard from './pages/Dashboard'
import Companies from './pages/Companies'
import Airlines from './pages/Airline'
import Settings from './pages/Settings'

import Nav from './components/SideBar'
import Top from './components/TopBar'
import Stat from './components/Stat'

const App = () => {
  return (
    <>
    <div className="App">
    <Router>
          <Routes>
            <Route path="/"
              exact element={<Auth />} />
            <Route path="/settings"
              exact element={<Settings />} />
            <Route path="/dashboard"
                exact element={<Dashboard />} />
            <Route path="/airlines"
                exact element={<Airlines />} />
            <Route path="/companies"
                exact element={<Companies />} />
            <Route path="/HMO"
                exact element={<HMO />} />
          </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
