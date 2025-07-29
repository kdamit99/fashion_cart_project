const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-gray-900">
            Discover Your <br />
            Perfect Style <br />
            With <span className="text-teal-600">Fashion Cart</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Explore the latest trends curated just for you. <br />
            Premium quality wear for every occasion. <br />
            Stay stylish. Stay confident. Stay ahead.
          </p>
          <button className="inline-block mt-4 px-8 py-3 bg-teal-600 text-white rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-teal-700 transition">
            Shop Now
          </button>
        </div>

        {/* Right Section - Images */}
        <div className="w-full md:w-1/2 h-[500px] grid grid-cols-2 gap-6">
          {/* Large Left Image */}
          <div className="h-[500px]">
            <img
              src="/images/hero-03.jpg"
              alt="Main Fashion"
              className="w-full h-full object-cover rounded-3xl bg-gray-200 shadow-md"
            />
          </div>

          {/* Two Stacked Images */}
          <div className="flex flex-col gap-6 h-[500px]">
            <img
              src="/images/hero-02.jpg"
              alt="Top Fashion"
              className="w-full h-1/2 object-cover rounded-3xl bg-gray-200 shadow-sm"
            />
            <img
              src="/images/hero-01.jpg"
              alt="Bottom Fashion"
              className="w-full h-1/2 object-cover rounded-3xl bg-gray-200 shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
