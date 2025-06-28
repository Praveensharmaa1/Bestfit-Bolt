import React from 'react';
import { BookOpen, Clock, User, ArrowRight, TrendingUp, Award, Briefcase } from 'lucide-react';

const Blog = () => {
  const featuredPosts = [
    {
      title: "10 AI-Powered Resume Tips That Actually Work in 2024",
      excerpt: "Discover the latest strategies for optimizing your resume with AI tools and staying ahead in the job market.",
      author: "Sarah Johnson",
      role: "Senior HR Director",
      readTime: "5 min read",
      category: "Resume Tips",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      featured: true
    },
    {
      title: "The Complete Guide to Virtual Interview Success",
      excerpt: "Master the art of virtual interviews with these proven strategies and technical tips.",
      author: "Michael Chen",
      role: "Career Coach",
      readTime: "8 min read",
      category: "Interview Tips",
      image: "bg-gradient-to-br from-teal-400 to-teal-600"
    },
    {
      title: "Building Emotional Intelligence for Career Growth",
      excerpt: "Learn how to develop emotional intelligence skills that will accelerate your professional development.",
      author: "Dr. Lisa Rodriguez",
      role: "Workplace Psychologist",
      readTime: "6 min read",
      category: "Soft Skills",
      image: "bg-gradient-to-br from-purple-400 to-purple-600"
    }
  ];

  const recentPosts = [
    {
      title: "How to Negotiate Your Salary Like a Pro",
      author: "James Miller",
      readTime: "4 min read",
      category: "Career Growth"
    },
    {
      title: "The Future of Remote Work: What You Need to Know",
      author: "Amanda White",
      readTime: "7 min read",
      category: "Industry Trends"
    },
    {
      title: "Networking in the Digital Age: LinkedIn Strategies",
      author: "David Park",
      readTime: "5 min read",
      category: "Networking"
    },
    {
      title: "From Entry-Level to Leadership: A Career Roadmap",
      author: "Jennifer Adams",
      readTime: "9 min read",
      category: "Career Growth"
    }
  ];

  const categories = [
    { name: "Resume Tips", count: 23, icon: <BookOpen className="h-4 w-4" /> },
    { name: "Interview Tips", count: 31, icon: <User className="h-4 w-4" /> },
    { name: "Career Growth", count: 18, icon: <TrendingUp className="h-4 w-4" /> },
    { name: "Industry Trends", count: 15, icon: <Briefcase className="h-4 w-4" /> },
    { name: "Soft Skills", count: 12, icon: <Award className="h-4 w-4" /> }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            <span>Professional Insights</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Learn from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
              Industry Experts
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with insights from HR professionals, career coaches, and industry leaders. 
            Get expert advice on resume writing, interviews, and career advancement.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 mb-12 lg:mb-0">
            {/* Featured Post */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h3>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`${featuredPosts[0].image} h-48 flex items-center justify-center`}>
                  <BookOpen className="h-16 w-16 text-white opacity-50" />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPosts[0].category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPosts[0].readTime}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{featuredPosts[0].title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{featuredPosts[0].author}</div>
                        <div className="text-sm text-gray-500">{featuredPosts[0].role}</div>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 group">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Posts Grid */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.slice(1).map((post, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                    <div className={`${post.image} h-32 flex items-center justify-center`}>
                      <BookOpen className="h-8 w-8 text-white opacity-50" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h4>
                      <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                          <User className="h-3 w-3 text-gray-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{post.author}</div>
                          <div className="text-xs text-gray-500">{post.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <div className="text-gray-600">
                        {category.icon}
                      </div>
                      <span className="text-gray-700">{category.name}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{category.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts List */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Latest Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <h4 className="font-medium text-gray-900 text-sm mb-2 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                      {post.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-orange-100 text-sm mb-4">
                Get the latest career tips and industry insights delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm"
                />
                <button className="w-full bg-white text-orange-600 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;