import Navbar from "@/components/Navbar"
import RentalCard from "@/components/RentalCard"

export default function Rentals(){
  return (
    <>
      <Navbar />
      <div className=" container-none flex justify-evenly flex-wrap">
        <RentalCard />
        <RentalCard />
        <RentalCard />
        <RentalCard />
      </div>
    </>
  )
}