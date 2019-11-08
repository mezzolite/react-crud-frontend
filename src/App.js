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
    adoptableDogs: []
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(adoptableDogs => this.setState({ adoptableDogs }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <FavoriteDogs />
        <SearchBar />
        <AdoptableDogs adoptableDogs={this.state.adoptableDogs} />
        <AddDogForm />
      </div>
    );
  }
}

export default App;
