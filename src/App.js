import React, { Component } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
require('bootstrap/dist/js/bootstrap')

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>About</h1>
        <h1>The Space</h1>
        <h1>Location</h1>
        <h1>Events</h1>
        <h1>Book Now</h1>
        <iframe
          title="Reservas"
          src=" https://www.covermanager.com/reservation/module_restaurant/ninot-cuina/english"
          frameBorder="0"
          height="550"
          width="100%"
        />
        <h1>Contact us</h1>
        <Footer />
      </div>
    )
  }
}

export default App
