
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-[#1A1F2C]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9]">
          Ready to Secure Your AI Stack?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join the growing community of developers building secure AI applications with Promptbook
        </p>
        <Button 
          size="lg" 
          className="bg-[#9b87f5] hover:bg-[#8b77e5] gap-2"
          onClick={() => window.open('https://discord.gg/HHJrqYjq66', '_blank')}
        >
          Get Started <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
