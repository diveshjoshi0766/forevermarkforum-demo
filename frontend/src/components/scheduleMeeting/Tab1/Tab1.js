import React, { useState, useEffect } from "react";
import { db } from "../../../config/Firebase";
import { useHistory } from "react-router-dom";

function Tab1({ setZone, zone, setBooth }) {
  const history = useHistory();
  const [zones, setZones] = useState([]);
  const [booths, setBooths] = useState([]);
  useEffect(() => {
    db.collection("zones")
      .get()
      .then((snapshot) => {
        setZones(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              zoneName: doc.data().zoneName,
            };
          })
        );
      });
  }, []);

  useEffect(() => {
    if (zone) {
      db.collection("booths")
        .where("zoneReference", "==", db.collection("zones").doc(zone[0]))
        .get()
        .then((snapshot) => {
          setBooths(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                boothName: doc.data().boothName,
              };
            })
          );
        });
      return () => {
        setBooths([]);
      };
    }
  }, [zone]);

  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8">
        <div className="form-group row cmn-form-field">
          <label for="subcategogy" className="col-sm-4 col-form-label">
            Choose Zone
          </label>
          <div className="col-sm-8">
            <select
              value={zone.join("-")}
              onChange={(e) => {
                setZone(e.target.value.split("-"));
              }}
              className="custom-select"
            >
              <option value={""}></option>
              {zones?.map((item) => {
                return (
                  <option key={item.id} value={item.id + "-" + item.zoneName}>
                    {item.zoneName}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {zone ? (
          <div className="form-group row cmn-form-field">
            <label for="subcategogy" className="col-sm-4 col-form-label">
              Choose Booth
            </label>
            <div className="col-sm-8">
              <select
                onChange={(e) => {
                  setBooth(e.target.value);
                }}
                className="custom-select"
              >
                <option></option>
                {booths?.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.boothName}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        ) : (
          <></>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            history.push("#guest");
          }}
          className="register-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Tab1;
