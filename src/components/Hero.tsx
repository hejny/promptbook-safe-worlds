
import { Button } from "@/components/ui/button";
import { Shield, Github } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-[#1A1F2C] to-[#2A2F3C]">
      <div className="animate-fade-in space-y-6 max-w-4xl">
        <Shield className="w-16 h-16 text-[#9b87f5] mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9]">
          Secure Your AI Interactions with Promptbook
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          The first declarative language designed to protect against prompt injection attacks while making LLM interactions more reliable
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <Button size="lg" className="bg-[#9b87f5] hover:bg-[#8b77e5]">
            Get Early Access
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Github className="w-5 h-5" />
            View on GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
