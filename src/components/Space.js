import React from 'react'
import { LocalGalleryGrid } from '../GalleryGrid'
import {FormattedMessage} from "react-intl"


const Space = () => (
  <div id="the-space" className="blocks">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-10">
          <h3><FormattedMessage id="space.title"/></h3>
          <p>
            <FormattedMessage id="space.p1"/>
          </p>
          <p>
            <FormattedMessage id="space.p2"/>
          </p>

          <LocalGalleryGrid />
        </div>
      </div>
    </div>
  </div>

)

export default Space