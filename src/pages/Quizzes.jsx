import { motion } from 'framer-motion';
import { useState } from 'react';
import Card3D from '../components/Card3D';
import AnimatedButton from '../components/AnimatedButton';
import { quizzes } from '../data/dummyData';

const Quizzes = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const sampleQuestions = [
    {
      question: "What is the main cause of climate change?",
      options: [
        "Natural weather patterns",
        "Greenhouse gas emissions",
        "Solar radiation",
        "Ocean currents"
      ],
      correct: 1
    },
    {
      question: "Which renewable energy source is most widely used?",
      options: [
        "Solar power",
        "Wind power",
        "Hydroelectric power",
        "Geothermal power"
      ],
      correct: 2
    },
    {
      question: "How much of Earth's water is freshwater?",
      options: [
        "10%",
        "5%",
        "3%",
        "1%"
      ],
      correct: 2
    }
  ];

  const handleQuizStart = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === sampleQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  if (selectedQuiz && !showResult) {
    return (
      <div className="min-h-screen pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card3D>
              {/* Quiz Header */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{selectedQuiz.icon}</div>
                <h1 className="text-3xl font-bold text-gradient mb-2">{selectedQuiz.title}</h1>
                <div className="flex justify-center items-center gap-4 text-gray-600">
                  <span>Question {currentQuestion + 1} of {sampleQuestions.length}</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
                      className="bg-eco-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Question */}
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                  {sampleQuestions[currentQuestion].question}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sampleQuestions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(index)}
                      className="p-4 text-left border-2 border-gray-200 rounded-lg hover:border-eco-500 hover:bg-eco-50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="font-medium">{option}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </Card3D>
          </motion.div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / sampleQuestions.length) * 100);
    return (
      <div className="min-h-screen pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Card3D className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-8xl mb-6"
              >
                {percentage >= 80 ? '🏆' : percentage >= 60 ? '🎉' : '💪'}
              </motion.div>
              
              <h1 className="text-4xl font-bold text-gradient mb-4">Quiz Complete!</h1>
              
              <div className="text-6xl font-bold text-eco-600 mb-2">{percentage}%</div>
              <p className="text-xl text-gray-600 mb-6">
                You got {score} out of {sampleQuestions.length} questions correct!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton onClick={resetQuiz} variant="primary">
                  🔄 Try Another Quiz
                </AnimatedButton>
                <AnimatedButton onClick={resetQuiz} variant="outline">
                  📊 View All Quizzes
                </AnimatedButton>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 p-4 bg-eco-100 rounded-lg"
              >
                <p className="text-eco-800 font-semibold">
                  🌟 You earned {selectedQuiz.points} eco-points!
                </p>
              </motion.div>
            </Card3D>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="text-6xl mb-4 animate-bounce-slow">🧠</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Environmental Quizzes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Test your knowledge and learn amazing facts about our planet!
          </p>
        </motion.div>

        {/* Quiz Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizzes.map((quiz, index) => (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card3D className="h-full">
                <div className="text-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className={`text-6xl mb-4 bg-gradient-to-r ${quiz.color} bg-clip-text text-transparent`}
                  >
                    {quiz.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{quiz.title}</h3>
                  <p className="text-gray-600 mb-4">{quiz.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      quiz.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      quiz.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {quiz.difficulty}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Questions:</span>
                    <span className="font-semibold">{quiz.questions}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Points:</span>
                    <span className="font-semibold text-eco-600">+{quiz.points}</span>
                  </div>
                  {quiz.completed && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Your Score:</span>
                      <span className="font-semibold text-eco-600">{quiz.score}%</span>
                    </div>
                  )}
                </div>

                <AnimatedButton
                  onClick={() => handleQuizStart(quiz)}
                  className="w-full"
                  variant={quiz.completed ? 'outline' : 'primary'}
                >
                  {quiz.completed ? '🔄 Retake Quiz' : '🚀 Start Quiz'}
                </AnimatedButton>

                {quiz.completed && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-4 text-center"
                  >
                    <span className="text-2xl">✅</span>
                    <span className="text-sm text-green-600 ml-2">Completed!</span>
                  </motion.div>
                )}
              </Card3D>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <Card3D>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Your Quiz Stats 📊</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Completed', value: '2', icon: '✅' },
                { label: 'Average Score', value: '88%', icon: '📈' },
                { label: 'Total Points', value: '135', icon: '⭐' },
                { label: 'Streak', value: '5 days', icon: '🔥' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-eco-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card3D>
        </motion.div>
      </div>
    </div>
  );
};

export default Quizzes;