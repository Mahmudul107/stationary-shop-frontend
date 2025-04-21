import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const offers = [
  {
    title: "Spring Sale is Here!",
    description: "Get up to 40% off on select stationery items this season.",
    image: 'https://images.unsplash.com/photo-1568871391149-449702439177?q=80&w=2116&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Fresh Designs Just Launched!",
    description:
      "Check out our new collection of planners, pens, and accessories.",
    image: 'https://images.unsplash.com/photo-1518082049942-62a4e31b18d3?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Buy More, Save More!",
    description: "Enjoy a free gift when you purchase over $50 in writing supplies.",
    image: 'https://images.unsplash.com/photo-1654931800100-2ecf6eee7c64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % offers.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + offers.length) % offers.length);

  return (
    <div className="relative w-3/4 h-[60vh] mx-auto mt-8 overflow-hidden rounded-lg shadow-lg bg-[#F5F1EA]"> 
      <div className="relative h-full flex items-center justify-center">
        <img
          src={offers[current].image}
          alt={offers[current].title}
          className="absolute inset-0 w-full h-full object-cover brightness-10"
        />
        <div className="relative z-10 text-center p-6">
          <h2 className="text-4xl font-bold text-white drop-shadow-xl">
            {offers[current].title}
          </h2>
          <p className="text-xl text-white drop-shadow-lg mt-2">
            {offers[current].description}
          </p>
          <Button className="mt-4 bg-[#2F5233] text-white hover:bg-[#A8BBA5]"> 
            Shop Now
          </Button>
        </div>
      </div>
      {/* Navigation Controls */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-white/50 rounded-full hover:bg-[#A8BBA5]"
        onClick={prevSlide}>
        <ChevronLeft className="w-6 h-6 text-[#333333]" /> 
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-white/50 rounded-full hover:bg-[#A8BBA5]" 
        onClick={nextSlide}>
        <ChevronRight className="w-6 h-6 text-[#333333]" /> 
      </button>
    </div>
  );
}
