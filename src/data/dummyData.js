export const quizzes = [
  {
    id: 1,
    title: "Climate Change Basics",
    description: "Test your knowledge about global warming and climate change",
    difficulty: "Easy",
    questions: 10,
    points: 50,
    icon: "🌡️",
    color: "from-red-400 to-orange-500",
    completed: true,
    score: 85
  },
  {
    id: 2,
    title: "Ocean Conservation",
    description: "Learn about marine ecosystems and ocean protection",
    difficulty: "Medium",
    questions: 15,
    points: 75,
    icon: "🌊",
    color: "from-blue-400 to-cyan-500",
    completed: false,
    score: null
  },
  {
    id: 3,
    title: "Renewable Energy",
    description: "Explore solar, wind, and other clean energy sources",
    difficulty: "Hard",
    questions: 20,
    points: 100,
    icon: "⚡",
    color: "from-yellow-400 to-orange-500",
    completed: false,
    score: null
  },
  {
    id: 4,
    title: "Wildlife Protection",
    description: "Discover endangered species and conservation efforts",
    difficulty: "Medium",
    questions: 12,
    points: 60,
    icon: "🦋",
    color: "from-green-400 to-emerald-500",
    completed: true,
    score: 92
  }
];

export const challenges = [
  {
    id: 1,
    title: "Plant a Tree",
    description: "Plant a tree in your neighborhood and upload a photo",
    points: 100,
    difficulty: "Easy",
    duration: "1 day",
    icon: "🌱",
    status: "completed",
    progress: 100,
    category: "Nature"
  },
  {
    id: 2,
    title: "Zero Waste Day",
    description: "Go a full day without creating any waste",
    points: 150,
    difficulty: "Medium",
    duration: "1 day",
    icon: "♻️",
    status: "in-progress",
    progress: 60,
    category: "Waste"
  },
  {
    id: 3,
    title: "Energy Audit",
    description: "Conduct an energy audit of your home",
    points: 200,
    difficulty: "Hard",
    duration: "3 days",
    icon: "⚡",
    status: "not-started",
    progress: 0,
    category: "Energy"
  },
  {
    id: 4,
    title: "Water Conservation",
    description: "Implement water-saving techniques for a week",
    points: 120,
    difficulty: "Medium",
    duration: "7 days",
    icon: "💧",
    status: "in-progress",
    progress: 30,
    category: "Water"
  }
];

export const leaderboard = [
  {
    id: 1,
    name: "Alex Green",
    school: "Eco Elementary",
    points: 2450,
    badges: 12,
    avatar: "👦",
    rank: 1,
    level: "Eco Champion"
  },
  {
    id: 2,
    name: "Maya Earth",
    school: "Nature High School",
    points: 2380,
    badges: 11,
    avatar: "👧",
    rank: 2,
    level: "Planet Protector"
  },
  {
    id: 3,
    name: "Sam Ocean",
    school: "Blue Wave Academy",
    points: 2250,
    badges: 10,
    avatar: "👦",
    rank: 3,
    level: "Ocean Guardian"
  },
  {
    id: 4,
    name: "Luna Forest",
    school: "Green Valley School",
    points: 2100,
    badges: 9,
    avatar: "👧",
    rank: 4,
    level: "Forest Friend"
  },
  {
    id: 5,
    name: "Rio Climate",
    school: "Sustainable Studies",
    points: 1950,
    badges: 8,
    avatar: "👦",
    rank: 5,
    level: "Climate Hero"
  }
];

export const badges = [
  {
    id: 1,
    name: "Tree Planter",
    description: "Planted 10 trees",
    icon: "🌳",
    earned: true,
    rarity: "common",
    points: 100
  },
  {
    id: 2,
    name: "Water Saver",
    description: "Saved 1000L of water",
    icon: "💧",
    earned: true,
    rarity: "uncommon",
    points: 200
  },
  {
    id: 3,
    name: "Quiz Master",
    description: "Completed 20 quizzes",
    icon: "🧠",
    earned: true,
    rarity: "rare",
    points: 300
  },
  {
    id: 4,
    name: "Eco Warrior",
    description: "Completed 50 challenges",
    icon: "⚔️",
    earned: false,
    rarity: "epic",
    points: 500
  },
  {
    id: 5,
    name: "Planet Savior",
    description: "Reached 5000 eco-points",
    icon: "🌍",
    earned: false,
    rarity: "legendary",
    points: 1000
  }
];

export const studentData = {
  name: "Alex Green",
  level: "Eco Champion",
  points: 2450,
  rank: 1,
  badges: badges.filter(b => b.earned).length,
  completedQuizzes: 15,
  completedChallenges: 8,
  avatar: "👦",
  joinDate: "2024-01-15",
  streak: 12
};

export const teacherData = {
  name: "Ms. Sarah Johnson",
  school: "Eco Elementary",
  students: 28,
  classes: 3,
  totalPoints: 45600,
  avatar: "👩‍🏫"
};