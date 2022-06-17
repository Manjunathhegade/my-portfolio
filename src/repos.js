import React, { Component } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./App.css";

export default function Repos(props) {
    return (
        <div className="repomaincontainer">
            <div className="repoheadingcontainer">
                <div className="repoheading">
                    Git Repositories
                </div>
            </div>
            {/* repo cards */}
            <div className="repocard">
                {/* 1st card */}
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
                {/* 3rdcard */}
                <div className="left-project-cards">
                    <div className="work-card-heading">
                        RazorPay-The Payment Gatway
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
                        The project is RazorPay-The Payment Gatway, Which is in
                        React JS, Node JS and Express JS technologies. Package
                        used @material-ui/core, axios ans Sweet alert. First need
                        to create order id and once got id, pass into razorpay
                        options and replace razor pay key in options
                    </div>
                    <div className="work-card-footer bounce-out-on-hover">
                        <div
                            onClick={() =>
                                window.open(
                                    "https://github.com/Manjunathhegade/RazorPay-with-reactJS-and-nodeJS",
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
                {/* 4th */}
                <div className="left-project-cards">
                    <div className="work-card-heading">
                        E-Commerce-Project
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
                        This project is SCOTCH HUB, The Online scotch Shopping
                        project in MERN stack using some npm packages i,e noty,
                        react-route, multer,node-mailer, and JWT etc. Used local
                        database Mongoose.
                    </div>
                    <div className="work-card-footer bounce-out-on-hover">
                        <div
                            onClick={() =>
                                window.open(
                                    "https://github.com/Manjunathhegade/E-Commerce-Project-in-MERN-stack",
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
                {/* 5th work card */}
                <div className="left-project-cards">
                    <div className="work-card-heading">
                        Invoice-Wallet-PDF
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
                        This project is Invoice-Wallet-PDF, Mainly concentrate on
                        UI designs. using some npm packages i,e
                        react-native-vector-icons/MaterialIcons, react-route,
                        rn-pdf-reader-js,react-native-modal and moment.
                    </div>
                    <div className="work-card-footer bounce-out-on-hover">
                        <div
                            onClick={() =>
                                window.open(
                                    "https://github.com/Manjunathhegade/Invoice-Wallet-PDF-React-Native-Application",
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
                {/* 6th work card */}
                <div className="left-project-cards">
                    <div className="work-card-heading">
                        Google-Map-Autocomplete
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
                        This project is Google-Map-Autocomplete, using HTML as a
                        markup language and JS as Programming language. features
                        are Google place Autocomplete, getting user current
                        location and shows user location on the map using marker
                    </div>
                    <div className="work-card-footer bounce-out-on-hover">
                        <div
                            onClick={() =>
                                window.open(
                                    "https://github.com/Manjunathhegade/google-map-autocomplete-HTML",
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
        </div>
    );
}