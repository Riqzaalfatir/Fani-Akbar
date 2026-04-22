import Hero from "@/components/sections/Hero"
import TanggalLokasi from "@/components/sections/TanggalLokasi"
import Doa from "@/components/sections/Doa"
import Waktu from "@/components/sections/Waktu"
import Rsvp from "@/components/sections/Rsvp"
import DoaDanUcapan from "@/components/sections/DoaDanUcapan"
import Terimakasih from "@/components/sections/Terimakasih"
import Header from "@/components/layout/Header"
import Opening from "@/components/popup/Opening"
import Gallery from "@/components/sections/Gallery"


const page = () => {
  return (
    <>
      {/* <Opening/> */}
      <Header/>
       <Hero/>
       <TanggalLokasi/>
       <Doa/>
       <Waktu/>
       <Rsvp/>
       <Gallery/>
       <DoaDanUcapan/>
       <Terimakasih/>
    </>
  )
}

export default page