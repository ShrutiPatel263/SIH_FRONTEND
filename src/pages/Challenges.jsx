import { motion } from 'framer-motion';
import { useState } from 'react';
import Card3D from '../components/Card3D';
import AnimatedButton from '../components/AnimatedButton';
import { challenges } from '../data/dummyData';

const Challenges = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredChallenges = challenges.filter(challenge => {
    if (filter === 'all') return true;
    return challenge.status === filter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'not-started': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '⏳';
      case 'not-started': return '🎯';
      default: return '🎯';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="text-6xl mb-4 animate-bounce-slow">🎯</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Eco Challenges
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take on real-world environmental challenges and make a difference!
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="flex bg-white rounded-full p-1 shadow-lg">
            {[
              { key: 'all', label: 'All Challenges', icon: '🌍' },
              { key: 'not-started', label: 'Available', icon: '🎯' },
              { key: 'in-progress', label: 'In Progress', icon: '⏳' },
              { key: 'completed', label: 'Completed', icon: '✅' },
            ].map((tab) => (
              <motion.button
                key={tab.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(tab.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === tab.key
                    ? 'bg-eco-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-eco-600'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredChallenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card3D className="h-full">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="text-4xl"
                  >
                    {challenge.icon}
                  </motion.div>
                  <div className="flex flex-col gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(challenge.status)}`}>
                      {getStatusIcon(challenge.status)} {challenge.status.replace('-', ' ')}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Points:</span>
                    <span className="font-semibold text-eco-600">+{challenge.points}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{challenge.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold">{challenge.category}</span>
                  </div>
                </div>

                {challenge.status === 'in-progress' && (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{challenge.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${challenge.progress}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                        className="bg-eco-500 h-3 rounded-full relative overflow-hidden"
                      >
                        <motion.div
                          animate={{ x: ['0%', '100%'] }}
                          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                          className="absolute top-0 left-0 h-full w-1/3 bg-white opacity-30"
                        />
                      </motion.div>
                    </div>
                  </div>
                )}

                <AnimatedButton
                  className="w-full"
                  variant={
                    challenge.status === 'completed' ? 'outline' :
                    challenge.status === 'in-progress' ? 'secondary' : 'primary'
                  }
                >
                  {challenge.status === 'completed' ? '🏆 View Results' :
                   challenge.status === 'in-progress' ? '📸 Upload Progress' : '🚀 Start Challenge'}
                </AnimatedButton>
              </Card3D>
            </motion.div>
          ))}
        </div>

        {/* Challenge Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card3D>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Your Challenge Stats 🏆</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { 
                  label: 'Completed', 
                  value: challenges.filter(c => c.status === 'completed').length, 
                  icon: '✅',
                  color: 'text-green-600'
                },
                { 
                  label: 'In Progress', 
                  value: challenges.filter(c => c.status === 'in-progress').length, 
                  icon: '⏳',
                  color: 'text-yellow-600'
                },
                { 
                  label: 'Total Points', 
                  value: challenges
                    .filter(c => c.status === 'completed')
                    .reduce((sum, c) => sum + c.points, 0), 
                  icon: '⭐',
                  color: 'text-eco-600'
                },
                { 
                  label: 'Success Rate', 
                  value: '75%', 
                  icon: '📈',
                  color: 'text-blue-600'
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </Card3D>
        </motion.div>

        {/* Featured Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12"
        >
          <Card3D className="bg-gradient-to-r from-eco-500 to-ocean-500 text-white">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce-slow">🌟</div>
              <h2 className="text-3xl font-bold mb-4">Weekly Featured Challenge</h2>
              <p className="text-xl mb-6 opacity-90">
                Join the "Zero Waste Week" challenge and compete with students worldwide!
              </p>
              <div className="flex justify-center items-center gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">500</div>
                  <div className="text-sm opacity-80">Bonus Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-sm opacity-80">Days Left</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1.2K</div>
                  <div className="text-sm opacity-80">Participants</div>
                </div>
              </div>
              <AnimatedButton 
                variant="outline" 
                className="bg-white text-eco-600 border-white hover:bg-eco-100"
              >
                🏆 Join Featured Challenge
              </AnimatedButton>
            </div>
          </Card3D>
        </motion.div>
      </div>
    </div>
  );
};

export default Challenges;