import React, { Component } from 'react'
import cookies from 'js-cookie'
import Navigation from './components/Navigation'
import Hours from './components/Hours'
import Events from './components/Events'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Space from './components/Space'
import Map from './components/Map'
import { FoodGallery } from './GalleryGrid'
import {addLocaleData, FormattedMessage, IntlProvider} from 'react-intl'
import { flattenMessages } from './utils'
import icebarJPG from './img/restaurants/icebar.png'
import coconutJPG from './img/restaurants/coconut.png'
import toucheJPG from './img/restaurants/touche.png'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import ca from 'react-intl/locale-data/ca'
import messages from './messages';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-image-gallery/styles/css/image-gallery.css'
import member_en from './img/member_en.jpg'
import member_es from './img/member_es.jpg'
import member_ca from './img/member_ca.jpg'


import Gastronomy from "./components/Gastronomy"
require('bootstrap/dist/js/bootstrap')

addLocaleData([...en, ...es, ...ca]);

let locale = cookies.get('lang')
  || (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage
  || 'en-US';

cookies.set('lang', locale)

const formLanguages = {
  'ca': 'catalan',
  'en-US': 'english',
  'es': 'spanish'
}

const member = {
  'en-US': member_en,
  es: member_es,
  ca: member_ca
}

class App extends Component {

  constructor() {
    super()
    this.onChangeLanguage = this.onChangeLanguage.bind(this)
    this.state = {
      locale
    }
  }

  onChangeLanguage(lang) {
    this.setState({ locale: lang });
    cookies.set('lang', lang)
  }

  render() {
    const {locale} = this.state
    return (
      <IntlProvider locale={locale} messages={flattenMessages(messages[locale] || messages['en-US'])}>
        <div className="App">
          <Navigation onChangeLanguage={this.onChangeLanguage} />
          <header id="hero" className="main-banner">
            <div className="container main">
              <h1> </h1>
            </div>
          </header>

          <div id="about" className="blocks">
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col col-lg-8">
                  <h3>El Ninot</h3>
                  <p>
                    <FormattedMessage id="about.p1"/>
                  </p>
                  <p>
                    <FormattedMessage id="about.p2"/>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Gastronomy/>

          <div className="blocks">
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col col-xl">
                  <FoodGallery/>
                </div>
              </div>
            </div>
          </div>
          <Space/>
          <Location/>
          <Hours/>
          <Events/>
          <Contact lang={formLanguages[locale] || formLanguages['en-US']}/>
          <div id="memberLogo">
            <div>
              <img src={member[locale]}  alt="Barcelona Turismo"/>
            </div>
            <div id="restaurantLogos">
              <a href="http://www.touchbcn.com">
                <img src={toucheJPG} alt="touche"/>
              </a>
              <a href="https://www.icebarcelona.com">
                <img src={icebarJPG} alt="icebarcelona"/>
              </a>
              <a href="https://www.facebook.com/thecoconutclubbcn/">
                <img src={coconutJPG} alt="coconut restaurant"/>
              </a>
            </div>
          </div>
          <Map/>
          <Footer />
        </div>
      </IntlProvider>
    )
  }
}

export default App
