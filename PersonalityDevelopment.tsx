import React from 'react';
import { Brain, Users, Target, Lightbulb, TrendingUp, Award, Clock, Star } from 'lucide-react';

const PersonalityDevelopment = () => {
  const skillAreas = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Communication Skills",
      description: "Master active listening, public speaking, and written communication",
      progress: 75,
      color: "bg-blue-500"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Leadership & Initiative",
      description: "Develop leadership qualities and learn to take initiative",
      progress: 65,
      color: "bg-purple-500"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Problem Solving",
      description: "Enhance analytical thinking and creative solution finding",
      progress: 80,
      color: "bg-orange-500"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Emotional Intelligence",
      description: "Build self-awareness, empathy, and social skills",
      progress: 70,
      color: "bg-green-500"
    }
  ];

  const assessments = [
    {
      title: "Communication Style Assessment",
      questions: 15,
      duration: "5 min",
      category: "Communication"
    },
    {
      title: "Leadership Potential Quiz",
      questions: 20,
      duration: "8 min",
      category: "Leadership"
    },
    {
      title: "Problem-Solving Approach Test",
      questions: 12,
      duration: "4 min",
      category: "Analytical"
    }
  ];

  return (
    <section id="personality-development" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="h-4 w-4" />
            <span>Personality Development</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Develop Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
              Professional Edge
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your soft skills and personality traits that matter most in today's workplace. 
            Build the confidence and capabilities that set you apart from other candidates.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Skill Areas */}
          <div className="lg:col-span-2 mb-12 lg:mb-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Skill Development Areas</h3>
            <div className="space-y-6">
              {skillAreas.map((skill, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-start space-x-4">
                    <div className={`${skill.color} text-white p-3 rounded-lg`}>
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{skill.title}</h4>
                        <span className="text-sm font-medium text-gray-600">{skill.progress}%</span>
                      </div>
                      <p className="text-gray-600 mb-4">{skill.description}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${skill.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-orange-600 rounded-xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-6 w-6" />
                <h4 className="text-lg font-semibold">Personality Strengths Profile</h4>
              </div>
              <p className="text-purple-100 mb-4">
                Get a comprehensive analysis of your personality strengths and learn how to leverage 
                them effectively in interviews and workplace situations.
              </p>
              <button className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
                Start Profile Assessment
              </button>
            </div>
          </div>

          {/* Assessments & Tools */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Star className="h-5 w-5 mr-2 text-purple-600" />
                Quick Assessments
              </h3>
              <div className="space-y-4">
                {assessments.map((assessment, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-purple-300 transition-colors duration-200 cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900 text-sm">{assessment.title}</h4>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        {assessment.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Target className="h-3 w-3 mr-1" />
                        {assessment.questions} questions
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {assessment.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-medium">
                View All Assessments
              </button>
            </div>

            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Development Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Practice active listening in every conversation</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Ask for feedback regularly from colleagues</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Set specific goals for skill improvement</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Reflect on your daily interactions</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Success Metrics</h3>
              <p className="text-sm text-gray-600 mb-4">Track your personality development progress</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Overall Progress</span>
                  <span className="font-medium text-gray-900">72%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalityDevelopment;