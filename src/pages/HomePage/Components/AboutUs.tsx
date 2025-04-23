export default function AboutUs() {
    return (
      <div className="bg-[#f9f7f3] text-[#2F2F2F] py-16 px-4 md:px-12">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-bold text-[#2F5233] mb-4">About Leaf And Line</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We blend creativity with simplicity to bring you timeless stationery that inspires your everyday.
          </p>
        </section>
  
        {/* Image & Mission Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-6xl mx-auto mb-20">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#2F5233] mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Leaf And Line, we believe that every note you write, every plan you make, and every doodle you draw deserves a space that feels thoughtful and personal. 
              Our mission is to craft high-quality stationery that reflects elegance, creativity, and care—while staying eco-friendly and affordable.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1607083206173-0463f3c8c2c6?q=80&w=2070&auto=format&fit=crop"
              alt="Stationery flat lay"
              className="rounded-3xl shadow-xl"
            />
          </div>
        </section>
  
        {/* Values Section */}
        <section className="bg-white bg-opacity-50 backdrop-blur-md rounded-3xl p-10 max-w-6xl mx-auto shadow-lg">
          <h2 className="text-3xl font-bold text-[#2F5233] text-center mb-12">What We Value</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-[#2F5233] mb-2">Creativity</h3>
              <p className="text-gray-700">
                Every product starts with a spark of creativity—from design to packaging.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-[#2F5233] mb-2">Sustainability</h3>
              <p className="text-gray-700">
                We use recycled materials and eco-conscious methods whenever possible.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-[#2F5233] mb-2">Customer Delight</h3>
              <p className="text-gray-700">
                We aim to create moments of joy through every unboxing and every purchase.
              </p>
            </div>
          </div>
        </section>
  
        {/* Footer Callout */}
        <section className="text-center mt-24">
          <h2 className="text-2xl font-semibold text-[#2F5233] mb-4">
            Thank you for being part of our journey 🌿
          </h2>
          <p className="text-gray-600">
            Whether you're writing your next novel or just taking notes, we're here to make the experience special.
          </p>
        </section>
      </div>
    );
  }
  