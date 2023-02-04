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
import Payment from './pages/Payment-details'
import Notification from './pages/Notification'

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
            <Route path="/payment-details"
                exact element={<Payment />} />
            <Route path="/Notification"
                exact element={<Notification />} />
          </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
