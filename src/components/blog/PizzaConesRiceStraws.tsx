
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin } from "lucide-react";

interface BlogPostProps {
  onBack: () => void;
}

export const PizzaConesRiceStraws = ({ onBack }: BlogPostProps) => {
  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Pizza Cones, Rice Straws and Vegan Pulled Pork");
    const summary = encodeURIComponent("Building valuable partnerships with social media influencers and sourcing sustainable products from Vietnam to the UK.");
    
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Button 
            onClick={onBack}
            variant="outline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Timeline
          </Button>
          
          <Button 
            onClick={handleLinkedInShare}
            className="bg-[#0077B5] hover:bg-[#005885] text-white"
          >
            <Linkedin className="w-4 h-4 mr-2" />
            Share on LinkedIn
          </Button>
        </div>
        
        <Card className="bg-white shadow-xl">
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl text-gray-900">
              Pizza Cones, Rice Straws and Vegan Pulled Pork
            </CardTitle>
            <p className="text-gray-600 text-lg">
              Building valuable partnerships with social media influencers and sourcing sustainable products from Vietnam to the UK.
            </p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p>
              From sourcing and packaging to exports and creating a brand, I've always been quick to identify emerging trends and establish innovative start-ups that address gaps in the market.
            </p>
            
            <p>
              This is the story of sourcing and exporting rice straws from Vietnam to the UK and how I built valuable partnerships with social media influencers to drive sales. Through strategic networking and understanding market needs, I was able to create sustainable solutions that benefited both consumers and the environment.
            </p>
            
            <p>
              The experience taught me the importance of identifying trends early and building strong partnerships that create mutual value for all parties involved.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
