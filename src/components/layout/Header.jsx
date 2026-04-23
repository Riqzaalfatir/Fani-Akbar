"use client"

import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const [open, setOpen] = useState(false)

  const linkMenu = [
    { name: "PROFIL", link: "#hero" },
    { name: "TANGGAL DAN LOKASI", link: "#tanggal" },
    { name: "RSVP", link: "#rsvp" },
    { name: "GALLERI", link: "#galleri" },
  ]

  const container = {
    hidden: {
      transition: {
        staggerChildren: 0.08,
        staggerDirection: -1
      }
    },
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10, skewX: -10 },
    show: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
<div 
  className="fixed top-0 left-0 w-full z-50 px-[4vw] py-[3vw] lg:px-[1.2vw] lg:py-[1vw]"
  style={{ willChange: "transform", transform: "translateZ(0)" }}
>
      {/* HAMBURGER */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="text-[#C3C3C3] text-[7vw] lg:text-[1.9vw]"
        >
          <FiMenu />
        </motion.button>
      )}

      {/* DROPDOWN */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3 }
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{ originX: 0, originY: 0 }}
            
className="absolute top-[4vw] left-[4vw] lg:top-[2vw] lg:left-[2.5vw] bg-[#7B7B7B]/70 py-[4vw] px-[5vw] lg:py-[1.5vw] lg:px-[1.8vw] text-white w-[65.4vw] lg:w-[29.4vw]"
          >

            {/* CLOSE */}
            <motion.button
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-[-3vw] left-[2vw] lg:top-[-1vw] lg:left-[0.2vw]"
            >
              <p className="font-light text-[10vw] lg:text-[3.5vw] text-white font-ibm">
                ×
              </p>
            </motion.button>

            {/* MENU */}
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
className="pt-[6vw] lg:pt-[2vw] pl-[4vw] lg:pl-[1vw] space-y-[1.5vw] lg:space-y-[0.8vw] text-[3.08vw] font-noto lg:text-[1.10vw] tracking-[0.2em] text-white ont-medium flex flex-col"
            >
              {linkMenu.map((menu) => (
                <motion.a
                  key={menu.name}
                  href={menu.link}
                  variants={itemVariants}
                  onClick={() => {
                    setTimeout(() => setOpen(false), 200)
                  }}
                  className="group relative flex items-center cursor-pointer"
                >
                  {/* PANAH */}
                  <span className="absolute left-0 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100">
                    →
                  </span>

                  {/* TEXT */}
                  <span className="transition-all duration-300 ease-out group-hover:translate-x-[4.5vw] lg:group-hover:translate-x-[1.5vw]">
                    {menu.name}
                  </span>
                </motion.a>
              ))}
            </motion.ul>

            {/* FOOTER TEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
className="pt-[8vw] lg:pt-[2.5vw] pl-[4vw] lg:pl-[1vw] text-[2.05vw] lg:text-[0.97vw] font-sans font-light pb-[2vw] lg:pb-[1vw]"
            >
              Select a section above to continue
            </motion.p>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Header