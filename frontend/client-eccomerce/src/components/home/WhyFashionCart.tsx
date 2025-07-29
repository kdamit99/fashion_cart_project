import { Icon } from "@iconify/react";

const features = [
  {
    icon: "mdi:truck-fast-outline",
    title: "Free Delivery",
    description: "On all orders above ₹499",
  },
  {
    icon: "mdi:autorenew",
    title: "Easy Returns",
    description: "7-day hassle-free return policy",
  },
  {
    icon: "mdi:storefront-outline",
    title: "Top Brands",
    description: "100+ premium Indian & global labels",
  },
  {
    icon: "mdi:shield-check-outline",
    title: "Secure Payments",
    description: "100% safe & encrypted checkout",
  },
];

const WhyFashionCart = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-600/10 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 tracking-tight">
            Why Choose Fashion Cart?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
            Discover the perks that make us India's favorite fashion
            destination.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur border border-gray-200 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex justify-center items-center w-14 h-14 mx-auto mb-5 bg-teal-600/10 text-teal-600 rounded-full group-hover:bg-teal-600 group-hover:text-white transition">
                <Icon
                  icon={feature.icon}
                  width="28"
                  height="28"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-700 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { WhyFashionCart };
