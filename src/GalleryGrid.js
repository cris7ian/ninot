import React from 'react'
import Gallery from 'react-grid-gallery'

const IMAGES_FOOD = Array(9).fill().map((_, i) => ({
  src: `${process.env.PUBLIC_URL}/img/food_${i + 1}.jpg`,
  thumbnail: `${process.env.PUBLIC_URL}/img/food_${i + 1}.jpg`,
  thumbnailWidth: 100
}))

const IMAGES_LOCAL = [1, 2, 3, 6, 7, 8].map(i => ({
  src: `${process.env.PUBLIC_URL}/img/local_${i}.jpg`,
  thumbnail: `${process.env.PUBLIC_URL}/img/local_${i}.jpg`,
  thumbnailWidth: 60
}))

const FoodGalleryGrid = () => (
  <div id="foodGallery">
    <Gallery
      id="foodGallery"
      images={IMAGES_FOOD}
      rowHeight={180}
      enableImageSelection={false}
    />
  </div>
)

const LocalGalleryGrid = () => (
  <div id="localGallery">
    <Gallery
      id="localGallery"
      images={IMAGES_LOCAL}
      rowHeight={180}
      enableImageSelection={false}
    />
  </div>
)

export { FoodGalleryGrid, LocalGalleryGrid }
