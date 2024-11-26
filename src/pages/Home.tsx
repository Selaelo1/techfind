import React from "react";
import { ArrowRight, Briefcase, Users, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 h-screen flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connect with Top Tech Talent
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Your gateway to exceptional tech freelancers and opportunities. No
            subscriptions, just a simple 5% service fee.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/register?type=client"
              className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-200 flex items-center"
            >
              Hire Talent <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/register?type=freelancer"
              className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-black"
            >
              Find Work
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose TechFind?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're revolutionizing the freelance tech industry with our unique
              approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-black text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Verified Profiles</h3>
              <p className="text-gray-600">
                All profiles are manually verified by our admin team
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-black text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Low 5% Fee</h3>
              <p className="text-gray-600">
                No subscriptions, just a simple service fee
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-black text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Network Building</h3>
              <p className="text-gray-600">
                Connect with professionals in your field
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-black text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Quality Projects</h3>
              <p className="text-gray-600">
                Access high-value tech opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Talents Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Talents
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <img
                  src={`https://images.unsplash.com/photo-167${i}956217${i}-c5c242f4${i}d${i}?auto=format&fit=crop&w=500&q=80`}
                  alt="Profile"
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold text-lg text-center mb-2">John Doe</h3>
                <p className="text-gray-600 text-center mb-4">
                  Senior Full Stack Developer
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    React
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    AWS
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
