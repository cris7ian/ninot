/* global $ */
import React from 'react'
import logo from '../img/logo.png'
import {FormattedMessage} from "react-intl"


const scrollTo = (id) => () => $.scrollTo(id, 400, {offset: -56})

const Navigation = ({onChangeLanguage}) => (
  <nav id="nav" className="navbar navbar-expand-md fixed-top navbar-dark fixed-top">
    <a className="navbar-brand" onClick={scrollTo('.App')}>
      <img alt="ninot-logo" src={logo} style={{'height': '25px'}}/>
    </a>

    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav navbar-right">
        <li className="nav-item active">
          <a className="nav-link" onClick={scrollTo('#the-gastronomy')}>
            <FormattedMessage id="menu.gastronomy"/>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" onClick={scrollTo('#the-space')}>
            <FormattedMessage id="menu.space"/>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" onClick={scrollTo('#the-location')}>
            <FormattedMessage id="menu.location"/>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" onClick={scrollTo('#events')}>
            <FormattedMessage id="menu.events"/>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" onClick={scrollTo('#book-now')}>
            <FormattedMessage id="menu.book"/>
          </a>
        </li>
      </ul>
    </div>
    <div className="languages">
      <span onClick={() => onChangeLanguage('ca')}>ca</span>
      {' • '}
      <span onClick={() => onChangeLanguage('es')}>es</span>
      {' • '}
      <span onClick={() => onChangeLanguage('en-US')}>en</span>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
  </nav>
)

export default Navigation
