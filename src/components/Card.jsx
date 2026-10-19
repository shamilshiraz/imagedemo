// Card.jsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function Card({ title, description, image, color, i }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  return (
    <div ref={container} className="h-[100vh] flex items-center justify-center sticky top-0">
      <div
        className="relative text-black h-[60vh] w-[90vw] sm:w-[60vw] border border-black rounded-[2rem] overflow-hidden flex flex-col justify-end"
        style={{ backgroundColor: color, top: `calc(${i * 25}px)` }}
      >
        {/* Background image with parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            scale,
          }}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Text */}
        <div className="relative z-20 p-8 text-white">
          <p className="text-3xl sm:text-5xl font-bold leading-tight">{title}</p>
          {description && (
            <p className="text-sm sm:text-base mt-2 text-white/70 max-w-md">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;