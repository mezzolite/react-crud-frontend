import React from 'react'

const DogCard = ({ dog, addFavoriteDog}) => {

    const handleClick = () => {
        addFavoriteDog(dog)
    }

    return(
        <div onClick={handleClick} className="dog-card">
            <img src={dog.image} alt={dog.name}/>
            <div className="dog-specs">
                <h4><b>Dog Name: {dog.name} </b></h4>
                <p>Dog Breed: {dog.breed} </p>
                <p>Age: {dog.age}</p>
            </div>
        </div>
    )
}

export default DogCard