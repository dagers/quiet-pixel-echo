
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin } from "lucide-react";

interface BlogPostProps {
  onBack: () => void;
}

export const FreeProductLaunch = ({ onBack }: BlogPostProps) => {
  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("How I Scored a Free Product Launch for Students in Vietnam");
    const summary = encodeURIComponent("Negotiating partnerships and building reward systems that inspired student communities across Vietnam.");
    
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
              How I Scored a Free Product Launch for Students in Vietnam
            </CardTitle>
            <p className="text-gray-600 text-lg">
              Negotiating partnerships and building reward systems that inspired student communities across Vietnam.
            </p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p>
              I successfully negotiated with CEO of wireless microphone system to supply students in Vietnam with samples free of charge.
            </p>
            
            <p>
              As a conscious leader, I am passionate about student development. I negotiated free samples of a wireless microphone system for students in Vietnam and implemented an e-learning system. I built partnerships with local businesses and negotiated with Elsa App to access free vouchers for students to improve their pronunciation.
            </p>
            
            <p>
              My enthusiasm for the student community and their progress resulted in a successful collaboration with the CEO of CatchBox to provide free samples of Wireless Microphone Systems to students in Vietnam. I negotiated with CatchBox for free sample delivery, and set up a reward system that became a major incentive and positive influence for the students.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
