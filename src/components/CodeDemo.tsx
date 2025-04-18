
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
              <code>{`# Define a secure prompt template
prompt "summarize" {
  input: {
    text: string
    max_length: number
  }
  
  validation {
    text.length > 0
    max_length > 100
  }
  
  template: """
    Summarize the following text in {{max_length}} words:
    {{sanitize(text)}}
  """
  
  model: "gpt-4"
}

# Use the prompt safely
execute summarize {
  text: user_input,
  max_length: 150
}`}</code>
            </pre>
          </Card>
          <p className="text-center text-gray-300 mt-8">
            Promptbook validates inputs, sanitizes content, and prevents injection attacks automatically
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;
