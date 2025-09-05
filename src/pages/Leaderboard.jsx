import { motion } from 'framer-motion';
import { useState } from 'react';
import Card3D from '../components/Card3D';
import AnimatedButton from '../components/AnimatedButton';
import { leaderboard } from '../data/dummyData';

const Leaderboard = () => {
  const [view, setView] = useState('students');
  const [timeframe, setTimeframe] = useState('all-time');

  const schoolLeaderboard = [
    { id: 1, name: 'Eco Elementary', totalPoints: 15420, students: 45, rank: 1 },
    { id: 2, name: 'Nature High School', totalPoints: 14850, students: 38, rank: 2 },
    { id: 3, name: 'Blue Wave Academy', totalPoints: 13200, students: 42, rank: 3 },
    { id: 4, name: 'Green Valley School', totalPoints: 12800, students: 35, rank: 4 },
    { id: 5, name: 'Sustainable Studies', totalPoints: 11900, students: 40, rank: 5 },
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return '🏅';
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return 'from-yellow-400 to-yellow-600';
      case 2: return 'from-gray-300 to-gray-500';
      case 3: return 'from-orange-400 to-orange-600';
      default: return 'from-eco-400 to-eco-600';
    }
  };

  const currentData = view === 'students' ? leaderboard : schoolLeaderboard;

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="text-6xl mb-4 animate-bounce-slow">🏆</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Leaderboard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See who's leading the charge in saving our planet!
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
        >
          {/* View Toggle */}
          <div className="flex bg-white rounded-full p-1 shadow-lg">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setView('students')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                view === 'students'
                  ? 'bg-eco-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-eco-600'
              }`}
            >
              👨‍🎓 Students
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setView('schools')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                view === 'schools'
                  ? 'bg-ocean-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-ocean-600'
              }`}
            >
              🏫 Schools
            </motion.button>
          </div>

          {/* Timeframe Toggle */}
          <div className="flex bg-white rounded-full p-1 shadow-lg">
            {[
              { key: 'week', label: 'This Week' },
              { key: 'month', label: 'This Month' },
              { key: 'all-time', label: 'All Time' },
            ].map((period) => (
              <motion.button
                key={period.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTimeframe(period.key)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  timeframe === period.key
                    ? 'bg-earth-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-earth-600'
                }`}
              >
                {period.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Top 3 Podium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex justify-center items-end gap-4 mb-8">
            {currentData.slice(0, 3).map((item, index) => {
              const positions = [1, 0, 2]; // Second, First, Third
              const actualIndex = positions[index];
              const actualItem = currentData[actualIndex];
              const heights = ['h-32', 'h-40', 'h-28'];
              
              return (
                <motion.div
                  key={actualItem.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`${heights[index]} flex flex-col justify-end`}
                >
                  <Card3D className={`text-center p-4 bg-gradient-to-t ${getRankColor(actualItem.rank)} text-white`}>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="text-4xl mb-2"
                    >
                      {getRankIcon(actualItem.rank)}
                    </motion.div>
                    <div className="text-lg font-bold mb-1">
                      {view === 'students' ? actualItem.name : actualItem.name}
                    </div>
                    <div className="text-sm opacity-90 mb-2">
                      {view === 'students' ? actualItem.school : `${actualItem.students} students`}
                    </div>
                    <div className="text-xl font-bold">
                      {view === 'students' ? actualItem.points : actualItem.totalPoints}
                    </div>
                    <div className="text-xs opacity-80">points</div>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Full Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card3D>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {view === 'students' ? '👨‍🎓 Student Rankings' : '🏫 School Rankings'}
            </h2>
            <div className="space-y-3">
              {currentData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className={`p-4 rounded-lg transition-all duration-300 ${
                    item.rank <= 3 
                      ? `bg-gradient-to-r ${getRankColor(item.rank)} text-white` 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                          item.rank <= 3 ? 'bg-white/20' : 'bg-eco-500 text-white'
                        }`}
                      >
                        {item.rank <= 3 ? getRankIcon(item.rank) : item.rank}
                      </motion.div>
                      <div>
                        <div className={`text-lg font-bold ${item.rank > 3 ? 'text-gray-800' : ''}`}>
                          {item.name}
                        </div>
                        <div className={`text-sm ${item.rank > 3 ? 'text-gray-600' : 'opacity-90'}`}>
                          {view === 'students' 
                            ? `${item.school} • ${item.level}` 
                            : `${item.students} students`
                          }
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xl font-bold ${item.rank > 3 ? 'text-eco-600' : ''}`}>
                        {view === 'students' ? item.points : item.totalPoints}
                      </div>
                      <div className={`text-sm ${item.rank > 3 ? 'text-gray-500' : 'opacity-80'}`}>
                        {view === 'students' ? `${item.badges} badges` : 'total points'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card3D>
        </motion.div>

        {/* Your Rank Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <Card3D className="bg-gradient-to-r from-eco-500 to-ocean-500 text-white">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold mb-2">Your Current Rank</h2>
              <div className="text-6xl font-bold mb-2">#1</div>
              <p className="text-xl mb-4 opacity-90">
                You're leading the pack! Keep up the amazing work!
              </p>
              <div className="flex justify-center items-center gap-8 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">2,450</div>
                  <div className="text-sm opacity-80">Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm opacity-80">Badges</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm opacity-80">Quizzes</div>
                </div>
              </div>
              <AnimatedButton 
                variant="outline" 
                className="bg-white text-eco-600 border-white hover:bg-eco-100"
              >
                🚀 Earn More Points
              </AnimatedButton>
            </div>
          </Card3D>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboard;