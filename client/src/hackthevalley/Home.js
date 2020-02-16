import React, { Component, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Typing from 'react-typing-animation'
import logo from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import './Home.css'
import Collapse from 'react-bootstrap/Collapse'
import { Button } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div class="home-container">
                <Typing>
                    <span class="home-title"><img src={require('./logo.png')} width={'800px'}/> </span>
                    <span class="home-heading"><br />Connecting skilled labour professionals with customers.</span>
                </Typing>
                <div class="transbox">
                    <img id="bg" className="img-responsive" src={logo} alt="logo"/>
                </div>
                <br></br>
                <br></br>
                <div class="container">
                    <br></br>
                    <br></br>
                    <div class="row">
                        <h3 class="home-description">Our goal is to promote the skilled labour industry by allowing workers to advertise their services
                        and users can legitimize their services by leaving reviews.</h3>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div class="row">
                        <div class="col-6">
                            <img className="img-responsive1" src={image4} alt="logo"/>
                        </div>
                        <div class="col-6">
                            <h5 class="home-subtitle">Client Side</h5>
                            <ul class="home-advantages">
                                <li>Ability to choose the most affordable service</li>
                                <li>Easy access to a wide variety of skilled labour</li>
                                <li>Option to leave reviews about your workers</li>
                            </ul>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div class="row">
                        <div class="col-6">
                            <h5 class="home-subtitle">Service Side</h5>
                            <ul class="home-advantages">
                                <li>High potential to attract new customers</li>
                                <li>Reduction in marketing expenses</li>
                                <li>Ability to compare your services with your competitors</li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <img className="img-responsive1" src={image3} alt="logo"/>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                
                <div class="button-size">
                    <Example />
                </div>

                    <br></br>
                    <br></br>
                    <br></br>

                <footer class="home-footer">
                </footer>
            </div>
        )
    }
}

function Example() {
    const [open, setOpen] = useState(false);
  
    return (
        <>
        <div class="col align-self-end">
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
            Testimonials From Real Customers
            </Button>
        </div>
        <Collapse in={open}>
            <div id="example-collapse-text">
                <br></br>
                "I started using WorkBounce since January, and I am proud to say that my business has expanded exponentially!" - Mr. Jack Smith, Plumber
                <br></br>
                "I definitely attest that I do not have much free time after hosting my services on WorkBounce!" - Mr. Mike Tyson, Tilesmith
            </div>
        </Collapse>
        </div>
        </>
    );
}

export default Home