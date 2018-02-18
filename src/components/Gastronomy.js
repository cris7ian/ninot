import React from 'react'
import {FormattedMessage} from "react-intl"


const Gastronomy = () => (
  <div id="the-gastronomy" className="blocks">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-10">
          <h3><FormattedMessage id="gastronomy.title"/></h3>
          <p>
            <FormattedMessage id="gastronomy.p1"/>
          </p>
          <p>
            <FormattedMessage id="gastronomy.p2"/>
          </p>
        </div>
      </div>
    </div>
  </div>

)

export default Gastronomy