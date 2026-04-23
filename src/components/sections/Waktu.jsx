"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Animate from "@/components/ui/Animate";

const Waktu = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date("2026-05-16T15:30:00+07:00");
    const tick = () => {
      const diff = target - new Date();
      if (diff <= 0) return;
      const pad = (n) => String(Math.floor(n)).padStart(2, "0");
      setTimeLeft({
        days: pad(diff / 86400000),
        hours: pad((diff % 86400000) / 3600000),
        minutes: pad((diff % 3600000) / 60000),
        seconds: pad((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const boxes = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="relative w-full overflow-hidden aspect-[390/665] lg:aspect-[1512/1000]">
      <picture className="absolute inset-0 w-full h-full">
        <source
          media="(min-width: 1024px)"
          srcSet="/images/hero/Bg-Gunung...webp"
        />
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
        className="absolute top-0  w-[100vw] h-auto z-10 lg:w-[25vw] lg:hidden"
      />

      <Image
        src="/images/waktu/PohonKiriD.webp"
        alt="Pohon Kiri"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute top-0 left-[-9vw] lg:left-0 w-[100vw] h-auto z-10 lg:w-[50vw] hidden lg:block"
      />
      <Image
        src="/images/hero/KupuKananAtas.gif"
        alt="Kupu kanan tengah"
        width={0}
        height={0}
        sizes="100vw"
        className="
                  absolute
                  top-[34%]
                  left-[10%]
                  lg:top-[29%]
                  lg:left-[13%]
                  w-[15%]
                  lg:w-[6.5%]
                  h-auto
                  z-20
                "
      />

      {/* Merak kiri bawah */}
      <motion.div
        className="absolute bottom-0 left-0 w-[32vw] lg:w-[15vw] h-auto z-10"
        style={{ transformOrigin: "50% 100%" }}
        animate={{ rotate: [0, 0.3, 0, -0.7, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop",
        }}
      >
        <Image
          src="/images/tanggal/Merak.webp"
          alt="Merak"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto  scale-x-[-1]"
        />
      </motion.div>

      {/* Daun kanan bawah */}
      <Image
        src="/images/waktu/DaunKanan.webp"
        alt="Daun Kanan"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute right-0 bottom-0 w-[50vw] lg:w-[30%] h-auto z-30"
      />

      {/* ── KONTEN UTAMA ── */}
      <div className="absolute inset-0 z-30 flex flex-col items-center text-center px-[5vw] mt-[12.8vw] lg:mt-[6.8vw]">
        {/* Tanggal */}
        <Animate type="fadein">
          <h3 className="font-corsiva text-[6.15vw] lg:text-[3.175vw] text-[#75796A] font-bold">
            Sabtu, 16 Mei 2026
          </h3>
        </Animate>

        {/* Countdown */}
        <Animate type="fadeup">
          <div className="flex gap-[2.5vw] lg:gap-[1.5vw] mt-[13vw] lg:mt-[4vw]">
            {boxes.map(({ value, label }) => (
              <div
                key={label}
                className="bg-[#75796A] rounded-sm lg:rounded-2xl w-[12.8vw] h-[12.56vw] lg:w-[8.119vw] lg:h-[7.953vw] flex flex-col items-center justify-center "
              >
                <span className="font-arno text-[8.2vw] lg:text-[6.349vw] font-semibold text-white leading-none">
                  {value}
                </span>
                <span className="font-arno text-[1.79vw] lg:text-[1.058vw] font-semibold text-white leading-none mt-[-1vw] lg:mt-[-1vw]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Animate>

        {/* Akad Nikah */}
        <div className="flex flex-col items-center mt-[11vw] lg:mt-[3.5vw]">
          <Animate type="fadeup" delay={0.2}>
            <h2 className="font-corsiva text-[6.15vw] lg:text-[1.587vw] text-[#2E3713]">
              Akad Nikah
            </h2>
          </Animate>
          <Animate type="fadeup" delay={0.3}>
            <p className="text-[#75796A] text-[3.08vw] lg:text-[1.1vw] font-arno font-semibold mt-[2.56vw] lg:mt-[2vw]">
              15.30 - 17.00 WIB
            </p>
          </Animate>
        </div>

        {/* Resepsi */}
        <div className="flex flex-col items-center mt-[8vw] lg:mt-[3vw]">
          <Animate type="fadeup" delay={0.4}>
            <h2 className="font-corsiva text-[6.15vw] lg:text-[1.587vw] text-[#2E3713]">
              Resepsi Pernikahan
            </h2>
          </Animate>
          <Animate type="fadeup" delay={0.5}>
            <p className="text-[#75796A] text-[3.08vw] lg:text-[1.1vw] font-arnoCaption mt-[3vw] lg:mt-[2vw]">
              18.30 - 21.00 WIB
            </p>
          </Animate>
          <Animate type="fadeup" delay={0.6}>
            <p className="font-arno  italic text-[2.56vw] lg:text-[0.926vw] text-[#75796A]  font-semibold mt-[0.5vw] lg:mt-[0.5vw]">
              Diawali dengan Upacara Tradisi Pedang Pora
            </p>
          </Animate>
        </div>

        {/* Venue */}
        <div className="flex flex-col items-center mt-[11vw] lg:mt-[3vw]">
          <Animate type="fadeup" delay={0.7}>
            <p className="font-semibold text-[3.08vw] lg:text-[1.190vw] text-[#75796A] font-arno">
              Trans Convention Centre
              <br />
              <span className="uppercase">THE TRANS LUXURY HOTEL</span>
            </p>
          </Animate>
          <Animate type="fadeup" delay={0.8}>
            <p className="text-[3.08vw] lg:text-[1.190vw] text-[#75796A] font-arnoCaption mt-[3.08vw] lg:mt-[0.7vw]">
              Jl. Gatot Subroto No.289, Bandung
            </p>
          </Animate>
        </div>

        <Animate type="fadeup" delay={0.9}>
          <button
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/?q=place_id:ChIJo3iFhtTnaC4R8SG-GaIO9fQ",
                "_blank",
              )
            }
            className="bg-[#721623] w-[41vw] lg:w-[14.815vw] h-[8.46vw] lg:h-[2.778vw] font-arno font-semibold text-[3.08vw] lg:text-[1.190vw] rounded-full text-white mt-[8vw] lg:mt-[2vw] flex items-center justify-center z-40"
          >
            <span className="translate-y-[0.12em]">GOOGLE MAPS</span>
          </button>
        </Animate>
      </div>
    </div>
  );
};

export default Waktu;
