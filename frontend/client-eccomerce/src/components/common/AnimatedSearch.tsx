import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

interface Props {
  isOpen: boolean;
  originRect: DOMRect | null;
  onClose: () => void;
}

const AnimatedSearch = ({ isOpen, originRect, onClose }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  const sampleResults = [
    "Summer Dress",
    "Sneakers",
    "Tote Bag",
    "Denim Jacket",
  ];

  useEffect(() => {
    if (originRect) {
      const centerX = window.innerWidth / 2 - 300; // assuming width 600
      const fixedY = 100; // fixed distance from top
      setStartPos({
        x: originRect.left - centerX,
        y: originRect.top - fixedY,
      });
    }
  }, [originRect]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const filtered = searchQuery
    ? sampleResults.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Animation container - UPDATED */}
          <div className="fixed inset-0 z-[70] pointer-events-none flex justify-center items-start">
            <motion.div
              layout
              className="w-[92%] max-w-2xl bg-white rounded-3xl shadow-lg p-6 sm:p-8 mt-28 h-fit relative pointer-events-auto transition-all duration-300"
              initial={{
                scale: 0.3,
                x: startPos.x,
                y: startPos.y,
                opacity: 0,
              }}
              animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
              exit={{ scale: 0.3, x: startPos.x, y: startPos.y, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 transition"
              >
                <Icon icon="mdi:close" width="22" />
              </button>

              {/* Search input */}
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
              />

              {/* Animated Results */}
              <AnimatePresence>
                {filtered.length > 0 && (
                  <motion.ul
                    className="mt-5 space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {filtered.map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer transition"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, delay: idx * 0.05 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AnimatedSearch;
