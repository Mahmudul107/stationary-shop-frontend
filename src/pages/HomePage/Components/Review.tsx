import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alice Johnson",
    review:
      "Absolutely love the Botanical Series Notebook! The quality of the paper is perfect for ink pens and the floral cover is just gorgeous. It’s become my go-to journal.",
    rating: 5,
    product: "Botanical Series Notebook",
    customerType: "Creative Writer",
    img: "https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mark Thompson",
    review:
      "The Executive Gel Pen Set was a gift for a colleague, and it arrived beautifully packaged. Delivery was quick and customer service was super responsive!",
    rating: 4,
    product: "Executive Gel Pen Set",
    customerType: "Corporate Gifting",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sophie Williams",
    review:
      "I'm obsessed with the pastel highlighters and sticky notes bundle. It’s perfect for my study sessions, and they brighten up my notes so well!",
    rating: 5,
    product: "Study Essentials Bundle",
    customerType: "University Student",
    img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function EcommerceSections() {
  return (
    <div className="bg-[#f9f7f3] dark:bg-gray-900 my-28">
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-green-900">
            What Our Customers Say
          </h2>
          <p className="text-gray-700 mt-4 max-w-xl mx-auto">
            From students to artists, our stationery is loved across the board.
            Here’s what some of our amazing customers have shared.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 shadow-md bg-white dark:bg-gray-800 rounded-2xl"
            >
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <Avatar>
                    <AvatarImage src={testimonial.img} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-green-700" />
                  ))}
                </div>

                <p className="text-sm text-gray-600 italic">
                  "{testimonial.review}"
                </p>

                <div className="text-sm text-gray-800 font-medium text-center">
                  <p className="text-green-900">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.customerType}</p>
                  <p className="text-gray-400">
                    Purchased: {testimonial.product}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
