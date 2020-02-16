import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import Home from "./hackthevalley/Home"
import Dashboard from "./hackthevalley/Dashboard"
import Application from "./hackthevalley/Application"
import ContactUs from "./hackthevalley/ContactUs"
import MapContainer from './hackthevalley/Map'

export default function BasicExample() {
    return (
        <Router>      
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
                                <Link class="nav-link" to="/application">Application</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact Information</Link>
                            </li>
                            <li className="nav-item">
                                <Link class="nav-link" to="/map">Nearby Services</Link>
                            </li>
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
                    <Route path="/application">
                        <ApplicationBar />
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

function ApplicationBar() {
    return (
        <div>
            <Application />
        </div>
    );
}

function ContactBar() {
    return (
        <div>
            <ContactUs />
        </div>
    );
}

function MapBar(){
    return(
        <div>
            <MapContainer />
        </div>
    )
}

