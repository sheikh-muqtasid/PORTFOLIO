"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Reveal — scroll-triggered reveal wrapper. Fades up once when it
 * enters the viewport. Under reduced motion, children render statically
 * with no animation at all.
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  y = 28,
  className = "",
  as = "div",
  ...rest
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
