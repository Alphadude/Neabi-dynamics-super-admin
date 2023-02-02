import './index.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Auth from './pages/Sign-in'
import Dashboard from './pages/Dashboard'

import Nav from './components/SideBar'
import Top from './components/TopBar'
import Stat from './components/Stat'

const App = () => {
  return (
    <div className="App">
    <Router>
    <div className ="side">

      <Nav />
      <Stat />
    </div>
      <main className="content">
        <Top />
        <Routes>
          <Route path="/"
            exact element={<Auth />} />
          <Route path="/dashboard"
            exact element={<Dashboard />} />
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
