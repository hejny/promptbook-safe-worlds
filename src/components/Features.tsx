
import { Shield, Lock, Code, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Prompt Injection Protection",
    description: "Built-in safeguards against malicious prompt manipulation attempts",
  },
  {
    icon: Code,
    title: "Declarative Syntax",
    description: "Write clear, maintainable prompt logic with our high-level language",
  },
  {
    icon: Lock,
    title: "Security First",
    description: "Validate and sanitize inputs before they reach your AI models",
  },
  {
    icon: Zap,
    title: "Efficient Execution",
    description: "Optimized runtime for fast and reliable AI interactions",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Why Choose Promptbook?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#2A2F3C] border-none hover:bg-[#3A3F4C] transition-colors">
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 text-[#9b87f5] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
