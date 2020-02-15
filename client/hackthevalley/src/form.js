import React, { Component } from "react"

class FormContainer extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "male",
            location: "Seoul",
            diet: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                diet: {
                    [name]: checked
                }
            }) 
        : 
        this.setState({
            [name]: value
        })
    }

    render() {
        let dietArray = []
        let dietString = ""
        if (this.state.diet.isVegan) {
            dietArray.push("Vegetarian")
        } 
        if (this.state.diet.isKosher) {
            dietArray.push("Kosher")
        }
        if (this.state.diet.isLactoseFree) {
            dietArray.push("Lactose-Free")
        }

        for (var i in dietArray)
        {
            dietString = dietString + i
        }

        return (
            <main>
            <form>
                <h2>First Name: </h2>
                <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange}/>
                
                <br/>

                <h2>Last Name: </h2>
                <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange}/>
                
                <br />

                <h2>Age: </h2>
                <input type="number" name="age" value={this.state.age} placeholder="Age" onChange={this.handleChange}/>
                
                <br />
                
                <h2>Gender: </h2>
                <label>
                    <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/>Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>Female
                </label>

                <br />

                <h2>Where do you want to travel to?</h2>
                <select name="location" value={this.state.location} onChange={this.handleChange}>
                    <option value="">--Please choose a destination--</option>
                    <option value="Seoul">Seoul</option>
                    <option value="Moscow">Moscow</option>
                    <option value="Paris">Paris</option>
                </select>

                <br /> 

                <h2>Dietary Restrictions:</h2>
                <label>
                    <input type="checkbox" name="diet" checked={this.state.diet.isVegan} onChange={this.handleChange}/>Vegetarian
                </label>
                <label>
                    <input type="checkbox" name="diet" checked={this.state.diet.isKosher} onChange={this.handleChange}/>Kosher
                </label>
                <label>
                    <input type="checkbox" name="diet" checked={this.state.diet.isLactoseFree} onChange={this.handleChange}/>Lactose-Free
                </label>
                <br />
                <br />
                <button>Submit</button>
            </form>
            <br />
            <hr />

            <h2>Entered Information: </h2>
            <p>Your name: {this.state.firstName} {this.state.lastName}</p>
            <p>Your age: {this.state.age}</p>
            <p>Your gender: {this.state.gender}</p>
            <p>Your destination: {this.state.location}</p>
            <p>Your dietary restrictions: {dietString} </p>
            </main>
        )
    }
}

// Vegan: {this.state.isVegan ? "Yes" : "No"}
// Kosher: {this.state.isFosher ? "Yes" : "No"}
// Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}

export default FormContainer