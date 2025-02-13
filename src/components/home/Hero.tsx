import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Where Top Tech Talent Meets Innovation
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Join the future of tech freelancing. No subscriptions, just a
                simple 5% service fee. Connect with verified professionals and
                bring your projects to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/register?type=client"
                  className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-md hover:bg-gray-100 flex items-center justify-center text-lg font-medium transition-colors"
                >
                  Hire Talent <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/register?type=freelancer"
                  className="w-full sm:w-auto border-2 border-white px-8 py-4 rounded-md hover:bg-white hover:text-black flex items-center justify-center text-lg font-medium transition-colors"
                >
                  Find Work
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative mt-12 lg:mt-0">
                <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black opacity-50"></div>
                <img
                  src="https://images.unsplash.com/photo-1573495627361-d9b87960b12d?auto=format&fit=crop&w=1000&q=80"
                  alt="Developer working"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
