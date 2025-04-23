import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

const offers = [
  {
    title: "Spring Sale is Here!",
    description: "Get up to 40% off on select stationery items this season.",
    image:
      "https://images.unsplash.com/photo-1568871391149-449702439177?q=80&w=2116&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Fresh Designs Just Launched!",
    description: "Check out our new collection of planners, pens, and accessories.",
    image:
      "https://images.unsplash.com/photo-1518082049942-62a4e31b18d3?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Buy More, Save More!",
    description: "Enjoy a free gift when you purchase over $50 in writing supplies.",
    image:
      "https://images.unsplash.com/photo-1654931800100-2ecf6eee7c64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % offers.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + offers.length) % offers.length);

  return (
    <div className="relative w-full max-w-6xl h-[70vh] mx-auto mt-10 overflow-hidden rounded-3xl shadow-2xl">
      <div className="relative w-full h-full">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={clsx(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              {
                "opacity-100 z-10 pointer-events-auto": current === index,
                "opacity-0 z-0 pointer-events-none": current !== index,
              }
            )}
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-lg shadow-lg">
              <h2 className="text-4xl font-bold text-white mb-2">{offer.title}</h2>
              <p className="text-lg text-white">{offer.description}</p>
              <Button className="mt-4 bg-[#2F5233] text-white hover:bg-[#A8BBA5]">
                Shop Now
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls - moved outside overlapping layer */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white/40 hover:bg-white/70 text-black p-2 rounded-full z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/40 hover:bg-white/70 text-black p-2 rounded-full z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {offers.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={clsx(
              "w-3 h-3 rounded-full cursor-pointer transition-all duration-300",
              {
                "bg-white": current === index,
                "bg-white/50": current !== index,
              }
            )}
          />
        ))}
      </div>
    </div>
  );
}
