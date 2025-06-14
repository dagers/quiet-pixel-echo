
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BlogPostProps {
  onBack: () => void;
}

export const FiftyJobsLessons = ({ onBack }: BlogPostProps) => {
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
              What I Learned from Having 50+ Jobs: Dreams vs. Employment
            </CardTitle>
            <p className="text-gray-600 text-lg">
              A journey through the employment landscape and the unwavering belief in personal dreams and entrepreneurial spirit.
            </p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p>
              Throughout my career, I've had over 50 different jobs - from various customer-facing roles to teaching in Vietnam, where I got a bug for education as my grandparents were teachers. But at the core of my being, I never truly believed in jobs as my ultimate destination. I've always had dreams of my own, visions that extend far beyond the confines of traditional employment.
            </p>
            
            <p>
              Robert Dilts, the renowned developer of Neuro-Linguistic Programming (NLP), created a powerful framework called the Logical Levels of Change. This model helped me understand my journey through these 50+ jobs and why I always felt like I was meant for something more. Dilts' pyramid consists of six levels: Environment, Behavior, Capabilities, Beliefs and Values, Identity, and Purpose/Spirituality.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Pizza Cone: A Turning Point</h3>
            
            <p>
              The Pizza Cone venture gave me immense strength about my abilities and validated my entrepreneurial instincts. Despite the challenges and eventual pivot, this experience became a cornerstone of my self-belief. People consistently told me I was "the right guy with the wrong product" - but what they didn't understand was that being the "right guy" was exactly what mattered most.
            </p>
            
            <p>
              Using Dilts' framework, I realized that my identity level was always that of an entrepreneur, not an employee. My core beliefs and values centered around innovation, creating value, and building something meaningful. The Pizza Cone venture operated at the highest levels of Dilts' pyramid - it was about purpose, identity, and deeply held beliefs about what I could achieve.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Pattern Across 50+ Jobs</h3>
            
            <p>
              Looking back at my employment history through Dilts' lens, I can see a clear pattern. At the Environment and Behavior levels, I adapted to each workplace, learned new skills, and performed my duties. At the Capabilities level, I continuously developed new competencies. But at the Beliefs and Values level, and especially at the Identity level, there was always a disconnect.
            </p>
            
            <p>
              My identity was never truly aligned with being an employee. My purpose was always about creation, innovation, and building something that could make a real difference. This misalignment at the higher logical levels explained why I never felt fully satisfied in traditional employment, regardless of how well I performed or how good the opportunities were.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Right Guy, Right Dreams</h3>
            
            <p>
              The feedback that I was "the right guy with the wrong product" was actually a profound compliment disguised as criticism. It confirmed that my capabilities, my drive, and my approach were sound. The "product" - whether it was Pizza Cones or any other venture - was simply the vehicle for expressing my true identity and purpose.
            </p>
            
            <p>
              Robert Dilts teaches us that lasting change and fulfillment come from alignment across all logical levels. My 50+ jobs were all attempts to find this alignment within traditional employment structures. But true alignment came when I embraced my entrepreneurial identity and focused on ventures that matched my deepest beliefs and values.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Lessons from the Journey</h3>
            
            <p>
              Each job taught me something valuable - new skills, different perspectives, and insights into various industries. But more importantly, they reinforced my understanding of who I am at the core. They were stepping stones, not destinations. They provided the experience and knowledge that would eventually fuel my entrepreneurial ventures.
            </p>
            
            <p>
              The Pizza Cone experience, in particular, operated at what Dilts calls the "Neurological Levels" - it wasn't just about the product or the business model. It was about proving to myself and others that I could identify opportunities, raise capital, build partnerships, and create something from nothing. It was about identity and purpose.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Power of Aligned Purpose</h3>
            
            <p>
              Today, I understand that my journey through 50+ jobs wasn't a sign of instability or lack of focus. It was the natural result of someone whose identity and purpose were fundamentally entrepreneurial trying to fit into structures designed for a different type of person. It was the "right guy" searching for the right expression of his dreams.
            </p>
            
            <p>
              Now, as I focus on financial literacy and building community wealth through purpose-led ventures, I'm operating from a place of complete alignment across all of Dilts' logical levels. My environment supports my entrepreneurial work - and it's important to keep searching for and maintaining the right environment. I continue searching for mine and making the difficult decision to cut off people who have different life values. I wish them all the best luck, but it is time to part ways and embrace true dreams. My behaviors are aligned with my values, my capabilities are being used to their fullest, and most importantly, my identity and purpose are in perfect harmony.
            </p>
            
            <p>
              The lesson is clear: when you know who you are at the deepest level, every experience - even those that seem like detours - becomes valuable preparation for fulfilling your true purpose. The Pizza Cone gave me strength not because it was the perfect product, but because it proved I was the right person to chase my dreams, regardless of what others thought about the specific vehicle I chose to pursue them.
            </p>

            <p>
              I was the right guy, with the wrong product. The lesson is learnt that I have to learn about business processes before anything that leads to deep market research. This realization has fundamentally shaped my approach to entrepreneurship - understanding that having the right entrepreneurial mindset and capabilities is only part of the equation. The other crucial part is ensuring thorough preparation through proper business process understanding and comprehensive market research before launching any venture.
            </p>

            <p>
              My next venture is in Education. Keep posted as I continue to build on the passion for teaching that I discovered in Vietnam, inspired by my grandparents who were teachers, and apply the hard-learned lessons about proper business processes and market research to create meaningful educational impact.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
