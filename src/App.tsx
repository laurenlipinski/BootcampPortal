import logo from "./assets/logo.png";

import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  const navItems = ["Home", "Announcements", "Attendance", "Resources", "Homework", "Grading"];

  return (
    <Router>
      
      <NavBar brandName="" imageSrcPath={logo} navItems={navItems} />
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </Router>
  );
};

export default App;
