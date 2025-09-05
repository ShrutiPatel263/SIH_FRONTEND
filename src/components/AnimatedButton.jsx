import { motion } from 'framer-motion';

const AnimatedButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled = false,
  ...props 
}) => {
  const variants = {
    primary: 'eco-gradient text-white',
    secondary: 'ocean-gradient text-white',
    tertiary: 'earth-gradient text-white',
    outline: 'border-2 border-eco-500 text-eco-600 hover:bg-eco-500 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        btn-3d rounded-full font-semibold shadow-lg
        ${variants[variant]} ${sizes[size]} ${className}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        transition-all duration-300 relative overflow-hidden
      `}
      {...props}
    >
      <motion.div
        className="relative z-10"
        whileHover={{ scale: 1.1 }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
};

export default AnimatedButton;