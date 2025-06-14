
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin } from "lucide-react";

interface BlogPostProps {
  onBack: () => void;
}

export const ComingBackFromVietnam = ({ onBack }: BlogPostProps) => {
  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Coming back from Vietnam and getting into employment");
    const summary = encodeURIComponent("Navigating the challenges of the UK job market after returning from teaching in Vietnam.");
    
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
              Coming back from Vietnam and getting into employment
            </CardTitle>
            <p className="text-gray-600 text-lg">
              Navigating the challenges of the UK job market after returning from teaching in Vietnam.
            </p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p>
              2022 seemingly started with coming back to the Glasgow, UK from Vietnam where I spent 2.5 beautiful years. Despite lockdowns, it was a great chapter in my life and I learnt a lot about myself working as a teacher there.
            </p>
            
            <p>
              Since my return to the UK, I wanted to secure a job that I enjoy. I have had a challenging time fitting the "frame or box," as I have been described by some recruiters as too "entrepreneurial" for the role. After the interviews, I have even been advised I need to get more experience for the role. Interesting, you clearly had my CV before conducting the interview with me.
            </p>
            
            <p>
              A few industry experts were happy to share their thoughts when it comes to recruiters. I am happy I met a few truly inspirational recruiters, however, the advice from industry experts was that they put triangles in the right brackets. Imagine you are a square. They simply can't cope with that and label you as "unsuitable" for the role. For some reason, I think about error 404 at their end.
            </p>
            
            <p>
              I was constantly compared to Elon Musk and suggested to that UK is too "conservative" for me and I should go to USA. The advise came from top 5 recruitment companies in the country.
            </p>
            
            <p>
              It was extremely frustrating and resulted in a downfall in my mental health. I even took on counseling to cope with my job hunt. I just wanted to get a job to get some income to start my next venture.
            </p>
            
            <p>
              I had to move back to mom's house in Sunderland at the age of 32 as I was broke. Luckily, after 6 months of job interviews (It was soul destroying) I found someone who understood my struggles and gave me the opportunity to earn some money. As you can imagine, I lasted in the job 6 months. This was the best work experience in my entire life thanks to the awesome manager. It helped me look at the life from pragmatic point of view. The time I spend at working at the company allowed me save enough funds to became a British Citizen and pay back the country who gave me an opportunity to start my own business and be myself.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
