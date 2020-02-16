import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import Home from "./hackthevalley/Home"
import Dashboard from "./hackthevalley/Dashboard"
import Application from "./hackthevalley/Application"
import Feedback from "./hackthevalley/Feedback"
import ContactUs from "./hackthevalley/ContactUs"
import Canvas from "./hackthevalley/Particles"
import MapContainer from "./hackthevalley/Map"
import image5 from "./hackthevalley/image5.jpg"

export default function BasicExample() {
    return (
        <Router>      
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navposition">
                    <div class="d-flex flex-row order-2 order-lg-3">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/workersnearyou">Workers Near You</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/application">Worker Application</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/feedback">Customer Feedback</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact Information</Link>
                            </li>
                            <li class="nav-item">
                            </li>
                            <li class="nav-item">
                            </li>
                            <li class="nav-item">
                            </li>
                            <li class="nav-item">
                            </li>
                            <div class="image-mover">
                                <img className="img-responsive2" src={image5} alt="logo"/>
                            </div>
                        </ul>
                    </div>
                </nav>
  
                <Switch>
                    <Route exact path="/">
                        <HomeBar />
                    </Route>
                    <Route path="/dashboard">
                        <DashboardBar />
                    </Route>
                    <Route path="/workersnearyou">
                        <WorkersNearYouBar />
                    </Route>
                    <Route path="/application">
                        <ApplicationBar />
                    </Route>
                    <Route path="/feedback">
                        <FeedbackBar />
                    </Route>
                    <Route path="/contact">
                        <ContactBar />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function HomeBar() {
    return (
        <div>
            <Home />
        </div>
    );
  }
  
function DashboardBar() {
    return (
        <div>
            <Dashboard />
        </div>
    );
}

function WorkersNearYouBar() {
    return (
        <div>
            <MapContainer />
        </div>
    )
}

function ApplicationBar() {
    return (
        <div>
            <Canvas />
            <Application />
        </div>
    );
}

function FeedbackBar() {
    return (
        <div>
            <Canvas />
            <Feedback />
        </div>
    );
}

function ContactBar() {
    return (
        <div>
            <Canvas />
            <ContactUs />
        </div>
    );
}

