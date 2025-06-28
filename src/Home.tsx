import React from 'react';

const Home = () => {
  return (
    <div className="font-inter bg-white text-gray-900">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">BestFit-Bolt</h1>
        <nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
            Login
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-br from-blue-100 to-white">
        <h2 className="text-4xl font-extrabold leading-tight mb-4">
          Build Your AI-Optimized Resume in Minutes
        </h2>
        <p className="text-lg mb-8 text-gray-600">
          Powered by smart suggestions, templates, and one-click customization.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
          Create Resume Now
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">Why Choose BestFit-Bolt?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: '15+ Modern Templates', desc: 'Designed by HR experts, categorized by profession.' },
            { title: 'AI-Powered Suggestions', desc: 'Improve your writing with grammar + tone fixes.' },
            { title: 'One-Click Export', desc: 'Download resumes as polished PDFs anytime.' },
          ].map((feature, idx) => (
            <div key={idx} className="border p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Template Preview */}
      <section className="bg-gray-100 py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-10">Preview Our Templates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-white rounded-xl shadow p-4 hover:shadow-md transition">
              <div className="h-48 bg-gray-200 rounded mb-3"></div>
              <p className="text-center font-medium text-gray-700">Template {id}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t text-sm text-gray-500">
        © 2025 BestFit-Bolt. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;