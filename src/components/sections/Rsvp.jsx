"use client"

import React, { useState } from 'react'
import Image from "next/image"
import NotifModal from "@/components/popup/NotifModal"

const WA_NUMBER = "6281234567890" // ← ganti nomor WA tim kamu

const Rsvp = () => {
  const [selected, setSelected] = useState(null)   // 'hadir' | 'tidak_hadir' | null
  const [notif, setNotif] = useState(null)          // tipe notif yang aktif

  // ── Logika konfirmasi ──────────────────────────────────────
  const handleKonfirmasi = () => {
    // 1. Belum pilih hadir/tidak hadir
    if (!selected) {
      setNotif("incomplete_rsvp")
      return
    }

    // 2. Tampilkan dialog konfirmasi sebelum submit
    setNotif("confirm_rsvp")
  }

  // Dipanggil setelah user klik "Confirm" di dialog confirm_rsvp
  const handleConfirmed = async () => {
    try {
      // TODO: ganti dengan API call kamu
      // const res = await fetch("/api/rsvp", { method: "POST", body: ... })
      // const data = await res.json()

      // Simulasi: langsung ke confirmed
      if (selected === 'hadir') {
        setNotif("rsvp_confirmed_hadir")
      } else {
        setNotif("rsvp_confirmed_tidak_hadir")
      }

      // Contoh kondisi lain yang bisa kamu pakai:
      // if (data.status === "closed")       setNotif("rsvp_closed")
      // if (data.status === "full")         setNotif("rsvp_unavailable")
      // if (data.status === "private")      setNotif("private_link")
      // if (data.status === "no_session")   setNotif("session_required")

    } catch (err) {
      console.error(err)
    }
  }

  // ── Label tombol konfirmasi dinamis ───────────────────────
  const konfirmasiLabel = selected === 'hadir'
    ? "KONFIRMASI HADIR"
    : selected === 'tidak_hadir'
    ? "KONFIRMASI TIDAK HADIR"
    : "KONFIRMASI"

  // ── Render ─────────────────────────────────────────────────
  return (
    <div className="relative w-full overflow-hidden aspect-[390/720] lg:aspect-[1512/945] bg-[#6C7852]">

      <Image
        src="/images/doa/layer.png"
        alt="Background"
        fill
        className="object-cover object-[50%_30%]"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-[98vw] lg:w-[40vw]">

          <Image
            src="/images/rsvp/Frame.webp"
            alt="Frame"
            width={1200}
            height={700}
            className="w-full h-auto scale-y-[1.14] origin-center drop-shadow-[2px_4px_17px_rgba(0,0,0,0.45)]"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-[12vw] lg:px-[4vw] gap-0 mt-[13vw] leading-none">

            <h2 className="font-corsiva font-bold text-[6.15vw] lg:text-[2vw] text-[#75796A]">
              RSVP
            </h2>

            <h3 className="font-arno font-semibold text-[3.08vw] lg:text-[1.1vw] text-[#75796A] mt-[12.56vw] lg:mt-[3vw]">
              Yth. Bapak/Ibu/Saudara/i
            </h3>

            <h3 className="font-arno font-bold text-[3.08vw] lg:text-[1.1vw] text-[#75796A] mt-[7.69vw] lg:mt-[2vw]">
              .............
            </h3>

            <h3 className="font-arno font-semibold text-[3.08vw] leading-[1.5] text-[#75796A] mt-[8.97vw] lg:mt-[2vw]">
              Mohon konfirmasi kehadiran sebelum<br />
              <span className="font-bold">5 Mei 2026</span>
            </h3>

            {/* Tombol HADIR & TIDAK HADIR */}
            <div className="flex flex-row gap-[3.85vw] lg:gap-[1.5vw] mt-[9vw] lg:mt-[2vw]">
              <button
                onClick={() => setSelected('hadir')}
                className={`rounded-full text-[3.08vw] lg:text-[1.1vw] font-semibold font-arno tracking-widest transition-all duration-200 w-[26.92vw] lg:w-[9vw] h-[8.46vw] lg:h-[3vw]
                  ${selected === 'hadir'
                    ? 'bg-[#721623] text-[#FEFBF0] border-2 border-[#721623]'
                    : 'bg-[#721623] text-white border-2 border-[#721623] hover:opacity-90'
                  }`}
              >
                HADIR
              </button>

              <button
                onClick={() => setSelected('tidak_hadir')}
                className={`rounded-full text-[3.08vw] lg:text-[1.1vw] font-bold font-arno tracking-widest transition-all duration-200 w-[26.92vw] lg:w-[9vw] h-[8.46vw] lg:h-[3vw]
                  ${selected === 'tidak_hadir'
                    ? 'text-[#721623] border-[0.5px] border-[#721623] bg-[#fdf0f2]'
                    : 'bg-transparent text-[#721623] border-[0.5px] border-[#721623] hover:bg-[#721623] hover:text-white'
                  }`}
              >
                TIDAK HADIR
              </button>
            </div>

            <p className="font-arno text-[2.82vw] lg:text-[1vw] text-[#75796A] mt-[11.5vw] lg:mt-[2vw]">
              Apakah Anda yakin dengan pilihan ini?
            </p>

            {/* Tombol Konfirmasi */}
            <button
              onClick={handleKonfirmasi}
              className="rounded-full bg-[#721623] text-white font-arno text-[2.82vw] lg:text-[1vw] font-bold tracking-widest mt-[10.26vw] lg:mt-[2vw] w-[58.72vw] lg:w-[16vw] h-[8.46vw] lg:h-[3vw] hover:opacity-90 transition-all duration-200"
            >
              {konfirmasiLabel}
            </button>

            <p className="text-[2.82vw] lg:text-[1vw] text-[#75796A] font-arno mt-[8vw] lg:mt-[2vw] leading-[1.5]">
              Jika mengalami kendala dalam konfirmasi kehadiran,<br />
              silakan hubungi tim bantuan kami.
            </p>

            {/* Tombol WA */}
            <button
              onClick={() => window.open(`https://wa.me/${WA_NUMBER}`, "_blank")}
              className="flex font-arno items-center justify-center gap-[8px] tracking-wide rounded-full bg-[#12877B] text-white text-[2.82vw] lg:text-[1vw] font-semibold mt-[3vw] lg:mt-[1vw] w-[41vw] lg:w-[12vw] h-[8.46vw] lg:h-[3vw] hover:bg-[#0f6e63] transition-all duration-200"
            >
              <Image
                src="/images/rsvp/LogoWa.svg"
                alt="WhatsApp"
                width={20}
                height={20}
                className="w-[4vw] h-[4vw] lg:w-[1.2vw] lg:h-[1.2vw] object-contain"
              />
              Kirim Pesan Bantuan
            </button>

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
  )
}

export default Rsvp