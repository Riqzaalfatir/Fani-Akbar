import React from 'react'
import Image from "next/image";
import Animate from "@/components/ui/Animate";


const Doa = () => {
  return (
    <div className="relative w-full overflow-hidden aspect-[390/320] lg:aspect-[1512/600] bg-[#6C7852]">
      
      {/* Background layer */}
      {/* <Image
        src="/images/doa/layer.png"
        alt="Background"
        fill
        className="object-cover object-[50%_30%]"
        priority
      /> */}

      {/* Mobile BG - repeat sedikit */}
<div
  className="absolute inset-0 w-full h-full lg:hidden"
  style={{
    backgroundImage: "url('/images/doa/layer.png')",
    backgroundRepeat: "repeat",
    backgroundSize: "400px 550px", // tile besar = sedikit pengulangan
  }}
/>

{/* Desktop BG - repeat lebih banyak */}
<div
  className="absolute inset-0 w-full h-full hidden lg:block"
  style={{
    backgroundImage: "url('/images/doa/layer.png')",
    backgroundRepeat: "repeat",
    backgroundSize: "400px 650px", // tile kecil = banyak pengulangan
  }}
/>

      {/* Frame + Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-[98vw] lg:w-[42.138vw] lg:h-[34.003vw]">
          
          {/* Frame gambar */}
          <Image
            src="/images/doa/Frame.webp"
            alt="Frame"
            width={800}
            height={400}
            className="w-full h-auto"
            style={{ filter: 'drop-shadow(2px 4px 17px rgba(0,0,0,0.45))' }}
          />

          {/* Text di atas frame */}
          <div className="absolute mt-[2.5vw] lg:mt-[1vw] inset-0 flex items-center justify-center px-[7.3vw] lg:px-[4vw] text-center">
            <Animate type="fadein">
            <p className="font-arno font-semibold text-[3.08vw]  text-[#75796A] leading-[1.35] lg:text-[1.190vw] ">
              "Dan di antara tanda-tanda kekuasaan-Nya<br />
              diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri,<br className='block' />
              supaya kamu mendapat ketenangan hati<br />
              dan dijadikan-Nya rasa kasih sayang di antara kamu.<br />
              Sesungguhnya yang demikian itu<br />
              menjadi tanda-tanda kekuasaan-Nya<br />
              bagi orang-orang yang berpikir."
              <br />
              <span className="font-bold block mt-[3.5vw] lg:mt-[1.8vw]">(QS. Ar-Rum: 21)</span>
            </p>
            </Animate>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Doa