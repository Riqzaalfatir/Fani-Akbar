"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Opening = ({ setStart, namaTamu = "Sela" }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0); // ✅ Paksa scroll ke atas saat popup muncul
  }, []);

  const handleOpen = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
    // ✅ Delay setStart sampai animasi exit selesai (800ms)
    setTimeout(() => {
      setStart(true);
    }, 800);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }} // ✅ Lebih lama & smooth
          className="fixed inset-0 z-[100] bg-black/60 lg:bg-black/50 backdrop-blur-lg md:backdrop-blur-md flex justify-center items-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }} // ✅ Mulai dari bawah
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 40 }} // ✅ Turun saat keluar
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1], // ✅ Cubic bezier lebih natural
            }}
            className="relative bg-[#F4F1ED] rounded-xl md:rounded-2xl overflow-hidden w-[290px] h-[430px] md:w-[416px] md:h-[540px] shadow-xl flex flex-col z-[100]"
          >
            {/* Foto prewed */}
            <div className="relative w-full h-[182px] md:h-[220px] overflow-hidden z-10">
              <Image
                src="/images/popup/Opening.webp"
                alt="prewed"
                fill
                className="object-cover object-[50%_46%] md:object-[50%_70%] z-50"
              />
            </div>

            {/* ✅ Background Gunung */}
            <div className="absolute bottom-0 left-0 right-0 top-[182px] md:top-[220px] z-0">
              <Image
                src="/images/waktu/BgGunung.webp"
                alt="Background"
                fill
                className="object-cover object-[50%_30%]"
                priority
              />
            </div>

            {/* Daun kanan */}
            <Image
              src="/images/hero/Daun-Kanan.webp"
              alt="Daun Kanan"
              width={0}
              height={0}
              sizes="100vw"
              className="absolute right-[0%] bottom-[0%] w-[35%] lg:w-[37%] h-auto z-30 pointer-events-none"
            />
            <Image
              src="/images/popup/PohonPutus.webp"
              alt="Pohon Kiri"
              width={0}
              height={0}
              sizes="100vw"
              className="absolute left-01 -bottom-10 w-[83.5%] h-auto z-20 pointer-events-none"
            />

            {/* Bunga kiri */}
            <Image
              src="/images/popup/BungaKiriAtas.webp"
              alt="Merak Kiri"
              width={0}
              height={0}
              sizes="100vw"
              className="absolute left-[0%] top-[40.5%] w-[30%] lg:w-[25%] h-auto z-20 pointer-events-none"
            />

            {/* Konten teks */}
            <div className="relative z-40 flex flex-col items-center text-center px-4 pt-[28px] md:pt-[25px] pb-[40px] md:pb-[0px] flex-1 leading-none">
              <p className="text-[12px] md:text-[14px] text-[#6C7852] font-arno font-semibold">
                THE WEDDING OF
              </p>
              <h1 className="text-[36px] lg:text-[48px] text-[#CFAA67] pt-[8px] md:pt-[15px] font-corsiva font-bold">
                Fani & Akbar
              </h1>
              <p className="text-[11px] lg:text-[14px] text-[#6C7852] font-arno font-semibold pt-[14px] md:pt-[24px]">
                Dear Mr. / Mrs. / Ms.
              </p>
              <p className="text-[14px] lg:text-[18px] font-semibold font-arno text-[#6C7852] pt-[11px] md:pt-[13px]">
                {namaTamu}
              </p>
              <p className="text-[9px] lg:text-[12px] text-[#6C7852] font-arno font-semibold pt-[15px] md:pt-[23px] leading-[1.2]">
                We sincerely apologize
                <br />
                for any misspelling of names or titles.
              </p>
              <button
                onClick={handleOpen}
                className="bg-[#721623] text-white w-[184px] h-[33px] md:w-[220px] md:h-[40px] rounded-full uppercase font-arno font-semibold text-[12px] lg:text-[18px] mt-[12px] md:mt-[20px]"
              >
                Open Invitation
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Opening;
