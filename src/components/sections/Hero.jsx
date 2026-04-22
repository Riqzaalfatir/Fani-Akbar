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
            objectFit: "cover", // ganti ke cover
            objectPosition: "20% 10%", // ← atur manual di sini
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
          className="absolute top-0 right-0 w-[56%] lg:w-[24%] h-auto z-20"
        />

        {/* ✅ top pakai % bukan vw agar relatif ke container, bukan layar */}
<div className="absolute top-[40vw] lg:top-[39.5%] left-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-20 flex flex-col items-center leading-none m-0">
          <Image
            src="/images/hero/LogoFa.png"
            alt="ornament"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[23.5%] lg:w-[28%] h-auto"
          />

          {/* ✅ font size px → vw */}
          <h3 className="uppercase font-semibold font-arno text-[4vw] lg:text-[1.587vw]  text-[#CFAA67] mt-[12vw] lg:mt-[6vw]">
            PERNIKAHAN
          </h3>

          <div className="mt-0 lg:mt-[1.5vw] flex flex-col items-center text-[#CFAA67] font-corsiva leading-none">
            {/* ✅ text-[64px] → text-[16vw] */}
            <span className="text-[16vw] lg:text-[6.349vw] ml-[-30vw] lg:ml-[-10.5vw]">Fani</span>
            <span className="text-[12vw] lg:text-[4.233vw] -mt-2.5 lg:-mt-[1vw] ml-[-18vw] lg:ml-[-8vw]">&</span>
            <span className="text-[16vw] lg:text-[6.349vw] mt-[-11vw] ml-[28vw] lg:mt-[-3vw] lg:ml-[9vw]">Akbar</span>
          </div>

          {/* ✅ font size px → vw */}
          <h3 className="font-arno text-[4vw] lg:text-[1.587vw]  text-[#CFAA67] mt-[7%] lg:mt-[8%]">
            16 . 05 . 2026
          </h3>
        </div>

        <Image
          src="/images/hero/Pohon-Putus.webp"
          alt="Ornament"
          fill
          className="absolute inset-0 object-fill z-10 lg:hidden"
        />

        
        <Image
          src="/images/hero/PohonDekstop.webp"
          alt="Ornament"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute left-0 top-0 hidden lg:block lg:w-[50%] h-auto z-10"
        />

        {/* <Image
          src="/images/hero/Pohon-Kanan.webp"
          alt="Pohon Kanan"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute bottom-[-3vw] right-0 z-10 w-[36vw] lg:w-[20%] h-auto"
        /> */}

        <Image
          src="/images/hero/PohonKanan.webp"
          alt="Pohon Kanan"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute bottom-[-3vw] right-[-13vw] lg:right-0 z-10 w-[48vw] lg:w-[25%] h-auto"
        />

        <Image
          src="/images/hero/MerakKiri.webp"
          alt="Merak Kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute left-[0%] bottom-[0%] w-[89%] h-auto lg:w-[33%] z-20"
        />

        <Image
          src="/images/hero/BungaKiri.webp"
          alt="Bunga Kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute left-[0%] bottom-[-6%] w-[34%] lg:w-[13%] h-auto z-20"
        />

        <Image
          src="/images/hero/DaunKanan.webp"
          alt="Daun Kanan"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute right-[0%] bottom-[0%] w-[65%] lg:w-[26%] h-auto z-30"
        />

        <Image
          src="/images/hero/BungaKanan...webp"
          alt="Daun Kanan"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute right-[-2vw] lg:right-[-2vw] bottom-[0.2%] lg:w-[10%] w-[28%] h-auto z-30"
        />

        <Image
          src="/images/hero/KupuKiriEmas.gif"
          alt="Kupu kiri atas"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-[10%] left-[0%] lg:left-[9%] lg:top-[16%] w-[25%] h-auto z-20 lg:w-[7%] scale-x-[-1]"
        />

        <Image
          src="/images/hero/KupuKananAtas.gif"
          alt="Kupu kanan tengah"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-[30%] right-[2%] lg:top-[45%] lg:right-[16%]  w-[18%] lg:w-[7%] h-auto z-20 scale-x-[-1]"
        />

        <Image
          src="/images/hero/KupuKecil.gif"
          alt="Kupu kanan bawah"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute bottom-[23%] right-[14%] lg:bottom-[13%] lg:right-[9.5%] lg:w-[6%] w-[16%] h-auto z-30"
        />
      </div>
    </div>
  );
};

export default Hero;
