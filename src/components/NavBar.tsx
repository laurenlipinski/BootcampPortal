import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: { name: string; path: string }[];
}

const NavBar: React.FC<NavBarProps> = ({ brandName, imageSrcPath, navItems }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [darkMode, setDarkMode] = useState<boolean>(false);

  
  const toggleDarkMode = () => {
    const body = document.body;
    if (darkMode) {
      body.classList.remove("dark-mode");
    } else {
      body.classList.add("dark-mode");
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
      <div className="container-fluid">
        {/* Brand Name and Logo */}
        <Link className="navbar-brand d-flex" to="/">
          <img
            src={imageSrcPath}
            alt="Brand Logo"
            className="d-inline-block align-center me-2"
            width="75"
            height="75"
          />
          <span className="fw-bolder fs-4">{brandName}</span>
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${selectedIndex === index ? "active fw-bold" : ""}`}
                  onClick={() => setSelectedIndex(index)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Dark Mode Toggle Button 
          <button
            className="btn btn-dark ms-2"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
*/}
          {/* Optional Search */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
