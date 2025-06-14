
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BlogPostProps {
  onBack: () => void;
}

export const FinancialLiteracyMission = ({ onBack }: BlogPostProps) => {
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
              Keep Your Eyes on the Prize & The Lack of Money is the Root of All Evil
            </CardTitle>
            <p className="text-gray-600 text-lg">
              Exploring the connection between financial literacy, personal growth, and defeating poverty through education.
            </p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <h3>Keep Your Eyes on the Prize</h3>
            <p>
              Henry Ford once said, "Obstacles are those frightful things you see when you take your eyes off your goal."
            </p>
            
            <p>
              Challenges are a natural part of both business and life, but what's important is our attitude towards them and how we choose to overcome them. Some of the hurdles we foresee in achieving our mission are present in every business, such as researching competitors, managing finances and legal aspects, securing funding, performing risk analysis, and establishing a product-market fit.
            </p>
            
            <p>
              Additionally, market-specific obstacles may arise, with the biggest being the negative "money mindset" of many people. People often associate anything related to money with being boring, complicated, and difficult to understand, making it challenging to keep the big picture in mind.
            </p>
            
            <h3>The Lack of Money is the Root of All Evil</h3>
            <p>
              One of the most well-known quotes about money is from the Bible: "the love of money is the root of all evil". However, George Bernard Shaw contradicted this statement, stating that the "lack of money is the root of all evil". I tend to agree with the latter because without money, desperation can set in and people can do terrible things.
            </p>
            
            <p>
              Financial literacy brings immense freedom, but unfortunately, only 30% of adults in the developed world are financially literate. My aim with this mission is to enhance the lives of those who've been taught outdated money management ideas and are stuck in negative financial situations.
            </p>
            
            <p>
              I believe that personal growth, overcoming poverty, creating employment, business education, and helping others to embrace and act upon their entrepreneurial spirit are the areas in which I would be able to make the most significant impact.
            </p>
            
            <p>
              Teaching is an essential part of this mission. I'm a strong believer in the concept of "if you give a man a fish, you feed him for a day. If you teach a man to fish, you feed him for a lifetime." When you teach one person something valuable, you give them the potential to teach everyone within their reach.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
