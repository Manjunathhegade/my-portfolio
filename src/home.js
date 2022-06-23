import React, { useState, useEffect } from "react";
import { Line } from "rc-progress";
import Check from "@material-ui/icons/Check";
import GetAppIcon from "@material-ui/icons/GetApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import MenuIcon from "@material-ui/icons/Menu";
import leftImage from "./Assets/montain.jpg";
import profileLeft from "./Assets/profile-left.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import RightProfile from "./Assets/right-profile.jpg";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import Modal from '@material-ui/core/Modal';
import { saveAs } from 'file-saver';
import Container from '@material-ui/core/Container';
import {
  useNavigate
} from "react-router-dom";

import "./App.css";

export default function App(props) {
  const [loader, setLoader] = useState(true);
  const [currentYear, setCurrentYear] = useState("");
  const [menu, setMenu] = useState(false)
  const [repo, setRepo] = useState(false);
  const navigate = useNavigate();

  const changeBackground = (e) => {
    // e.style.color = "#fff";
  };
  const onoutmouseCV = (e) => {
    // e.style.color = "#8a8c8e";
  };

  useEffect(() => {
    setTimeout(() => _onloaderFalse(), 2000);
    setCurrentYear(new Date().getFullYear())

  });

  const downloadresume = () => {
    saveAs("./resume.pdf", "resume.pdf")
  }

  const _onloaderFalse = () => {
    setLoader(false);
  }
  const _openmenu = () => {
    setMenu(true)
  }

  const handleClose = () => setMenu(false);

  const viewrepo = () => {
    navigate('/repository')
  }

  const viewwork = () => {
    navigate('/workandeducation')
  }

  return (
    <div>
      {loader ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 200,
          }}
        >
          <div className="loader"></div>
        </div>
      ) : (
        <div className="main-container">
          <div className="top-nav-0nly-mobile">
            <div className="menu-icon">
              <MenuIcon style={{ color: "#fff", fontSize: "40px" }} onClick={() => _openmenu()} />
            </div>
          </div>
          <div className="RightMainContainer">
            <div className="RightMainContainerHeader">
              <div className="profile-photo-container">
                <img
                  className="profile-photo"
                  src={RightProfile}
                  alt={"profile-photo1"} Year Of Experience
                />
              </div>
              <div className="right-name-container">Manjunath Hegade DR</div>
              <div className="right-job-title-container">
                Full-stack Developer
              </div>
              <div className="right-job-title-container2">
                2.6 + Year Experience
              </div>
            </div>
            <div className="RightMainContainerBody">
              {/* right body card -1*/}
              <div className="right-body-1">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 20,
                    marginRight: 20,
                    marginLeft: 20,
                  }}
                >
                  <div>Residence:</div>
                  <div style={{ color: "#8a8c8e", fontWeight: 300 }}>
                    Shivmogga
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                    marginRight: 20,
                    marginLeft: 20,
                  }}
                >
                  <div>City:</div>
                  <div style={{ color: "#8a8c8e", fontWeight: 300 }}>
                    Bangalore
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                    marginRight: 20,
                    marginLeft: 20,
                  }}
                >
                  <div>Age:</div>
                  <div style={{ color: "#8a8c8e", fontWeight: 300 }}>24</div>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#8a8c8e",
                  fontWeight: 200,
                  marginTop: 20,
                  height: 0.5,
                }}
              ></div>
              {/* right body card -2 */}
              <div className="right-body-2">
                <div class="flex-wrapper">
                  <div class="single-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart orange">
                      <path
                        class="circle-bg"
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        class="circle"
                        stroke-dasharray="90, 100"
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <text x="18" y="20.35" class="percentage">
                        90%
                      </text>
                    </svg>
                  </div>

                  <div class="single-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart green">
                      <path
                        class="circle-bg"
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        class="circle"
                        stroke-dasharray="70, 100"
                        d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <text x="18" y="20.35" class="percentage">
                        70%
                      </text>
                    </svg>
                  </div>

                  <div class="single-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart blue">
                      <path
                        class="circle-bg"
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        class="circle"
                        stroke-dasharray="50, 100"
                        d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <text x="18" y="20.35" class="percentage">
                        50%
                      </text>
                    </svg>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    color: "#fff",
                    marginRight: 10,
                  }}
                >
                  <div>Kannada</div>
                  <div>English</div>
                  <div>Hindi</div>
                </div>
                {/* divider */}
                <div
                  style={{
                    backgroundColor: "#8a8c8e",
                    fontWeight: 200,
                    marginTop: 30,
                    height: 0.5,
                  }}
                ></div>
              </div>
              {/* right body card -3 */}
              <div className="right-body-3">
                {/* 1 technology */}
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ color: "#fff", fontWeight: "bold" }}>
                      Html
                    </div>
                    <div style={{ color: "#8a8c8e", fontWeight: "bold" }}>
                      80%
                    </div>
                  </div>
                  <Line percent="80" strokeWidth="4" strokeColor="#FFC107" />
                </div>
                {/* 2 technology */}
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ color: "#fff", fontWeight: "bold" }}>
                      React JS
                    </div>
                    <div style={{ color: "#8a8c8e", fontWeight: "bold" }}>
                      75%
                    </div>
                  </div>
                  <Line percent="75" strokeWidth="4" strokeColor="#FFC107" />
                </div>
                {/* 3 technology */}
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ color: "#fff", fontWeight: "bold" }}>
                      React Native
                    </div>
                    <div style={{ color: "#8a8c8e", fontWeight: "bold" }}>
                      60%
                    </div>
                  </div>
                  <Line percent="60" strokeWidth="4" strokeColor="#FFC107" />
                </div>
                {/* 4 technology */}
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ color: "#fff", fontWeight: "bold" }}>
                      Node JS
                    </div>
                    <div style={{ color: "#8a8c8e", fontWeight: "bold" }}>
                      70%
                    </div>
                  </div>
                  <Line percent="70" strokeWidth="4" strokeColor="#FFC107" />
                </div>
                {/* 5 technology */}
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ color: "#fff", fontWeight: "bold" }}>
                      MongoDB
                    </div>
                    <div style={{ color: "#8a8c8e", fontWeight: "bold" }}>
                      70%
                    </div>
                  </div>
                  <Line percent="70" strokeWidth="4" strokeColor="#FFC107" />
                </div>
                {/* 6 technology */}
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ color: "#fff", fontWeight: "bold" }}>
                      Express JS
                    </div>
                    <div style={{ color: "#8a8c8e", fontWeight: "bold" }}>
                      80%
                    </div>
                  </div>
                  <Line percent="80" strokeWidth="4" strokeColor="#FFC107" />
                </div>
                <div
                  style={{
                    backgroundColor: "#8a8c8e",
                    fontWeight: 200,
                    marginTop: 15,
                    height: 0.5,
                  }}
                ></div>
              </div>
              {/*right body card 4  */}
              <div className="right-body-4">
                {/* 1 sub technology */}
                <div
                  style={{
                    color: "#8a8c8e",
                    marginBottom: 10,
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Check style={{ color: "#FFC107" }} />
                  <div style={{ marginLeft: 7 }}> HTML, CSS, Material-UI</div>
                </div>
                {/* 2 sub technology */}
                <div
                  style={{
                    color: "#8a8c8e",
                    marginBottom: 10,
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Check style={{ color: "#FFC107" }} />{" "}
                  <div style={{ marginLeft: 7 }}>Git knowledge</div>
                </div>
                {/* 3 sub technology */}
                <div
                  style={{
                    color: "#8a8c8e",
                    marginBottom: 10,
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Check style={{ color: "#FFC107" }} />{" "}
                  <div style={{ marginLeft: 7 }}>Editor : Visual Code</div>
                </div>
                {/* 4th sub techonlogy */}
                <div
                  style={{
                    color: "#8a8c8e",
                    marginBottom: 10,
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Check style={{ color: "#FFC107" }} />
                  <div style={{ marginLeft: 7 }}>
                    Node API's : MSG91, Google Map's
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#8a8c8e",
                    fontWeight: 200,
                    marginTop: 15,
                    height: 0.5,
                  }}
                ></div>
              </div>
              {/* right body card 5 */}
              <div
                className="right-body-5"
                onMouseOver={() => changeBackground()}
                onmouseout={() => onoutmouseCV()}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    color: "#8a8c8e",
                    fontWeight: "bold",
                    fontSize: 13,
                  }}
                >
                  <a href='#' onClick={() => downloadresume()} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ color: "#8a8c8e" }}>DOWNLOAD CV </div> <GetAppIcon style={{ color: "#8a8c8e" }} />
                  </a>
                </div>
              </div>
            </div>
            <div className="RightMainContainerFooter">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 15,
                }}
              >
                <div href="">
                  <LinkedInIcon
                    style={{ color: "#8a8c8e" }}
                    onMouseOver={changeBackground}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/manjunath-hegade-082067170/",
                        "_blank"
                      )
                    }
                  />
                </div>
                <div href="">
                  <InstagramIcon
                    style={{ color: "#8a8c8e" }}
                    onMouseOver={changeBackground}
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/manjunath.hegade/?__a=1",
                        "_blank"
                      )
                    }
                  />
                </div>
                <div href="">
                  <GitHubIcon
                    style={{ color: "#8a8c8e" }}
                    onMouseOver={changeBackground}
                    onClick={() =>
                      window.open(
                        "https://github.com/Manjunathhegade",
                        "_blank"
                      )
                    }
                  />
                </div>
                <div>
                  <EmailIcon
                    style={{ color: "#8a8c8e" }}
                    onMouseOver={changeBackground}
                    onClick={() =>
                      window.open(
                        "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkwpQvDhRqVGkmZZxbRDjgDnRqFzZFDVqpggNkwXRdjtNztNnWbvqPRsMcsJwpRKFpTHhT",
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {/* left main container */}
          <div className="left-main-container">
            <div className="left-main-img-container">
              <img src={leftImage} className="image-mountain" />
              <img src={profileLeft} className="image-profile-left" />
              <div className="top-left-name-container">
                Manjunath Hegade DR
              </div>
              <div className="top-left-job-container">
                Associate Software Engineer
              </div>
              <div class="left-image-contact-button py-5 text-center">
                <a
                  href="#main-contact-container"
                  className="link bounce-out-on-hover"
                  action=".main-contact-container"
                >
                  CONTACT
                </a>
              </div>
            </div>
            <div className="left-years-conatiner-2">
              <div className="left-years-conatiner-2sub">
                <div
                  style={{
                    color: "#ffc107",
                    fontSize: 25,
                    fontWeight: "bold",
                  }}
                >
                  2.6 +
                </div>
                <div className="year-experiace">Year Of Experience</div>
              </div>
              <div className="left-years-conatiner-2sub-Completed-Projects">
                <div
                  style={{
                    color: "#ffc107",
                    fontSize: 25,
                    fontWeight: "bold",
                  }}
                >
                  20+
                </div>
                <div className="year-experiace">Completed Projects</div>
              </div>
            </div>
            {/* project conatiner */}
            <div className="left-projects-container">
              <div className="left-project-heading">My Projects</div>
              <div className="left-project-cards-conatiner">
                <div className="left-project-cards">
                  <div className="work-card-heading">
                    CRUD-In-MERN-Stack
                    <ArrowForwardIosIcon
                      style={{
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: 600,
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                    />
                    Web Application
                  </div>
                  <div className="work-card-body">
                    I built a project called CRUD-In-MERN-Stack, Which is in
                    MongoDB, React JS,Node JS, Express JS technologies. This
                    project is Employee Management Project. Packages used are
                    @material-ui, axios, react-router-dom. Used dynamic table
                    to list employees.
                  </div>
                  {/* 1 work card */}
                  <div className="work-card-footer bounce-out-on-hover">
                    <div
                      onClick={() =>
                        window.open(
                          "https://github.com/Manjunathhegade/CRUD-in-MERN-stack",
                          "_blank"
                        )
                      }
                    >
                      Github link
                    </div>
                    <ArrowForwardIosIcon
                      style={{
                        color: "#ffc107",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    />
                  </div>
                </div>
                {/* 2 work card */}
                <div className="left-project-cards">
                  <div className="work-card-heading">
                    Currency-converter
                    <ArrowForwardIosIcon
                      style={{
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: 600,
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                    />
                    Mobile Application
                  </div>
                  <div className="work-card-body">
                    The project is Currency-converter, Which is in React
                    Native,Node JS technologies. In this project convert
                    Indian currency into other currency i,e Doller, Euro,
                    Pound, Rubel, Aus, Cand, Yen, Dinar and Bitcoin. Here
                    mainly used react Class component to render the context
                  </div>
                  <div className="work-card-footer bounce-out-on-hover">
                    <div
                      onClick={() =>
                        window.open(
                          "https://github.com/Manjunathhegade/Currency-converter-React-native",
                          "_blank"
                        )
                      }
                    >
                      Github link
                    </div>
                    <ArrowForwardIosIcon
                      style={{
                        color: "#ffc107",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="viewmorediv">
                <a className="viewmore" onClick={() => viewrepo()}>view more</a>
              </div>
              {/* studies and work history */}
              <div className="studies-and-work-history-main-container">
                <div className="studies-and-work-history">
                  <div className="left-studies-and-work-history-heading">
                    Education
                  </div>
                  <div className="main-left-studies">
                    <div className="main-education-card">
                      <div className="main-studies-card-heading">
                        <div className="studies-card-heading">
                          Shreedevi Institute Of Technology
                        </div>
                        <div className="studies-card-duration">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              marginTop: 8,
                            }}
                          >
                            aug 2015 - apr 2019
                          </div>
                        </div>
                      </div>
                      <div className="studies-card-body">
                        I have completed my Bachelor of Engineering in
                        computer science and engineering Barnch at shreedevi
                        institute of technology in Mangaloru Karnataka.
                      </div>
                      <div className="studies-card-footer ">
                        <div>Engineering</div>
                        <div className="arrow bounce-out-on-hover">
                          <SchoolIcon
                            style={{
                              color: "#ffc107",
                              fontSize: 16,
                              fontWeight: 600,
                              marginLeft: 10,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="chat-shape"></div> */}
                  </div>
                </div>
                <div className="studies-work-middle-div bounce-out-on-hover">
                  <div className="studies-work-middle-sub">
                    <div className="studies-work-middle-circle">
                      <div style={{ height: 2 }}></div>
                      <div className="studies-work-middle-circle-two"></div>
                    </div>
                    <div className="studies-work-middle-circle">
                      <div style={{ height: 2 }}></div>
                      <div className="studies-work-middle-circle-two"></div>
                    </div>
                  </div>
                </div>
                {/* work history */}
                <div className="work-history">
                  <div className="left-work-history-heading">
                    Work History
                  </div>
                  <div className="main-work-card">
                    <div className="main-studies-card-heading">
                      <div className="studies-card-heading">
                        Happiest Minds Technologies Limited
                      </div>
                      <div className="studies-card-duration">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 8,
                          }}
                        >
                          aug 2019 - nov 2019
                        </div>
                      </div>
                    </div>
                    <div className="studies-card-body">
                      I started my career in Happiest Minds Technologies
                      Limited working as a co-ordinator in learning and
                      development team.
                    </div>
                    <div className="studies-card-footer ">
                      <div>Co-ordinator-L&D</div>
                      <div className="arrow bounce-out-on-hover">
                        <WorkIcon
                          style={{
                            color: "#ffc107",
                            fontSize: 16,
                            fontWeight: 600,
                            marginLeft: 10,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="main-work-card">
                      <div className="main-studies-card-heading">
                        <div className="studies-card-heading">
                          Medicloq Services Private Limited
                        </div>
                        <div className="studies-card-duration">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              marginTop: 8,
                            }}
                          >
                            nov 2019 - june 2021
                          </div>
                        </div>
                      </div>
                      <div className="studies-card-body">
                        I joined Medicloq Services Private Limited as Associate
                        Software Engineering role and i have working with the
                        libraries and frameworks based on javascript language.
                      </div>
                      <div className="studies-card-footer ">
                        <div>Software Engineer</div>
                        <div className="arrow bounce-out-on-hover">
                          <WorkIcon
                            style={{
                              color: "#ffc107",
                              fontSize: 16,
                              fontWeight: 600,
                              marginLeft: 10,
                            }}
                          />
                        </div>
                      </div>
                    </div> */}
                </div>
                {/* yellow circle deisgn */}
                <div className="studies-work-last-div bounce-out-on-hover">
                  <div className="studies-work-last-sub">
                    <div className="studies-work-middle-circle">
                      <div style={{ height: 2 }}></div>
                      <div className="studies-work-middle-circle-two"></div>
                    </div>
                    <div className="studies-work-middle-circle">
                      <div style={{ height: 2 }}></div>
                      <div className="studies-work-middle-circle-two"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="viewmorediv">
                <a className="viewmore" onClick={() => viewwork()}>view more</a>
              </div>
              {/* contact */}
              <div
                className="main-contact-container"
                id="main-contact-container"
              >
                <div className="left-studies-and-work-history-heading">
                  Contact information
                </div>
                <div className="sub-contact-container">
                  {/* <div className="contact-card">
                      <div className="contact-card-body">
                        <div className="contact-card-info">
                          <div style={{ color: "#fff" }}>Country:</div>
                          <div>India</div>
                        </div>
                        <div className="contact-card-info">
                          <div style={{ color: "#fff" }}>City:</div>
                          <div>Bangaloru</div>
                        </div>
                        <div className="contact-card-info">
                          <div style={{ color: "#fff" }}>Street:</div>
                          <div>Koramangala 1st block</div>
                        </div>
                      </div>
                    </div> */}
                  <div className="contact-card">
                    <div className="contact-card-body">
                      <div className="contact-card-info">
                        <div style={{ color: "#fff" }}>Email:</div>
                        <div className="sentanceFlex">manjunathhegadesmg@gmail.com</div>
                      </div>
                      <div className="contact-card-info">
                        <div style={{ color: "#fff" }}>Skype:</div>
                        <div>Manjunath Hegade</div>
                      </div>
                      <div className="contact-card-info">
                        <div style={{ color: "#fff" }}>Native:</div>
                        <div>Shivmogga</div>
                      </div>
                    </div>
                  </div>
                  <div className="contact-card">
                    <div className="contact-card-body">
                      <div className="contact-card-info">
                        <div style={{ color: "#fff" }}>Github:</div>
                        <div>github.com/Manjunathhegade</div>
                      </div>
                      <div className="contact-card-info">
                        <div style={{ color: "#fff" }}>Instagram:</div>
                        <div>manjunath.hegade</div>
                      </div>
                      <div className="contact-card-info">
                        <div style={{ color: "#fff" }}>LinkedIn:</div>
                        <div>manjunath-hegade-082067170</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* footer */}
              <div className="footer-main">
                <div className="footer">
                  <div style={{ marginTop: 15 }}>@ {currentYear}</div>
                  <div style={{ marginTop: 15 }}>
                    Developed by : Manjunath hegade
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Modal
                open={menu}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className="model-main-div">
                  <div className="model-close-button">
                    <button onClick={() => handleClose()}>close</button>
                  </div>
                  <div className="model-content">
                    <div className="model-RightMainContainer">
                      <div className="RightMainContainerHeader">
                        <div className="profile-photo-container">
                          <img
                            className="profile-photo"
                            src={RightProfile}
                            alt={"profile-photo1"} Year Of Experience
                          />
                        </div>
                        <div className="right-name-container">Manjunath Hegade DR</div>
                        <div className="right-job-title-container">
                          Full-stack Developer
                        </div>
                        <div className="right-job-title-container2">
                          2.6 + Year Experience
                        </div>
                      </div>
                      <div className="RightMainContainerBody">
                        {/* right body card -1*/}
                        <div className="right-body-1">
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              marginTop: 20,
                              marginRight: 20,
                              marginLeft: 20,
                            }}
                          >
                            <div>Residence:</div>
                            <div style={{ color: "#8a8c8e", fontWeight: 300 }}>
                              Shivmogga
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              marginTop: 10,
                              marginRight: 20,
                              marginLeft: 20,
                            }}
                          >
                            <div>City:</div>
                            <div style={{ color: "#8a8c8e", fontWeight: 300 }}>
                              Bangalore
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              marginTop: 10,
                              marginRight: 20,
                              marginLeft: 20,
                            }}
                          >
                            <div>Age:</div>
                            <div style={{ color: "#8a8c8e", fontWeight: 300 }}>24</div>
                          </div>
                        </div>
                        <div
                          style={{
                            backgroundColor: "#8a8c8e",
                            fontWeight: 200,
                            marginTop: 20,
                            height: 0.5,
                          }}
                        ></div>
                        {/* right body card -2 */}
                        <div className="right-body-2">
                          <div class="flex-wrapper">
                            <div class="single-chart">
                              <svg viewBox="0 0 36 36" class="circular-chart orange">
                                <path
                                  class="circle-bg"
                                  d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path
                                  class="circle"
                                  stroke-dasharray="90, 100"
                                  d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.35" class="percentage">
                                  90%
                                </text>
                              </svg>
                            </div>

                            <div class="single-chart">
                              <svg viewBox="0 0 36 36" class="circular-chart green">
                                <path
                                  class="circle-bg"
                                  d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path
                                  class="circle"
                                  stroke-dasharray="70, 100"
                                  d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.35" class="percentage">
                                  70%
                                </text>
                              </svg>
                            </div>

                            <div class="single-chart">
                              <svg viewBox="0 0 36 36" class="circular-chart blue">
                                <path
                                  class="circle-bg"
                                  d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path
                                  class="circle"
                                  stroke-dasharray="50, 100"
                                  d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.35" class="percentage">
                                  50%
                                </text>
                              </svg>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-around",
                              color: "#fff",
                              marginRight: 10,
                            }}
                          >
                            <div>Kannada</div>
                            <div>English</div>
                            <div>Hindi</div>
                          </div>
                          {/* divider */}
                          <div
                            style={{
                              backgroundColor: "#8a8c8e",
                              fontWeight: 200,
                              marginTop: 30,
                              height: 0.5,
                            }}
                          ></div>
                        </div>
                        {/* right body card -3 */}
                        <div className="right-body-3">
                          {/* 1 technology */}
                          <div style={{ marginBottom: 20 }}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div style={{ color: "#fff", fontWeight: "bold" }}>
                                Html
                              </div>
                              <div style={{ color: "#8a8c8e", fontWeight: "bold" }}>
                                80%
                              </div>
                            </div>
                            <Line percent="80" strokeWidth="4" strokeColor="#FFC107" />
                          </div>
                          {/* 2 technology */}
                          <div style={{ marginBottom: 20 }}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div style={{ color: "#fff", fontWeight: "bold" }}>
                                React JS
                              </div>
                              <div style={{ color: "#8a8c8e", fontWeight: "bold" }}>
                                75%
                              </div>
                            </div>
                            <Line percent="75" strokeWidth="4" strokeColor="#FFC107" />
                          </div>
                          {/* 3 technology */}
                          <div style={{ marginBottom: 20 }}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div style={{ color: "#fff", fontWeight: "bold" }}>
                                React Native
                              </div>
                              <div style={{ color: "#8a8c8e", fontWeight: "bold" }}>
                                60%
                              </div>
                            </div>
                            <Line percent="60" strokeWidth="4" strokeColor="#FFC107" />
                          </div>
                          {/* 4 technology */}
                          <div style={{ marginBottom: 20 }}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div style={{ color: "#fff", fontWeight: "bold" }}>
                                Node JS
                              </div>
                              <div style={{ color: "#8a8c8e", fontWeight: "bold" }}>
                                70%
                              </div>
                            </div>
                            <Line percent="70" strokeWidth="4" strokeColor="#FFC107" />
                          </div>
                          {/* 5 technology */}
                          <div style={{ marginBottom: 20 }}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div style={{ color: "#fff", fontWeight: "bold" }}>
                                MongoDB
                              </div>
                              <div style={{ color: "#8a8c8e", fontWeight: "bold" }}>
                                70%
                              </div>
                            </div>
                            <Line percent="70" strokeWidth="4" strokeColor="#FFC107" />
                          </div>
                          {/* 6 technology */}
                          <div style={{ marginBottom: 20 }}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div style={{ color: "#fff", fontWeight: "bold" }}>
                                Express JS
                              </div>
                              <div style={{ color: "#8a8c8e", fontWeight: "bold" }}>
                                80%
                              </div>
                            </div>
                            <Line percent="80" strokeWidth="4" strokeColor="#FFC107" />
                          </div>
                          <div
                            style={{
                              backgroundColor: "#8a8c8e",
                              fontWeight: 200,
                              marginTop: 15,
                              height: 0.5,
                            }}
                          ></div>
                        </div>
                        {/*right body card 4  */}
                        <div className="right-body-4">
                          {/* 1 sub technology */}
                          <div
                            style={{
                              color: "#8a8c8e",
                              marginBottom: 10,
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <Check style={{ color: "#FFC107" }} />
                            <div style={{ marginLeft: 7 }}> HTML, CSS, Material-UI</div>
                          </div>
                          {/* 2 sub technology */}
                          <div
                            style={{
                              color: "#8a8c8e",
                              marginBottom: 10,
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <Check style={{ color: "#FFC107" }} />{" "}
                            <div style={{ marginLeft: 7 }}>Git knowledge</div>
                          </div>
                          {/* 3 sub technology */}
                          <div
                            style={{
                              color: "#8a8c8e",
                              marginBottom: 10,
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <Check style={{ color: "#FFC107" }} />{" "}
                            <div style={{ marginLeft: 7 }}>Editor : Visual Code</div>
                          </div>
                          {/* 4th sub techonlogy */}
                          <div
                            style={{
                              color: "#8a8c8e",
                              marginBottom: 10,
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <Check style={{ color: "#FFC107" }} />
                            <div style={{ marginLeft: 7 }}>
                              Node API's : MSG91, Google Map's
                            </div>
                          </div>
                          <div
                            style={{
                              backgroundColor: "#8a8c8e",
                              fontWeight: 200,
                              marginTop: 15,
                              height: 0.5,
                            }}
                          ></div>
                        </div>
                        {/* right body card 5 */}
                        <div
                          className="right-body-5"
                          onMouseOver={() => changeBackground()}
                          onmouseout={() => onoutmouseCV()}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              color: "#8a8c8e",
                              fontWeight: "bold",
                              fontSize: 13,
                            }}
                          >
                            <a href='https://drive.google.com/file/d/1PKc-Zv81z_gm0zjYplkh2Rj2oj27J5ai/view?usp=sharing' download style={{ textDecoration: 'none', display: 'flex', flexDirection: 'row' }}>
                              <div style={{ color: "#8a8c8e" }}>DOWNLOAD CV </div> <GetAppIcon style={{ color: "#8a8c8e" }} />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="RightMainContainerFooter">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            marginTop: 15,
                          }}
                        >
                          <div href="">
                            <LinkedInIcon
                              style={{ color: "#8a8c8e" }}
                              onMouseOver={changeBackground}
                              onClick={() =>
                                window.open(
                                  "https://www.linkedin.com/in/manjunath-hegade-082067170/",
                                  "_blank"
                                )
                              }
                            />
                          </div>
                          <div href="">
                            <InstagramIcon
                              style={{ color: "#8a8c8e" }}
                              onMouseOver={changeBackground}
                              onClick={() =>
                                window.open(
                                  "https://www.instagram.com/manjunath.hegade/?__a=1",
                                  "_blank"
                                )
                              }
                            />
                          </div>
                          <div href="">
                            <GitHubIcon
                              style={{ color: "#8a8c8e" }}
                              onMouseOver={changeBackground}
                              onClick={() =>
                                window.open(
                                  "https://github.com/Manjunathhegade",
                                  "_blank"
                                )
                              }
                            />
                          </div>
                          <div>
                            <EmailIcon
                              style={{ color: "#8a8c8e" }}
                              onMouseOver={changeBackground}
                              onClick={() =>
                                window.open(
                                  "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkwpQvDhRqVGkmZZxbRDjgDnRqFzZFDVqpggNkwXRdjtNztNnWbvqPRsMcsJwpRKFpTHhT",
                                  "_blank"
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
