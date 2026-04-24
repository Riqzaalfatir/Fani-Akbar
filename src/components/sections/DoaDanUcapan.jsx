"use client";

import { dummyPesan } from "../data/pesan";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WishesCard from "../popup/PesanCard";

const DoaDanUcapan = () => {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [pesanList, setPesanList] = useState(() => {
    if (typeof window === "undefined") return dummyPesan;
    const saved = localStorage.getItem("pesan");
    return saved ? JSON.parse(saved) : dummyPesan;
  });

  useEffect(() => {
    localStorage.setItem("pesan", JSON.stringify(pesanList));
  }, [pesanList]);

  const handleSubmit = () => {
    if (!nama || !pesan) {
      alert("Please fill in all fields");
      return;
    }
    const newPesan = { id: Date.now(), nama, pesan };
    setPesanList((prev) => [newPesan, ...prev]);
    setShowPopup(true);
    setNama("");
    setPesan("");
  };

  return (
    <>
      <section className="w-full relative overflow-hidden">

        {/* BG */}
        <Image
          src="/images/doa/BgGunung.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* POHON KIRI MOBILE */}
        <Image
          src="/images/doa/PohonKiri.webp"
          alt="Pohon Kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-0 left-0 w-[70vw] h-auto z-10 lg:hidden"
        />

        {/* POHON KANAN MOBILE */}
        <Image
          src="/images/doa/PohonKanan.png"
          alt="Pohon Kanan"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-0 right-0 w-[95vw] h-auto z-10 lg:w-[25vw] lg:hidden"
        />

        {/* POHON KECIL KIRI */}
        <Image
          src="/images/doa/PohonKecilKiri.webp"
          alt="Dekorasi Bawah Kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute bottom-0 lg:bottom-[-6vw] left-0 lg:left-[-2vw]  w-[98vw] lg:w-[72vw] h-auto z-10"
        />

        {/* POHON KANAN DEKSTOP */}
        <Image
          src="/images/tanggal/PohonKanan.webp"
          alt="Ornament"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute bottom-0 right-0 w-[53.5vw] h-auto z-10 hidden lg:block"
        />

        {/* CONTENT */}
        <div className="relative z-10">
          <div className="w-[72.8vw] lg:w-[39.2vw] mx-auto pt-[20vw] pb-[20vw] lg:pt-[7.6vw] lg:pb-[1.5vw]">
            <div className="flex flex-col items-center">
              <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                className="font-corsiva font-bold text-[6vw] lg:text-[3.4vw] tracking-[1px] text-[#75796A] mb-[5vw] lg:mb-[2vw]"
              >
                Doa & Ucapan
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                className="w-full flex flex-col gap-[2vw] lg:gap-[1vw]"
              >

                {/* INPUT NAMA */}
                <input
                  type="text"
                  value={nama}
                  placeholder="Desy (Tester)"
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full mt-[6vw] lg:mt-[0vw] text-[#6C7852] rounded-full font-arno font-semibold text-[3vw] lg:text-[1.3vw] bg-transparent border-[0.5px] border-[#6C7852] px-[4vw] lg:px-[2vw] h-[8vw] lg:h-[3vw] outline-none placeholder:text-[#6C7852]"
                />

                {/* TEXTAREA PESAN */}
                <textarea
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  className="w-full mt-[2.5vw] lg:mt-[0.35vw] font-arno rounded-2xl text-[3vw] lg:text-[1.3vw] bg-transparent border-[0.5px] border-[#6C7852] px-[4vw] lg:px-[2vw] py-[2vw] lg:py-[1vw] outline-none h-[20vw] lg:h-[19vw] resize-none font-semibold text-[#6C7852]"
                />

                {/* BUTTON KIRIM */}
                <button
                  onClick={handleSubmit}
                  className="bg-[#6C7852] mt-[2.5vw] lg:mt-[0.35vw] rounded-full h-[8vw] lg:h-[3vw] text-[3vw] lg:text-[1.3vw] font-arno font-semibold uppercase flex items-center justify-center gap-[0.8vw] text-[#FEFBF0] pt-[0.3vw] lg:pt-[0.15vw]"
                >
                  <Image
                    src="/images/doa/Panah.svg"
                    alt="Kirim"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[3.5vw] h-auto lg:w-[1.8vw]"
                  />
                  KIRIM UCAPAN
                </button>

                {/* BOX PESAN */}
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2,
                  }}
                  className={`w-full mt-[2.5vw] lg:mt-[1.35vw] ${
                    showAll
                      ? "bg-transparent"
                      : "bg-[#6C7852] rounded-2xl h-[80vw] lg:h-[36vw] overflow-y-auto"
                  }`}
                >
                  {!showAll ? (
                    <div>
                      {/* TOP PENUTUP BATAS */}
                      <div className="sticky top-0 w-full h-[2.8vw] lg:h-[1.5vw] bg-[#6C7852] z-10" />

                      {/* ISI */}
                      <div className="px-[4vw] lg:px-[2vw]">
                        {pesanList.slice(0, 8).map((item, index, array) => (
                          <div key={item.id}>
                            <p className="text-[#DADAD9] font-arnoCaption font-bold text-[3vw] lg:text-[1.3vw] mb-[1vw] lg:mb-[0.5vw]">
                              {item.nama}
                            </p>
                            <p className="text-[#DADAD9] font-arno font-semibold text-[3vw] lg:text-[1.3vw] tracking-[0.5px]">
                              {item.pesan}
                            </p>
                            {index !== array.length - 1 && (
                              <div className="border-t border-[#DADAD9]/40 my-[2vw] lg:my-[1vw]" />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* BOTTOM PENUTUP */}
                      {/* <div className="sticky bottom-0 w-full h-[0.5vw] lg:h-[2vw] bg-[#6C7852] z-10" /> */}
                    </div>
                  ) : (
                    <div className="w-full">
                      <motion.div
                        layout
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: {},
                          visible: { transition: { staggerChildren: 0.1 } },
                        }}
                        className="grid grid-cols-2 gap-[2vw] lg:gap-[1vw]"
                      >

                        {/* LIST PESAN CARD */}
                        {pesanList.map((item) => (
                          <motion.div
                            key={item.id}
                            variants={{
                              hidden: { opacity: 0, y: 50, scale: 0.95 },
                              visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{
                              duration: 1.5,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            onClick={() => setSelectedMessage(item)}
                            className="min-h-[30vw] lg:min-h-[14vw] rounded-md overflow-hidden shadow-md bg-[#F4F8F5] flex flex-col cursor-pointer"
                          >
                            <div className="p-[2vw] lg:p-[1vw] relative flex-1 flex flex-col justify-center">

                              <p className="text-[10vw] font-arno lg:text-[4vw] text-slate-500 opacity-30 leading-none absolute top-[2vw] left-[2vw] lg:top-[1.5vw] lg:left-[1.5vw]">
                                "
                              </p>

                              <p className="text-[2.5vw] font-arnoCaption lg:text-[1.1vw] leading-relaxed px-[1vw] lg:px-[2vw] pt-[4vw] lg:pt-[2.5vw] text-slate-600 font-medium line-clamp-3 text-center">
                                {item.pesan}
                              </p>

                            </div>

                            <div className="bg-[#5A6644] font-arno h-[8vw] lg:h-[3vw] flex items-center justify-center px-[2vw]">
                              <p className="text-white text-[2.5vw] lg:text-[1.1vw] font-bold text-center line-clamp-1">
                                {item.nama}
                              </p>
                            </div>

                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  )}
                </motion.div>

                <WishesCard
                  data={selectedMessage}
                  onClose={() => setSelectedMessage(null)}
                />

                {/* BUTTON LIHAT SEMUA */}
                <motion.button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-[#6C7852] font-semibold mt-[2.5vw] lg:mt-[0.5vw] h-[8vw] lg:h-[3vw] text-[3vw] lg:text-[1.3vw] font-arno text-[#FEFBF0] uppercase flex items-center justify-center gap-[0.8vw] rounded-full pt-[0.3vw] lg:pt-[0.15vw]"
                >
                  <Image
                    src="/images/doa/Pesan.svg"
                    alt="Pesan"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[4vw] h-auto lg:w-[1.6vw]"
                  />
                  {showAll ? "KEMBALI" : "LIHAT SEMUA PESAN"}
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* POPUP PESAN TERKIRIM */}
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
              <div className="bg-[#F7F8F2] rounded-2xl p-[5vw] lg:p-[2vw] w-[80vw] lg:w-[25vw] text-center shadow-xl border border-[#E4E7D6]">
                <h3 className="text-[5vw] lg:text-[1.6vw] font-arno font-semibold text-[#454F23] mb-[2vw] lg:mb-[0.8vw] tracking-wide">
                  Pesan Terkirim!
                </h3>
                <div className="w-[8vw] lg:w-[3vw] h-[0.2vw] bg-[#454F23] mx-auto mb-[3vw] lg:mb-[1vw] opacity-60" />
                <p className="text-[3.5vw] lg:text-[1.2vw] text-[#6C7852] font-arno leading-relaxed mb-[4vw] lg:mb-[1.5vw]">
                  Terima kasih atas doa dan ucapan baik Anda. Kami sangat
                  menghargai pesan yang telah anda diberikan.
                </p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-[#454F23] hover:bg-[#5A6530] transition-all text-white px-[5vw] lg:px-[2vw] py-[1.5vw] lg:py-[0.6vw] rounded-full text-[3vw] lg:text-[1vw] tracking-wide font-arno"
                >
                  Kembali
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DoaDanUcapan;
