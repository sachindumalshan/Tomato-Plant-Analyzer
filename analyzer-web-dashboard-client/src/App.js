import React from 'react';
import './App.css';
import Dashboard from "./pages/Dashboard";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {TopNavigation} from "./components/Imports/imports";
import PlantDetail from "./pages/PlantDetail";
import User from "./pages/User";
import AboutProject from "./pages/AboutProject";
import SinglePlant from "./pages/SinglePlant";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/plantdetail" element={<PlantDetail/>} />
              <Route path="/user" element={<User/>} />
              <Route path="/aboutproject" element={<AboutProject/>} />
              <Route path="/sp" element={<SinglePlant/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
