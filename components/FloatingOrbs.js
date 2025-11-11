'use client';

import { motion } from 'framer-motion';

const CONTAINER_STYLE = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  userSelect: 'none',
  zIndex: -10,
  overflow: 'hidden',
  isolation: 'isolate'
};

const BASE_ORB_STYLE = {
  position: 'absolute',
  borderRadius: '9999px',
  background: 'radial-gradient(closest-side, rgba(255, 0, 128, 0.35), rgba(255, 0, 128, 0))',
  filter: 'blur(8px)'
};

const ORBS = [
  {
    key: 'orb-main',
    size: 140,
    opacity: 0.35,
    position: { top: '12%', left: '6%' },
    motion: { x: 10, y: 14, duration: 8, delay: 0 }
  },
  {
    key: 'orb-bottom',
    size: 90,
    opacity: 0.3,
    position: { top: '68%', left: '12%' },
    motion: { x: -8, y: 12, duration: 7.5, delay: 0.6 }
  },
  {
    key: 'orb-top-right',
    size: 200,
    opacity: 0.4,
    position: { top: '22%', right: '8%' },
    motion: { x: -12, y: -16, duration: 9.5, delay: 1.2 }
  },
  {
    key: 'orb-lower-right',
    size: 140,
    opacity: 0.33,
    position: { bottom: '10%', right: '14%' },
    motion: { x: 9, y: -13, duration: 8.5, delay: 0.9 }
  }
];

const FloatingOrbs = () => {
  return (
    <div aria-hidden style={CONTAINER_STYLE}>
      {ORBS.map(({ key, size, opacity, position, motion }) => (
        <motion.div
          key={key}
          style={{
            ...BASE_ORB_STYLE,
            width: `${size}px`,
            height: `${size}px`,
            opacity,
            ...position
          }}
          initial={{ x: 0, y: 0 }}
          animate={{ x: [0, motion.x, 0], y: [0, motion.y, 0] }}
          transition={{
            duration: motion.duration,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
            delay: motion.delay
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
