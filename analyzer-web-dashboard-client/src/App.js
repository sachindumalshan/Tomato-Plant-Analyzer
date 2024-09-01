import React from 'react';
import './App.css';
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlantDetail from "./pages/PlantDetail";
import User from "./pages/User";
import AboutProject from "./pages/AboutProject";
import PlantOne from "./pages/plantone";
import PlantTwo from "./pages/planttwo";
import PlantThree from "./pages/plantthree";
import PlantFour from "./pages/plantfour";
import PlantFive from "./pages/plantfive";
import PlantSix from "./pages/plantsix";
import PlantSeven from "./pages/plantseven";
import PlantEight from "./pages/planteight";
import PlantNine from "./pages/plantnine";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/plantdetail" element={<PlantDetail/>} />
              <Route path="/user" element={<User/>} />
              <Route path="/aboutproject" element={<AboutProject/>} />
              <Route path='/plantone' element={<PlantOne/>}/>
              <Route path='/planttwo' element={<PlantTwo/>}/>
              <Route path='/plantthree' element={<PlantThree/>}/>
              <Route path='/plantfour' element={<PlantFour/>}/>
              <Route path='/plantfive' element={<PlantFive/>}/>
              <Route path='/plantsix' element={<PlantSix/>}/>
              <Route path='/plantseven' element={<PlantSeven/>}/>
              <Route path='/planteight' element={<PlantEight/>}/>
              <Route path='/plantnine' element={<PlantNine/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
