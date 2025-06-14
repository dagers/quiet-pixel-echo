
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BlogPostProps {
  onBack: () => void;
}

export const PremierLeagueStartup = ({ onBack }: BlogPostProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Button 
          onClick={onBack}
          variant="outline" 
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Timeline
        </Button>
        
        <Card className="bg-white shadow-xl">
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl text-gray-900">
              A Crazy Google Search That Led to a Premier League Startup
            </CardTitle>
            <p className="text-gray-600 text-lg">
              How one Google search led to BBC features, Premier League partnerships, and six-figure funding rounds.
            </p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p>
              I launched a sustainable pizza cone startup for bakeries, raised over six figures in investor funding, and strategically tackled global supply issues - all from a single Google search for "crazy business ideas". This led to me being accepted on the 'Business Accelerator Entrepreneurial Spark Start-up Programme' and briefly featured on the BBC programme 'Entrepreneurs', to trial the sale of pizza cones with Arsenal FC, and being approved to list pizza cones on some of the UK's largest food wholesalers.
            </p>
            
            <p>
              When I started my pizza cone business, I faced criticism about the concept and business model. Peers told me it would not work and that I was wasting my time. This hurt me deeply because I had put so much blood, sweat, and tears into my venture. It felt more like a personal insult than objective criticism.
            </p>
            
            <p>
              However, I learned that I should value the feedback and advice of industry experts and not take it as a personal attack on myself or my business. The biggest lesson I learned was that if I wanted to improve my life, I needed to improve myself first. While I was in my early 20s and full of energy, I wanted to prove that I could grow and flourish despite their constructive feedback. Now, I understand that everyone is entitled to their opinion and that constructive feedback is essential for personal and professional growth.
            </p>
            
            <p>
              As long as I maintain a growth mindset and learn from my mistakes, I believe I can grow much quicker. Discursive feedback is critical to further develop my business and achieve my goals.
            </p>
            
            <p>
              By identifying a gap in the market, developing and commercialising a product to fill it, using connections, determination, and a strong intuitive business sense, I was able to build a successful Pizza Cone company. In 2019, I sold my shares and used the money to travel around Southeast Asia for six months.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
