import React, { Component } from "react"
import ResultExtra from "./ResultExtra"

class GameThree extends Component {
    constructor() {
        super()
        this.state = {
            passtest: false,
        }
        this.handleChangeGreen = this.handleChangeGreen.bind(this)
        this.handleChangeYellow = this.handleChangeYellow.bind(this)
        this.handleChangePink = this.handleChangePink.bind(this)
    }

    handleChangeGreen() {
        this.setState(prevState => {
            return {
                passtest: false
            }
        })
    }

    handleChangeYellow() {
        this.setState(prevState => {
            return {
                passtest: false
            }
        })
    }

    handleChangePink() {
        this.setState(prevState => {
            return {
                passtest: true
            }
        })
    }

    render() {
        return (
            <div className="game">
                <h1>Drunk Test #3</h1> 
                <hr></hr>
                <h4>Choose the color</h4>
                <h3 className="bluebie">blue</h3>
                <button onClick={this.handleChangeYellow} className="yellowcolor">Blue</button>
                <button onClick={this.handleChangePink} className="bluecolor">Green</button>
                <button onClick={this.handleChangeGreen} classname="greencolor">Yellow</button>
                <ResultExtra passtest={this.state.passtest} />
            </div>
        )
    }
}

export default GameThree