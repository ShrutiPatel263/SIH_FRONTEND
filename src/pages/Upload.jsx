import { motion } from 'framer-motion';
import { useState } from 'react';
import Card3D from '../components/Card3D';
import AnimatedButton from '../components/AnimatedButton';

const Upload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState('');

  const challenges = [
    { id: 1, name: 'Plant a Tree', points: 100 },
    { id: 2, name: 'Zero Waste Day', points: 150 },
    { id: 3, name: 'Energy Audit', points: 200 },
    { id: 4, name: 'Water Conservation', points: 120 },
  ];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const newFiles = Array.from(files).map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null
    }));
    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const removeFile = (index) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate upload
    alert('Proof uploaded successfully! 🎉 You earned points for your challenge!');
    setUploadedFiles([]);
    setSelectedChallenge('');
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="text-6xl mb-4 animate-bounce-slow">📸</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Upload Proof
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your eco-friendly actions and earn points for your challenges!
          </p>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            {/* Challenge Selection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card3D>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Challenge 🎯</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {challenges.map((challenge) => (
                    <motion.label
                      key={challenge.id}
                      whileHover={{ scale: 1.02 }}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedChallenge === challenge.id.toString()
                          ? 'border-eco-500 bg-eco-50'
                          : 'border-gray-200 hover:border-eco-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="challenge"
                        value={challenge.id}
                        checked={selectedChallenge === challenge.id.toString()}
                        onChange={(e) => setSelectedChallenge(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-800">{challenge.name}</span>
                        <span className="text-eco-600 font-bold">+{challenge.points} pts</span>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </Card3D>
            </motion.div>

            {/* File Upload */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card3D>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Upload Photos/Videos 📱</h2>
                
                <div
                  className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                    dragActive 
                      ? 'border-eco-500 bg-eco-50' 
                      : 'border-gray-300 hover:border-eco-400'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  
                  <motion.div
                    animate={{ scale: dragActive ? 1.1 : 1 }}
                    className="text-6xl mb-4"
                  >
                    📤
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Drop files here or click to browse
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Support for images and videos up to 10MB each
                  </p>
                  
                  <AnimatedButton type="button" variant="outline">
                    Choose Files
                  </AnimatedButton>
                </div>

                {/* Uploaded Files Preview */}
                {uploadedFiles.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Uploaded Files:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {uploadedFiles.map((file, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="relative bg-gray-50 rounded-lg p-4"
                        >
                          {file.preview && (
                            <img
                              src={file.preview}
                              alt={file.name}
                              className="w-full h-32 object-cover rounded-lg mb-2"
                            />
                          )}
                          <div className="text-sm">
                            <p className="font-medium text-gray-800 truncate">{file.name}</p>
                            <p className="text-gray-600">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                          >
                            ×
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </Card3D>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card3D>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Description 📝</h2>
                <textarea
                  rows={4}
                  placeholder="Tell us about your eco-friendly action! What did you do? How did it help the environment?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-eco-500 focus:ring-2 focus:ring-eco-200 transition-all duration-300 resize-none"
                />
              </Card3D>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <AnimatedButton
                type="submit"
                size="lg"
                disabled={!selectedChallenge || uploadedFiles.length === 0}
                className="min-w-[200px]"
              >
                🚀 Submit Proof
              </AnimatedButton>
              <p className="text-sm text-gray-600 mt-4">
                Your submission will be reviewed and points will be awarded within 24 hours
              </p>
            </motion.div>
          </div>
        </form>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <Card3D className="bg-gradient-to-r from-eco-50 to-ocean-50">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">📋 Upload Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📷</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Clear Photos</h3>
                    <p className="text-gray-600 text-sm">Take clear, well-lit photos that show your eco-action</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Show Context</h3>
                    <p className="text-gray-600 text-sm">Include surroundings to provide context for your action</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📝</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Detailed Description</h3>
                    <p className="text-gray-600 text-sm">Explain what you did and its environmental impact</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Timely Upload</h3>
                    <p className="text-gray-600 text-sm">Upload within 48 hours of completing the challenge</p>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        </motion.div>
      </div>
    </div>
  );
};

export default Upload;
