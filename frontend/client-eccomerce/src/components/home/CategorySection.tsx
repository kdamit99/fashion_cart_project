// src/components/home/CategorySection.tsx
import { motion } from "framer-motion";
import { Icon } from "@iconify/react"; // or use Heroicons/FontAwesome

const categories = [
  { label: "Men", image: "/images/category-01.jpeg", icon: "mdi:face-man" },
  { label: "Women", image: "/images/category-02.jpeg", icon: "mdi:face-woman" },
  { label: "Boys", image: "/images/category-03.jpeg", icon: "mdi:baby-face-outline" },
  { label: "Girls", image: "/images/category-04.jpeg", icon: "mdi:face-woman-outline" },
];

const CategorySection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-1 text-gray-900">
          Shop by Category
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Find the perfect style for everyone—men, women, and kids all in one place.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 mt-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl overflow-hidden cursor-pointer shadow-md group"
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

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity"
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
              >
                <motion.div
                  className="text-center text-white space-y-2"
                  variants={{
                    rest: { y: 20, opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                >
                  <Icon icon={cat.icon} className="text-4xl mx-auto" />
                  <h3 className="text-xl font-semibold">{cat.label}</h3>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { CategorySection };
