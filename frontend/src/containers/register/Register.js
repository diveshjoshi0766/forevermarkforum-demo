import { allSettled } from "q";
import React, { useState } from "react";
import CallingCodeSelect from "../../components/callingcodeSelect/CallingCodeSelect";
import {db} from '../../config/Firebase'
import { useHistory, useLocation } from "react-router-dom";
const data = {
  "De Beers Group": [
    "Select Sub Category",
    "De Beers Group",
    "Forevermark",
    "Forevermark India Team",
  ],
  "Others": [
    "Select Sub Category",
    " Advertising, Marketing & Media Agency",
    " Banking & Finance",
    " Diamond Manufacturer",
    " Jewellery Manufacturer",
    " Others",
  ],
  "Press & Media": ["Select Sub Category", " Other Media", " Trade Media "],
};
function Register() {
 
  const history = useHistory();
 
  const [firstName, setfirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [city, setCity] = useState("")
  const [designation, setDesignation] = useState("")
  const [email, setEmail] = useState("")
  const [countryCode, setCountryCode] = useState("+91")
  const [mobile, setMobile] = useState("")
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [check, setCheck] = useState(false);
 
  const [loader, setLoader] = useState(true)
 
  function handleValidation() {
    let validated = true;
    if(firstName.trim() === "") {
      document.getElementById("firstName").classList.add("is-invalid"); 
      validated = false;
    }
    if(lastName.trim() === "") {
      document.getElementById("lastName").classList.add("is-invalid"); 
      validated = false;
    }
    if(companyName.trim() === "") {
      document.getElementById("companyName").classList.add("is-invalid"); 
      validated = false;
    }
    if(city.trim() === "") {
      document.getElementById("city").classList.add("is-invalid"); 
      validated = false;
    }
    if(designation.trim() === "") {
      document.getElementById("designation").classList.add("is-invalid");
      validated = false; 
    }
    if(email.trim() === "") {
      document.getElementById("email").classList.add("is-invalid"); 
      validated = false;
    }
    if(mobile.trim() === "") {
      document.getElementById("mobile").classList.add("is-invalid"); 
      validated = false;
    }
    if(category.trim() === "") {
      document.getElementById("category").style.borderColor = "#dc3545";
      validated = false;
    }
   
    return validated;
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoader(false);

    if(!handleValidation()) return;  
 
    db.collection('users').add({
      firstName: firstName,
      lastName: lastName,
      companyName: companyName,
      city: city,
      designation: designation,
      email: email,
      countryCallingCode: countryCode,
      mobileNumber: mobile,
      frontFacingCategory: category,
      frontFacingSubCategory: subCategory,
      emailUpdates: check,
      createDate: new Date()
    }).then((res) => {
      console.log(res);
      console.log("Date saved to Datebase")
      setLoader(true);
      history.push({
        pathname: "/after-register",
        state: {
          active: 3,
        },
      });
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
                    id="firstName"
                    value={firstName}
                    type="text"
                    required=""
                    onChange={(e) => setfirstName(e.target.value)}
                    className="form-control  "
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
                    id="lastName"
                    type="text"
                    required=""
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-control "
                  />
                </div>
              </div>
              <div className="form-group row cmn-form-field">
                <label for="firstname" className="col-sm-4 col-form-label">
                  <span>*</span>Company Name
                </label>
                <div className="col-sm-8">
                  <input
                    id="companyName"
                    value={companyName}
                    type="text"
                    required=""
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="form-control "
                  />
                </div>
              </div>
              <div className="form-group row cmn-form-field">
                <label for="firstname" className="col-sm-4 col-form-label">
                  <span>*</span>City
                </label>
                <div className="col-sm-8">
                  <input
                    id="city"
                    value={city}
                    type="text"
                    required=""
                    onChange={(e) => setCity(e.target.value)}
                    className="form-control "
                  />
                </div>
              </div>
              <div className="form-group row cmn-form-field">
                <label for="firstname" className="col-sm-4 col-form-label">
                  <span>*</span>Designation
                </label>
                <div className="col-sm-8">
                  <input
                    id="designation"
                    value={designation}
                    type="text"
                    required=""
                    onChange={(e) => setDesignation(e.target.value)}
                    className="form-control "
                  />
                </div>
              </div>
              <div className="form-group row cmn-form-field">
                <label for="firstname" className="col-sm-4 col-form-label">
                  <span>*</span>Email
                </label>
                <div className="col-sm-8">
                  <input
                    id="email"
                    value={email}
                    type="email"
                    required=""
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control "
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
                <select
      required=""
      value={countryCode}
      onChange={e=>setCountryCode(e.target.value)}
      className="custom-select ng-untouched ng-pristine ng-invalid"
    >
      <option value="91"> IN (+91) </option>
      <option value="247"> AC (+247) </option>
      <option value="376"> AD (+376) </option>
      <option value="971"> AE (+971) </option>
      <option value="93"> AF (+93) </option>
      <option value="1"> AG (+1) </option>
      <option value="1"> AI (+1) </option>
      <option value="355"> AL (+355) </option>
      <option value="374"> AM (+374) </option>
      <option value="244"> AO (+244) </option>
      <option value="54"> AR (+54) </option>
      <option value="1"> AS (+1) </option>
      <option value="43"> AT (+43) </option>
      <option value="61"> AU (+61) </option>
      <option value="297"> AW (+297) </option>
      <option value="358"> AX (+358) </option>
      <option value="994"> AZ (+994) </option>
      <option value="387"> BA (+387) </option>
      <option value="1"> BB (+1) </option>
      <option value="880"> BD (+880) </option>
      <option value="32"> BE (+32) </option>
      <option value="226"> BF (+226) </option>
      <option value="359"> BG (+359) </option>
      <option value="973"> BH (+973) </option>
      <option value="257"> BI (+257) </option>
      <option value="229"> BJ (+229) </option>
      <option value="590"> BL (+590) </option>
      <option value="1"> BM (+1) </option>
      <option value="673"> BN (+673) </option>
      <option value="591"> BO (+591) </option>
      <option value="599"> BQ (+599) </option>
      <option value="55"> BR (+55) </option>
      <option value="1"> BS (+1) </option>
      <option value="975"> BT (+975) </option>
      <option value="267"> BW (+267) </option>
      <option value="375"> BY (+375) </option>
      <option value="501"> BZ (+501) </option>
      <option value="1"> CA (+1) </option>
      <option value="61"> CC (+61) </option>
      <option value="243"> CD (+243) </option>
      <option value="236"> CF (+236) </option>
      <option value="242"> CG (+242) </option>
      <option value="41"> CH (+41) </option>
      <option value="225"> CI (+225) </option>
      <option value="682"> CK (+682) </option>
      <option value="56"> CL (+56) </option>
      <option value="237"> CM (+237) </option>
      <option value="86"> CN (+86) </option>
      <option value="57"> CO (+57) </option>
      <option value="506"> CR (+506) </option>
      <option value="53"> CU (+53) </option>
      <option value="238"> CV (+238) </option>
      <option value="599"> CW (+599) </option>
      <option value="61"> CX (+61) </option>
      <option value="357"> CY (+357) </option>
      <option value="420"> CZ (+420) </option>
      <option value="49"> DE (+49) </option>
      <option value="253"> DJ (+253) </option>
      <option value="45"> DK (+45) </option>
      <option value="1"> DM (+1) </option>
      <option value="1"> DO (+1) </option>
      <option value="213"> DZ (+213) </option>
      <option value="593"> EC (+593) </option>
      <option value="372"> EE (+372) </option>
      <option value="20"> EG (+20) </option>
      <option value="212"> EH (+212) </option>
      <option value="291"> ER (+291) </option>
      <option value="34"> ES (+34) </option>
      <option value="251"> ET (+251) </option>
      <option value="358"> FI (+358) </option>
      <option value="679"> FJ (+679) </option>
      <option value="500"> FK (+500) </option>
      <option value="691"> FM (+691) </option>
      <option value="298"> FO (+298) </option>
      <option value="33"> FR (+33) </option>
      <option value="241"> GA (+241) </option>
      <option value="44"> GB (+44) </option>
      <option value="1"> GD (+1) </option>
      <option value="995"> GE (+995) </option>
      <option value="594"> GF (+594) </option>
      <option value="44"> GG (+44) </option>
      <option value="233"> GH (+233) </option>
      <option value="350"> GI (+350) </option>
      <option value="299"> GL (+299) </option>
      <option value="220"> GM (+220) </option>
      <option value="224"> GN (+224) </option>
      <option value="590"> GP (+590) </option>
      <option value="240"> GQ (+240) </option>
      <option value="30"> GR (+30) </option>
      <option value="502"> GT (+502) </option>
      <option value="1"> GU (+1) </option>
      <option value="245"> GW (+245) </option>
      <option value="592"> GY (+592) </option>
      <option value="852"> HK (+852) </option>
      <option value="504"> HN (+504) </option>
      <option value="385"> HR (+385) </option>
      <option value="509"> HT (+509) </option>
      <option value="36"> HU (+36) </option>
      <option value="62"> ID (+62) </option>
      <option value="353"> IE (+353) </option>
      <option value="972"> IL (+972) </option>
      <option value="44"> IM (+44) </option>
      <option value="246"> IO (+246) </option>
      <option value="964"> IQ (+964) </option>
      <option value="98"> IR (+98) </option>
      <option value="354"> IS (+354) </option>
      <option value="39"> IT (+39) </option>
      <option value="44"> JE (+44) </option>
      <option value="1"> JM (+1) </option>
      <option value="962"> JO (+962) </option>
      <option value="81"> JP (+81) </option>
      <option value="254"> KE (+254) </option>
      <option value="996"> KG (+996) </option>
      <option value="855"> KH (+855) </option>
      <option value="686"> KI (+686) </option>
      <option value="269"> KM (+269) </option>
      <option value="1"> KN (+1) </option>
      <option value="850"> KP (+850) </option>
      <option value="82"> KR (+82) </option>
      <option value="965"> KW (+965) </option>
      <option value="1"> KY (+1) </option>
      <option value="7"> KZ (+7) </option>
      <option value="856"> LA (+856) </option>
      <option value="961"> LB (+961) </option>
      <option value="1"> LC (+1) </option>
      <option value="423"> LI (+423) </option>
      <option value="94"> LK (+94) </option>
      <option value="231"> LR (+231) </option>
      <option value="266"> LS (+266) </option>
      <option value="370"> LT (+370) </option>
      <option value="352"> LU (+352) </option>
      <option value="371"> LV (+371) </option>
      <option value="218"> LY (+218) </option>
      <option value="212"> MA (+212) </option>
      <option value="377"> MC (+377) </option>
      <option value="373"> MD (+373) </option>
      <option value="382"> ME (+382) </option>
      <option value="590"> MF (+590) </option>
      <option value="261"> MG (+261) </option>
      <option value="692"> MH (+692) </option>
      <option value="389"> MK (+389) </option>
      <option value="223"> ML (+223) </option>
      <option value="95"> MM (+95) </option>
      <option value="976"> MN (+976) </option>
      <option value="853"> MO (+853) </option>
      <option value="1"> MP (+1) </option>
      <option value="596"> MQ (+596) </option>
      <option value="222"> MR (+222) </option>
      <option value="1"> MS (+1) </option>
      <option value="356"> MT (+356) </option>
      <option value="230"> MU (+230) </option>
      <option value="960"> MV (+960) </option>
      <option value="265"> MW (+265) </option>
      <option value="52"> MX (+52) </option>
      <option value="60"> MY (+60) </option>
      <option value="258"> MZ (+258) </option>
      <option value="264"> NA (+264) </option>
      <option value="687"> NC (+687) </option>
      <option value="227"> NE (+227) </option>
      <option value="672"> NF (+672) </option>
      <option value="234"> NG (+234) </option>
      <option value="505"> NI (+505) </option>
      <option value="31"> NL (+31) </option>
      <option value="47"> NO (+47) </option>
      <option value="977"> NP (+977) </option>
      <option value="674"> NR (+674) </option>
      <option value="683"> NU (+683) </option>
      <option value="64"> NZ (+64) </option>
      <option value="968"> OM (+968) </option>
      <option value="507"> PA (+507) </option>
      <option value="51"> PE (+51) </option>
      <option value="689"> PF (+689) </option>
      <option value="675"> PG (+675) </option>
      <option value="63"> PH (+63) </option>
      <option value="92"> PK (+92) </option>
      <option value="48"> PL (+48) </option>
      <option value="508"> PM (+508) </option>
      <option value="1"> PR (+1) </option>
      <option value="970"> PS (+970) </option>
      <option value="351"> PT (+351) </option>
      <option value="680"> PW (+680) </option>
      <option value="595"> PY (+595) </option>
      <option value="974"> QA (+974) </option>
      <option value="262"> RE (+262) </option>
      <option value="40"> RO (+40) </option>
      <option value="381"> RS (+381) </option>
      <option value="7"> RU (+7) </option>
      <option value="250"> RW (+250) </option>
      <option value="966"> SA (+966) </option>
      <option value="677"> SB (+677) </option>
      <option value="248"> SC (+248) </option>
      <option value="249"> SD (+249) </option>
      <option value="46"> SE (+46) </option>
      <option value="65"> SG (+65) </option>
      <option value="290"> SH (+290) </option>
      <option value="386"> SI (+386) </option>
      <option value="47"> SJ (+47) </option>
      <option value="421"> SK (+421) </option>
      <option value="232"> SL (+232) </option>
      <option value="378"> SM (+378) </option>
      <option value="221"> SN (+221) </option>
      <option value="252"> SO (+252) </option>
      <option value="597"> SR (+597) </option>
      <option value="211"> SS (+211) </option>
      <option value="239"> ST (+239) </option>
      <option value="503"> SV (+503) </option>
      <option value="1"> SX (+1) </option>
      <option value="963"> SY (+963) </option>
      <option value="268"> SZ (+268) </option>
      <option value="290"> TA (+290) </option>
      <option value="1"> TC (+1) </option>
      <option value="235"> TD (+235) </option>
      <option value="228"> TG (+228) </option>
      <option value="66"> TH (+66) </option>
      <option value="992"> TJ (+992) </option>
      <option value="690"> TK (+690) </option>
      <option value="670"> TL (+670) </option>
      <option value="993"> TM (+993) </option>
      <option value="216"> TN (+216) </option>
      <option value="676"> TO (+676) </option>
      <option value="90"> TR (+90) </option>
      <option value="1"> TT (+1) </option>
      <option value="688"> TV (+688) </option>
      <option value="886"> TW (+886) </option>
      <option value="255"> TZ (+255) </option>
      <option value="380"> UA (+380) </option>
      <option value="256"> UG (+256) </option>
      <option value="1"> US (+1) </option>
      <option value="598"> UY (+598) </option>
      <option value="998"> UZ (+998) </option>
      <option value="39"> VA (+39) </option>
      <option value="1"> VC (+1) </option>
      <option value="58"> VE (+58) </option>
      <option value="1"> VG (+1) </option>
      <option value="1"> VI (+1) </option>
      <option value="84"> VN (+84) </option>
      <option value="678"> VU (+678) </option>
      <option value="681"> WF (+681) </option>
      <option value="685"> WS (+685) </option>
      <option value="383"> XK (+383) </option>
      <option value="967"> YE (+967) </option>
      <option value="262"> YT (+262) </option>
      <option value="27"> ZA (+27) </option>
      <option value="260"> ZM (+260) </option>
      <option value="263"> ZW (+263) </option>
    </select>
                </div>
              </div>
              <div className="form-group row cmn-form-field">
                <label for="firstname" className="col-sm-4 col-form-label">
                  <span>*</span> Business Mobile
                </label>
                <div className="col-sm-8">
                  <input
                    id="mobile"
                    value={mobile}
                    type="tel"
                    required=""
                    className="form-control "
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
                    className="custom-select "
                  >
                    <option value="">Select Category</option>
                    <option value="Anglo American">
                      {" "}
                      Anglo American{" "}
                    </option>
                    <option value="De Beers Group"> De Beers Group </option>
                    <option value="Forevermark Authorised Jeweller">
                      {" "}
                      Forevermark Authorised Jeweller{" "}
                    </option>
                    <option value="Forevermark Diamantaire / Manufacturer">
                      {" "}
                      Forevermark Diamantaire / Manufacturer{" "}
                    </option>
                    <option value="Others"> Others </option>
                    <option value="Press & Media"> Press & Media </option>
                    <option value="Retailer"> Retailer </option>
                  </select>
                </div>
              </div>
              {category === "De Beers Group" ||
                category === "Others" ||
                category === "Press & Media" ? (
                <div className="form-group row cmn-form-field">
                  <label for="category" className="col-sm-4 col-form-label">
                    <span>*</span>Sub Category
                  </label>
                  <div className="col-sm-6">
                    <select
                      id="subCategory"
                      formcontrolname="frontFacingSubCategory"
                      required=""
                      className="custom-select "
                      onChange={e => setSubCategory(e.target.value)}
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
                    value={check}
                    id="yes-email"
                    formcontrolname="emailUpdates"
                    className="form-check-input "
                    onChange={(e) => {
                      setCheck(e.target.checked);
                      if(!check) {
                        document.getElementById("register").classList.remove("disabled");
                      } else {
                        document.getElementById("register").classList.add("disabled");
                      }
                      console.log(check)
                    }}
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
                id="register"
                className="cmn-register-btn text-uppercase disabled"
                // onClick={(e) => {
                //     e.preventDefault();
                //     if(!loader){
                //     history.push({
                //       pathname: "/after-register",
                //       state: {
                //         active: 3,
                //       },
                //     });}
                //   }}
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