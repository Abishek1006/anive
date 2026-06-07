import memoryPhoto from './Snapchat-696134462.jpg'
import bustheme from './bustheme.jpg'
import facecovered from './her face covered.jpg'
import glassfilter from './glassfilter.jpg'
import sleepkiss from './sleepkiss.jpg'
import glass from './glass.png'
import vibefilter from './vibe.jpg'

const sharedMemoryPhoto = memoryPhoto

export const photos = {
  cover: sharedMemoryPhoto,
  sunsetCover: sharedMemoryPhoto,
  emptyBeach: sharedMemoryPhoto,
  coffeeMug: facecovered,
  openHighway: sharedMemoryPhoto,
  cozyFootsteps: bustheme,
  starrySky: sharedMemoryPhoto,
  wildflowers: sharedMemoryPhoto,
  forestPath: sharedMemoryPhoto,
  mistyRoad: sharedMemoryPhoto,
  scenicCorner: sharedMemoryPhoto,
  chaosTexture1: glassfilter,
  chaosTexture2: sleepkiss,
  chaosTexture3: vibefilter,
  prayedOne: sharedMemoryPhoto,
  prayedTwo: sharedMemoryPhoto,
  letterCorner: sharedMemoryPhoto,
}

export const allPhotos = Array.from({ length: 15 }, () => sharedMemoryPhoto)
