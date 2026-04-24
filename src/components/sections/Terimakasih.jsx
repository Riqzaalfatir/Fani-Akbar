import React from "react";
import Image from "next/image";
import Animate from "@/components/ui/Animate";

const Hero = () => {
  return (
    <div id="hero">
      <div className="relative w-full overflow-hidden aspect-[390/662] lg:aspect-[1512/834]">

        {/* BG MOBILE */}
        <Image
          src="/images/terimakasih/BgTerimakasihM.webp"
          alt="Background Hero"
          fill
          className="object-cover lg:hidden"
          priority
        />

        {/* BG DESKTOP */}
        <Image
          src="/images/terimakasih/BgTerimakasihh.webp"
          alt="Background Hero"
          fill
          className="object-cover object-center hidden lg:block"
          priority
        />

        {/* OVERLAY GRADIENT */}
<div className="absolute bottom-0 left-0 w-full h-[49%] lg:h-[60%] z-[1] bg-gradient-to-b from-[#2E3713]/0 via-[#2E3713]/70 lg:via-[#2E3713]/60 to-[#2E3713]/95 lg:to-[#2E3713]/100" />

        {/* LOGO PROVITE */}
          <Image
            src="/images/terimakasih/LogoProvite.svg"
            alt="Merak"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute bottom-[1vw] lg:bottom-[1vw] left-1/2 -translate-x-1/2 w-[23vw] lg:w-[9.5vw] h-auto z-10"
          />

        {/* CONTENT */}
        <div className="absolute bottom-[26vw] lg:bottom-[7.5vw] left-0 w-full flex flex-col items-center z-10">

          <Animate type="fadeup">
            <h2 className="font-corsiva text-[#FFFEEF] text-center text-[9vw] lg:text-[3vw] font-bold">
              Terima Kasih
            </h2>
          </Animate>

          <Animate type="fadeup">
            <p className="text-center font-arno leading-[1.3] lg:leading-[1.5] tracking-wide font-semibold text-[3vw] lg:text-[1.1vw] text-[#FFFEEF] mt-[3.5vw] lg:mt-[2vw]">
              Atas doa dan restu yang diberikan,
              <br />
              kami mengucapkan terima kasih.
              <br />
              Merupakan suatu kehormatan dan kebahagiaan bagi kami
              <br />
              apabila Bapak/Ibu/Saudara/i berkenan hadir
              <br />
              dan memberikan doa restu kepada kami.
            </p>

            <p className="mt-[2.5vw] lg:mt-[1vw] leading-[1.3] lg:leading-[1.5] text-center font-arno font-semibold text-[3vw] lg:text-[1.1vw] text-[#FFFEEF]">
              Wassalamu'alaikum Warahmatullahi Wabarakatuh
            </p>
          </Animate>

        </div>
      </div>
    </div>
  );
};

export default Hero;