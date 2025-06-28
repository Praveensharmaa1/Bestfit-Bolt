import React from 'react';
import { FileText, MessageCircle, Brain, BookOpen, Zap, Target, Users, Award, Sparkles, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "AI Resume Builder",
      description: "Create ATS-optimized resumes with intelligent content suggestions and real-time scoring.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      stats: "98% ATS Pass Rate"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Interview Mastery",
      description: "Practice with AI-powered mock interviews and get personalized feedback from experts.",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      stats: "94% Success Rate"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Personality Development",
      description: "Enhance your soft skills with targeted assessments and personalized improvement plans.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      stats: "89% Skill Improvement"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Expert Resources",
      description: "Access curated content from industry professionals and successful career changers.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      stats: "500+ Expert Articles"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Analysis",
      description: "Get instant feedback on resume effectiveness and interview performance metrics.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      stats: "Instant Feedback"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Job Matching",
      description: "Optimize your resume for specific job descriptions with AI-powered matching algorithms.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      stats: "85% Match Accuracy"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Networking Guidance",
      description: "Build meaningful professional connections with strategic networking tips and templates.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      stats: "3x More Connections"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Success Tracking",
      description: "Monitor your job application success rate and continuously improve your approach.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      stats: "Track Everything"
    }
  ];

  const achievements = [
    { number: "500K+", label: "Resumes Created", icon: <FileText className="h-6 w-6" /> },
    { number: "98%", label: "ATS Pass Rate", icon: <Target className="h-6 w-6" /> },
    { number: "94%", label: "Interview Success", icon: <MessageCircle className="h-6 w-6" /> },
    { number: "4.9/5", label: "User Rating", icon: <Award className="h-6 w-6" /> }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <Sparkles className="h-4 w-4" />
            <span>Complete Career Success Platform</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Succeed</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our comprehensive platform combines cutting-edge AI technology with proven career strategies 
            to give you the competitive edge in today's job market.
          </p>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-xl">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className={`${feature.bgColor} ${feature.textColor} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4 relative z-10">
                {feature.description}
              </p>
              
              <div className={`inline-flex items-center space-x-2 ${feature.bgColor} ${feature.textColor} px-3 py-1 rounded-full text-sm font-medium relative z-10`}>
                <TrendingUp className="h-3 w-3" />
                <span>{feature.stats}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of thousands of professionals who've accelerated their careers with our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 text-lg">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 text-lg">
                  View Success Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;