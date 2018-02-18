import React from 'react'
import {FormattedMessage} from "react-intl"

const Events = () => (
  <div className="blocks" id="events">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-8">
          <div className="description">
          <h3>
            <FormattedMessage id="events.title"/>
          </h3>


            <p>
              <FormattedMessage id="events.p1"/>
            </p>

            <p>
              <FormattedMessage id="events.p2"/>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Events