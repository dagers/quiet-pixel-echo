
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin } from "lucide-react";

interface BlogPostProps {
  onBack: () => void;
}

export const TeachingInVietnam = ({ onBack }: BlogPostProps) => {
  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Teaching Results-Driven Experiences to Students in Vietnam");
    const summary = encodeURIComponent("Discovering passion for education and helping students build confidence through YouTube channels and financial literacy.");
    
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
              Teaching Results-Driven Experiences to Students in Vietnam
            </CardTitle>
            <p className="text-gray-600 text-lg">
              Discovering passion for education and helping students build confidence through YouTube channels and financial literacy.
            </p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p>
              I lived and worked in Vietnam as an English teacher for 2.5 years, and during that time, I discovered my passion for helping students improve their English proficiency and confidence.
            </p>
            
            <p>
              One approach that proved particularly effective was teaching them how to create YouTube videos in English, which allowed them to practice speaking and develop their fluency and punctuation using technology.
            </p>
            
            <p>
              The most rewarding aspect of my work was seeing the students' eyes light up with newfound confidence and enthusiasm. It was during this time that I realized there is more to life than just monetary gain.
            </p>
            
            <p>
              The ability to inspire others and expand their horizons by demonstrating endless opportunities and guiding them towards success is a purpose worth pursuing.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
