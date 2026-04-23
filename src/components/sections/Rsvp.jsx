"use client";

import React, { useState } from "react";
import Image from "next/image";
import NotifModal from "@/components/popup/NotifModal";
import Animate from "@/components/ui/Animate";

const WA_NUMBER = "6281234567890";

const Rsvp = () => {
  const [selected, setSelected] = useState(null);
  const [notif, setNotif] = useState(null);

  const handleKonfirmasi = () => {
    if (!selected) {
      setNotif("incomplete_rsvp");
      return;
    }
    setNotif("confirm_rsvp");
  };

  const handleConfirmed = async () => {
    try {
      if (selected === "hadir") {
        setNotif("rsvp_confirmed_hadir");
      } else {
        setNotif("rsvp_confirmed_tidak_hadir");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const konfirmasiLabel =
    selected === "hadir"
      ? "KONFIRMASI HADIR"
      : selected === "tidak_hadir"
        ? "KONFIRMASI TIDAK HADIR"
        : "KONFIRMASI";

  return (
    <div id="rsvp" className="relative w-full overflow-hidden bg-[#6C7852]">
      {/* ── WRAPPER: mobile=stack, desktop=2 kolom ── */}
      <div className="flex flex-col lg:grid lg:grid-cols-2">
        {/* ── KOLOM KIRI: FOTO (mobile: atas, desktop: kiri) ── */}
        <div className="relative w-full aspect-[390/720] lg:aspect-[756/945] hidden lg:block">
          <img
            src="/images/rsvp/FotoCouple.webp"
            alt="Foto Couple"
            className="absolute inset-0 w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* ── KOLOM KANAN: KONTEN RSVP (mobile: bawah, desktop: kanan) ── */}
        <div className="relative w-full overflow-hidden aspect-[390/720] lg:aspect-[756/945] bg-[#6C7852]">
          {/* <Image
            src="/images/doa/layer.png"
            alt="Background"
            fill
            className="object-cover object-[50%_30%] lg:hidden"
            priority
          />

          <div
            className="absolute inset-0 w-full h-full hidden lg:block"
            style={{
              backgroundImage: "url('/images/doa/layer.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
            }}
          /> */}

          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: "url('/images/doa/layer.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "300px 500px",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative w-[98vw] lg:w-[40vw]">
              <Image
                src="/images/rsvp/Frame.webp"
                alt="Frame"
                width={1200}
                height={700}
                className="w-full h-auto scale-y-[1.14] lg:scale-y-[0.9] origin-center drop-shadow-[2px_4px_17px_rgba(0,0,0,0.45)]"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-[12vw] lg:px-[4vw] gap-0 mt-[13vw] lg:mt-[9.5vw] leading-none">
                <Animate type="fadeup">
                  <h2 className="font-corsiva font-bold text-[6.15vw] lg:text-[3.175vw] text-[#75796A]">
                    RSVP
                  </h2>
                </Animate>

                <Animate type="fadeup">
                  <h3 className="font-arno font-semibold text-[3.08vw] lg:text-[1.190vw] text-[#75796A] mt-[12.56vw] lg:mt-[4vw]">
                    Yth. Bapak/Ibu/Saudara/i
                  </h3>
                </Animate>

                <Animate type="fadeup">
                  <h3 className="font-arno font-bold text-[3.08vw] lg:text-[1.190vw] text-[#75796A] mt-[7.69vw] lg:mt-[3vw]">
                    Sela
                  </h3>
                </Animate>

                <Animate type="fadeup">
                  <h3 className="font-arno font-semibold text-[3.08vw] lg:text-[1.190vw] leading-[1.5] text-[#75796A] mt-[8.97vw] lg:mt-[2.5vw]">
                    Mohon konfirmasi kehadiran sebelum
                    <br />
                    <span className="font-bold font-arnoCaption">
                      5 Mei 2026
                    </span>
                  </h3>
                </Animate>

                {/* Tombol HADIR & TIDAK HADIR */}
                <div className="flex flex-row gap-[3.85vw] lg:gap-[1.5vw] mt-[9vw] lg:mt-[2.5vw]">

                  <Animate type="fadeleft">
                  <button
                    onClick={() => setSelected("hadir")}
                    className={`rounded-full text-[3.08vw] lg:text-[1.190vw] font-semibold font-arno transition-all duration-200 w-[26.92vw] lg:w-[11.376vw] h-[8.46vw] lg:h-[2.646vw] flex items-center justify-center pt-[0.3vw] lg:pt-[0.15vw]
    ${
      selected === "hadir"
        ? "bg-[#721623] text-white border-2 border-[#721623]"
        : "bg-transparent text-[#721623] border-[0.5px] border-[#721623] hover:bg-[#721623] hover:text-white"
    }`}
                  >
                    HADIR
                  </button>
                  </Animate>

                  {/* Tombol TIDAK HADIR */}
                  <Animate type="faderight">
                  <button
                    onClick={() => setSelected("tidak_hadir")}
                    className={`rounded-full text-[3.08vw] lg:text-[1.190vw] font-bold font-arno transition-all duration-200 w-[26.92vw] lg:w-[11.376vw] h-[8.46vw] lg:h-[2.646vw] flex items-center justify-center pt-[0.3vw] lg:pt-[0.15vw]
    ${
      selected === "tidak_hadir"
        ? "bg-[#721623] text-white border-2 border-[#721623]"
        : "bg-transparent text-[#721623] border-[0.5px] border-[#721623] hover:bg-[#721623] hover:text-white"
    }`}
                  >
                    TIDAK HADIR
                  </button>
                  </Animate>
                </div>

                <Animate type="fadeup">
                <p className="font-arno text-[2.82vw] lg:text-[1.190vw] text-[#75796A] mt-[11.5vw] lg:mt-[2.5vw] font-semibold">
                  Apakah Anda yakin dengan pilihan ini?
                </p>
                </Animate>

                {/* Tombol Konfirmasi */}
                <Animate type="fadeup">
                <button
                  onClick={handleKonfirmasi}
                  className="rounded-full bg-[#721623] text-white font-arno text-[2.82vw] lg:text-[1.190vw] font-bold tracking-widest mt-[10.26vw] lg:mt-[2.5vw] w-[58.72vw] lg:w-[24.338vw] h-[8.46vw] lg:h-[2.646vw] hover:opacity-90 transition-all duration-200 flex items-center justify-center pt-[0.3vw] lg:pt-[0.15vw]"
                >
                  {konfirmasiLabel}
                </button>
                </Animate>

                <Animate type="fadeup">
                <p className="text-[2.82vw] lg:text-[1.190vw] text-[#75796A] font-arno mt-[8vw] lg:mt-[3vw] leading-[1.5] font-semibold">
                  Jika mengalami kendala dalam konfirmasi kehadiran,
                  <br />
                  silakan hubungi tim bantuan kami.
                </p>
                </Animate>

                {/* Tombol WA */}
                {/* Tombol WA */}
                <Animate type="fadeup">
                <button
                  onClick={() =>
                    window.open(`https://wa.me/${WA_NUMBER}`, "_blank")
                  }
                  className="flex font-arno items-center justify-center gap-[6px] tracking-wide rounded-full bg-[#12877B] text-white text-[2.82vw] lg:text-[1.190vw] font-semibold mt-[4vw] lg:mt-[2vw] w-[41vw] lg:w-[14.021vw] h-[8.46vw] lg:h-[2.646vw] hover:bg-[#0f6e63] transition-all duration-200 pt-[0.3vw] lg:pt-[0.15vw]"
                >
                  <Image
                    src="/images/rsvp/LogoWa.svg"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="w-[3vw] h-[3vw] lg:w-[1vw] lg:h-[1vw] object-contain mt-[-1vw] lg:mt-[-0.4vw]"
                  />
                  Kirim Pesan Bantuan
                </button>
                </Animate>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── NOTIF MODAL ── */}
      {notif && (
        <NotifModal
          type={notif}
          onClose={() => setNotif(null)}
          onConfirm={handleConfirmed}
          waNumber={WA_NUMBER}
        />
      )}
    </div>
  );
};

export default Rsvp;
