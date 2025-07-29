const OffersSection = () => {
  return (
    <section className="container mx-auto px-4 py-12 grid gap-6 md:grid-cols-3 grid-cols-1 auto-rows-[250px]">
      {/* Big Offer Card */}
      <div className="md:row-span-2 bg-gradient-to-r from-teal-100 to-teal-200 rounded-3xl p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-teal-900">
            End of Season Sale
          </h3>
          <p className="text-sm text-teal-800">
            Upto 70% off on selected styles
          </p>
        </div>
        <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-full w-max hover:bg-teal-700 transition">
          Shop Now
        </button>
      </div>

      {/* Other Small Cards */}
      <div className="bg-yellow-100 rounded-3xl p-6 flex flex-col justify-between">
        <h4 className="text-lg font-semibold text-yellow-900">Buy 1 Get 1</h4>
        <p className="text-sm text-yellow-800">On selected tees & tops</p>
      </div>

      <div className="bg-blue-100 rounded-3xl p-6 flex flex-col justify-between">
        <h4 className="text-lg font-semibold text-blue-900">Free Shipping</h4>
        <p className="text-sm text-blue-800">All orders ₹499+</p>
      </div>

      <div className="bg-green-100 rounded-3xl p-6 flex flex-col justify-between">
        <h4 className="text-lg font-semibold text-green-900">
          Student Discount
        </h4>
        <p className="text-sm text-green-800">Flat 15% off</p>
      </div>
    </section>
  );
};
export { OffersSection };
