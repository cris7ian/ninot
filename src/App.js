import React, { Component } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { FoodGalleryGrid, LocalGalleryGrid } from './GalleryGrid'
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
              </div>
            </div>
          </div>
        </div>

        <div id="the-space" className="blocks">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-8">
                <h3>The Space</h3>
                <p>
                  Designed by Dani Freixes / Varis Arquitectes, the interior combines raw, industrial elements with pale
                  wood, delicate lighting and designer furniture, in a tasteful, sophisticated blend, which soften the
                  brick floor and the metal openwork ceiling.
                  Upon entering, you are welcomed by a cozy, chill out area with plenty of natural light, perfect for a
                  morning coffee as well as a late night drink. The back provides lots of sitting space at different sized
                  tables, making El Ninot the perfect place for both big and small gatherings.
                </p>
                <p>
                  Everything is tied together with a massive, rectangular, marble bar, which stands in the center of the restaurant, naturally separating the eating and drinking areas. High stools line one of its sides, while comfortable chairs can be found on the other end, for those who prefer to eat at the bar instead of a table. The back also features an open kitchen complete with a traditional scale, which we use to measure our hefty portions of fresh meat and seafood.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="blocks">
          <LocalGalleryGrid />
        </div>

        <div id="the-location" className="blocks">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-8">
                <div className="description">
                  <h3>The Location</h3>
                  Our restaurant can be found inside Mercat del Ninot, a small, yet abundant market, tucked away on the edge of Eixample, near Hospital Clinic. Situated comfortably far from the hustle and bustle of the Barcelona city center, El Ninot is still easily accessible by foot or by public transport. This vibrant, residential district, full of upscale buildings and boutiques, is a brilliant alternative to the constantly packed Gòtic and even Born, with less tourists and a much more elegant overall feel.
                  The market sells local and fresh meat, fish, vegetables, dairy and a variety of homemade delicacies. It is a place where hundreds of locals get their produce every day; clean and calm it differs greatly from other food bazaars, like Boqueria or the Mercado de Santa Caterina, which many tourists will flock to.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="opening-hours" className="blocks">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-8">

                <h3>Opening hours</h3>
                <p>
                  Sunday and monday we are open from
                  {' '}
                  <b>9:30-16:00</b>
                  , while our kitchen is open from
                  {' '}
                  <b>12:00-16:00</b>
                  .
                  <br />
                  Pop in for an early morning coffee, a snack before or after shopping for your own fresh produce at the market or come and enjoy our lunch menu.
                </p>
                <p>
                  Between Tuesday and Saturday we are open 9:30-00:00, and the kitchen is open all day ready to serve you from morning till closing. Check out our extensive brunch menu and tasty dinner options!
                </p>
                <p>
                  Everything is tied together with a massive, rectangular, marble bar, which stands in the center of the restaurant, naturally separating the eating and drinking areas. High stools line one of its sides, while comfortable chairs can be found on the other end, for those who prefer to eat at the bar instead of a table. The back also features an open kitchen complete with a traditional scale, which we use to measure our hefty portions of fresh meat and seafood.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="blocks" id="events">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-xl">
                <h1>Events</h1>

                <div className="row">

                  <div className="col description">
                    Besides providing you with products of the finest quality, superior service and refined design,
                    El Ninot is also committed to expanding the cultural offer of Barcelona. Once a month we organize,
                    Arta a la cuina, a fun event featuring an exhibit by local, up-and-coming artists. The pieces remain
                    on our walls for the following weeks and the work is available for purchase that night and during the
                    following month, leading up to the next showcase. Keep a lookout for more information about our Art a
                    la cuina events on our social media channels.
                  </div>

                  <div className="col description">
                    Additionally, our space is perfect for both large and small scale events. We have 12 years of
                    experience combined between us in the gastronomical sector and extensive expertise in event
                    organization. We have a maximum capacity of 200 people and on top of catering, we are capable of
                    closely working with you to provide djs, photographers, decorations and anything else you may need
                    to customize your event at El Ninot.
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="book-now" className="blocks">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-xl">

                <h3>Book Now</h3>
                <iframe
                  title="Reservas"
                  src="https://www.covermanager.com/reservation/module_restaurant/ninot-cuina/english"
                  frameBorder="0"
                  height="550"
                  width="100%"
                />
              </div>

              <div className="col-xl">
                <h3>Contact Us</h3>
                <form role="form">
                  <br style={{ clear: 'both' }} />
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      type="textarea"
                      id="message"
                      placeholder="Message"
                      maxLength="140"
                      rows="7"
                    />
                  </div>
                  <button
                    type="button"
                    id="submit"
                    name="submit"
                    className="btn btn-light pull-right"
                  >
                    Submit Form
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
