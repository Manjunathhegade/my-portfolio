import React, { Component } from "react";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

export default function WorkAndEducation(props) {
    return (
        <div className="workmaincontainer">
            <div className="workheadingcontainer1">
                <div className="repoheading">
                    Education
                </div>
            </div>
            <div className="edumaincontainer">
                {/* 1st card */}
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
                        computer science and engineering Branch at shreedevi
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
                {/* 2nd card */}
                <div className="main-education-card">
                    <div className="main-studies-card-heading">
                        <div className="studies-card-heading">
                            DVS (independent) PU College
                        </div>
                        <div className="studies-card-duration">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: 8,
                                }}
                            >
                                apr 2013 - apr 2015
                            </div>
                        </div>
                    </div>
                    <div className="studies-card-body">
                        Completed my pre-university course in DVS (independent)
                        PU College. Combination - Science (PCMB). In
                        Shivmogga(D)
                    </div>
                    <div className="studies-card-footer ">
                        <div>PUC</div>
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
                {/* 3rd card */}
                <div className="main-education-card">
                    <div className="main-studies-card-heading">
                        <div className="studies-card-heading">
                            BVS school-Honnali
                        </div>
                        <div className="studies-card-duration">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: 8,
                                }}
                            >
                                mar 2013
                            </div>
                        </div>
                    </div>
                    <div className="studies-card-body">
                        I have completed my High School studies in BVS English
                        medium school-Honnali and my Primary in BVS Kannada
                        Medium school-Honnali
                    </div>
                    <div className="studies-card-footer ">
                        <div>School</div>
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
            </div>
            <div className="workheadingcontainer1">
                <div className="repoheading">
                    Work History
                </div>
            </div>
            <div className="workhistorymaincontainer">
                {/* 1st card */}
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
                {/* 2nd card */}
                <div className="main-work-card">
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
                    </div> 
            </div>
        </div>
    )
}
