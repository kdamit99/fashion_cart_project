import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import type { TargetAndTransition } from "framer-motion";
import type { ReactNode } from "react";

const hiddenVariant: TargetAndTransition = {
  opacity: 0,
  y: 60,
};

const visibleVariant = (delay = 0): TargetAndTransition => ({
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: "easeOut",
    delay,
  },
});

export const AnimateOnScroll = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={hiddenVariant}
      animate={inView ? visibleVariant(delay) : hiddenVariant}
    >
      {children}
    </motion.div>
  );
};
