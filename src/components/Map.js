import React from 'react'

const Map = () => (
  <div className="mapouter">
    <div className="gmap_canvas">
      <iframe
        title="ninot-map"
        height="500"
        width="100%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=ninot cuina&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      >
      </iframe>
      </div>
    </div>
)

export default Map
