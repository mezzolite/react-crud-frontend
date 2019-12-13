import React, { Component } from 'react'
import './App.css'
import AdoptableDogs from './components/AdoptableDogs'
import FavoriteDogs from './components/FavoriteDogs'

class App extends Component {
  
  state = {
    adoptableDogs: [],
    favoriteDogs: []
  }

  componentDidMount(){
    fetch('https://dogs-backend.herokuapp.com/dogs')
      .then(response => response.json())
      .then(adoptableDogs => this.setState({ adoptableDogs }))
  }

  addFavoriteDog = (dog) => {
    if(!this.state.favoriteDogs.includes(dog)){
      this.setState({favoriteDogs: [...this.state.favoriteDogs, dog]})
    }
  }
  
  render(){
    return (
      <div>
        <h1>Dog Adoption Central</h1>
        <FavoriteDogs favoriteDogs={this.state.favoriteDogs}/>
        <AdoptableDogs 
          adoptableDogs={this.state.adoptableDogs}
          addFavoriteDog={this.addFavoriteDog}
          />

      </div>
      )
    

  }

}

export default App;
