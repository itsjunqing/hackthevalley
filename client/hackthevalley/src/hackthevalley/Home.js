import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Typing from 'react-typing-animation'
import logo from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div class="home-container">
                <Typing>
                    <span class="home-title">WORKBOUNCE</span>
                    <span class="home-heading">Connecting skilled labour professionals with customers.</span>
                </Typing>
                <div class="transbox">
                    <img id="bg" className="img-responsive" src={logo} alt="logo"/>
                </div>
                <br></br>
                <br></br>
                <div class="container">
                    <div class="row">
                        <h3 class="description">WorkBounce aims to promote and legitimize the skilled labour industry by displaying workers around the area and </h3>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <img className="img-responsive" src={image3} alt="logo"/>
                        </div>
                        <div class="col-6">
                            <h1>memes</h1>
                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                        <div class="col-6">
                            <h1>memes</h1>
                        </div>
                        <div class="col-6">
                            <img className="img-responsive" src={image4} alt="logo"/>
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>
        )
    }
}

export default Home