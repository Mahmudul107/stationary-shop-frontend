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
          <div className="space-y-6 flex items-center">

            {/* Why Reach Out Section */}
            <Card className="bg-white shadow-md rounded-2xl border-none">
              <CardHeader>
                <CardTitle className="text-green-800 text-xl">Why Reach Out?</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-4">
                <div className="flex items-start gap-3">
                  <PackageSearch className="h-5 w-5 text-green-700 mt-1" />
                  <p>Track or ask about your orders</p>
                </div>
                <div className="flex items-start gap-3">
                  <PenTool className="h-5 w-5 text-green-700 mt-1" />
                  <p>Request custom stationery designs</p>
                </div>
                <div className="flex items-start gap-3">
                  <Smile className="h-5 w-5 text-green-700 mt-1" />
                  <p>Share feedback or say hello — we love hearing from you!</p>
                </div>
              </CardContent>
            </Card>
          </div>

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
