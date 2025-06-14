
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BlogPostProps {
  onBack: () => void;
}

export const EarlyEntrepreneurialFlair = ({ onBack }: BlogPostProps) => {
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
              Early Entrepreneurial Flair
            </CardTitle>
            <p className="text-gray-600 text-lg">
              From selling mixtapes to creating gaming servers - discovering entrepreneurship as an outlet for creativity and independence.
            </p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p>
              I have been passionate about entrepreneurship and technology for as long as I can remember. From an early age, I aspired to become financially independent and professionally responsible, but due to the lack of support from my parents, I had to look for ways to make money on my own. This fostered a spirit of discipline and creativity that led me to experiment with new business ideas.
            </p>
            
            <p>
              My first venture was selling CD mixtapes to friends. I received orders through a form and required a 50% deposit before delivering the mix within two working days. A few years later, I created a gaming server with a text-based monthly subscription service that gave priority to paid users. It was a fun but challenging experience, so I hired an admin to manage the server while I focused on my studies.
            </p>
            
            <p>
              As a child, I often felt like an alien coming from the mothership, and entrepreneurship became my outlet for creativity. Inspired by hip-hop music, I found solace in lyrics that resonated with my experiences and uplifted my spirits. It helped me resist an oppressive education system that was attempting to break my rebellious spirit.
            </p>
            
            <p>
              I enjoy viewing the world from different perspectives and am passionate about idea generation and personal growth. I read self-improvement books to broaden my horizon and sci-fi to foster my imagination. This allows me to continuously explore new creative avenues and seek opportunities to learn from the people I connect with.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
