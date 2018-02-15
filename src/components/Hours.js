import React from 'react'
import {FormattedMessage} from "react-intl"

const Hours = () => (
  <div id="opening-hours" className="blocks">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-8">

          <h3><FormattedMessage id="hours.title"/></h3>
          <p>
            <FormattedMessage id="hours.p1"/>
          </p>
          <p>
            <FormattedMessage id="hours.p2"/>
          </p>
          <p>
            <FormattedMessage id="hours.p3"/>
          </p>

        </div>
      </div>
    </div>
  </div>

)

export default Hours