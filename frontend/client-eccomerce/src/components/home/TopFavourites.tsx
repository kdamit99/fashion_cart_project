import { Icon } from "@iconify/react";
import { FashionCard } from "../common/FashionCard";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const products = [
  {
    image: "/images/fav1.jpg",
    title: "Summer Linen Dress",
    highlight: "Trending • ₹1,499",
  },
  {
    image: "/images/fav2.jpg",
    title: "Oversized Denim Jacket",
    highlight: "Bestseller • ₹2,299",
  },
  {
    image: "/images/fav3.jpg",
    title: "Casual Sneakers",
    highlight: "Hot Pick • ₹1,899",
  },
  {
    image: "/images/fav4.jpg",
    title: "Stylish Tote Bag",
    highlight: "Editor's Choice • ₹999",
  },
];

const TopFavourites = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Title + CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
              Top Favourites
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Handpicked styles our customers love the most.
            </p>
          </div>

          <Button className="rounded-full mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-medium group text-teal-600 hover:text-teal-700 border border-teal-600 cursor-pointer">
            <span className="group-hover:text-teal-700 transition-colors">
              Explore All
            </span>
            <Icon
              icon="mdi:arrow-top-right"
              width="20"
              className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-teal-700"
            />
          </Button>
        </div>

        {/* Animated Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {products.map((p, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FashionCard
                image={p.image}
                title={p.title}
                highlight={p.highlight}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { TopFavourites };
