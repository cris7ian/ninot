import React from 'react'
import { LocalGalleryGrid } from '../GalleryGrid'


const Space = () => (
  <div id="the-space" className="blocks">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-10">
          <h3>The Space</h3>
          <p>
            Designed by Dani Freixes / Varis Arquitectes, the interior combines raw, industrial elements with pale
            wood, delicate lighting and designer furniture, in a tasteful, sophisticated blend, which soften the
            brick floor and the metal openwork ceiling.
            Upon entering, you are welcomed by a cozy, chill out area with plenty of natural light, perfect for a
            morning coffee as well as a late night drink. The back provides lots of sitting space at different sized
            tables, making El Ninot the perfect place for both big and small gatherings.
          </p>
          <p>
            Everything is tied together with a massive, rectangular, marble bar, which stands in the center of the restaurant, naturally separating the eating and drinking areas. High stools line one of its sides, while comfortable chairs can be found on the other end, for those who prefer to eat at the bar instead of a table. The back also features an open kitchen complete with a traditional scale, which we use to measure our hefty portions of fresh meat and seafood.
          </p>

          <LocalGalleryGrid />
        </div>
      </div>
    </div>
  </div>

)

export default Space