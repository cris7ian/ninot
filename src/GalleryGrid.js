import React from 'react'
import ImageGallery from 'react-image-gallery'

const IMAGES_FOOD_FULL_GALLERY = [2,3, 6, 8 ,9].map(i => ({
  original: `${process.env.PUBLIC_URL}/img/food_${i}.jpg`,
  thumbnail: `${process.env.PUBLIC_URL}/img/food_${i}.jpg`,
}))

const IMAGES_LOCAL = [1, 2, 3, 4, 5, 6].map(i => ({
  original: `${process.env.PUBLIC_URL}/img/space${i}.jpg`,
  thumbnail: `${process.env.PUBLIC_URL}/img/space${i}.jpg`,
}))

const FoodGallery = () => (
  <div
   id="foodGallery"
  >
    <ImageGallery
      showThumbnails={false}
      showPlayButton={false}
      items={IMAGES_FOOD_FULL_GALLERY}
    />
  </div>
)

const SpaceGallery = () => (
  <div id="localGallery">
    <ImageGallery
      showThumbnails={true}
      showPlayButton={false}
      items={IMAGES_LOCAL}
    />
  </div>
)

export { SpaceGallery, FoodGallery }
