import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Animate from "@/components/ui/Animate";


const TanggalLokasi = () => {
  return (
    <div id="tanggal">
      <div className="relative w-full overflow-hidden">
        {/* Background */}
        {/* MOBILE BG */}
        <img
          src="/images/tanggal/Gunung..webp"
          alt="Background"
          className="absolute inset-0 w-full h-full lg:hidden"
          style={{ objectFit: "fill" }}
        />

        {/* DESKTOP BG */}
        <img
          src="/images/tanggal/BgGunung.webp"
          alt="Background"
          className="absolute inset-0 w-full h-full hidden lg:block"
          style={{ objectFit: "fill" }}
        />

        {/* Ornamen Pohon Kanan Atas */}
        <Image
          src="/images/tanggal/PohonPutusKanan.webp"
          alt="Ornament"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-0 right-0 w-[120vw] h-auto z-10 lg:w-[10vw] lg:hidden"
        />

        <Image
          src="/images/tanggal/PohonKanan.webp"
          alt="Ornament"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-0 right-0 w-[120vw] h-auto z-10 lg:w-[48vw] hidden lg:block"
        />

        {/* Ornamen Pohon Kanan Bawah */}
        <Image
          src="/images/tanggal/PohonKananBawah.webp"
          alt="Ornament"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute bottom-0 left-[0vw] w-[110vw] h-auto z-10 lg:w-[40vw]"
        />

        {/* Ornamen Pohon Kiri */}
        <div className="absolute bottom-0 left-[2.5vw] lg:left-[0vw] w-[52vw] z-10 scale-x-110 lg:w-[26.5vw]">
          <Image
            src="/images/tanggal/PohonKiri.webp"
            alt="Ornament"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Kupu-kupu */}
        <Image
          src="/images/hero/KupuKiriEmas.gif"
          alt="Kupu kiri atas"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-[2vw] right-0 w-[25vw] h-auto z-20 lg:w-[8vw] lg:top-[14vw] lg:right-[10vw]"
        />

        <Image
          src="/images/hero/KupuKananAtas.gif"
          alt="Kupu kanan tengah"
          width={0}
          height={0}
          sizes="100vw"
          className="
            absolute
            top-[48%]
            left-[12%]
            lg:top-[43%]
            lg:left-[8%]
            w-[13%]
            lg:w-[8%]
            h-auto
            z-20
          "
        />

        <Image
          src="/images/hero/KupuKecil.gif"
          alt="Kupu kanan tengah"
          width={0}
          height={0}
          sizes="100vw"
          className="
            absolute
            top-[81%]
            left-[2%]
            lg:top-[85.5%]
            lg:left-[25.5%]
            w-[13%]
            lg:w-[5%]
            h-auto
            z-20
          "
        />

        {/* CONTENT - flow normal, bukan absolute */}
        <div className="relative z-20 flex flex-col items-center w-full px-[5vw] pt-[26.41vw] pb-[44.87vw] text-center lg:pt-[7.606vw] lg:pb-[7.606vw]">

          <Animate>
          <Image
            src="/images/tanggal/Bismillah.png"
            alt="ornament"
            width={213}
            height={44}
            className="w-[55vw] h-auto lg:w-[20vw]"
          />
          </Animate>

          <Animate type="fadeup">
          <h2 className="font-arno font-semibold text-[3vw] lg:text-[1.190vw] text-[#75796A] mt-[7vw] leading-relaxed lg:mt-[3vw]">
            Assalamu'alaikum Warahmatullahi Wabarakatuh <br />
            <span className="block mt-[3vw] lg:mt-[1.3vw]">
              Dengan memohon rahmat dan ridha Allah SWT, <br />
              kami turut mengundang Bapak/Ibu/Saudara/i
              <br />
              untuk menghadiri resepsi pernikahan
              <br />
              putra-putri kami tercinta
            </span>
          </h2>
          </Animate>

          <Animate type="fadeup" delay={0.2}>
          <h1 className="font-zapfino text-[4.6vw] text-[#CFAA67] mt-[14vw] lg:text-[2.116vw] lg:mt-[6vw]">
            dr. Herfani Hemacindy Dewi
          </h1>
          </Animate>

          <Animate type="fadeup" delay={0.3}>
          <p className="font-arnoCaption font-bold text-[3vw] text-[#75796A] mt-[4vw] lg:text-[1.190vw] lg:mt-[1vw]">
            Putri dari
          </p>
          </Animate>

            <Animate type="fadeup" delay={0.4}>
          <h2 className="font-arno font-semibold text-[3vw] text-[#75796A] mt-[5vw] leading-relaxed lg:text-[1.190vw] lg:mt-[1.5vw]">
            Bpk. Mayjen TNI dr. Hadi Juanda, Sp.PD., M.A.R.S., CFrA.
            <br />
            Ibu dr. Heka Mayasari, Sp.A.
          </h2>
                    </Animate>

          <Animate type="fadeup" delay={0.5}>
          <h1 className="font-corsiva text-[12vw] text-[#CFAA67] mt-[4vw] lg:text-[3.174vw] lg:mt-[1.3vw]">
            &
          </h1>
          </Animate>

          <Animate type="fadeup" delay={0.6}>
          <h1 className="font-zapfino text-[4.61vw] text-[#CFAA67] mt-[10vw] lg:text-[2.116vw] lg:mt-[5.5vw]">
            Lettu Ckm dr. Akbar Nugraha
          </h1>
          </Animate>

          <Animate type="fadeup" delay={0.7}>
          <p className="font-arnoCaption font-bold text-[3vw] text-[#75796A] mt-[4vw] lg:text-[1.2vw] lg:mt-[1.5vw]">
            Putra dari
          </p>
          </Animate>

          <Animate type="fadeup" delay={0.8}>
          <p className="font-arno font-semibold text-[3vw] text-[#75796A] mt-[5vw] leading-relaxed lg:text-[1.2vw] lg:mt-[1vw]">
            Bpk. Ir. Hendra Iskaq, M.B.A.
            <br />
            Ibu Dra. Theresya, M.M.
          </p>
          </Animate>

          <Animate type="fadeup" delay={0.9}>
          <p className="font-arno font-semibold text-[3vw] text-[#75796A] mt-[9vw] leading-relaxed lg:text-[1.2vw] lg:mt-[3vw]">
            Sukacita kami akan lengkap
            <br />
            dengan kehadiran dan doa restu Anda
            <br />
            pada hari perayaan kami.
          </p>
                    </Animate>

        </div>

        {/* <Image
          src="/images/tanggal/BungaKecilPojokKiri.webp"
          alt="Bunga kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="
    absolute
    bottom-[0vw]
    left-[0vw]
    w-[25vw]
    h-auto
    z-10
    lg:w-[10vw]
  "
        /> */}
        <Image
          src="/images/tanggal/MawarKiri.webp"
          alt="Bunga kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="
    absolute
    bottom-[0vw]
    left-[-10vw]
    w-[30vw]
    h-auto
    z-10
    lg:w-[13vw]
    lg:left-0
  "
        />
        {/* <Image
          src="/images/tanggal/BungaKe2PojokKiri.webp"
          alt="Bunga kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="
    absolute
    bottom-[-6vw]
    left-[0vw]
    lg:left-[5vw]
    w-[33vw]
    h-auto
    z-30
    lg:w-[12vw]
  "
        /> */}
        <Image
          src="/images/tanggal/BungaKecilKiri.webp"
          alt="Bunga kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="
    absolute
    bottom-[-6vw]
    lg:bottom-[-3.5vw]
    left-[-6vw]
    lg:left-[1vw]
    w-[33vw]
    h-auto
    z-30
    lg:w-[14vw]
  "
        />
        <Image
          src="/images/tanggal/BungaKe3PojokKiri.webp"
          alt="Bunga kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="
    absolute
    bottom-[0vw]
    left-[3vw]
    lg:left-[10vw]
    w-[40vw]
    h-auto
    z-20
    lg:w-[12vw]
  "
        />

        <Image
          src="/images/tanggal/BungaKe3PojokKiri.webp"
          alt="Bunga kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="
    absolute
    bottom-[0vw]
    lg:bottom-[0vw]
    left-[27vw]
    lg:left-[19vw]
    w-[27vw]
    h-auto
    z-10
    lg:w-[13vw]
  "
        />
        <Image
          src="/images/tanggal/BungaKe4PojokKanan.webp"
          alt="Bunga kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="
    absolute
    bottom-[0vw]
    left-[45vw]
    lg:left-[84vw]
    w-[27vw]
    h-auto
    z-10
    lg:w-[10vw]
  "
        />
        <Image
          src="/images/tanggal/BungaKe5PojokKiri.webp"
          alt="Bunga kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="
    absolute
    bottom-[-0vw]
    left-[30vw]
    lg:left-[14vw]
    w-[20vw]
    h-auto
    z-30
    lg:w-[8vw]
  "
        />

        <Image
          src="/images/tanggal/BungaKe5PojokKiri.webp"
          alt="Bunga kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="
    absolute
    bottom-[-0vw]
    left-[54vw]
    lg:left-[88vw]
    w-[26vw]
    h-auto
    z-30 lg:z-40
    lg:w-[8vw] 
  "
        />
        <Image
          src="/images/tanggal/BungaKe5PojokKiri.webp"
          alt="Bunga kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="
    absolute
    bottom-[-0vw]
    left-[54vw]
    lg:left-[78vw]
    w-[26vw]
    h-auto
    z-30 lg:z-40
    lg:w-[8vw] hidden lg:block
  "
        />
        <Image
          src="/images/tanggal/BungaKe4PojokKanan.webp"
          alt="Bunga kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="
    absolute
    bottom-[-0vw]
    left-[80vw]
    w-[35vw]
    h-auto
    z-30
    lg:w-[14vw] hidden lg:block
  "
        />
        <Image
          src="/images/tanggal/BungaKe4PojokKanan.webp"
          alt="Bunga kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="
    absolute
    bottom-[-0vw]
    left-[90vw]
    w-[35vw]
    h-auto
    z-30
    lg:w-[8vw] hidden lg:block
  "
        />
        <Image
          src="/images/tanggal/BungaKe4PojokKanan.webp"
          alt="Bunga kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="
    absolute
    bottom-[2vw]
    left-[86vw]
    w-[35vw]
    h-auto
    z-30
    lg:w-[21vw] hidden lg:block
  "
        />
        <Image
          src="/images/tanggal/BungaKe4PojokKanan.webp"
          alt="Bunga kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="
    absolute
    bottom-[-0vw]
    left-[62vw]
    lg:left-[72vw]
    w-[35vw]
    h-auto
    z-30
    lg:w-[12vw] 
  "
        />
        <Image
          src="/images/tanggal/BungaKecilPojokKanan.webp"
          alt="Bunga kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="
    absolute
    bottom-[-0vw]
    right-[0vw]
    w-[10vw]
    h-auto
    z-20
    lg:w-[10vw] lg:hidden
  "
        />
        <motion.div
          className="absolute bottom-[0vw] right-[0vw] w-[29vw] h-auto z-10 lg:w-[16vw]"
          style={{ transformOrigin: "50% 100%" }}
          animate={{ rotate: [0, 0.8, 0, -0.8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        >
          <Image
            src="/images/tanggal/Merak.webp"
            alt="Bunga kiri"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TanggalLokasi;
