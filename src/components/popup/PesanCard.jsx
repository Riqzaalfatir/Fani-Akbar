"use client";

import { motion } from "framer-motion";

const WishesCard = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div
      onClick={onClose}
      className="fixed flex-col inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 px-4"
    >

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#F7F8F2]/20 rounded-2xl p-6 w-[320px] md:w-[380px] h-[280px] md:h-[380px] text-center shadow-2xl border border-white/20 mb-5"
      >
        <h3 className="text-[25px] font-arno md:text-[30px] text-white font-semibold tracking-wide leading-snug font-sweetsans">
          {data.nama}
        </h3>

        <div className="w-18 h-[1px] text-white bg-white mx-auto my-4 opacity-50 mb-5"></div>

        <p className="text-[13px] font-arno font-semibold md:text-[17px] font-sweetsans leading-relaxed mb-6 text-white line-clamp-6 md:line-clamp-6">
          {data.pesan}
        </p>
      </motion.div>

      {/* BUTTON KEMBALI */}
      <button
        onClick={onClose}
        className="w-[320px] font-arno md:w-[380px] bg-[#5A6644] font-sweetsans font-semibold text-white py-2 rounded-md text-[13px] tracking-widest hover:opacity-90 transition"
      >
        BACK
      </button>
    </div>
  );
};

export default WishesCard;
