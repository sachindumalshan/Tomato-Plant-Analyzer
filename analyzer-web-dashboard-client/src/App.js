import React from 'react';
import './App.css';
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlantDetail from "./pages/PlantDetail";
import User from "./pages/User";
import AboutProject from "./pages/AboutProject";
import SinglePlant from "./pages/SinglePlant";
import PlantOne from "./pages/plantone"; // Import PlantOne page
import PlantTwo from "./pages/planttwo"; // Import other plant pages similarly
// ... import other plant pages

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
              <Route path='/plantone' element={<PlantOne/>}/>
              <Route path='/planttwo' element={<PlantTwo/>}/>
              {/* Add routes for other plant pages similarly */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
