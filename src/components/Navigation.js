import React from 'react'

const Navigation = () => (
  <nav id="nav" className="navbar navbar-expand-md fixed-top navbar-dark fixed-top">
    <a className="navbar-brand" href="#">Ninot</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav navbar-right">
        <li className="nav-item active">
          <a className="nav-link" href="#">The Space</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Location</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Events</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Book Now</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Contact us</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navigation