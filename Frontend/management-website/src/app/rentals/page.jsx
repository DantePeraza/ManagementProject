"use client"

import RentalCard from "@/components/RentalCard";
import { motion } from "framer-motion";
import{ useState, useEffect } from "react";

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
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/rentals');
        const rentals_data = await response.json();
        setRentals(rentals_data || []); 
        console.log(rentals_data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="Card flex flex-center flex-col"
      >
        <div className="container-none flex justify-evenly flex-wrap">
          {rentals.map((rental, i) => (
            <motion.div key={rental.ApartmentID } variants={cardVariants} custom={i}>
              <RentalCard rental={rental} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
