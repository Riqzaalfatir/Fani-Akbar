import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero">
      <div className="relative w-full overflow-hidden aspect-[390/843] lg:aspect-[1512/945]">
        
        {/* ✅ MOBILE BG - ganti object-fill + pakai <img> agar tidak crop */}
        <img
          src="/images/hero/Gunung..webp"
          alt="Background Hero"
          className="absolute inset-0 w-full h-full lg:hidden"
           style={{ 
    objectFit: "cover",        // ganti ke cover
    objectPosition: "20% 10%"  // ← atur manual di sini
    // format: "horizontal% vertical%"
    // 50% = center horizontal
    // 0%  = top, 100% = bottom, 50% = center
  }}
        />

        {/* ✅ DESKTOP BG */}
        <img
          src="/images/hero/Bg-Gunung...webp"
          alt="Background Hero"
          className="absolute inset-0 w-full h-full hidden lg:block"
          style={{ objectFit: "fill" }}
        />

        <Image
          src="/images/hero/BungaKananAtas.webp"
          alt="Bunga Kanan Atas"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-0 right-0 w-[56%] lg:w-[20%] h-auto z-20"
        />

        {/* ✅ top pakai % bukan vw agar relatif ke container, bukan layar */}
        <div className="absolute top-[40vw] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 leading-none m-0">
          <Image
            src="/images/hero/LogoFa.png"
            alt="ornament"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[23.5%] h-auto"  
          />

          {/* ✅ font size px → vw */}
          <h3 className="uppercase font-semibold font-arno text-[4vw] text-[#CFAA67] mt-[8vw]">
            PERNIKAHAN
          </h3>

          <div className="mt-0 flex flex-col items-center text-[#CFAA67] font-corsiva leading-none">
            {/* ✅ text-[64px] → text-[16vw] */}
            <span className="text-[16vw] ml-[-30vw]">Fani</span>
            <span className="text-[12vw] -mt-2.5 ml-[-18vw]">&</span>
            <span className="text-[16vw] mt-[-11vw] ml-[28vw]">Akbar</span>
          </div>

          {/* ✅ font size px → vw */}
          <h3 className="font-arno text-[4vw] text-[#CFAA67] mt-[2%]">
            16 . 05 . 2026
          </h3>
        </div>

        <Image
          src="/images/hero/Pohon-Putus.webp"
          alt="Ornament"
          fill
          className="absolute inset-0 object-fill z-10 lg:w-[10%]" />

        <Image
          src="/images/hero/Pohon-Kanan.webp"
          alt="Pohon Kanan"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute bottom-[-3vw] right-0 z-10 w-[36vw] lg:w-[10%] h-auto"
        />

        <Image
          src="/images/hero/MerakKiri.webp"
          alt="Merak Kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute left-[0%] bottom-[0%] w-[89%] h-auto lg:w-[20%] z-20"
        />

        <Image
          src="/images/hero/BungaKiri.webp"
          alt="Bunga Kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute left-[0%] bottom-[-6%] w-[34%] lg:w-[20%] h-auto z-20"
        />

        <Image
          src="/images/hero/Daun-Kanan.webp"
          alt="Daun Kanan"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute right-[0%] bottom-[0%] w-[65%] lg:w-[20%] h-auto z-30"
        />

        <Image
          src="/images/hero/BungaKanan...webp"
          alt="Daun Kanan"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute right-[-2vw] bottom-[0.2%] lg:w-[25%] w-[28%] h-auto z-30"
        />

        <Image
          src="/images/hero/KupuKiriEmas.gif"
          alt="Kupu kiri atas"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-[10%] left-[0%] w-[25%] h-auto z-20 lg:w-[20%] scale-x-[-1]"
        />

        <Image
          src="/images/hero/KupuKananAtas.gif"
          alt="Kupu kanan tengah"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-[30%] right-[2%] w-[18%] lg:w-[20%] h-auto z-20 scale-x-[-1]"
        />

        <Image
          src="/images/hero/KupuKananAtas.gif"
          alt="Kupu kanan bawah"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute bottom-[6%] right-[14%] lg:w-[20%] w-[16%] h-auto z-30 rotate-[-45deg]"
        />

      </div>
    </div>
  );
};

export default Hero;