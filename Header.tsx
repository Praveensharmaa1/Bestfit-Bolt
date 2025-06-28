import React, { useState } from 'react';
import { Menu, X, FileText, Brain, MessageCircle, BookOpen, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 p-3 rounded-xl shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 bg-orange-500 rounded-full p-1">
                <Sparkles className="h-3 w-3 text-white" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold gradient-text">BestFit</span>
              <span className="text-2xl font-bold text-gray-900">Resume</span>
              <div className="text-xs text-gray-500 font-medium">AI-Powered Career Success</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('templates')}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <FileText className="h-4 w-4" />
              <span>Templates</span>
            </button>
            <button 
              onClick={() => scrollToSection('interview-tips')}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Interview Prep</span>
            </button>
            <button 
              onClick={() => scrollToSection('personality-development')}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <Brain className="h-4 w-4" />
              <span>Skills</span>
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <BookOpen className="h-4 w-4" />
              <span>Resources</span>
            </button>
            <div className="flex items-center space-x-3">
              <button className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
                Sign In
              </button>
              <button className="btn-primary">
                Start Free Trial
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-6 shadow-lg">
            <div className="flex flex-col space-y-6">
              <button 
                onClick={() => scrollToSection('templates')}
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 px-4 py-2 font-medium"
              >
                <FileText className="h-5 w-5" />
                <span>Resume Templates</span>
              </button>
              <button 
                onClick={() => scrollToSection('interview-tips')}
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 px-4 py-2 font-medium"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Interview Preparation</span>
              </button>
              <button 
                onClick={() => scrollToSection('personality-development')}
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 px-4 py-2 font-medium"
              >
                <Brain className="h-5 w-5" />
                <span>Skill Development</span>
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 px-4 py-2 font-medium"
              >
                <BookOpen className="h-5 w-5" />
                <span>Career Resources</span>
              </button>
              <div className="px-4 pt-4 border-t border-gray-200">
                <button className="w-full text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium mb-4">
                  Sign In
                </button>
                <button className="w-full btn-primary">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;