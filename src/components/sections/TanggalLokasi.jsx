import React from "react";
import Image from "next/image";

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
        <div className="absolute bottom-0 left-[2.5vw] lg:left-[0vw] w-[50vw] z-10 scale-x-110 lg:w-[26.5vw]">
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
            top-[50%]
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
            top-[79%]
            left-[4%]
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
          <Image
            src="/images/tanggal/Bismillah.png"
            alt="ornament"
            width={213}
            height={44}
            className="w-[55vw] h-auto lg:w-[20vw]"
          />

          <h2 className="font-arno font-semibold text-[3vw] lg:text-[1.190vw] text-[#75796A] mt-[7vw] leading-relaxed lg:mt-[3.5vw]">
            Assalamu'alaikum Warahmatullahi Wabarakatuh <br />
            <span className="block mt-[4vw] lg:mt-[1.3vw]">
              Dengan memohon rahmat dan ridha Allah SWT, <br />
              kami turut mengundang Bapak/Ibu/Saudara/i
              <br />
              untuk menghadiri resepsi pernikahan
              <br />
              putra-putri kami tercinta
            </span>
          </h2>

          <h1 className="font-zapfino text-[4.6vw] text-[#CFAA67] mt-[14vw] lg:text-[2.116vw] lg:mt-[5.5vw]">
            dr. Herfani Hemacindy Dewi
          </h1>

          <p className="font-arno font-bold text-[3vw] text-[#75796A] mt-[0vw] lg:text-[1.190vw] lg:mt-[0.2vw]">
            Putra dari
          </p>

          <h2 className="font-arno font-semibold text-[3vw] text-[#75796A] mt-[4vw] leading-relaxed lg:text-[1.190vw] lg:mt-[1vw]">
            Bpk. Mayjen TNI dr. Hadi Juanda, Sp.PD., M.A.R.S., CFrA.
            <br />
            Ibu dr. Heka Mayasari, Sp.A.
          </h2>

          <h1 className="font-corsiva text-[12vw] text-[#CFAA67] mt-[4vw] lg:text-[3.174vw] lg:mt-[0.8vw]">
            &
          </h1>

          <h1 className="font-zapfino text-[4.61vw] text-[#CFAA67] mt-[15vw] lg:text-[2.116vw] lg:mt-[5vw]">
            Lettu Ckm dr. Akbar Nugraha
          </h1>

          <p className="font-arno font-bold text-[3vw] text-[#75796A] mt-[3vw] lg:text-[1.2vw] lg:mt-[1vw]">
            Putra dari
          </p>

          <p className="font-arno font-semibold text-[3vw] text-[#75796A] mt-[3vw] leading-relaxed lg:text-[1.2vw] lg:mt-[0.8vw]">
            Bpk. Ir. Hendra Iskaq, M.B.A.
            <br />
            Ibu Dra. Theresya, M.M.
          </p>

          <p className="font-arno font-semibold text-[3vw] text-[#75796A] mt-[9vw] leading-relaxed lg:text-[1.2vw] lg:mt-[3vw]">
            Sukacita kami akan lengkap
            <br />
            dengan kehadiran dan doa restu Anda
            <br />
            pada hari perayaan kami.
          </p>
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
        <Image
          src="/images/tanggal/Merak.webp"
          alt="Bunga kiri"
          width={0}
          height={0}
          sizes="100vw"
          className="
    absolute
    bottom-[-0vw]
    right-[0vw]
    w-[29vw]
    h-auto
    z-10
    lg:w-[16vw]
  "
        />
      </div>
    </div>
  );
};

export default TanggalLokasi;
