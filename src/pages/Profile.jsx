import { motion } from 'framer-motion';
import { useState } from 'react';
import Card3D from '../components/Card3D';
import AnimatedButton from '../components/AnimatedButton';
import { studentData, badges, quizzes, challenges } from '../data/dummyData';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const completedQuizzes = quizzes.filter(q => q.completed);
  const completedChallenges = challenges.filter(c => c.status === 'completed');
  const earnedBadges = badges.filter(b => b.earned);

  const achievements = [
    { title: 'First Quiz Completed', date: '2024-01-20', icon: '🎓' },
    { title: 'Tree Planter Badge Earned', date: '2024-01-25', icon: '🌳' },
    { title: 'Reached 1000 Points', date: '2024-02-01', icon: '⭐' },
    { title: 'Quiz Master Badge', date: '2024-02-10', icon: '🧠' },
    { title: 'Top 10 Leaderboard', date: '2024-02-15', icon: '🏆' },
  ];

  const stats = [
    { label: 'Total Points', value: studentData.points, icon: '⭐', color: 'text-eco-600' },
    { label: 'Global Rank', value: `#${studentData.rank}`, icon: '🏆', color: 'text-yellow-600' },
    { label: 'Badges Earned', value: studentData.badges, icon: '🎖️', color: 'text-purple-600' },
    { label: 'Day Streak', value: studentData.streak, icon: '🔥', color: 'text-red-600' },
    { label: 'Quizzes Done', value: studentData.completedQuizzes, icon: '🧠', color: 'text-blue-600' },
    { label: 'Challenges', value: studentData.completedChallenges, icon: '🎯', color: 'text-green-600' },
  ];

  const getBadgeRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return 'from-gray-400 to-gray-600';
      case 'uncommon': return 'from-green-400 to-green-600';
      case 'rare': return 'from-blue-400 to-blue-600';
      case 'epic': return 'from-purple-400 to-purple-600';
      case 'legendary': return 'from-yellow-400 to-yellow-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card3D className="bg-gradient-to-r from-eco-500 to-ocean-500 text-white">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                className="text-8xl"
              >
                {studentData.avatar}
              </motion.div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl font-bold mb-2">{studentData.name}</h1>
                <p className="text-xl opacity-90 mb-4">{studentData.level}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="bg-white/20 px-4 py-2 rounded-full">
                    <span className="font-semibold">Joined: </span>
                    {new Date(studentData.joinDate).toLocaleDateString()}
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-full">
                    <span className="font-semibold">Streak: </span>
                    {studentData.streak} days 🔥
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">{studentData.points}</div>
                <div className="opacity-90">Total Points</div>
              </div>
            </div>
          </Card3D>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.05, type: "spring", stiffness: 200 }}
            >
              <Card3D className="text-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="text-2xl mb-2"
                >
                  {stat.icon}
                </motion.div>
                <div className={`text-xl font-bold mb-1 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="flex bg-white rounded-full p-1 shadow-lg">
            {[
              { key: 'overview', label: 'Overview', icon: '📊' },
              { key: 'badges', label: 'Badges', icon: '🎖️' },
              { key: 'achievements', label: 'Achievements', icon: '🏆' },
              { key: 'activity', label: 'Activity', icon: '📈' },
            ].map((tab) => (
              <motion.button
                key={tab.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.key
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

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <Card3D>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity 📈</h2>
                <div className="space-y-4">
                  {[
                    { action: 'Completed Climate Quiz', points: 85, time: '2 hours ago', icon: '🧠' },
                    { action: 'Planted Tree Challenge', points: 100, time: '1 day ago', icon: '🌳' },
                    { action: 'Water Conservation Quiz', points: 92, time: '2 days ago', icon: '💧' },
                    { action: 'Earned Quiz Master Badge', points: 300, time: '3 days ago', icon: '🎖️' },
                  ].map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{activity.icon}</span>
                        <div>
                          <div className="font-semibold text-gray-800">{activity.action}</div>
                          <div className="text-sm text-gray-600">{activity.time}</div>
                        </div>
                      </div>
                      <div className="font-bold text-eco-600">+{activity.points}</div>
                    </motion.div>
                  ))}
                </div>
              </Card3D>

              {/* Progress Chart */}
              <Card3D>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Progress Overview 📊</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Quiz Completion</span>
                      <span className="font-semibold">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="bg-eco-500 h-3 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Challenge Progress</span>
                      <span className="font-semibold">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '60%' }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className="bg-ocean-500 h-3 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Badge Collection</span>
                      <span className="font-semibold">40%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '40%' }}
                        transition={{ delay: 0.9, duration: 1 }}
                        className="bg-earth-500 h-3 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>
          )}

          {activeTab === 'badges' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card3D className={`text-center ${badge.earned ? '' : 'opacity-50'}`}>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className={`text-6xl mb-4 ${badge.earned ? '' : 'grayscale'}`}
                    >
                      {badge.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{badge.name}</h3>
                    <p className="text-gray-600 mb-4">{badge.description}</p>
                    <div className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${getBadgeRarityColor(badge.rarity)} text-white mb-3`}>
                      {badge.rarity.charAt(0).toUpperCase() + badge.rarity.slice(1)}
                    </div>
                    <div className="font-bold text-eco-600">+{badge.points} points</div>
                    {!badge.earned && (
                      <div className="mt-3 text-sm text-gray-500">Not earned yet</div>
                    )}
                  </Card3D>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <Card3D>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Achievement Timeline 🏆</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-eco-50 to-ocean-50 rounded-lg"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="text-3xl"
                    >
                      {achievement.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.date}</p>
                    </div>
                    <div className="text-eco-600 font-bold">🎉</div>
                  </motion.div>
                ))}
              </div>
            </Card3D>
          )}

          {activeTab === 'activity' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Completed Quizzes */}
              <Card3D>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Completed Quizzes 🧠</h2>
                <div className="space-y-3">
                  {completedQuizzes.map((quiz, index) => (
                    <motion.div
                      key={quiz.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 rounded-lg bg-gradient-to-r ${quiz.color} text-white`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{quiz.title}</h3>
                          <p className="text-sm opacity-90">{quiz.questions} questions</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">{quiz.score}%</div>
                          <div className="text-sm">+{quiz.points} pts</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card3D>

              {/* Completed Challenges */}
              <Card3D>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Completed Challenges 🎯</h2>
                <div className="space-y-3">
                  {completedChallenges.map((challenge, index) => (
                    <motion.div
                      key={challenge.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{challenge.icon}</span>
                          <div>
                            <h3 className="font-semibold text-gray-800">{challenge.title}</h3>
                            <p className="text-sm text-gray-600">{challenge.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-600 font-bold">✅</div>
                          <div className="text-sm text-gray-600">+{challenge.points} pts</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card3D>
            </div>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton size="lg">
              🎯 Take New Challenge
            </AnimatedButton>
            <AnimatedButton variant="secondary" size="lg">
              🧠 Start Quiz
            </AnimatedButton>
            <AnimatedButton variant="outline" size="lg">
              📊 View Leaderboard
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;