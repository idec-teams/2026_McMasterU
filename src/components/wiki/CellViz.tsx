"use client";

import { motion } from "motion/react";

const LIPID_DROPLETS = [
  { top: "18%", left: "22%", size: 22, delay: 0 },
  { top: "58%", left: "16%", size: 17, delay: 0.5 },
  { top: "62%", left: "58%", size: 21, delay: 1 },
  { top: "22%", left: "60%", size: 15, delay: 1.5 },
  { top: "42%", left: "12%", size: 13, delay: 0.8 },
  { top: "18%", left: "42%", size: 11, delay: 1.2 },
  { top: "68%", left: "38%", size: 15, delay: 0.3 },
  { top: "38%", left: "68%", size: 10, delay: 0.9 },
];

export function CellViz({ burst = false }: { burst?: boolean }) {
  return (
    <div className="relative w-64 h-64 mx-auto select-none">
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={
          burst
            ? { scale: [1, 1.4, 2.2], opacity: [1, 0.6, 0] }
            : { scale: [1, 1.025, 1] }
        }
        transition={
          burst
            ? { duration: 0.8, ease: "easeOut" }
            : { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
        style={{
          border: "1.5px solid rgb(var(--teal-rgb) / 0.45)",
          boxShadow:
            "0 0 40px rgb(var(--teal-rgb) / 0.12), inset 0 0 60px rgb(var(--teal-rgb) / 0.04)",
        }}
      />

      <motion.div
        className="absolute inset-8 rounded-full"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{ border: "1px solid rgb(var(--teal-rgb) / 0.18)" }}
      />

      <div
        className="absolute rounded-full"
        style={{
          inset: "35%",
          background:
            "radial-gradient(circle at 40% 40%, rgb(var(--teal-rgb) / 0.18), rgb(var(--teal-rgb) / 0.04))",
          border: "1px solid rgb(var(--teal-rgb) / 0.25)",
          boxShadow: "0 0 16px rgb(var(--teal-rgb) / 0.15)",
        }}
      />

      {LIPID_DROPLETS.map((dot, i) => (
        <motion.div
          key={`${dot.top}-${dot.left}`}
          className="absolute rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            background: "radial-gradient(circle at 30% 30%, #00d4b4, #007a68)",
            boxShadow: "0 0 8px rgb(var(--teal-rgb) / 0.45)",
          }}
          animate={
            burst
              ? {
                  x: [0, i % 2 === 0 ? 60 : -60],
                  y: [0, i % 3 === 0 ? -80 : 60],
                  opacity: [1, 0],
                  scale: [1, 0.3],
                }
              : { y: [-2, 2, -2], opacity: [0.75, 1, 0.75] }
          }
          transition={
            burst
              ? { duration: 0.6, ease: "easeOut" }
              : {
                  duration: 3 + i * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: dot.delay,
                }
          }
        />
      ))}
    </div>
  );
}
