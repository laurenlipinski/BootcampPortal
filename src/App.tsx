

import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import Announcements from "./pages/Announcements";
import Resources from "./pages/Resources";
import Homework from "./pages/Homework";


const App: React.FC = () => {


  return (
    <Router>
      
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/homework" element={<Homework />} />
      </Routes>
    </Router>
  );
};

export default App;
