import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedButton from '../components/AnimatedButton';
import Card3D from '../components/Card3D';
import FloatingShapes from '../components/FloatingShapes';

const Home = () => {
  const features = [
    {
      icon: '🧠',
      title: 'Interactive Quizzes',
      description: 'Test your environmental knowledge with fun, engaging quizzes',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: '🎯',
      title: 'Daily Challenges',
      description: 'Complete eco-friendly tasks and earn points for real impact',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: '🏆',
      title: 'Leaderboards',
      description: 'Compete with friends and climb the global eco-rankings',
      color: 'from-yellow-400 to-red-500'
    },
    {
      icon: '🎖️',
      title: 'Badges & Rewards',
      description: 'Unlock achievements and showcase your environmental impact',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Students Learning', icon: '👨‍🎓' },
    { number: '500+', label: 'Trees Planted', icon: '🌳' },
    { number: '1M+', label: 'Eco Points Earned', icon: '⭐' },
    { number: '50+', label: 'Schools Joined', icon: '🏫' }
  ];

  return (
    <div className="min-h-screen">
      <FloatingShapes />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="mb-8"
            >
              <div className="text-8xl md:text-9xl animate-bounce-slow mb-4">🌍</div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-7xl font-bold mb-6"
            >
              <span className="text-gradient">Learn. Play.</span>
              <br />
              <span className="text-eco-600">Save the Earth.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Join the ultimate gamified environmental education platform where 
              learning about our planet is an adventure!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/login">
                <AnimatedButton size="xl" className="min-w-[200px]">
                  🚀 Start Learning
                </AnimatedButton>
              </Link>
              <Link to="/teacher-dashboard">
                <AnimatedButton variant="outline" size="xl" className="min-w-[200px]">
                  👩‍🏫 For Teachers
                </AnimatedButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-eco-50 to-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Why Choose EcoLearn?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of environmental education with our innovative features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card3D className="text-center h-full">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`text-6xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Our Impact So Far
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              >
                <Card3D className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    className="text-4xl mb-3"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                    className="text-3xl md:text-4xl font-bold text-eco-600 mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-eco-600 to-ocean-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6 animate-bounce-slow">🌟</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Save the Planet?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students already making a difference through EcoLearn
            </p>
            <Link to="/login">
              <AnimatedButton 
                variant="outline" 
                size="xl" 
                className="bg-white text-eco-600 border-white hover:bg-eco-100"
              >
                🚀 Get Started Now
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;