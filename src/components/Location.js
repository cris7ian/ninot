import React from 'react'
import {FormattedMessage} from "react-intl"

const Location = () => (
  <div id="the-location" className="blocks">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-8">
          <div className="description">
            <h3>
              <FormattedMessage id="location.title"/>
            </h3>
            <p>
              <FormattedMessage id="location.p1"/>
            </p>
            <p>
              <FormattedMessage id="location.p2"/>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Location