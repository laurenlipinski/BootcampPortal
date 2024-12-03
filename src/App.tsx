

import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";


const App: React.FC = () => {


  return (
    <Router>
      
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </Router>
  );
};

export default App;
