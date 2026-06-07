import { photos } from '../photos/photos'
import memoryClip from './Snapchat-1332186399.mp4'

export const videos = [
  {
    id: 'our-story',
    title: 'Our Story',
    subtitle: 'Where every chapter began with you',
    thumbnail: photos.cover,
    src: memoryClip,
    duration: 'memory clip',
    tag: 'USER_VIDEO_OUR_STORY',
  },
  {
    id: 'late-night-calls',
    title: 'Late Night Calls',
    subtitle: 'The voices that became home',
    thumbnail: photos.cover,
    src: memoryClip,
    duration: 'memory clip',
    tag: 'USER_VIDEO_LATE_NIGHT',
  },
  {
    id: 'little-adventures',
    title: 'Little Adventures',
    subtitle: 'Every detour worth taking',
    thumbnail: photos.cover,
    src: memoryClip,
    duration: 'memory clip',
    tag: 'USER_VIDEO_ADVENTURES',
  },
]

export const featuredVideo = videos[0]
