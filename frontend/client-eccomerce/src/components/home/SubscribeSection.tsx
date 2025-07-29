import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const SubscribeSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Column */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
            Get the Latest Trends in Your Inbox
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Subscribe to receive exclusive deals, early access, and style tips
            curated just for you.
          </p>

          <form className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <div className="relative w-full">
              <Icon
                icon="mdi:email-outline"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                width="20"
              />
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="pl-12 pr-4 py-3 rounded-full w-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
              />
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="bg-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition"
            >
              Subscribe
            </motion.button>
          </form>
        </div>

        {/* Right Full-Height Image Column */}
        <div className="hidden md:block h-full">
          <div className="h-full w-full">
            <img
              src="/images/newsletter-banner.jpg"
              alt="Fashion Banner"
              className="h-full w-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { SubscribeSection };
