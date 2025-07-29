// src/components/home/TestimonialsSection.tsx
import { useEffect, useState, useRef } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Absolutely love the quality and fit. My go-to fashion site!",
    name: "Ayesha R.",
    image: "/images/client1.jpg",
  },
  {
    quote: "Quick delivery and top-notch customer service. Highly recommended.",
    name: "Rahul M.",
    image: "/images/client2.jpg",
  },
  {
    quote: "Great styles and prices. I’m always excited for new drops!",
    name: "Natasha S.",
    image: "/images/client3.jpg",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isManual, setIsManual] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  // Autoplay effect
  useEffect(() => {
    if (isManual) return;

    intervalRef.current = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(intervalRef.current!);
  }, [index, isManual]);

  const handleManual = (action: () => void) => {
    setIsManual(true);
    clearInterval(intervalRef.current!);
    action();
  };

  const { quote, name, image } = testimonials[index];

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
          What Our Customers Say
        </h2>

        {/* Slider Container */}
        <div className="relative max-w-xl mx-auto min-h-[260px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              className="absolute inset-0"
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="bg-white/70 backdrop-blur rounded-3xl px-8 py-10 shadow-md ring-1 ring-gray-200">
                <Icon
                  icon="mdi:format-quote-open"
                  className="text-teal-600 text-4xl mb-4"
                />
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  “{quote}”
                </p>
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-500/60"
                  />
                  <span className="font-medium text-gray-900">{name}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={() => handleManual(prev)}
            aria-label="Previous"
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-teal-50 transition"
          >
            <Icon icon="mdi:chevron-left" width="20" />
          </button>
          <button
            onClick={() => handleManual(next)}
            aria-label="Next"
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-teal-50 transition"
          >
            <Icon icon="mdi:chevron-right" width="20" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleManual(() => goTo(i))}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-teal-600 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection };
