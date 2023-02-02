import './index.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Auth from './pages/Sign-in'
import Dashboard from './pages/Dashboard'
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"
            exact element={<Auth />} />
          <Route path="/dashboard"
            exact element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
