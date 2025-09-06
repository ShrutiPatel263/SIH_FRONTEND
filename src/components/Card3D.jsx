import { motion } from 'framer-motion';

const Card3D = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { 
        rotateY: 5, 
        rotateX: 5, 
        scale: 1.02,
        z: 50 
      } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`card-3d glass-effect rounded-2xl shadow-xl ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card3D;