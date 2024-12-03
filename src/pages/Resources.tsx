import React from "react";
import NavBar from "../components/NavBar";
import logo from "../assets/logo.png";
import "./resources.css";

// Material data structure
interface Material {
  week: string;
  links: { title: string; url: string }[];
}

const materials: Material[] = [
  {
    week: "Week 1",
    links: [
      {
        title: "Lecture Slides",
        url: "https://docs.google.com/presentation/d/1VP9mrEZJZ9ALk2dBwadcGkWBg5twjUbM6VFZ7Fn3Vkk/edit?usp=sharing",
      },
      {
        title: "Lecture Recording",
        url: "https://umd.zoom.us/rec/share/Rl_BFUApl78S6omhJPRFLdM2bqNJOC5NWiJkWk9DVe9G6wf54-EZCFnD8WbokIK.aHGXOgs6ZGmg7pad?startTime=1729033180000",
      },
    ],
  },
  {
    week: "Week 2",
    links: [
      {
        title: "Lecture Slides",
        url: "https://docs.google.com/presentation/d/1wO047LhrT73QIcC5WzFhzGOtYhxap3aPq-nYbjmOSKk/edit?usp=sharing",
      },
      {
        title: "Lecture Recording",
        url: "https://umd.zoom.us/rec/share/feRHep0QqN7yi6SJz8PwaQ6LrFP8BRJ96LSAf2lEhIxLeojaea27pPct65YuCS1-.sj_MOivR-ZpXWfqg?startTime=1729638243000",
      },
    ],
  },
  {
    week: "Week 3",
    links: [
      {
        title: "Lecture Slides",
        url: "https://docs.google.com/presentation/d/1RWvO8TQ_ueJyBdSHfZ6oNvq9E6J3rYovItbX_Q-r-44/edit?usp=sharing",
      },
      {
        title: "Lecture Recording",
        url: "https://umd.zoom.us/rec/share/XEmxDC_2pexSnHkmHWfE2u828DWpQlhQNtxyV9gpkK1yCh0Hnj6M1A2Sdji7Z9DM.valW4Jz4qkEF0I0H?startTime=1730243323000",
      },
    ],
  },
  {
    week: "Week 4",
    links: [
      {
        title: "Lecture Slides",
        url: "https://docs.google.com/presentation/d/14ooPTPyM4QZPWMBq2sg4NypMQZAHQ4rY5n6CUn6l7zI/edit?usp=sharing",
      },
      {
        title: "Lecture Recording",
        url: "https://umd.zoom.us/rec/share/1pUBQsed08aIyCtsS3NH3ZVDB23Uuco46RHwzb-M_qNZfkJgdgUOYx4krB2bQV2e.4QqU0j8o1gXApSNq?startTime=1730851409000",
      },
      {
        title: "GitHub Repository",
        url: "https://github.com/KiberVG/bootcampoct15code",
      },
    ],
  },
  {
    week: "Week 5",
    links: [
      {
        title: "Lecture Slides",
        url: "https://docs.google.com/presentation/d/1ABC12345dEFG/edit?usp=sharing",
      },
      {
        title: "Lecture Recording",
        url: "https://umd.zoom.us/rec/share/12345abcdef",
      },
    ],
  },
  {
    week: "Week 6",
    links: [
      {
        title: "Lecture Slides",
        url: "https://docs.google.com/presentation/d/2HI67890jkl/edit?usp=sharing",
      },
      {
        title: "Lecture Recording",
        url: "https://umd.zoom.us/rec/share/67890ghijklm",
      },
      {
        title: "Additional Resource",
        url: "https://example.com/resource",
      },
    ],
  },
  {
    week: "Week 7",
    links: [
      {
        title: "Lecture Slides",
        url: "https://docs.google.com/presentation/d/3DEF67890opqrstu/edit?usp=sharing",
      },
      {
        title: "Lecture Recording",
        url: "https://umd.zoom.us/rec/share/abcdefghijklmno12345",
      },
    ],
  },
  
  {
    week: "Week 8",
    links: [
      {
        title: "GitHub Repository",
        url: "https://github.com/appdevumd/fastapi1-fall2024",
      },
      {
        title: "Additional Resource",
        url: "https://github.com/KiberVG/extra-resources",
      },
    ],
  },
  {
    week: "Week 9",
    links: [
      {
        title: "GitHub Repository",
        url: "https://github.com/KiberVG/bootcampoct15code.git",
      },
    ],
  },
];

const Resources: React.FC = () => {
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

      <div className="resources-container">
        <h1 className="resources-title">Resources</h1>
        {materials.map((material, index) => (
          <div className="week-materials" key={index}>
            <h2 className="week-title">{material.week}</h2>
            <ul className="material-list">
              {material.links.map((link, linkIndex) => (
                <li className="material-item" key={linkIndex}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="material-link">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
