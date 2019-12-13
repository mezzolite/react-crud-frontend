import React from 'react'

import DogCard from './DogCard'

const FavoriteDogs = ({favoriteDogs}) => {

    const dogCards = favoriteDogs.map(dog => {
        return <DogCard key={dog.id} dog={dog} />
    })

    return(
       <div>
           <h1 className="header">Favorite Dogs</h1>
            {dogCards}
       </div>
    )
}

export default FavoriteDogs
