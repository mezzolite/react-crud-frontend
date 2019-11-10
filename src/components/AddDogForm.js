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
            <form className="bagel-form" onSubmit={this.submitHandler} >
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
                    min="1"
                    max="10"
                    required
                    value={this.state.newDog.age}
                    placeholder="Age"
                />

                <input type="submit" value={this.props.submitLabel} />
            </form>
        )
    }
}

export default AddDogForm