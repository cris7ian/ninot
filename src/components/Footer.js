import React from 'react'
import {FormattedMessage} from "react-intl"

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h4><FormattedMessage id="footer.location"/></h4>
          Mercat del Ninot,<br/>
          Carrer de Casanova, 133,<br/>
          08036 Barcelona <br/>
          <a href="https://www.instagram.com/ninot_cuina">
            <i className="fab fa-instagram"/>
          </a>
          {' '}
          <a href="https://www.facebook.com/elninotcuinabarcelona/">
            <i className="fab fa-facebook"/>
          </a>

        </div>
        <div className="col-md-4">
          <h4>
            <FormattedMessage id="footer.booking"/>
          </h4>
          +34 932 77 68 84 <br/>
          <a href="mailto:info@ninotcuina.com">info@ninotcuina.com</a><br/>
        </div>
        <div className="col-md-4">
          <h4>
            <FormattedMessage id="footer.timetables"/>
          </h4>
          <FormattedMessage id="footer.t1"/><br/>
          <FormattedMessage id="footer.t2"/><br/>
          <FormattedMessage id="footer.t3"/><br/>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
