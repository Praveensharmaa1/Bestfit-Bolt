import React from 'react';
import { MessageCircle, Clock, User, ArrowRight, TrendingUp, Target, Lightbulb, Award } from 'lucide-react';

const InterviewBlogs = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "The Ultimate Guide to FAANG Interview Success",
      excerpt: "Master the interview process at Google, Apple, Amazon, Netflix, and Facebook with insider tips from former hiring managers.",
      author: "Sarah Chen",
      role: "Former Google Recruiter",
      readTime: "12 min read",
      category: "Tech Interviews",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      featured: true,
      tags: ["FAANG", "Technical", "Behavioral"],
      publishDate: "2 days ago"
    },
    {
      id: 2,
      title: "Behavioral Interview Questions: The STAR Method Mastery",
      excerpt: "Learn how to structure compelling answers using the STAR method with real examples that impressed hiring managers.",
      author: "Michael Rodriguez",
      role: "Senior HR Director",
      readTime: "8 min read",
      category: "Behavioral",
      image: "bg-gradient-to-br from-teal-500 to-green-600",
      featured: true,
      tags: ["STAR Method", "Behavioral", "Storytelling"],
      publishDate: "1 week ago"
    },
    {
      id: 3,
      title: "Virtual Interview Mastery: Technical Setup & Body Language",
      excerpt: "Complete guide to excelling in virtual interviews, from technical setup to reading virtual body language cues.",
      author: "Dr. Lisa Park",
      role: "Communication Expert",
      readTime: "10 min read",
      category: "Virtual Interviews",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      featured: true,
      tags: ["Remote", "Technology", "Communication"],
      publishDate: "3 days ago"
    }
  ];

  const quickTips = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Research Deep",
      tip: "Spend 2+ hours researching the company, role, and interviewer's background"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Prepare Stories",
      tip: "Have 5-7 STAR method stories ready covering different competencies"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Practice Out Loud",
      tip: "Record yourself answering questions to improve delivery and confidence"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Ask Smart Questions",
      tip: "Prepare 3-5 thoughtful questions that show genuine interest and research"
    }
  ];

  const interviewTypes = [
    {
      type: "Technical Interviews",
      articles: 15,
      color: "bg-blue-500",
      description: "Coding challenges, system design, and technical problem-solving"
    },
    {
      type: "Behavioral Interviews",
      articles: 22,
      color: "bg-green-500",
      description: "STAR method, leadership scenarios, and culture fit questions"
    },
    {
      type: "Case Study Interviews",
      articles: 8,
      color: "bg-purple-500",
      description: "Business cases, consulting frameworks, and analytical thinking"
    },
    {
      type: "Panel Interviews",
      articles: 12,
      color: "bg-orange-500",
      description: "Multi-interviewer dynamics and group presentation skills"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <MessageCircle className="h-4 w-4" />
            <span>Interview Success Resources</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Master Every{' '}
            <span className="gradient-text">Interview</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry experts, former hiring managers, and successful candidates. 
            Get insider tips that actually work in today's competitive job market.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 mb-12 lg:mb-0">
            {/* Featured Articles */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Interview Guides</h3>
              <div className="space-y-8">
                {featuredArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover">
                    <div className="lg:flex">
                      <div className={`${article.image} lg:w-1/3 h-48 lg:h-auto flex items-center justify-center relative`}>
                        <MessageCircle className="h-16 w-16 text-white opacity-50" />
                        {article.featured && (
                          <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                            ⭐ Featured
                          </div>
                        )}
                      </div>
                      <div className="lg:w-2/3 p-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                            {article.category}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Clock className="h-4 w-4 mr-1" />
                            {article.readTime}
                          </div>
                          <span className="text-gray-500 text-sm">{article.publishDate}</span>
                        </div>
                        
                        <h4 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                          {article.title}
                        </h4>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">{article.excerpt}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {article.tags.map((tag, index) => (
                            <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                              <User className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{article.author}</div>
                              <div className="text-sm text-gray-500">{article.role}</div>
                            </div>
                          </div>
                          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 group">
                            <span className="font-medium">Read Full Guide</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interview Types */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Interview Types & Strategies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {interviewTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className={`${type.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{type.type}</h4>
                          <span className="text-sm text-gray-500">{type.articles} articles</span>
                        </div>
                        <p className="text-gray-600 text-sm">{type.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-blue-600" />
                Quick Interview Tips
              </h3>
              <div className="space-y-4">
                {quickTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <div className="text-blue-600">
                        {tip.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">{tip.title}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{tip.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Success Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Interview Success Rate</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">94%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Confidence Level</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">89%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Preparation Score</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">96%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Weekly Interview Tips</h3>
              <p className="text-teal-100 text-sm mb-4">
                Get exclusive interview strategies and insider tips delivered every Tuesday.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 text-sm"
                />
                <button className="w-full bg-white text-teal-600 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm font-medium">
                  Subscribe Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewBlogs;