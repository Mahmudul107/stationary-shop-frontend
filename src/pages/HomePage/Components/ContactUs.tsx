import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Smile, PenTool, PackageSearch } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section className="bg-[#f9f7f3] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-green-900">We’d Love to Hear From You</h2>
          <p className="text-gray-700 mt-4 max-w-xl mx-auto">
            Questions, feedback, or custom requests? We’re here to help and always happy to chat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info + Why Reach Out */}
          {/* Why Reach Out Section */}
{/* Why Reach Out Section */}
<Card className="bg-white shadow-md rounded-2xl border-none">
  <CardHeader>
    <CardTitle className="text-green-800 text-xl">Why Reach Out?</CardTitle>
  </CardHeader>
  <CardContent className="text-gray-700 space-y-5">
    <div className="flex items-start gap-3">
      <PackageSearch className="h-5 w-5 text-green-700 mt-1" />
      <div>
        <p className="font-semibold">Order Questions & Support</p>
        <p className="text-sm text-gray-600">
          Wondering where your order is or need help with a recent purchase? We’re happy to assist with updates,
          tracking, or anything else you need.
        </p>
      </div>
    </div>
    <div className="flex items-start gap-3">
      <PenTool className="h-5 w-5 text-green-700 mt-1" />
      <div>
        <p className="font-semibold">Custom Design Requests</p>
        <p className="text-sm text-gray-600">
          Looking for personalized stationery that reflects your style or brand? Share your ideas — we’ll bring them to life with care and creativity.
        </p>
      </div>
    </div>
    <div className="flex items-start gap-3">
      <Smile className="h-5 w-5 text-green-700 mt-1" />
      <div>
        <p className="font-semibold">Feedback & Suggestions</p>
        <p className="text-sm text-gray-600">
          Your thoughts make us better. Whether it’s praise, constructive feedback, or improvement ideas — we’re all ears!
        </p>
      </div>
    </div>
    <div className="flex items-start gap-3">
      <Send className="h-5 w-5 text-green-700 mt-1" />
      <div>
        <p className="font-semibold">General Inquiries or Just Saying Hi</p>
        <p className="text-sm text-gray-600">
          Curious about our brand, our story, or have something else on your mind? Even if it’s just a friendly hello — we’d love to hear from you.
        </p>
      </div>
    </div>
  </CardContent>
</Card>



          {/* Contact Form */}
          <Card className="bg-white shadow-md rounded-2xl border-none">
            <CardHeader>
              <CardTitle className="text-green-800 text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required className="rounded-lg" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" required className="rounded-lg" />
                </div>

                <div>
                  <Input id="subject" placeholder="How can we help?" required className="rounded-lg" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    className="min-h-[120px] rounded-lg"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
