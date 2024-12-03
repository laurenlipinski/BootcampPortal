import React, { useState } from "react";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}

const NavBar: React.FC<NavBarProps> = ({ brandName, imageSrcPath, navItems }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
      <div className="container-fluid">

        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={imageSrcPath}
            alt="Brand Logo"
            className="d-inline-block align-center me-2"
            width="50"
            height="50"
          />
          <span className="fw-bolder fs-4">{brandName}</span>
        </a>

        
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  className={`nav-link ${
                    selectedIndex === index ? "active fw-bold" : ""
                  }`}
                  href="#"
                  onClick={() => setSelectedIndex(index)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
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
