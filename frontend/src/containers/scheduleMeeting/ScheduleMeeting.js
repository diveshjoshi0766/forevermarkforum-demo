import React, { useState } from "react";
import "./schedulemeeting.css";
import ScheduleNavbar from "../../components/scheduleMeeting/ScheduleNavbar/ScheduleNavbar";
import Tab1 from "../../components/scheduleMeeting/Tab1/Tab1";
import Tab2 from "../../components/scheduleMeeting/Tab2/Tab2";
import Tab3 from "../../components/scheduleMeeting/Tab3/Tab3";
import Tab4 from "../../components/scheduleMeeting/Tab4/Tab4";

function ScheduleMeeting() {
  // classes variables
  const [navClass, setNavClass] = useState([
    "nav-link active",
    "nav-link",
    "nav-link",
    "nav-link",
  ]);
  const [tabClassess, setTabClasses] = useState([
    "tab-pane fade show active",
    "tab-pane fade ",
    "tab-pane fade ",
    "tab-pane fade ",
  ]);

  //  data variables
  const [booth, setBooth] = useState(null);
  const [guest, setGuest] = useState(null);
  const [timeslot, setTimeslot] = useState(null);
  const [zone, setZone] = useState("");

  return (
    <div style={{ padding: " 0 6%" }} className="cmn-container">
      <div className="abt-event">
        <h2
          style={{
            fontFamily: "Didot-HTF-L42",
            fontWeight: "bold",
            fontSize: "27.5px",
          }}
        >
          Schedule a Meeting
        </h2>
        <div className="schedule-meeting-wrap">
          <ScheduleNavbar
            navClass={navClass}
            setNavClass={setNavClass}
            setTabClasses={setTabClasses}
          />
          <div className="tab-content" id="myTabContent">
            <div className={tabClassess[0]}>
              <Tab1 setZone={setZone} zone={zone} setBooth={setBooth} />
            </div>
            <div className={tabClassess[1]}>
              <Tab2 booth={booth} setGuest={setGuest} guest={guest} />
            </div>
            <div className={tabClassess[2]}>
              <Tab3 guest={guest} setTimeslot={setTimeslot} />
            </div>
            <div className={tabClassess[3]}>
              <Tab4 guest={guest} timeslot={timeslot} zone={zone} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleMeeting;
