import memoryPhoto from './Snapchat-696134462.jpg'

const sharedMemoryPhoto = memoryPhoto

export const photos = {
  cover: sharedMemoryPhoto,
  sunsetCover: sharedMemoryPhoto,
  emptyBeach: sharedMemoryPhoto,
  coffeeMug: sharedMemoryPhoto,
  openHighway: sharedMemoryPhoto,
  cozyFootsteps: sharedMemoryPhoto,
  starrySky: sharedMemoryPhoto,
  wildflowers: sharedMemoryPhoto,
  forestPath: sharedMemoryPhoto,
  mistyRoad: sharedMemoryPhoto,
  scenicCorner: sharedMemoryPhoto,
  chaosTexture1: sharedMemoryPhoto,
  chaosTexture2: sharedMemoryPhoto,
  chaosTexture3: sharedMemoryPhoto,
  prayedOne: sharedMemoryPhoto,
  prayedTwo: sharedMemoryPhoto,
  letterCorner: sharedMemoryPhoto,
}

export const allPhotos = Array.from({ length: 15 }, () => sharedMemoryPhoto)
