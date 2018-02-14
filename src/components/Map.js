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
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      >
      </iframe>
      </div>
    </div>
)

export default Map
