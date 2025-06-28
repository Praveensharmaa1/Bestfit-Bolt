import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="font-inter">
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Build Your AI-Optimized Resume in Minutes
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Create stunning, recruiter-approved resumes with BestFit-Bolt.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button className="px-6 py-3 text-base">Get Started</Button>
            <Button variant="outline" className="px-6 py-3 text-base">Browse Templates</Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">Why Choose BestFit-Bolt?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Content Suggestions",
                desc: "Instantly improve your resume with intelligent content tips and grammar checks.",
              },
              {
                title: "Beautiful Templates",
                desc: "Choose from 15+ modern, industry-specific templates.",
              },
              {
                title: "Multiple Versions",
                desc: "Save different resume versions for different job roles.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="border rounded-2xl p-6 shadow hover:shadow-md transition">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Popular Resume Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((temp) => (
              <div key={temp} className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white">
                <img
                  src={`https://via.placeholder.com/600x800?text=Template+${temp}`}
                  alt={`Resume Template ${temp}`}
                  className="w-full"
                />
                <div className="p-4 text-center">
                  <p className="font-medium text-gray-700">Template {temp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} BestFit-Bolt. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

