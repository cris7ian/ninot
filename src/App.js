import React, { Component } from 'react'
import Navigation from './components/Navigation'
import Hours from './components/Hours'
import Events from './components/Events'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Space from './components/Space'
import Map from './components/Map'
import { FoodGalleryGrid, FoodGallery } from './GalleryGrid'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-image-gallery/styles/css/image-gallery.css'
require('bootstrap/dist/js/bootstrap')

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <header id="hero" className="main-banner">
          <div className="container main">
            <h1>Welcome</h1>
            <h3>to El Ninot Restaurant</h3>
          </div>
        </header>

        <div id="about" className="blocks">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-8">
                <h3>El Ninot</h3>
                <p>
                  Not long ago, El Ninot was acquired by the team behind an ever-growing gastronomical powerhouse, which includes
                  some of Barcelona’s finest establishments, such as Touché and Ice Bar, which can both be found near Barcelona’s Port Olimpic.
                  We are deeply committed to excellent service and apply innovative design to the food in order to provide reasonably priced,
                  high-quality products and elevate your dining experience.
                </p>
                <p>
                  We fell in love with this place, the moment we stepped foot here. We see El Ninot as more than a restaurant.
                  It is a project that aspires to breath new life into a wonderful, unique space with infinite potential. We aim to
                  provide a tasty menu, to be enjoyed in a secluded oasis right next to a lively market, and we have worked hard to
                  provide you with a friendly, experienced team of talented chefs, bartenders and servers. We aspire to become a
                  place that is frequented and loved by tourists and locals alike and wish to prepare and serve food and wine of the finest quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="blocks">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-xl">
                <FoodGalleryGrid />
                <FoodGallery/>
              </div>
            </div>
          </div>
        </div>
        <Space/>
        <Location/>
        <Hours/>
        <Events/>
        <Contact/>
        <Map/>
        <Footer />
      </div>
    )
  }
}

export default App
