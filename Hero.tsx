import React from 'react';
import { ArrowRight, Sparkles, Target, Zap, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 bg-mesh relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Content */}
          <div className="mb-16 lg:mb-0">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-md">
              <Sparkles className="h-4 w-4" />
              <span>🚀 #1 AI-Powered Career Platform</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Land Your{' '}
              <span className="gradient-text">
                Dream Job
              </span>{' '}
              with AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              Create stunning ATS-optimized resumes, master interviews with AI coaching, 
              and develop winning personality traits. Join 500,000+ professionals who've 
              accelerated their careers with BestFit-Resume.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button className="btn-primary group text-lg">
                <span>Create Resume Free</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="btn-secondary text-lg">
                View Success Stories
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">500K+</div>
                </div>
                <div className="text-sm text-gray-600 font-medium">Success Stories</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-purple-600 mr-2" />
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">98%</div>
                </div>
                <div className="text-sm text-gray-600 font-medium">Interview Success</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-orange-500 mr-2" />
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">4.9/5</div>
                </div>
                <div className="text-sm text-gray-600 font-medium">User Rating</div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual */}
          <div className="relative">
            {/* Main Resume Preview */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    JS
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900 mb-1">John Smith</div>
                    <div className="text-sm text-gray-600 mb-2">Senior Software Engineer</div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">Available</span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">Remote</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-4/5"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-3/5"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm bg-green-50 p-3 rounded-lg">
                  <Target className="h-5 w-5 text-green-600" />
                  <span className="text-green-700 font-medium">ATS Score: 98% ✨</span>
                </div>
                <div className="flex items-center space-x-3 text-sm bg-blue-50 p-3 rounded-lg">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-700 font-medium">AI Optimized</span>
                </div>
                <div className="flex items-center space-x-3 text-sm bg-purple-50 p-3 rounded-lg">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                  <span className="text-purple-700 font-medium">Interview Ready</span>
                </div>
              </div>
            </div>
            
            {/* Floating Achievement Cards */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl shadow-lg animate-float z-20">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6" />
                <div>
                  <div className="text-sm font-bold">Job Offer!</div>
                  <div className="text-xs opacity-90">Google Inc.</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-teal-500 to-blue-500 text-white p-4 rounded-xl shadow-lg animate-float-delayed z-20">
              <div className="flex items-center space-x-2">
                <Target className="h-6 w-6" />
                <div>
                  <div className="text-sm font-bold">Interview</div>
                  <div className="text-xs opacity-90">Scheduled</div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl transform rotate-6 -z-10"></div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm font-medium mb-8">Trusted by professionals at</p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Google</div>
            <div className="text-2xl font-bold text-gray-400">Microsoft</div>
            <div className="text-2xl font-bold text-gray-400">Amazon</div>
            <div className="text-2xl font-bold text-gray-400">Apple</div>
            <div className="text-2xl font-bold text-gray-400">Meta</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;