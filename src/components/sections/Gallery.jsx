import React from 'react'
import Image from 'next/image'

const Gallery = () => {
  return (
    <div className="relative w-full overflow-hidden aspect-[390/601] lg:aspect-[1512/945]">
      <Image
        src="/images/gallery/FotoCouple.webp"
        alt="Foto Couple"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  )
}

export default Gallery