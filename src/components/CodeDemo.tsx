
import { Card } from "@/components/ui/card";

const CodeDemo = () => {
  return (
    <section className="py-24 bg-[#2A2F3C]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Secure by Design
          </h2>
          <Card className="bg-[#1A1F2C] border-none p-6 font-mono text-sm">
            <pre className="text-gray-300">
              <code>{`import { prompt, promptTemplate } from '@promptbook/utils';

const promptString1 = prompt\`
    Correct the following sentence:

    > \${unsecureUserInput}
\`;

const promptString2 = promptTemplate\`
    Correct the following sentence:

    > \${unsecureUserInput}
\`;`}</code>
            </pre>
          </Card>
          <p className="text-center text-gray-300 mt-8">
            Promptbook provides template tag functions that handle string interpolation and prevent prompt injection
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;
