"use client";

import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

// Library carousel dari Embla
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// Library lightbox (popup foto fullscreen)
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";

// CSS bawaan lightbox
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

// Daftar foto yang ditampilkan di carousel & lightbox 
const images = [
  { src: "/images/gallery/FotoCouple.webp", position: "object-center lg:object-[50%_50%]" },
  { src: "/images/gallery/FotoCouple3.webp", position: "object-center lg:object-[50%_30%]" },
  { src: "/images/gallery/FotoAkbar.webp", position: "object-center lg:object-[50%_50%]" },
  { src: "/images/gallery/FotoFani.webp", position: "object-center lg:object-[50%_50%]" },
  { src: "/images/gallery/FotoCouple2.webp", position: "object-center lg:object-[50%_35%]" },
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
      <div id='galleri' className="relative w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((img, index) => (            
            <div
              key={index}
              className="relative flex-none w-full aspect-[390/601] lg:aspect-[1512/945] cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <Image
                src={img.src}
                alt={`Gallery ${index + 1}`}
                fill
                className={`object-cover ${img.position}`}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX POPUP FOTO */}
      <Lightbox
        open={lightboxOpen}
        close={handleClose}
        index={lightboxIndex}
        slides={images.map((img) => ({ src: img.src }))}        
        plugins={[Thumbnails, Zoom, Counter]}
        noScroll={{ disabled: true }}
      />
    </>
  )
}

export default Gallery