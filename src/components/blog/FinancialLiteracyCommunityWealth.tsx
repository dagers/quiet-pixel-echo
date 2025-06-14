
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin } from "lucide-react";

interface BlogPostProps {
  onBack: () => void;
}

export const FinancialLiteracyCommunityWealth = ({ onBack }: BlogPostProps) => {
  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Financial Literacy and Building Community Wealth through Purpose Led Ventures");
    const summary = encodeURIComponent("Exploring how financial literacy and purpose-driven entrepreneurship can create sustainable community wealth and reduce poverty.");
    
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
              Financial Literacy and Building Community Wealth through Purpose Led Ventures
            </CardTitle>
            <p className="text-gray-600 text-lg">
              Exploring how financial literacy and purpose-driven entrepreneurship can create sustainable community wealth and reduce poverty.
            </p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p>
              Financial literacy is essential for reducing poverty and creating job opportunities. My expertise in budgeting and fundraising for start-ups, along with my strong financial knowledge, would be invaluable to the mission of conquering poverty and creating new job opportunities. As a conscientious leader, I can identify top talent and foster effective collaboration among diverse teams to achieve shared goals.
            </p>
            
            <p>
              I have always been fascinated by entrepreneurship and the purpose-driven founders behind their ventures. Recently, I visited The Web Summit in Lisbon and was overwhelmed by the multitude of great business ideas and investable founders. I had engaging conversations with many people who had started their own businesses and listened carefully to their pitches. They all had the same goal: to raise funds for their start-ups.
            </p>
            
            <p>
              This got me thinking about the processes behind raising capital from venture capitalists. I have read numerous business books and acquired theoretical knowledge, but I believe the best way to sharpen one's skills is through practical work. Therefore, an internship in venture capital would be an excellent opportunity for me to gain meaningful insights and experience. My goal is to raise capital for my next venture in the future and advise other start-up founders to increase their chances of successfully securing funding.
            </p>
            
            <p>
              At a recent web summit in Lisbon, I discovered inspiring and innovative ideas and was struck by the growth of AI. One company that impressed me was Beespeaker, an Edutech company that integrates AI with language learning. This scalable business allows learners to work at their own pace without expensive tutors, and AI helps correct mistakes and provide detailed feedback to learners for clear improvement plans.
            </p>
            
            <p>
              Since visiting the summit, Beespeaker has received 250 positive reviews from active users, and the team, consisting of education professionals with years of experience, consistently communicates with their user base to solicit improvements. The founder, Karol Wegner, has started several successful tech companies such as itCraft and heyday.
            </p>
            
            <p>
              Beespeaker is an investable company with an experienced team and a view to the future. It's worth mentioning that the English Language Learning Market is expected to reach $69.62 billion by 2029, at a CAGR of 9.5% during the forecast period of 2022–2029, according to Technavio. As a huge advocate of education, I am always seeking new solutions to make the learning process as engaging as possible.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
