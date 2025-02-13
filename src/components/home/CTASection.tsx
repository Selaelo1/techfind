import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who trust TechFind for their next
          opportunity. No subscriptions, just possibilities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register?type=client"
            className="w-full sm:w-auto bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-md hover:bg-gray-100 inline-flex items-center justify-center text-base md:text-lg font-medium"
          >
            Post a Project <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/register?type=freelancer"
            className="w-full sm:w-auto border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-md hover:bg-white hover:text-black inline-flex items-center justify-center text-base md:text-lg font-medium"
          >
            Join as Freelancer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
