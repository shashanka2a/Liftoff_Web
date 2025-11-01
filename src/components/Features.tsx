import { Sparkles, Zap, Target, Palette } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Brand & Identity",
    description: "Cohesive visual systems that communicate your unique value proposition and resonate with your target audience."
  },
  {
    icon: Zap,
    title: "Product Design",
    description: "Intuitive interfaces and seamless user experiences that drive engagement and convert visitors into customers."
  },
  {
    icon: Target,
    title: "Strategy & Research",
    description: "Data-driven insights and competitive analysis to position your product for maximum market impact."
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Scalable component libraries and documentation that empower your team to build consistently."
  }
];

export function Features() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Everything You Need to Launch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From concept to launch, we provide the design expertise that early-stage startups need to compete.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#6C63FF]/20 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#B388EB] flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
