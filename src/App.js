import React from 'react'
import './App.css'

const BASE_URL = `https://dogs-backend.herokuapp.com/dogs`

class App extends React.Component {
  state = {
    dogs: []
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(dogs => this.setState({ dogs }))
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
