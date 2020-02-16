import React, { Component } from "react";
import Particles from "react-particles-js";

class Canvas extends Component {
    state = { width: "0px", height: "0px" };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }
    
    updateWindowDimensions = () => {
        this.setState({
            width: window.innerWidth,
            height: 1000
        });
    };
    
    render() {
        const { width, height } = this.state;
        console.log(width, height);
        return (
            <Particles
            {...this.state}
            style ={{position: "absolute"}}
            params={{
                particles: {
                    number: {
                        value: 30,
                        density: {
                            enable: true,
                            value_area: 400 // higher value = less particles, smaller value = more particles in background
                        }
                    },
                    color: {
                        value: "#000000" // color of the particle (black)
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000" // color of the particle lines (black)
                        },
                        image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 100
                        }
                    },
                    opacity: {
                        value: 0.4,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 10, // speed or frequency of particles blinking, higher speed = blink more
                            opacity_min: 0.5, // try changing opacity
                            sync: false
                        }
                    },
                    size: {
                        value: 5, // size of the particle circles 
                        random: true,
                        anim: {
                            enable: true,
                            speed: 10, // speed in which particles are generated
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable_auto: true,
                        distance: 100,
                        color: "#000000",
                        opacity: 1,
                        width: 1,
                        condensed_mode: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 600
                        }
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: false
                        },
                        onclick: {
                            enable: false
                        },
                        resize: true
                    }
                },
                retina_detect: true
                }}
            />  
        );
    }
}
    
export default Canvas;