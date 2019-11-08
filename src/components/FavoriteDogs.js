import React from 'react'
import DogCard from './DogCard'

const FavoriteDogs = (props) => {

    const favoriteDogs = props.favoriteDogs.map(dog => {
        return <DogCard key={dog.id} dog={dog} />
    })

    return (
        <div className="dogs">
            <h1 className="header">FavoriteDogs</h1>
            <div className="adoptable-dogs">
                {favoriteDogs}
            </div>
        </div>
    )
}

export default FavoriteDogs