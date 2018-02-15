import React from 'react'
import {FormattedMessage} from "react-intl"

const Events = () => (
  <div className="blocks" id="events">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-xl">
          <h1>
            <FormattedMessage id="events.title"/>
          </h1>

          <div className="row">

            <div className="col-md-5 description">
              <FormattedMessage id="events.p1"/>
            </div>

            <div className="col-md-5 description">
              <FormattedMessage id="events.p2"/>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Events