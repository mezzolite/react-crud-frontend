import React from 'react'
import './App.css'

import Header from './components/Header'
import FavoriteDogs from './components/FavoriteDogs'
import SearchBar from './components/SearchBar'
import AdoptableDogs from './components/AdoptableDogs'
import AddDogForm from './components/AddDogForm'

const BASE_URL = `https://dogs-backend.herokuapp.com/dogs`

class App extends React.Component {
  state = {
    adoptableDogs: [],
    favoriteDogs: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(adoptableDogs => this.setState({ adoptableDogs }))
  }

  addDog = dog => {
    const dogIds = this.state.favoriteDogs.map(favorite => favorite.id)

    if (!dogIds.includes(dog.id)) {
      this.setState({
        favoriteDogs: [...this.state.favoriteDogs, dog]
      })
    }
    
  }

  removeDog = dog => {
    const newFavorites = this.state.favoriteDogs.filter(favorite => favorite.id !== dog.id)
    this.setState({
      favoriteDogs: newFavorites
    })
  }

  updateSearchTerm = searchTerm => {
    this.setState({ searchTerm })
  }

  filteredDogs = () => {
    return this.state.adoptableDogs.filter(dog => {
      return (dog.breed
        .toLowerCase()
        .includes(this.state.searchTerm)
      ) || (dog.name
        .toLowerCase()
        .includes(this.state.searchTerm)
        )
        || (dog.age
          .toString()
          .includes(this.state.searchTerm)
        )
    })
  }

  addAdoptableDog = dog => {
    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dog),
    }).then(response => response.json())
      .then(dog => {
        this.setState({
          adoptableDogs: [...this.state.adoptableDogs, dog]
        })
      })
  }

  deleteDog = dog => {
    const id = dog.id

    const adoptableDogs = this.state.adoptableDogs.filter(adoptableDog => {
      return adoptableDog !== dog
    })

    this.setState({ adoptableDogs })
    fetch(`${BASE_URL}/${id}`, {
      method: "DELETE"
    })
  }

  render() {
    console.log("state", this.state.adoptableDogs)
    return (
      <div className="App">
        <Header />
        <FavoriteDogs
          dogAction={this.removeDog}
          favoriteDogs={this.state.favoriteDogs}
        />
        <SearchBar
          searchTerm={this.state.searchTerm}
          updateSearchTerm={this.updateSearchTerm} />
        <AdoptableDogs
          dogAction={this.addDog}
          adoptableDogs={this.filteredDogs()}
          deleteDog={this.deleteDog}
        />
        <AddDogForm
          addAdoptableDog={this.addAdoptableDog}
        />
      </div>
    );
  }
}

export default App;
