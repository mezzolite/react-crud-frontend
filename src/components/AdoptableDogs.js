import React from 'react'
import DogCard from './DogCard'

const AdoptableDogs = (props) => {

    const adoptableDogs = props.adoptableDogs.map(dog => {
        return <DogCard key={dog.id} dog={dog} />
    })

    return (
        <div className="adoptable-dogs">
            <h1 className="header">Adoptable Dogs</h1>
            {adoptableDogs}
        </div>
    )
}

export default AdoptableDogs