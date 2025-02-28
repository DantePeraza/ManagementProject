"use client"
import Navbar from "@/components/Navbar";
import RentalCard from "@/components/RentalCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.5,
    },
  }),
};

export default function Rentals() {
  return (
    <>
      <Navbar />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="Card flex items-center flex-col"
      >
        <div className="container-none flex justify-evenly flex-wrap">
          {[...Array(4)].map((_, i) => (
            <motion.div key={i} variants={cardVariants} custom={i}>
              <RentalCard />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
