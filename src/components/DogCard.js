import React from 'react'

const DogCard = (props) => {
    const handleClick = () => {
        props.dogAction(props.dog)
    }

    return (
        <div
            className="dog-card"
            onClick={handleClick}
        >
            <img src={props.dog.image} alt={props.dog.name} />
            <div className="dog-specs">
                <h4><b>{props.dog.name}</b></h4>
                <p>Breed: {props.dog.breed}</p>
                <p>Age: {props.dog.age}</p>
            </div>
        </div>

    )
}

export default DogCard