import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Templates from './components/Templates';
import InterviewBlogs from './components/InterviewBlogs';
import PersonalityDevelopment from './components/PersonalityDevelopment';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Templates />
      <InterviewBlogs />
      <PersonalityDevelopment />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;