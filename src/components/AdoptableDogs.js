import React from 'react'
import DogCard from './DogCard'

const AdoptableDogs = ({ adoptableDogs, addFavoriteDog }) => {

    const dogCards = adoptableDogs.map(dog => {
        return <DogCard key={dog.id} dog={dog} addFavoriteDog={addFavoriteDog} />
        })
    

    return(
       <div>
           <h1 className="header">Adoptable Dogs</h1>
            {dogCards}
       </div>
    )
}

export default AdoptableDogs