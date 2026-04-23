"use client";

import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

const images = [
  "/images/gallery/FotoCouple.webp",
  "/images/gallery/FotoCouple2.webp",
  "/images/gallery/FotoCouple3.webp",
  "/images/gallery/FotoCouple4.webp",
];

const Gallery = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  )
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const scrollPosRef = React.useRef(0)

  const handleClick = (index) => {
    scrollPosRef.current = window.scrollY
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const handleClose = () => {
    setLightboxOpen(false)
    setTimeout(() => {
      window.scrollTo({ top: scrollPosRef.current, behavior: 'instant' })
    }, 10)
  }

  return (
    <>
      <div className="relative w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative flex-none w-full aspect-[390/601] lg:aspect-[1512/945] cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover object-center"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={handleClose}
        index={lightboxIndex}
        slides={images.map((src) => ({ src }))}
        plugins={[Thumbnails, Zoom, Counter]}
        noScroll={{ disabled: true }}
      />
    </>
  )
}

export default Gallery