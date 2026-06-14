import { photos } from '../photos/photos'
import video1 from './full.mp4'
import video2 from './video2.mp4'
import video3 from './video3.mp4'

export const videos = [
  {
    id: 'our-story',
    title: 'Our Story',
    subtitle: 'Where every chapter began with you',
    thumbnail: photos.thumbnail1,
    src: video1,
    duration: 'memory clip',
    tag: 'USER_VIDEO_OUR_STORY',
  },
  {
    id: 'late-night-calls',
    title: 'Late Night Calls',
    subtitle: 'The voices that became home',
    thumbnail: photos.thumbnail2,
    src: video2,
    duration: 'memory clip',
    tag: 'USER_VIDEO_LATE_NIGHT',
  },
  {
    id: 'little-adventures',
    title: 'Little Adventures',
    subtitle: 'Every detour worth taking',
    thumbnail: photos.thumbnail3,
    src: video3,
    duration: 'memory clip',
    tag: 'USER_VIDEO_ADVENTURES',
  },
]

export const featuredVideo = videos[0]
