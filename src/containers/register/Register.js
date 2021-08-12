import { allSettled } from "q";
import React, { useState } from "react";
import CallingCodeSelect from "../../components/callingcodeSelect/CallingCodeSelect";
import {db} from '../../config/Firebase'
import { useHistory, useLocation } from "react-router-dom";
const data = {
  De_Beers_Group: [
    "Select Sub Category",
    "De Beers Group",
    "Forevermark",
    "Forevermark India Team",
  ],
  others: [
    "Select Sub Category",
    " Advertising, Marketing & Media Agency",
    " Banking & Finance",
    " Diamond Manufacturer",
    " Jewellery Manufacturer",
    " Others",
  ],
  Press_media: ["Select Sub Category", " Other Media", " Trade Media "],
};
function Register() {

  const history = useHistory();

  const [firstName, setfirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [city, setCity] = useState("")
  const [designation, setDesignation] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [category, setCategory] = useState("");

  const [loader, setLoader] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(false);
    db.collection('users').add({
      firstName: firstName,
      lastName: lastName,
      companyName: companyName,
      city: city,
      designation: designation,
      email: email,
      mobile: mobile,
      category: category
    }).then(() => {
      console.log("Date saved to Datebase")
      setLoader(true)
    })
    .catch((error) => {
      alert(error.message)
      setLoader(true)
    })
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="cmn-container">
            <h2 style={{ fontFamily: "Didot-HTF-L42" }}>
              Register for the Event
            </h2>
            <form novalidate="" className="ng-invalid ng-dirty ng-touched" onSubmit={handleSubmit}>
              <div className="form-group row cmn-form-field">
                <label for="firstname" className="col-sm-4 col-form-label">
                  <span>*</span>First Name
                </label>
                <div className="col-sm-8">
                  <input
                    value={firstName}
                    type="text"
                    required=""
                    onChange={(e) => setfirstName(e.target.value)}
                    className="form-control ng-untouched ng-pristine ng-invalid"
                  />
                </div>
              </div>
              <div className="form-group row cmn-form-field">
                <label for="firstname" className="col-sm-4 col-form-label">
                  <span>*</span>Last Name
                </label>
                <div className="col-sm-8">
                  <input
                    value={lastName}
                    type="text"
                    required=""
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-control ng-untouched ng-pristine ng-invalid"
                  />
                </div>
              </div>
              <div className="form-group row cmn-form-field">
                <label for="firstname" className="col-sm-4 col-form-label">
                  <span>*</span>Company Name
                </label>
                <div className="col-sm-8">
                  <input
                    value={companyName}
                    type="text"
                    required=""
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="form-control ng-untouched ng-pristine ng-invalid"
                  />
                </div>
              </div>
              <div className="form-group row cmn-form-field">
                <label for="firstname" className="col-sm-4 col-form-label">
                  <span>*</span>City
                </label>
                <div className="col-sm-8">
                  <input
                    value={city}
                    type="text"
                    required=""
                    onChange={(e) => setCity(e.target.value)}
                    className="form-control ng-untouched ng-pristine ng-invalid"
                  />
                </div>
              </div>
              <div className="form-group row cmn-form-field">
                <label for="firstname" className="col-sm-4 col-form-label">
                  <span>*</span>Designation
                </label>
                <div className="col-sm-8">
                  <input
                    value={designation}
                    type="text"
                    required=""
                    onChange={(e) => setDesignation(e.target.value)}
                    className="form-control ng-untouched ng-pristine ng-invalid"
                  />
                </div>
              </div>
              <div className="form-group row cmn-form-field">
                <label for="firstname" className="col-sm-4 col-form-label">
                  <span>*</span>Email
                </label>
                <div className="col-sm-8">
                  <input
                    value={email}
                    type="email"
                    required=""
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control ng-untouched ng-pristine ng-invalid"
                  />
                  <p className="small-txt">
                    *This email id will be used for all further communication
                    and as username for login
                  </p>
                </div>
              </div>
              <div className="form-group row cmn-form-field">
                <label for="categogy" className="col-sm-4 col-form-label">
                  <span>*</span>Country Calling Code
                </label>
                <div className="col-sm-6">
                  <CallingCodeSelect />
                </div>
              </div>
              <div className="form-group row cmn-form-field">
                <label for="firstname" className="col-sm-4 col-form-label">
                  <span>*</span> Business Mobile
                </label>
                <div className="col-sm-8">
                  <input
                    value={mobile}
                    type="tel"
                    required=""
                    className="form-control ng-untouched ng-pristine ng-invalid"
                    onChange={e => {
                      setMobile(e.target.value = e.target.value.substring(0, 10))
                    }}
                  />
                  <p className="small-txt text-danger">
                    *Enter number without leading zeroes
                  </p>
                </div>
              </div>
              <div className="form-group row cmn-form-field">
                <label for="categogy" className="col-sm-4 col-form-label">
                  <span>*</span>Category
                </label>
                <div className="col-sm-6">
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    formcontrolname="frontFacingCategory"
                    required=""
                    className="custom-select ng-untouched ng-pristine ng-invalid"
                  >
                    <option value="">Select Category</option>
                    <option value="mtn9K1VFtbPDXhbkY51U">
                      {" "}
                      Anglo American{" "}
                    </option>
                    <option value="De_Beers_Group"> De Beers Group </option>
                    <option value="tmnxnyoTCqsxnk7gn2BH">
                      {" "}
                      Forevermark Authorised Jeweller{" "}
                    </option>
                    <option value="YkDgGGu6uVuntrTEaRS7">
                      {" "}
                      Forevermark Diamantaire / Manufacturer{" "}
                    </option>
                    <option value="others"> Others </option>
                    <option value="Press_media"> Press &amp; Media </option>
                    <option value="yiH9B4uK9njzx7802eC6"> Retailer </option>
                  </select>
                </div>
              </div>
              {category === "De_Beers_Group" ||
                category === "others" ||
                category === "Press_media" ? (
                <div className="form-group row cmn-form-field">
                  <label for="category" className="col-sm-4 col-form-label">
                    <span>*</span>Sub Category
                  </label>
                  <div className="col-sm-6">
                    <select
                      id="category"
                      formcontrolname="frontFacingCategory"
                      required=""
                      className="custom-select ng-untouched ng-pristine ng-invalid"
                    >
                      {data[category].map((i) => {
                        return <option>{i}</option>;
                      })}
                    </select>
                  </div>
                </div>
              ) : (
                <></>
              )}

              <div class="row justify-content-center">
                <div class="col-11">
                  <p class="small-txt">
                    {" "}
                    Forevermark, will be hosting its annual Business to Business
                    Event. This event will be held virtually, we will need to
                    collect your full name, business email address, business
                    contact number, your store name, store designation and the
                    city the store is located. <br /> Forevermark will store and
                    process your personal data including your email address to
                    notify you of up and coming future Forevermark Forum Events
                    and any other related events that we think may be of
                    interest. Your personal data will be processed in accordance
                    with the Forevemark's Privacy Policy which can be read here:{" "}
                    <a
                      href="https://www.forevermark.com/en-in/privacy-policy/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.forevermark.com/en-in/privacy-policy/
                    </a>
                    <br /> You can withdraw your consent at any time by
                    contacting Forevermark at{" "}
                    <a href="mailto:forum2021@forevermark.com">
                      forum2021@forevermark.com
                    </a>{" "}
                    or clicking on the unsubscribe button via email.{" "}
                  </p>
                </div>
              </div>
              <div class="my-4 mx-4">
                <div class="form-check">
                  <input
                    type="checkbox"
                    value=""
                    id="yes-email"
                    formcontrolname="emailUpdates"
                    className="form-check-input ng-untouched ng-pristine ng-invalid"
                  />
                  <label for="yes-email" class="form-check-label chkbox-lbl">
                    <span style={{ color: "red" }}>*</span> Please click here to
                    sign up for Forevermark &amp; Forum updates via email and
                    SMS.{" "}
                  </label>
                </div>
              </div>
              <input
                type="submit"
                value="Register Now"
                className="cmn-register-btn text-uppercase disabled"
                onClick={(e) => {
                    e.preventDefault();
                    if(!loader){
                    history.push({
                      pathname: "/after-register",
                      state: {
                        active: 3,
                      },
                    });}
                  }}
                disabled=""
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;


// sandgrid: 11111111111111111111111111111111111111