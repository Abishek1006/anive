import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function Polaroid({
  src,
  alt,
  photoTag,
  caption,
  rotation = 0,
  className,
  size = 'md',
}) {
  const sizes = {
    sm: 'w-28',
    md: 'w-36',
    lg: 'w-44',
    xl: 'w-52',
  }

  return (
    <motion.div
      className={clsx(
        'bg-white p-1.5 pb-8 shadow-[0_4px_15px_rgba(123,94,87,0.2)]',
        sizes[size],
        className,
      )}
      style={{ rotate: `${rotation}deg` }}
      whileTap={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      data-photo-tag={photoTag}
    >
      {/* USER_PHOTO: {photoTag} */}
      <img
        src={src}
        alt={alt}
        className="w-full aspect-[4/5] object-cover"
        loading="lazy"
      />
      {caption && (
        <p className="font-handwritten text-vintage-brown text-center text-base mt-1.5 px-1">
          {caption}
        </p>
      )}
    </motion.div>
  )
}
