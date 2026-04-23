"use client";
import { motion } from "framer-motion";

const config = {
  fadein: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  fadeup: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
  fadelift: {
    initial: { opacity: 0, y: 50, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
  },
  fadeleft: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
  faderight: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
};

const Animate = ({
  children,
  type = "fadeup",
  delay = 0,
  duration = 0.9,
  once = true,
  className = "",
}) => {
  const { initial, animate } = config[type] ?? config.fadeup;

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 18,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
