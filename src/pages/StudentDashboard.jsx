import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card3D from '../components/Card3D';
import AnimatedButton from '../components/AnimatedButton';
import { studentData, quizzes, challenges, leaderboard } from '../data/dummyData';

const StudentDashboard = () => {
  const recentQuizzes = quizzes.slice(0, 3);
  const activeChallenges = challenges.filter(c => c.status === 'in-progress').slice(0, 2);
  const topStudents = leaderboard.slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-spacing">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-3">
                Welcome back, {studentData.name}! 👋
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Ready to save the planet today?
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-5xl md:text-6xl animate-bounce-slow"
            >
              {studentData.avatar}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12">
          {[
            { label: 'Eco Points', value: studentData.points, icon: '⭐', color: 'eco-gradient' },
            { label: 'Global Rank', value: `#${studentData.rank}`, icon: '🏆', color: 'earth-gradient' },
            { label: 'Badges Earned', value: studentData.badges, icon: '🎖️', color: 'ocean-gradient' },
            { label: 'Day Streak', value: studentData.streak, icon: '🔥', color: 'eco-gradient' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card3D className="text-center p-4 md:p-6">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="text-2xl md:text-3xl mb-3"
                >
                  {stat.icon}
                </motion.div>
                <div className={`text-xl md:text-2xl font-bold ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {/* Recent Quizzes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card3D className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Recent Quizzes 🧠</h2>
                <Link to="/quizzes">
                  <AnimatedButton size="sm">View All</AnimatedButton>
                </Link>
              </div>
              <div className="space-y-4 md:space-y-5">
                {recentQuizzes.map((quiz, index) => (
                  <motion.div
                    key={quiz.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`p-4 md:p-5 rounded-lg bg-gradient-to-r ${quiz.color} text-white`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xl md:text-2xl">{quiz.icon}</span>
                          <h3 className="font-semibold text-sm md:text-base">{quiz.title}</h3>
                        </div>
                        <p className="text-xs md:text-sm opacity-90">{quiz.questions} questions</p>
                      </div>
                      <div className="text-right">
                        <div className="text-base md:text-lg font-bold">+{quiz.points}</div>
                        {quiz.completed && (
                          <div className="text-xs md:text-sm">Score: {quiz.score}%</div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card3D>
          </motion.div>

          {/* Active Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card3D className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Active Challenges 🎯</h2>
                <Link to="/challenges">
                  <AnimatedButton size="sm" variant="secondary">View All</AnimatedButton>
                </Link>
              </div>
              <div className="space-y-4 md:space-y-5">
                {activeChallenges.map((challenge, index) => (
                  <motion.div
                    key={challenge.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 md:p-5 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl md:text-2xl">{challenge.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-sm md:text-base">{challenge.title}</h3>
                        <p className="text-xs md:text-sm text-gray-600">+{challenge.points} points</p>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-xs md:text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{challenge.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${challenge.progress}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                          className="bg-eco-500 h-2.5 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card3D>
          </motion.div>

          {/* Leaderboard Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card3D className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Top Students 🏆</h2>
                <Link to="/leaderboard">
                  <AnimatedButton size="sm" variant="tertiary">Full Board</AnimatedButton>
                </Link>
              </div>
              <div className="space-y-4 md:space-y-5">
                {topStudents.map((student, index) => (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`p-4 rounded-lg ${
                      student.id === studentData.rank 
                        ? 'bg-eco-100 border-2 border-eco-500' 
                        : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-white text-sm ${
                          index === 0 ? 'bg-yellow-500' :
                          index === 1 ? 'bg-gray-400' :
                          'bg-orange-500'
                        }`}>
                          {student.rank}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 text-sm md:text-base">{student.name}</div>
                          <div className="text-xs md:text-sm text-gray-600">{student.school}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-eco-600 text-sm md:text-base">{student.points}</div>
                        <div className="text-xs md:text-sm text-gray-500">{student.badges} badges</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card3D>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card3D className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center">Quick Actions 🚀</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: 'Take Quiz', icon: '🧠', path: '/quizzes', color: 'primary' },
                { label: 'New Challenge', icon: '🎯', path: '/challenges', color: 'secondary' },
                { label: 'Upload Proof', icon: '📸', path: '/upload', color: 'tertiary' },
                { label: 'View Profile', icon: '👤', path: '/profile', color: 'outline' },
              ].map((action, index) => (
                <Link key={index} to={action.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AnimatedButton 
                      variant={action.color} 
                      className="w-full h-20 md:h-24 flex flex-col items-center justify-center text-center"
                    >
                      <span className="text-xl md:text-2xl mb-1">{action.icon}</span>
                      <span className="text-xs md:text-sm">{action.label}</span>
                    </AnimatedButton>
                  </motion.div>
                </Link>
              ))}
            </div>
          </Card3D>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentDashboard;