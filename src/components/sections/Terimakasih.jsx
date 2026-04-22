import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero">
      <div className="relative w-full overflow-hidden aspect-[390/844] lg:aspect-[1512/945]">
        <Image
          src="/images/terimakasih/BgTerimakasih..webp"
          alt="Background Hero"
          fill
          className="object-cover"
          priority
        />

        <Image
          src="/images/terimakasih/LogoProvite.svg"
          alt="Merak"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute bottom-[7vw] left-1/2 -translate-x-1/2 w-[23vw] lg:w-[12vw] h-auto z-10"
        />

        <div className="absolute top-[80px] left-0 w-full flex flex-col items-center z-10">
          <h2 className="font-corsiva text-[#75796A] text-center text-[36px] font-bold">
            Terima Kasih
          </h2>

          <p className="text-center font-arno leading-[1.3] font-semibold text-[12px] text-[#75796A] mt-2">
            Atas doa dan restu yang diberikan,
            <br />
            kami mengucapkan terima kasih.
            <br />
            Merupakan suatu kehormatan dan kebahagiaan bagi kami
            <br />
            apabila Bapak/Ibu/Saudara/i berkenan hadir
            <br />
            dan memberikan doa restu kepada kami.
            <br />
          </p>

          <p className="mt-3 text-center font-arno font-semibold text-[12px] text-[#75796A]">
            Wassalamu’alaikum Warahmatullahi Wabarakatuh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
