import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedButton from '../components/AnimatedButton';
import Card3D from '../components/Card3D';
import FloatingShapes from '../components/FloatingShapes';

const Login = () => {
  const [userType, setUserType] = useState('student');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login/signup
    if (userType === 'student') {
      navigate('/student-dashboard');
    } else {
      navigate('/teacher-dashboard');
    }
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <FloatingShapes />
      
      <div className="max-w-md w-full mx-4">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Card3D className="text-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-6xl mb-4 animate-bounce-slow"
            >
              🌍
            </motion.div>
            
            <h1 className="text-3xl font-bold text-gradient mb-2">
              Welcome to EcoLearn
            </h1>
            <p className="text-gray-600 mb-8">
              {isLogin ? 'Sign in to continue your eco-journey' : 'Join the eco-revolution today!'}
            </p>

            {/* User Type Selection */}
            <div className="flex mb-6 bg-gray-100 rounded-full p-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setUserType('student')}
                className={`flex-1 py-2 px-4 rounded-full font-medium transition-all duration-300 ${
                  userType === 'student'
                    ? 'bg-eco-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-eco-600'
                }`}
              >
                👨‍🎓 Student
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setUserType('teacher')}
                className={`flex-1 py-2 px-4 rounded-full font-medium transition-all duration-300 ${
                  userType === 'teacher'
                    ? 'bg-ocean-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-ocean-600'
                }`}
              >
                👩‍🏫 Teacher
              </motion.button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-eco-500 focus:ring-2 focus:ring-eco-200 transition-all duration-300"
                    required
                  />
                </motion.div>
              )}
              
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-eco-500 focus:ring-2 focus:ring-eco-200 transition-all duration-300"
                required
              />
              
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-eco-500 focus:ring-2 focus:ring-eco-200 transition-all duration-300"
                required
              />

              {!isLogin && userType === 'student' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <input
                    type="text"
                    placeholder="School Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-eco-500 focus:ring-2 focus:ring-eco-200 transition-all duration-300"
                    required
                  />
                </motion.div>
              )}

              <AnimatedButton
                type="submit"
                className="w-full"
                variant={userType === 'student' ? 'primary' : 'secondary'}
              >
                {isLogin ? '🚀 Sign In' : '🌟 Create Account'}
              </AnimatedButton>
            </form>

            {/* Toggle Login/Signup */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-eco-600 hover:text-eco-700 font-medium transition-colors"
              >
                {isLogin 
                  ? "Don't have an account? Sign up" 
                  : "Already have an account? Sign in"
                }
              </button>
            </div>

            {/* Demo Access */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Quick Demo Access:</p>
              <div className="flex gap-2">
                <Link to="/student-dashboard" className="flex-1">
                  <AnimatedButton variant="outline" size="sm" className="w-full text-xs">
                    👨‍🎓 Student Demo
                  </AnimatedButton>
                </Link>
                <Link to="/teacher-dashboard" className="flex-1">
                  <AnimatedButton variant="outline" size="sm" className="w-full text-xs">
                    👩‍🏫 Teacher Demo
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </Card3D>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;