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
    favoriteDogs: []
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



  render() {
    return (
      <div className="App">
        <Header />
        <FavoriteDogs
          dogAction={this.removeDog}
          favoriteDogs={this.state.favoriteDogs}
        />
        <SearchBar />
        <AdoptableDogs
          dogAction={this.addDog}
          adoptableDogs={this.state.adoptableDogs}
        />
        <AddDogForm />
      </div>
    );
  }
}

export default App;
