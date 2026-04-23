import React from "react";
import Image from "next/image";
import Animate from "@/components/ui/Animate";

const Hero = () => {
  return (
    <div id="hero">
      <div className="relative w-full overflow-hidden aspect-[390/844] lg:aspect-[1512/945]">

      {/* BG MOBILE */}
        <Image
          src="/images/terimakasih/BgTerimakasih..webp"
          alt="Background Hero"
          fill
          className="object-cover lg:hidden"
          priority
        />

        {/* BG DEKSTOP */}
        <Image
          src="/images/terimakasih/BgTerimakasih.webp"
          alt="Background Hero"
          fill
          className="object-cover hidden lg:block"
          priority
        />

        {/* LOGO PROVITE */}
        <Animate type="fadeup">
          <Image
            src="/images/terimakasih/LogoProvite.svg"
            alt="Merak"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute bottom-[7vw] lg:bottom-[1vw] left-1/2 -translate-x-1/2 w-[23vw] lg:w-[10vw] h-auto z-10"
          />
        </Animate>

        {/* CONTENT */}
        <div className="absolute top-[19.5vw] lg:top-[7.5vw] left-0 w-full flex flex-col items-center z-10">

          <Animate type="fadeup">
            <h2 className="font-corsiva text-[#75796A] text-center text-[9vw] lg:text-[3.5vw] font-bold">
              Terima Kasih
            </h2>
          </Animate>

          <Animate type="fadeup">
            <p className="text-center font-arno leading-[1.3] font-semibold text-[3vw] lg:text-[1.2vw] text-[#75796A] mt-[3.5vw] lg:mt-[2vw]">
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

            <p className="mt-[2.5vw] lg:mt-[1vw] text-center font-arno font-semibold text-[3vw] lg:text-[1.2vw] text-[#75796A]">
              Wassalamu'alaikum Warahmatullahi Wabarakatuh
            </p>
            
          </Animate>
        </div>
      </div>
    </div>
  );
};

export default Hero;
