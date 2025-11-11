'use client';

import { motion } from 'framer-motion';

const SHAPES = [
  {
    key: 'shape-main',
    className: 'av-float-dot',
    style: { top: '12%', left: '6%' },
    motion: { x: 10, y: 14, duration: 8, delay: 0 }
  },
  {
    key: 'shape-bottom',
    className: 'av-float-dot av-float-dot--sm',
    style: { top: '68%', left: '12%' },
    motion: { x: -8, y: 12, duration: 7.5, delay: 0.6 }
  },
  {
    key: 'shape-top-right',
    className: 'av-float-dot av-float-dot--lg',
    style: { top: '22%', right: '8%' },
    motion: { x: -12, y: -16, duration: 9.5, delay: 1.2 }
  },
  {
    key: 'shape-lower-right',
    className: 'av-float-dot',
    style: { bottom: '10%', right: '14%' },
    motion: { x: 9, y: -13, duration: 8.5, delay: 0.9 }
  }
];

const FloatingShapes = () => {
  return (
    <div aria-hidden className="av-float-layer">
      {SHAPES.map(({ key, className, style, motion }) => (
        <motion.span
          key={key}
          className={className}
          style={style}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, motion.x, 0],
            y: [0, motion.y, 0]
          }}
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

export default FloatingShapes;
