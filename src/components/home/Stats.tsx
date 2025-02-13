const stats = [
  { label: "Active Projects", value: "2,500+" },
  { label: "Verified Freelancers", value: "10,000+" },
  { label: "Success Rate", value: "95%" },
  { label: "Average Response Time", value: "4h" },
];

const Stats = () => {
  return (
    <section className="bg-black text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
