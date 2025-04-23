import {
  NotebookPen,
  Users,
  Award,
  Clock,
  MapPin,
  PhoneCall,
  Mail,
  PenTool,
  Palette,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-12 bg-[#f9f7f3] text-[#2F5233]">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center space-y-4 mb-20">
        <h1 className="text-5xl font-extrabold uppercase">About Leaf & Line</h1>
        <p className="text-lg text-[#333]">
          Crafting inspiration, one page at a time. Your premier destination for
          high-quality stationery, tools, and creativity essentials.
        </p>
      </section>


      {/* Core Values */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <NotebookPen className="w-8 h-8 text-[#D8A7B1]" />,
              title: "Creativity & Expression",
              description:
                "Encouraging self-expression through quality writing and artistic tools.",
            },
            {
              icon: <Palette className="w-8 h-8 text-[#D8A7B1]" />,
              title: "Design & Quality",
              description:
                "Curating timeless, elegant, and functional stationery products.",
            },
            {
              icon: <Users className="w-8 h-8 text-[#D8A7B1]" />,
              title: "Community & Learning",
              description:
                "Fostering a creative community through workshops and resources.",
            },
          ].map((item, idx) => (
            <Card
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-md text-center border-none"
            >
              <CardContent className="space-y-4">
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#2F5233]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#555]">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

            {/* Mission */}
            <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1568871391149-449702439177?q=80&w=2116&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Stationery tools"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#2F5233]">Our Goals</h2>
          <p className="text-[#444]">
            At Inkwell, we believe in the power of putting pen to paper. Whether
            you're journaling, sketching, or organizing your thoughts, we
            provide the finest tools to bring your creativity to life.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm text-[#2F5233] font-medium">
            <div className="flex items-center gap-2">
              <PenTool className="w-5 h-5 text-[#D8A7B1]" />
              Premium Stationery
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#D8A7B1]" />
              20K+ Happy Customers
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#D8A7B1]" />
              Award-Winning Quality
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#D8A7B1]" />
              Since 1999
            </div>
          </div>
        </div>
        
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl text-center mx-auto bg-white rounded-2xl p-10 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
        <p className="text-[#555] mb-6">
          Explore our collection in person or reach out for any inquiries.
        </p>
        <div className="space-y-4 text-sm font-medium text-[#2F5233]">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#D8A7B1]" />
            Dhaka, Bangladesh
          </div>
          <div className="flex items-center gap-3">
            <PhoneCall className="w-5 h-5 text-[#D8A7B1]" />
            +880 123 456 7890
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#D8A7B1]" />
            support@leafandlinestore.com
          </div>
        </div>
      </section>
    </main>
  );
}
