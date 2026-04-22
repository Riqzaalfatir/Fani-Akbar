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

    const newPesan = {
      id: Date.now(),
      nama,
      pesan,
    };

    setPesanList((prev) => [newPesan, ...prev]);
    setShowPopup(true);
    setNama("");
    setPesan("");
  };

  return (
    <>
      <section className="w-full relative">
        {/* Background */}
        <Image
          src="/images/waktu/Bg-Gunung.webp"
          alt="Background"
          fill
          className="object-cover object-[50%_30%]"
          priority
        />

        <Image
                src="/images/doa/PohonKiri.webp"
                alt="Pohon Kiri"
                width={0}
                height={0}
                sizes="100vw"
                className="absolute top-0 left-0 w-[70vw] h-auto z-10 lg:w-[25vw]"
              />

        <Image
                src="/images/doa/PohonKanan.png"
                alt="Pohon Kiri"
                width={0}
                height={0}
                sizes="100vw"
                className="absolute top-0 right-0 w-[100vw] h-auto z-10 lg:w-[25vw]"
              />

        {/* Konten */}
        <div className="relative z-10">
          <div className="max-w-2xl mx-auto px-10 md:px-4 lg:px-4 py-[80px] lg:py-28">
            <div className="flex flex-col items-center">
              <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="font-corsiva font-bold text-[24px] md:text-[46px] lg:text-[46px] tracking-[1px] text-[#75796A] mb-10 md:mb-6"
              >
                Doa & Ucapan
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="w-full flex flex-col gap-4"
              >
                <input
                  type="text"
                  value={nama}
                  placeholder="Desy (Tester)"
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full text-slate-200 rounded-full font-arno text-[12px] lg:text-[16px] bg-transparent border-[0.5px] border-[#6C7852] px-3 h-[33px] text-sm outline-none placeholder:text-[#6C7852]"
                />

                <textarea
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  className="w-full rounded-lg font-arno text-[12px] lg:text-[16px] bg-transparent border-[0.5px] border-[#6C7852] px-3 py-2 text-sm outline-none text-slate-200 h-[60px] md:h-[262px]"
                ></textarea>

                <button
                  onClick={handleSubmit}
                  className="bg-[#6C7852] rounded-full h-[33px] md:h-[40px] text-[12px] md:text-[18px] lg:text-[18px] font-arno font-semibold uppercase flex items-center justify-center gap-1.5 text-[#DADAD9]"
                >
                  <Image
                    src="/images/doa/Panah.svg"
                    alt="Kirim"
                    width={15}
                    height={19}
                    className="object-cover w-[15px] h-[19px] md:w-[25px]"
                  />
                  KIRIM UCAPAN
                </button>

                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className={`w-full max-w-none mt-18 py-4 px-4 md:px-6 ${
                    showAll
                      ? "bg-transparent"
                      : "bg-[#6C7852] rounded-3xl h-[360px] md:h-[503px] overflow-y-auto"
                  }`}
                >
                  {!showAll ? (
                    pesanList.slice(0, 8).map((item, index, array) => (
                      <div key={item.id}>
                        <p className="text-[#DADAD9] font-arno font-bold text-[12px] md:text-[18px] mb-0.5 md:mb-3 font-sweetsans">
                          {item.nama}
                        </p>
                        <p className="text-[#DADAD9] font-arno font-bold  text-[12px]    md:text-[18px] md:font-normal tracking-[0.5px]">
                          {item.pesan}
                        </p>
                        {index !== array.length - 1 && (
                          <div className="border-t border-[#DADAD9]/40 border-[1px] my-3"></div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="max-w-2xl relative left-1/2 -translate-x-1/2 w-screen px-10 md:px-12">
                      <motion.div
                        layout
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: {},
                          visible: { transition: { staggerChildren: 0.1 } },
                        }}
                        className="grid grid-cols-2 gap-3"
                      >
                        {pesanList.map((item) => (
                          <motion.div
                            key={item.id}
                            variants={{
                              hidden: { opacity: 0, y: 50, scale: 0.95 },
                              visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                            onClick={() => setSelectedMessage(item)}
                            className="min-h-[150px] md:min-h-[190px] rounded-md overflow-hidden shadow-md bg-[#F4F8F5] font-sweetsans flex flex-col"
                          >
                            <div className="p-2 text-[#202F26] relative flex-1 flex flex-col justify-center">
                              <p className="text-[40px] md:text-[60px] text-slate-500 opacity-30 leading-none absolute top-2 left-3">
                                "
                              </p>
                              <p className="text-[11px] md:text-[16px] leading-relaxed px-1 md:px-4 md:pt-9 text-slate-600 font-medium line-clamp-3 text-center mt-4 md:-mt-2">
                                {item.pesan}
                              </p>
                            </div>
                            <div className="bg-[#454F23] h-[35px] flex items-center justify-center px-3">
                              <p className="text-white text-[12px] md:text-[18px] font-bold text-center line-clamp-1">
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

                <motion.button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-[#6C7852] h-[33px] md:h-[40px] text-[12px] md:text-[18px] font-arno text-[#FEFBF0] uppercase mt-3 flex items-center justify-center gap-2 rounded-full"
                >
                  <Image
                    src="/images/doa/Pesan.svg"
                    alt="Kirim"
                    width={20}
                    height={20}
                    className="object-cover w-[19px] h-[20px] md:w-[22px] "
                  />
                  {showAll ? "KEMBALI" : "LIHAT SEMUA PESAN"}
                </motion.button>
              </motion.div>
            </div>
          </div>

          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
              <div className="bg-[#F7F8F2] rounded-2xl p-6 w-[340px] text-center shadow-xl border border-[#E4E7D6]">
                <h3 className="text-[22px] font-arno font-semibold text-[#454F23] mb-3 tracking-wide">
                  Pesan Terkirim !
                </h3>
                <div className="w-10 h-[2px] bg-[#454F23] mx-auto mb-4 opacity-60"></div>
                <p className="text-[16px] text-[#6C7852] font-arno leading-relaxed mb-6">
                  Terima kasih atas doa dan ucapan baik Anda. Kami sangat
                  menghargai pesan yang telah anda diberikan.
                </p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-[#454F23] hover:bg-[#5A6530] transition-all text-white px-6 py-2 rounded-full text-[14px] tracking-wide font-arno"
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