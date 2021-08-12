import React, { useEffect, useState } from "react";
import TimeslotTab from "../TimeslotTab/TimeslotTab";
import { db } from "../../../config/Firebase";

function Tab3({ guest, setTimeslot }) {
  const [timeslots, setTimeslots] = useState(null);
  const [navtabclass, setNavTabclass] = useState(["active", "", ""]);
  const [tabclass, setTabclass] = useState([
    "tab-pane fade show active",
    "tab-pane fade",
    "tab-pane fade",
  ]);

  useEffect(() => {
    if (guest) {
      db.collection("slots")
        .where("vcReference", "==", db.collection("vcs").doc(guest[0]))
        .get()
        .then((snapshot) => {
          setTimeslots(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                startTime: new Date(doc.data().startTime * 1000),
                endTime: new Date(doc.data().endTime * 1000),
                status: doc.data().status,
              };
            })
          );
        });
    }
  }, [guest]);
  return (
    <div style={{ maxHeight: "300px", overflowY: "auto", overflowX: "hidden" }}>
      <p>
        Scheduling Meeting with{" "}
        <span className="guestnm">
          De Beers Global Sightholder Sales at Debeer
        </span>
      </p>
      <div className="row">
        <div className="col-md-3">
          <ul className="nav nav-tabs tabs-left sideways">
            <li className={navtabclass[0]}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setNavTabclass(["active", "", ""]);
                  setTabclass([
                    "tab-pane fade show active",
                    "tab-pane fade",
                    "tab-pane fade",
                  ]);
                }}
              >
                August 18, 2021
              </button>
            </li>
            <li className={navtabclass[1]}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setNavTabclass(["", "active", ""]);
                  setTabclass([
                    "tab-pane fade ",
                    "tab-pane fade show active",
                    "tab-pane fade",
                  ]);
                }}
              >
                August 19, 2021
              </button>
            </li>
            <li className={navtabclass[2]}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setNavTabclass(["", "", "active"]);
                  setTabclass([
                    "tab-pane fade ",
                    "tab-pane fade ",
                    "tab-pane fade show active",
                  ]);
                }}
              >
                August 20, 2021
              </button>
            </li>
          </ul>
        </div>

        <div className="col-md-9">
          <div className="tab-content">
            <div className={tabclass[0]} id="home-v">
              <div className="row justify-content-center">
                {timeslots?.map((item) => {
                  if (item.startTime.getDate() === 18)
                    return (
                      <TimeslotTab
                        key={item.id}
                        active={item.status !== "open"}
                        value={{
                          startTime: item.startTime,
                          endTime: item.endTime,
                        }}
                        setTimeslot={setTimeslot}
                      />
                    );
                })}
              </div>
            </div>
            <div className={tabclass[1]}>
              <div className="row justify-content-center">
                {timeslots?.map((item) => {
                  if (item.startTime.getDate() === 19)
                    return (
                      <TimeslotTab
                        key={item.id}
                        active={item.status !== "open"}
                        value={{
                          startTime: item.startTime,
                          endTime: item.endTime,
                        }}
                        setTimeslot={setTimeslot}
                      />
                    );
                })}
              </div>
            </div>
            <div className={tabclass[2]}>
              <div className="row justify-content-center">
                {timeslots?.map((item) => {
                  if (item.startTime.getDate() === 20)
                    return (
                      <TimeslotTab
                        key={item.id}
                        active={item.status !== "open"}
                        value={{
                          startTime: item.startTime,
                          endTime: item.endTime,
                        }}
                        setTimeslot={setTimeslot}
                      />
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#confirm-meeting" className="register-btn">
        Next
      </a>
    </div>
  );
}

export default Tab3;
