import React from 'react';
import { FileText, Sparkles, CheckCircle, ArrowRight, Layout, Palette, Download } from 'lucide-react';

const ResumeBuilder = () => {
  const templates = [
    {
      name: "Professional",
      category: "Corporate",
      preview: "bg-gradient-to-br from-blue-100 to-blue-200"
    },
    {
      name: "Creative",
      category: "Design",
      preview: "bg-gradient-to-br from-purple-100 to-pink-200"
    },
    {
      name: "Modern",
      category: "Tech",
      preview: "bg-gradient-to-br from-teal-100 to-green-200"
    },
    {
      name: "Executive",
      category: "Leadership",
      preview: "bg-gradient-to-br from-gray-100 to-gray-200"
    }
  ];

  const features = [
    "AI-powered content suggestions",
    "ATS optimization scanning",
    "Real-time scoring & feedback",
    "Industry-specific templates",
    "Multiple export formats",
    "Job description matching"
  ];

  return (
    <section id="resume-builder" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Content */}
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="h-4 w-4" />
              <span>AI Resume Builder</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Build Resumes That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                Get Noticed
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our AI analyzes thousands of successful resumes and job descriptions to help you 
              create a compelling resume that passes ATS systems and impresses hiring managers.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 group">
                <span>Start Building</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                View Sample Resumes
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="space-y-6">
            {/* Template Showcase */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Layout className="h-5 w-5 mr-2 text-blue-600" />
                Professional Templates
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {templates.map((template, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className={`${template.preview} h-24 rounded-lg mb-2 flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                      <FileText className="h-8 w-8 text-gray-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">{template.name}</div>
                    <div className="text-xs text-gray-500">{template.category}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">AI Suggestions</span>
                </div>
                <p className="text-xs text-blue-700">
                  Smart content recommendations based on your experience
                </p>
              </div>
              
              <div className="bg-teal-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Palette className="h-5 w-5 text-teal-600" />
                  <span className="text-sm font-medium text-teal-900">Customization</span>
                </div>
                <p className="text-xs text-teal-700">
                  Easy color, font, and layout personalization
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium text-orange-900">ATS Ready</span>
                </div>
                <p className="text-xs text-orange-700">
                  Optimized for applicant tracking systems
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Download className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-900">Export Options</span>
                </div>
                <p className="text-xs text-green-700">
                  PDF, Word, and plain text formats
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeBuilder;