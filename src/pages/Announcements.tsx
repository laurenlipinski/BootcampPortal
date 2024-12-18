import React from "react";
import NavBar from "../components/NavBar";
import logo from "../assets/logo.png";

import "./announcements.css";


interface Announcement {
  author: string;
  timestamp: string;
  message: string;
}

const announcements: Announcement[] = [
  {
    author: "Kimber Gonzalez Lopez",
    timestamp: "11/27 3:30 PM",
    message:
      "Hey everyone! I hope you all have an amazing break. Here is the FastAPI code from class: https://github.com/KiberVG/bootcampoct15code/blob/main/sqlite-fastapi-twitter/maincopy.py - the code from class is in the \u201Cmaincopy.py\u201D file\n\nAnd here is the completed Twitter react code: https://github.com/KiberVG/bootcampfall2024-twitterclone/tree/main/src\n\nI will not be having office hours tomorrow, but I am available by appointment anytime during the break, so just let me know if you or your group need any help with anything.\n\nFinally, here is the recording from this week: https://umd.zoom.us/rec/share/F1ZDr9KfH66reoF2jEuc7oBpGe-JLRhWeE6mPrNep84GN0NL3PG3sWJTz7FVEP7y.tpIzM4OLwsDI9ef1?startTime=1732665622000\nPasscode: #J75!Y?8\n\nThanks everyone have a great break!"
    },
  {
    author: "Kimber Gonzalez Lopez",
    timestamp: "11/21 2:38 PM",
    message:
      "Hey everyone, here is the code from this week's lecture where you can find the SQLite and FastAPI examples: https://github.com/KiberVG/bootcampoct15code.git I also wanted to post the hackathon backend code in case you wanted to look at that: https://github.com/jasonyih/BitcampBackend/blob/sql-update/main.py and finally here is the lecture recording: https://umd.zoom.us/rec/share/SWr8PIE4MVLac8AzSP7EmW_AM9N8-sjc68MYy2F2M87OY3WhmFtOGQfPxrfk2lS6.Co_GWJZzm0Tdkbe2?startTime=1732063816000 Passcode: e6?jK*LJ\n\nI really recommend reading through the resource that we posted on the slides. Reading the guide in the documentation is pretty much how I learned everything!",
  },
  {
    author: "Evelyn Jiang",
    timestamp: " 11/17 9:02 PM",
    message:
      "Hi everyone, hope you all had a restful weekend. The Accenture event overlaps with our normal bootcamp time, so we have a couple adjustments.\n\nBootcamp will start promptly at 7:35pm at CSI 1121 (our usual room).\n\nIf you want to network with the Accenture speakers, prioritize that and then come to bootcamp after.\n\nThis will our last in-person lecture for the semester so please come if you can!\n\nWe\u2019re gonna go until 8:35pm and we understand that\u2019s a little late so you\u2019re free to leave around 8:15pm, but it would be great if you could stay the full time because we will be learning about SQL and database knowledge which will be important for your projects.\n\nSee you Tuesday!!",
   
  },
];

const Announcements: React.FC = () => {
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

      <div className="announcements-container">
        <h1 className="announcements-title">Announcements</h1>
        {announcements.map((announcement, index) => (
          <div className="announcement" key={index}>
            <div className="announcement-header">
              <div>
                <h2 className="announcement-author">{announcement.author}</h2>
                <p className="announcement-timestamp">{announcement.timestamp}</p>
              </div>
            </div>
            <p className="announcement-message">{announcement.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
