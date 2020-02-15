import React, { Component } from "react"
import ResultExtra from "./ResultExtra"

class GameOne extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            rand_num: Math.floor(Math.random() * 30), 
            passtest1: false
        }
        this.handleClick_inc = this.handleClick_inc.bind(this)
        this.handleClick_dec = this.handleClick_dec.bind(this)
    }
 
    handleClick_inc() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleClick_dec() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
 
    render() { 
        if (this.state.rand_num == this.state.count) {
            this.state.passtest1 = true
        }

        if (this.state.rand_num != this.state.count) {
            this.state.passtest1 = false
        }

        return (
            <div className="game"> 
                <h1>Drunk Test #1</h1>
                <hr></hr>
                <h3>Click me {this.state.rand_num} times!</h3>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick_inc}>Increase!</button>
                <button onClick={this.handleClick_dec}>Decrease!</button>
                <ResultExtra passtest={this.state.passtest1} />
            </div>
        )
    }
}

export default GameOne