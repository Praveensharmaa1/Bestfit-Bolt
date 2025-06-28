import React from "react";
import { Button } from "../components/ui/button";
import Login from "../components/Login";

const templates = [
  {
    id: 1,
    name: "Modern Professional",
    img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Creative Designer",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Classic Corporate",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
  },
];

const Home = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col">
      {/* Login Button at top right */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-6 px-6 flex justify-end max-w-6xl mx-auto w-full">
        <Login />
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-white py-20 text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Build Your <span className="text-blue-600">AI-Optimized Resume</span> in Minutes
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Create stunning, recruiter-approved resumes with BestFit-Bolt’s AI-powered tools.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <Button className="px-8 py-4 text-lg shadow-lg hover:shadow-xl">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 text-lg hover:bg-blue-100"
            >
              Browse Templates
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-12">
            Why Choose BestFit-Bolt?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "AI Content Suggestions",
                desc:
                  "Instantly improve your resume with intelligent content tips and grammar checks.",
                icon: "🤖",
              },
              {
                title: "Beautiful Templates",
                desc:
                  "Choose from 15+ modern, industry-specific templates designed by experts.",
                icon: "🎨",
              },
              {
                title: "Multiple Versions",
                desc:
                  "Save different resume versions tailored for specific job roles and industries.",
                icon: "💾",
              },
            ].map(({ title, desc, icon }, idx) => (
              <div
                key={idx}
                className="border rounded-3xl p-8 shadow-md hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-2xl font-bold text-blue-700 mb-2">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 flex-grow">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
            Popular Resume Templates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {templates.map(({ id, name, img }) => (
              <div
                key={id}
                className="rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition cursor-pointer"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-full h-96 object-cover"
                />
                <div className="p-4 text-center">
                  <p className="text-xl font-semibold text-gray-800">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-sm select-none">
          &copy; {new Date().getFullYear()} BestFit-Bolt. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
