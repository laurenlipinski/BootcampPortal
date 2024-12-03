// src/pages/Attendance.tsx
import React, { useState } from "react";
import logo from "../assets/logo.png";
import NavBar from "../components/NavBar";
import axios from "axios";
import "./attendance.css";

const Attendance: React.FC = () => {
    const [code, setCode] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/verify-attendance/", { code });
            setMessage(response.data.message);
        } catch (error: any) {
            setMessage(error.response?.data.detail || "Error submitting code");
        }
    };

    const renderCalendar = () => {
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        const calendar = [];

        // Create empty days for the start of the month
        for (let i = 0; i < firstDay; i++) {
            calendar.push(null);
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            calendar.push(day);
        }

        // Render the calendar
        return (
            
            <div className="calendar">
                
                <div className="calendar-header">
                    <span>Sun</span>
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                </div>
                <div className="calendar-grid">
                    {calendar.map((day, index) => (
                        <div
                            key={index}
                            className={`calendar-day ${
                                day === today.getDate() ? "highlighted" : ""
                            } ${index % 7 === 2 ? "tuesday" : ""}`}
                        >
                            {day !== null ? day : ""}
                        </div>
                    ))}
                </div>
            </div>
            
        );
    };

    return (
        <div> <NavBar
        brandName="Attendance System"
        imageSrcPath={logo}
        navItems={[
          { name: "Home", path: "/home" },
          { name: "Announcements", path: "/announcements" },
          { name: "Attendance", path: "/attendance" },
          { name: "Resources", path: "/resources" },
          { name: "Homework", path: "/homework" },
          { name: "Grading", path: "/grading" },
        ]}
      />
        <div className="attendance-container">
            
            <h1 className="attendance-title"></h1>
            {renderCalendar()}
            <div className="attendance-form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter attendance code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="attendance-input"
                    />
                    <button type="submit" className="attendance-button">Submit</button>
                </form>
                <p className="attendance-message">{message}</p>
            </div>
        </div>
        </div>
    );
};

export default Attendance;

