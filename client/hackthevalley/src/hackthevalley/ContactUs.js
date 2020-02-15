import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './ContactUs.css'

class ContactUs extends Component {
    render() {
        return (
            <body class="body-home">
                <div class="contact-title">
                    <h1>Contact us</h1>
                    <br></br>
                    <h2>Please feel free to reach out for more information!</h2>
                </div>

                <div class="contact-form">
                    <div class="row justify-content-md-center">
                    <form class="form-home" id="contact-form" method="post" action="">
                        <input name="name" type="text" class="form-control" placeholder="Your Name" required></input>
                        <br></br>
                        <input name="email" type="email" class="form-control" placeholder="Your Email" required></input>
                        <br></br>
                        <textarea name="message" class="form-control" placeholder="Message" rows="4" required></textarea>
                        <br></br>
                        <input type="submit" class="form-control submit" value="SEND MESSAGE"></input>
                    </form>
                    </div>
                </div>
            </body> 
        )
    }
}

export default ContactUs