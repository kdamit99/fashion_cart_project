// src/components/home/CategorySection.tsx
import { motion } from "framer-motion";

const categories = [
  { label: "Men", image: "/images/men.jpg" },
  { label: "Women", image: "/images/women.jpg" },
  { label: "Boys", image: "/images/boys.jpg" },
  { label: "Girls", image: "/images/girls.jpg" },
];

const CategorySection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-1 text-gray-900">
          Shop by Category
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Find the perfect style for everyone—men, women, and kids all in one
          place.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 mt-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl overflow-hidden cursor-pointer shadow-md"
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.02 },
              }}
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-64 object-cover bg-gray-200"
              />

              <motion.div
                className="absolute inset-0 bg-teal-600 flex items-center justify-center"
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 0.15 },
                }}
              >
                <motion.h3
                  className="text-white text-xl font-semibold"
                  variants={{
                    rest: { y: 20, opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                >
                  {cat.label}
                </motion.h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { CategorySection };
