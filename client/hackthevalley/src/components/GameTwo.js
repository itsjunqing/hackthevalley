import React, { Component } from "react"
import ResultExtra from "./ResultExtra"

class GameTwo extends Component {
    constructor() {
        super()
        this.state = {
            dic: [],
            passtest: false
        }
        this.handleChangeOne = this.handleChangeOne.bind(this)
        this.handleChangeTwo = this.handleChangeTwo.bind(this)
        this.handleChangeThree = this.handleChangeThree.bind(this)
        this.handleChangeFour = this.handleChangeFour.bind(this)
        this.handleChangeFive = this.handleChangeFive.bind(this)
        this.handleChangeSix = this.handleChangeSix.bind(this)
    }

    handleChangeOne() {
        this.setState(prevState => {
            prevState.dic.push(1)
            return (
                prevState
            )
        })
    }

    handleChangeTwo() {
        this.setState(prevState => {
            prevState.dic.push(2)
            return (
                prevState
            )
        })
    }

    handleChangeThree() {
        this.setState(prevState => {
            prevState.dic.push(3)
            return (
                prevState
            )
        })
    }

    handleChangeFour() {
        this.setState(prevState => {
            prevState.dic.push(4)
            return (
                prevState
            )
        })
    }

    handleChangeFive() {
        this.setState(prevState => {
            prevState.dic.push(5)
            return (
                prevState
            )
        })
    }

    handleChangeSix() {
        this.setState(prevState => {
            prevState.dic.push(6)
            return (
                prevState
            )
        })
    }

    render() {
        var pass = true
        var answer = [1, 2, 3, 4, 5, 6]
        if (this.state.dic.length == 6) {
            for (var i = 0; i < this.state.dic.length; i++) {
                if (this.state.dic[i] != answer[i]) {
                    pass = false
                }
            }
            this.state.passtest = pass
        }

        return (
            <div className="game">
                <h1>Drunk Test #2</h1>
                <hr></hr>
                <h3>Click the buttons in order!</h3>
                <button onClick={this.handleChangeFour}>4</button>
                <button onClick={this.handleChangeThree}>3</button>
                <button onClick={this.handleChangeOne}>1</button>
                <button onClick={this.handleChangeSix}>6</button>
                <button onClick={this.handleChangeTwo}>2</button>
                <button onClick={this.handleChangeFive}>5</button>
                <ResultExtra passtest={this.state.passtest} />
            </div>
        )
    }
}


export default GameTwo