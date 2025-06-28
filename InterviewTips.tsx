import React, { useState } from 'react';
import { MessageCircle, Play, CheckCircle, ArrowRight, Mic, Camera, Target } from 'lucide-react';

const InterviewTips = () => {
  const [activeTab, setActiveTab] = useState('questions');

  const questionCategories = [
    {
      id: 'behavioral',
      title: 'Behavioral Questions',
      count: 25,
      icon: <MessageCircle className="h-5 w-5" />,
      sample: "Tell me about a time you faced a significant challenge..."
    },
    {
      id: 'technical',
      title: 'Technical Questions',
      count: 40,
      icon: <Target className="h-5 w-5" />,
      sample: "Explain your approach to problem-solving in your field..."
    },
    {
      id: 'situational',
      title: 'Situational Questions',
      count: 30,
      icon: <Play className="h-5 w-5" />,
      sample: "How would you handle a disagreement with a team member..."
    }
  ];

  const practiceFeatures = [
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Voice Analysis",
      description: "Get feedback on pace, clarity, and confidence"
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Video Practice",
      description: "Record yourself and review body language"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "STAR Method",
      description: "Master the Situation, Task, Action, Result framework"
    }
  ];

  return (
    <section id="interview-tips" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4" />
            <span>Interview Preparation</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Master Every{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500">
              Interview
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practice with AI-powered mock interviews, get personalized feedback, and build confidence 
            with our comprehensive interview preparation platform.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Tab Navigation */}
          <div>
            <div className="flex space-x-1 bg-white rounded-lg p-1 mb-8">
              <button
                onClick={() => setActiveTab('questions')}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'questions'
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Interview Questions
              </button>
              <button
                onClick={() => setActiveTab('practice')}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'practice'
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Mock Interviews
              </button>
            </div>

            {/* Questions Tab */}
            {activeTab === 'questions' && (
              <div className="space-y-4">
                {questionCategories.map((category) => (
                  <div key={category.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="bg-teal-100 text-teal-600 p-2 rounded-lg">
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                          <p className="text-sm text-gray-500">{category.count} questions available</p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <p className="text-gray-600 text-sm italic">"{category.sample}"</p>
                  </div>
                ))}
              </div>
            )}

            {/* Practice Tab */}
            {activeTab === 'practice' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Practice Features</h3>
                  <div className="space-y-4">
                    {practiceFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-teal-100 text-teal-600 p-2 rounded-lg">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-teal-600 text-white py-4 rounded-lg hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Start Mock Interview</span>
                </button>
              </div>
            )}
          </div>

          {/* Success Metrics */}
          <div className="mt-12 lg:mt-0 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Interview Success Metrics</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Confidence Level</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-teal-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">85%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Response Quality</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">92%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Communication Skills</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">78%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Ready for Your Interview?</h3>
              <p className="text-teal-100 mb-4">
                Complete our interview readiness assessment and get a personalized preparation plan.
              </p>
              <button className="bg-white text-teal-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
                Take Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewTips;