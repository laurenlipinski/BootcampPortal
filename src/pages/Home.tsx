import React, { useEffect, useState, useRef } from "react";
import logo from "../assets/logo.png";
import "./home.css";
import NavBar from "../components/NavBar";

const Home: React.FC = () => {
  const [text, setText] = useState<string>(""); // Text that will be typed
  const indexRef = useRef<number>(0); // Ref to track index position for typing
  const fullText = "Weelcome to ADC Bootcamp!"; // The full text to type out

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < fullText.length) {
        setText((prev) => prev + fullText.charAt(indexRef.current));
        indexRef.current += 1; // Move to the next character
      } else {
        clearInterval(interval); // Stop the interval when done typing
      }
    }, 150); // Adjust typing speed

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div>
      <NavBar
        brandName=""
        imageSrcPath={logo}
        navItems={[
          { name: "Home", path: "/home" },
          { name: "Announcements", path: "/announcements" },
          { name: "Attendance", path: "/attendance" },
          { name: "Resources", path: "/resources" },
          { name: "Homework", path: "/homework" },
        ]}
      />
      <div className="home-container">
        <h1 className="home-title">
          {text}
        </h1>

        <div className="class-details-section">
       {/* <img src={logo} alt="Instructor Logo" className="instructor-image" /> */}
          <h2 className="section-title">Class Details</h2>
          <p className="instructor-info"><strong>Instructors:</strong> Kimber Gonzalez Lopez, Evelyn Jiang</p>
          <p className="class-details"><strong>Content:</strong> Introduction to Web Development, HTML, CSS, JavaScript, React, TypeScript, FastAPI, SQLite</p>
          <p className="class-details"><strong>Schedule:</strong> Tuesday: 7:00 - 8:00 PM </p>
          <p className="class-details"><strong>Location:</strong> <a href="https://maps.app.goo.gl/5qtgiqDP1g48JPvw7" target="_blank" rel="noopener noreferrer" className="class-details-link">CSI 1121</a></p>
        </div>

        <div className="contact-section">
          <h2 className="section-title">Contact & Office Hours</h2>
          <p><strong>Connect with instructors at office hours listed below or by appointment:</strong></p>
          <a href="https://umd.zoom.us/j/5697396597" target="_blank" rel="noopener noreferrer" className="contact-link">Kimber's Office Hours</a>
          <p>Tuesday 1:00 - 2:00 PM and Thursday - 1:00 to 3:00 PM</p>
          <a href="https://us05web.zoom.us/j/3973323282?pwd=bU1uZTVUMHpvMFIzL1EvMFdqTTNadz09" target="_blank" rel="noopener noreferrer" className="contact-link">Evelyn's Office Hours</a>
          <p>Wednesday 3:10 - 4:10 PM and Thursday - 5:30 to 6:30 PM</p>
        </div>
      </div>
      <footer className="footer">
        <p>2024 AppDev Companion</p>
        <a href="https://appdevclub.com/" target="_blank" rel="noopener noreferrer">
          Main AppDev Site
        </a>
      </footer>
    </div>
  );
};

export default Home;
