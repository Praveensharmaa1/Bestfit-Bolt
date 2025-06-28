import React from "react";
import { Button } from "../components/ui/button";
import Login from "../components/Login";

const Home = () => {
  return (
    <div className="font-inter text-gray-800 bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow">
        <h1 className="text-2xl font-bold text-blue-600">BestFit-Bolt</h1>
        <Login />
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1531497865144-0464ef8fbf03?auto=format&fit=crop&w=1350&q=80')`,
        }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-xl max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Build a Stunning Resume in Minutes
          </h2>
          <p className="text-lg md:text-xl mb-6">
            AI-powered. Professionally designed. Instantly downloadable.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button className="px-6 py-3 text-lg shadow">Get Started</Button>
            <Button
              variant="outline"
              className="px-6 py-3 text-lg bg-white text-blue-600 hover:bg-blue-100"
            >
              Browse Templates
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why BestFit-Bolt?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤖",
                title: "AI Content Assistance",
                desc: "Get smart suggestions, grammar corrections, and personalized prompts.",
              },
              {
                icon: "🎨",
                title: "Modern Templates",
                desc: "Choose from 15+ sleek, ATS-friendly resume layouts.",
              },
              {
                icon: "🧾",
                title: "Save Versions",
                desc: "Tailor your resume for multiple roles and keep versions organized.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{icon}</div>
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Explore Our Top Resume Templates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
              >
                <img
                  src={`https://images.unsplash.com/photo-1581091012184-7a5c9bd91f5c?auto=format&fit=crop&w=600&q=80&sig=${id}`}
                  alt={`Resume Template ${id}`}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold">Template {id}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} BestFit-Bolt. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
