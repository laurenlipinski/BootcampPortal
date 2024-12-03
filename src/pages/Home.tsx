// src/pages/Home.tsx
import React from "react";
import "./home.css";

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to App Dev Club Bootcamp!</h1>
            
            <div className="instructor-section">
                <h2 className="section-title">Course Details</h2>
                <img
                    src="kimber.jfif" // Replace with the actual photo URL
                    alt="Instructor"
                    className="instructor-image"
                />
                <p className="instructor-info">Lead Instructor: Kimber Gonzalez Lopez</p>
                <p className="instructor-info">Instructor Bio: Experienced professional with years of teaching background.</p>
            </div>

            <div className="class-details-section">
                <h2 className="section-title">Class Details</h2>
                <p className="class-details"><strong>Materials Covered:</strong> Introduction to Web Development, React Basics, API Integration, etc.</p>
                <p className="class-details"><strong>Schedule:</strong> Tuesday: 7:00 - 8:00 PM </p>
                <p className="class-details"><strong>Location:</strong> CSI 1107 </p>
            </div>

            <div className="contact-section">
                <h2 className="section-title">Contact & Office Hours</h2>
                <p><strong>Connect with Instructors at Office Hours listed below or by Appointment:</strong></p>
                <p>Kimber's Office Hours: Tuesday 1:00 - 2:00 PM and Thursday - 1:00 PM to 3:00 PM</p>
                <p>Evelyn's Office Hours: Wednesday 3:10 - 4:10 PM and Thursday - 5:30 PM to 6:30 PM</p>
                <a href="https://umd.zoom.us/j/5697396597" target="_blank" rel="noopener noreferrer" className="contact-link">Kimber's Zoom Link</a>
                <a href="https://us05web.zoom.us/j/3973323282?pwd=bU1uZTVUMHpvMFIzL1EvMFdqTTNadz09" target="_blank" rel="noopener noreferrer" className="contact-link">Evelyn's Zoom Link</a>
            </div>
        </div>
    );
};

export default Home;
