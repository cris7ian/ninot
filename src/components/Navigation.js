/* global $ */
import React from 'react'
import logo from '../img/logo.png'

const scrollTo = (id) => () => $.scrollTo(id, 400, {offset: -56})

const Navigation = () => (
  <nav id="nav" className="navbar navbar-expand-md fixed-top navbar-dark fixed-top">
    <a className="navbar-brand" onClick={scrollTo('.App')}>
      <img alt="ninot-logo" src={logo} style={{'height': '25px'}}/>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav navbar-right">
        <li className="nav-item active">
          <a className="nav-link" onClick={scrollTo('#the-space')}>The Space</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" onClick={scrollTo('#the-location')}>Location</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" onClick={scrollTo('#events')}>Events</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" onClick={scrollTo('#book-now')}>Book Now</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navigation
