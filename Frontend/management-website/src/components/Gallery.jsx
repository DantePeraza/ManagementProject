import { Carousel } from "./ui/Carousel";

const slides = [
  { image: "/images/apartment1.jpg", title: "Apartment 1" },
  { image: "/images/apartment2.jpg", title: "Apartment 2" },
  { image: "/images/community1.jpg", title: "Community 1" },
  { image: "/images/community2.jpg", title: "Community 2" },
];

export default function Gallery() {
  return (
    <div>
      {}
      <div
        className="overflow-hidden flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl font-bold mb-6">Gallery</h2>
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
