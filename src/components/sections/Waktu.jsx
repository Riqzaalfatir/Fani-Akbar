"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Waktu = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00", hours: "00", minutes: "00", seconds: "00",
  });

  useEffect(() => {
    const target = new Date("2026-05-16T15:30:00+07:00");
    const tick = () => {
      const diff = target - new Date();
      if (diff <= 0) return;
      const pad = (n) => String(Math.floor(n)).padStart(2, "0");
      setTimeLeft({
        days:    pad(diff / 86400000),
        hours:   pad((diff % 86400000) / 3600000),
        minutes: pad((diff % 3600000) / 60000),
        seconds: pad((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const boxes = [
    { value: timeLeft.days,    label: "Days" },
    { value: timeLeft.hours,   label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="relative w-full overflow-hidden aspect-[390/665] lg:aspect-[1512/1000]">

      <picture className="absolute inset-0 w-full h-full">
        <source media="(min-width: 1024px)" srcSet="/images/hero/Bg-Gunung...webp" />
        <img
          src="/images/waktu/Bg-Gunung.webp"
          alt="Background Hero"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "fill" }}
        />
      </picture>

      {/* Pohon kiri */}
      <Image
        src="/images/waktu/PohonKiri.webp"
        alt="Pohon Kiri"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute top-0 left-0 w-[100vw] h-auto z-10 lg:w-[25vw] lg:hidden"
      />

      <Image
        src="/images/waktu/PohonKiriD.webp"
        alt="Pohon Kiri"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute top-0 left-[-9vw] lg:left-0 w-[100vw] h-auto z-10 lg:w-[50vw] hidden lg:block"
      />

      {/* Merak kiri bawah */}
      <Image
        src="/images/tanggal/Merak.webp"
        alt="Merak"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute bottom-0 left-0 w-[30vw] lg:w-[14vw] h-auto z-10 scale-x-[-1]"
      />

      {/* Daun kanan bawah */}
      <Image
        src="/images/waktu/DaunKanan.webp"
        alt="Daun Kanan"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute right-0 bottom-0 w-[47vw] lg:w-[30%] h-auto z-30"
      />

      {/* ── KONTEN UTAMA ── */}
      <div className="absolute inset-0 z-20 flex flex-col items-center text-center px-[5vw] mt-[12.8vw] lg:mt-[6.8vw]">

        {/* Tanggal */}
        <h3 className="font-corsiva text-[6.15vw] lg:text-[3.175vw] text-[#75796A] font-bold">
          Sabtu, 16 Mei 2026
        </h3>

        {/* Countdown */}
        <div className="flex gap-[2.5vw] lg:gap-[1.5vw] mt-[13vw] lg:mt-[4vw]">
          {boxes.map(({ value, label }) => (
            <div
              key={label}
              className="bg-[#75796A] rounded-2xl w-[12.8vw] h-[12.56vw] lg:w-[8.119vw] lg:h-[7.953vw] flex flex-col items-center justify-center "
            >
              <span className="font-arno text-[8.2vw] lg:text-[6.349vw] font-semibold text-white leading-none">
                {value}
              </span>
              <span className="font-arno text-[1.79vw] lg:text-[1.058vw] font-semibold text-white leading-none lg:mt-[-1vw]">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Akad Nikah */}
        <div className="flex flex-col items-center mt-[13.1vw] lg:mt-[3.5vw]">
          <h2 className="font-corsiva text-[6.15vw] lg:text-[1.587vw] text-[#2E3713]">
            Akad Nikah
          </h2>
          <p className="text-[#75796A] text-[1.190vw] lg:text-[1.1vw] font-arno mt-[2.56vw]">
            15.30 - 17.00 WIB
          </p>
        </div>

        {/* Resepsi */}
        <div className="flex flex-col items-center mt-[8vw] lg:mt-[3vw]">
          <h2 className="font-corsiva text-[6.15vw] lg:text-[1.587vw] text-[#2E3713]">
            Resepsi Pernikahan
          </h2>
          <p className="text-[#75796A] text-[1.190vw] lg:text-[1.1vw] font-arno mt-[3vw] lg:mt-[2vw]">
            18.30 - 21.00 WIB
          </p>
          <p className="font-arno italic text-[2.56vw] lg:text-[0.926vw] text-[#75796A]  font-semibold lg:mt-[0.4vw]">
            Diawali dengan Upacara Tradisi Pedang Pora
          </p>
        </div>

        {/* Venue */}
        <div className="flex flex-col items-center mt-[11vw] lg:mt-[3vw]">
          <p className="font-semibold text-[3.08vw] lg:text-[1.190vw] text-[#75796A] font-arno">
            Trans Convention Centre<br />
            <span className="uppercase">THE TRANS LUXURY HOTEL</span>
          </p>
          <p className="text-[3.08vw] lg:text-[1.190vw] text-[#75796A] font-arno mt-[3.08vw] lg:mt-[0.5vw]">
            Jl. Gatot Subroto No.289, Bandung
          </p>
        </div>

 <button className="bg-[#721623] w-[41vw] lg:w-[14.815vw] h-[8.46vw] lg:h-[2.778vw] font-arno font-semibold text-[3.08vw] lg:text-[1.190vw] rounded-full text-white mt-[9.49vw] lg:mt-[3vw]  flex items-center justify-center">
  GOOGLE MAPS
</button>

      </div>
    </div>
  );
};

export default Waktu;