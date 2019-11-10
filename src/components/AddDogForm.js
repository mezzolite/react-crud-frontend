import React, { Component } from 'react'

class AddDogForm extends Component {
    state = {
        newDog: {
            name: "",
            breed: "",
            age: null
        },
    }

    render() {
        return (
            <form className="add-dog-form" >
                <input
                    name="name"
                    type="text"
                    required
                    value={this.state.newDog.name}
                    placeholder="Name"
                />
                <input
                    name="breed"
                    type="text"
                    required
                    value={this.state.newDog.breed}
                    placeholder="Breed"
                />
                <input
                    name="age"
                    type="number"
                    required
                    value={this.state.newDog.age}
                    placeholder="Age"
                />

                <input type="submit" />
            </form>
        )
    }
}

export default AddDogForm