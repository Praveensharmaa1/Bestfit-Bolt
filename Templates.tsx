import React, { useState } from 'react';
import { FileText, Download, Eye, Star, Filter, Search, CheckCircle, Sparkles } from 'lucide-react';

const Templates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Templates', count: 50 },
    { id: 'professional', name: 'Professional', count: 15 },
    { id: 'creative', name: 'Creative', count: 12 },
    { id: 'modern', name: 'Modern', count: 18 },
    { id: 'executive', name: 'Executive', count: 8 },
    { id: 'entry-level', name: 'Entry Level', count: 10 }
  ];

  const templates = [
    {
      id: 1,
      name: "Executive Professional",
      category: "executive",
      rating: 4.9,
      downloads: "25K+",
      featured: true,
      description: "Perfect for C-level executives and senior management positions",
      atsScore: 98,
      preview: {
        name: "JACK WYATT",
        title: "Product Manager & TEDx Speaker",
        photo: true,
        sections: ["ABOUT ME", "EDUCATION", "EXPERIENCE", "MY SKILLS"],
        layout: "sidebar",
        color: "orange"
      }
    },
    {
      id: 2,
      name: "Creative Designer",
      category: "creative",
      rating: 4.8,
      downloads: "18K+",
      featured: true,
      description: "Ideal for designers, artists, and creative professionals",
      atsScore: 94,
      preview: {
        name: "CHLOE ANDERSON",
        title: "Events Manager",
        photo: true,
        sections: ["EXPERIENCE", "EDUCATION", "SKILLS"],
        layout: "clean",
        color: "blue"
      }
    },
    {
      id: 3,
      name: "Tech Professional",
      category: "modern",
      rating: 4.9,
      downloads: "32K+",
      featured: true,
      description: "Optimized for software engineers and tech roles",
      atsScore: 96,
      preview: {
        name: "ALEX CHEN",
        title: "Senior Software Engineer",
        photo: false,
        sections: ["EXPERIENCE", "PROJECTS", "SKILLS", "EDUCATION"],
        layout: "modern",
        color: "teal"
      }
    },
    {
      id: 4,
      name: "Business Analyst",
      category: "professional",
      rating: 4.7,
      downloads: "22K+",
      featured: false,
      description: "Clean design for business and finance professionals",
      atsScore: 92,
      preview: {
        name: "SARAH JOHNSON",
        title: "Business Analyst",
        photo: false,
        sections: ["SUMMARY", "EXPERIENCE", "EDUCATION", "CERTIFICATIONS"],
        layout: "traditional",
        color: "green"
      }
    },
    {
      id: 5,
      name: "Marketing Specialist",
      category: "creative",
      rating: 4.8,
      downloads: "19K+",
      featured: false,
      description: "Eye-catching design for marketing professionals",
      atsScore: 90,
      preview: {
        name: "MARIA GARCIA",
        title: "Digital Marketing Manager",
        photo: true,
        sections: ["ABOUT", "EXPERIENCE", "ACHIEVEMENTS", "SKILLS"],
        layout: "creative",
        color: "purple"
      }
    },
    {
      id: 6,
      name: "Fresh Graduate",
      category: "entry-level",
      rating: 4.6,
      downloads: "28K+",
      featured: false,
      description: "Perfect for new graduates and entry-level positions",
      atsScore: 88,
      preview: {
        name: "DAVID PARK",
        title: "Recent Computer Science Graduate",
        photo: false,
        sections: ["EDUCATION", "PROJECTS", "INTERNSHIPS", "SKILLS"],
        layout: "simple",
        color: "blue"
      }
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const ResumePreview = ({ template }) => {
    const colorClasses = {
      orange: 'bg-orange-500',
      blue: 'bg-blue-500',
      teal: 'bg-teal-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500'
    };

    if (template.preview.layout === 'sidebar') {
      return (
        <div className="bg-white h-64 rounded-lg shadow-sm overflow-hidden">
          <div className="flex h-full">
            <div className={`w-1/3 ${colorClasses[template.preview.color]} p-3 text-white`}>
              {template.preview.photo && (
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full mb-3"></div>
              )}
              <div className="space-y-2">
                <div className="h-1 bg-white bg-opacity-60 rounded w-3/4"></div>
                <div className="h-1 bg-white bg-opacity-40 rounded w-1/2"></div>
              </div>
              <div className="mt-4 space-y-1">
                <div className="h-1 bg-white bg-opacity-60 rounded w-full"></div>
                <div className="h-1 bg-white bg-opacity-40 rounded w-4/5"></div>
              </div>
            </div>
            <div className="w-2/3 p-3">
              <div className="text-xs font-bold text-gray-800 mb-1">{template.preview.name}</div>
              <div className="text-xs text-gray-600 mb-3">{template.preview.title}</div>
              <div className="space-y-2">
                {template.preview.sections.slice(0, 3).map((section, idx) => (
                  <div key={idx}>
                    <div className="text-xs font-semibold text-gray-700 mb-1">{section}</div>
                    <div className="space-y-1">
                      <div className="h-1 bg-gray-200 rounded w-full"></div>
                      <div className="h-1 bg-gray-200 rounded w-4/5"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white h-64 rounded-lg shadow-sm overflow-hidden p-4">
        <div className="text-center mb-3">
          <div className="text-sm font-bold text-gray-800">{template.preview.name}</div>
          <div className="text-xs text-gray-600">{template.preview.title}</div>
          {template.preview.photo && (
            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mt-2"></div>
          )}
        </div>
        <div className="space-y-3">
          {template.preview.sections.slice(0, 3).map((section, idx) => (
            <div key={idx}>
              <div className={`text-xs font-semibold mb-1 ${colorClasses[template.preview.color]} text-white px-2 py-1 rounded`}>
                {section}
              </div>
              <div className="space-y-1 px-2">
                <div className="h-1 bg-gray-200 rounded w-full"></div>
                <div className="h-1 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="templates" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <FileText className="h-4 w-4" />
            <span>Professional Resume Templates</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose Your Perfect{' '}
            <span className="gradient-text">Template</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Professionally designed, ATS-optimized templates that help you stand out. 
            Each template is crafted by design experts and tested with real hiring managers.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 w-80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="group relative">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover">
                {/* Template Preview */}
                <div className="relative overflow-hidden">
                  {template.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                      ⭐ Featured
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10">
                    {template.atsScore}% ATS
                  </div>
                  
                  <div className="p-4">
                    <ResumePreview template={template} />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>Preview</span>
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Use Template</span>
                    </button>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{template.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{template.downloads} downloads</span>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-600">ATS Optimized</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700`}>
                      {categories.find(cat => cat.id === template.category)?.name}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Use Template →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Template Success Stories</h3>
            <p className="text-gray-600">Real results from professionals who used our templates</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sarah M. - Marketing Manager</h4>
              <p className="text-sm text-gray-600">"Got 3 interview calls in the first week using the Creative Designer template!"</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">David L. - Software Engineer</h4>
              <p className="text-sm text-gray-600">"The Tech Professional template helped me land my dream job at Google!"</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Lisa K. - Executive</h4>
              <p className="text-sm text-gray-600">"Executive Professional template got me noticed by Fortune 500 companies!"</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't Find the Perfect Template?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our AI can create a custom template based on your industry, experience level, and personal preferences.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200">
              Create Custom Template
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templates;