import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card3D from '../components/Card3D';
import AnimatedButton from '../components/AnimatedButton';
import { teacherData, leaderboard } from '../data/dummyData';

const TeacherDashboard = () => {
  const classStats = [
    { label: 'Total Students', value: teacherData.students, icon: '👨‍🎓', color: 'eco-gradient' },
    { label: 'Active Classes', value: teacherData.classes, icon: '📚', color: 'ocean-gradient' },
    { label: 'Total Points', value: `${teacherData.totalPoints.toLocaleString()}`, icon: '⭐', color: 'earth-gradient' },
    { label: 'Avg. Score', value: '87%', icon: '📊', color: 'eco-gradient' },
  ];

  const recentActivity = [
    { student: 'Alex Green', action: 'Completed Climate Quiz', points: 85, time: '2 hours ago' },
    { student: 'Maya Earth', action: 'Planted a Tree Challenge', points: 100, time: '4 hours ago' },
    { student: 'Sam Ocean', action: 'Water Conservation Quiz', points: 92, time: '6 hours ago' },
    { student: 'Luna Forest', action: 'Recycling Challenge', points: 75, time: '1 day ago' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gradient mb-2">
                Welcome, {teacherData.name}! 👩‍🏫
              </h1>
              <p className="text-xl text-gray-600">
                Inspiring the next generation of eco-warriors at {teacherData.school}
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-6xl animate-bounce-slow"
            >
              {teacherData.avatar}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {classStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card3D className="text-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="text-3xl mb-2"
                >
                  {stat.icon}
                </motion.div>
                <div className={`text-2xl font-bold ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Class Performance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card3D>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Class Performance 📈</h2>
              <div className="space-y-4">
                {leaderboard.slice(0, 5).map((student, index) => (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                        index === 0 ? 'bg-yellow-500' :
                        index === 1 ? 'bg-gray-400' :
                        index === 2 ? 'bg-orange-500' :
                        'bg-eco-500'
                      }`}>
                        {student.rank}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{student.name}</div>
                        <div className="text-sm text-gray-600">{student.level}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-eco-600">{student.points}</div>
                      <div className="text-sm text-gray-500">{student.badges} badges</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card3D>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card3D>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity 🔔</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-gray-800">{activity.student}</div>
                      <div className="text-sm text-gray-500">{activity.time}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">{activity.action}</div>
                      <div className="font-bold text-eco-600">+{activity.points}</div>
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
          transition={{ delay: 0.5 }}
        >
          <Card3D>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Teacher Tools 🛠️</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Assign Challenge',
                  description: 'Create and assign new eco-challenges to your students',
                  icon: '🎯',
                  color: 'primary',
                  path: '/challenges'
                },
                {
                  title: 'View Reports',
                  description: 'Detailed analytics and progress reports for your classes',
                  icon: '📊',
                  color: 'secondary',
                  path: '/reports'
                },
                {
                  title: 'Manage Students',
                  description: 'Add, remove, and organize your student groups',
                  icon: '👥',
                  color: 'tertiary',
                  path: '/students'
                }
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Card3D className="text-center h-full">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="text-4xl mb-4"
                    >
                      {tool.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{tool.title}</h3>
                    <p className="text-gray-600 mb-6">{tool.description}</p>
                    <Link to={tool.path}>
                      <AnimatedButton variant={tool.color} className="w-full">
                        Get Started
                      </AnimatedButton>
                    </Link>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </Card3D>
        </motion.div>

        {/* Class Overview Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <Card3D>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Weekly Progress Overview 📈</h2>
            <div className="h-64 bg-gradient-to-r from-eco-100 to-ocean-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-600">Interactive charts and analytics coming soon!</p>
                <p className="text-sm text-gray-500 mt-2">Track your students' progress over time</p>
              </div>
            </div>
          </Card3D>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherDashboard;