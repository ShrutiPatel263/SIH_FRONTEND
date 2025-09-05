import { motion } from 'framer-motion';

const FloatingShapes = () => {
  const shapes = [
    { icon: '🌱', size: 'text-6xl', delay: 0 },
    { icon: '🌍', size: 'text-8xl', delay: 1 },
    { icon: '💧', size: 'text-5xl', delay: 2 },
    { icon: '⚡', size: 'text-7xl', delay: 3 },
    { icon: '🌳', size: 'text-6xl', delay: 4 },
    { icon: '🦋', size: 'text-4xl', delay: 5 },
  ];

  return (
    <div className="floating-shapes">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`shape ${shape.size}`}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
        >
          {shape.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;