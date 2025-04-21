import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alice Johnson",
    review:
      "Leaf and Line's notebooks are top-notch! The paper quality is amazing, and the designs are stunning.",
    rating: 5,
    img: '',
  },
  {
    name: "Mark Thompson",
    review:
      "Fast delivery and excellent customer service. Highly recommend this shop!",
    rating: 4,
    img: '',
  },
  {
    name: "Sophie Williams",
    review:
      "Great selection of pens! I've been using them for journaling, and they write so smoothly.",
    rating: 5,
    img: '',
  },
];


export default function EcommerceSections() {
  return (
    <div className="bg-[#f9f7f3] dark:bg-gray-900 my-28 "> 
      <section className="max-w-6xl mx-auto py-[-40px}">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-green-900 text-center"> 
            What Our Customers Say
          </h2>
          <p className="text-gray-700 mt-4 max-w-xl mx-auto text-center mb-20"> 
            We're proud of the relationships we build with our customers. Read
            their testimonials to see how we've helped them succeed.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 text-center shadow-md bg-white dark:bg-gray-800">
              <CardContent>
                <div className="flex justify-center mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.img} alt={testimonial.name} />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F5A9B8]" /> 
                  ))}
                </div>
                <p className="mb-2 text-[#333333]">"{testimonial.review}"</p>
                <h3 className="font-semibold text-[#333333]">- {testimonial.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
