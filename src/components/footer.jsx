import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-r from-eco-800 to-ocean-800 text-white py-12 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="text-4xl animate-bounce-slow">🌍</div>
              <span className="text-2xl font-bold">EcoLearn</span>
            </motion.div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering the next generation to protect our planet through 
              gamified environmental education. Learn, play, and save the Earth!
            </p>
            <div className="flex space-x-4">
              {['🌱', '💧', '⚡', '🌳'].map((emoji, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="text-2xl cursor-pointer"
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'How It Works', 'Teachers', 'Parents'].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 hello@ecolearn.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>🌍 Making Earth Better</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300"
        >
          <p>&copy; 2024 EcoLearn. Made with 💚 for our planet.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;