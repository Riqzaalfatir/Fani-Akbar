import React from 'react'
import Image from "next/image";

const Doa = () => {
  return (
    <div className="relative w-full overflow-hidden aspect-[390/320] lg:aspect-[1512/945] bg-[#6C7852]">
      
      {/* Background layer */}
      <Image
        src="/images/doa/layer.png"
        alt="Background"
        fill
        className="object-cover object-[50%_30%]"
        priority
      />

      {/* Frame + Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-[98vw] lg:w-[40vw]">
          
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
          <div className="absolute mt-[2vw] inset-0 flex items-center justify-center px-[12vw] lg:px-[4vw] text-center">
            <p className="font-arno text-[3.08vw] text-[#75796A] leading-[1.35] lg:text-[1.1vw] ">
              "Dan di antara tanda-tanda kekuasaan-Nya<br />
              diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri,
              supaya kamu mendapat ketenangan hati<br />
              dan dijadikan-Nya rasa kasih sayang di antara kamu.<br />
              Sesungguhnya yang demikian itu<br />
              menjadi tanda-tanda kekuasaan-Nya<br />
              bagi orang-orang yang berpikir."
              <br />
              <span className="font-bold">(QS. Ar-Rum: 21)</span>
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Doa