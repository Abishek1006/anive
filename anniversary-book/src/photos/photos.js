import memoryPhoto from './Snapchat-696134462.jpg'
import bustheme from './bustheme.jpg'
import facecovered from './her face covered.jpg'
import glassfilter from './glassfilter.jpg'
import sleepkiss from './sleepkiss.jpg'
import vibefilter from './vibe.jpg'
import oldbus from './oldbus.jpeg'
import metroselfie from './metroselfie.jpg'
import oldbushug from './oldbushug.jpeg'
import flowers from './flowers.jpeg'
import you from './you.jpeg'
import me from './me.jpeg'
import us from './us.jpeg'
import thumbnail2 from './thumbnail2.png'
import thumbnail3 from './thumbnail3.png'
import thumbnail1 from './thumbnail1.png'

const sharedMemoryPhoto = memoryPhoto

export const photos = {
  cover: sharedMemoryPhoto,
  coffeeMug: facecovered,
  yourSolo: bustheme,
  herSolo: facecovered,
  together: memoryPhoto,
  cozyFootsteps: bustheme,
  chaosTexture1: glassfilter,
  chaosTexture2: sleepkiss,
  chaosTexture3: vibefilter,
  prayedOne: oldbushug,
  prayedTwo: metroselfie,
  letterCorner: flowers,
  you: you,
  me: me,
  us: us,
  thumbnail1 : thumbnail1,
  thumbnail2 : thumbnail2,
  thumbnail3 : thumbnail3,
}
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Shuffle but avoid the same photo appearing adjacent to itself
function shuffleNoAdjacentDuplicates(arr) {
  let shuffled = shuffle(arr)
  for (let i = 1; i < shuffled.length; i++) {
    if (shuffled[i] === shuffled[i - 1]) {
      // find a later element that's different to swap with
      let swapIndex = -1
      for (let j = i + 1; j < shuffled.length; j++) {
        if (shuffled[j] !== shuffled[i - 1] && shuffled[j] !== shuffled[i]) {
          swapIndex = j
          break
        }
      }
      if (swapIndex !== -1) {
        ;[shuffled[i], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[i]]
      }
    }
  }
  return shuffled
}

const photoValues = Object.values(photos)

export const allPhotos = shuffleNoAdjacentDuplicates(
  Array.from({ length: 15 }, (_, i) => photoValues[i % photoValues.length])
)