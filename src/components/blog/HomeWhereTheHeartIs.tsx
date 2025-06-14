import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, Heart, Compass, Users, TrendingUp } from "lucide-react";

interface BlogPostProps {
  onBack: () => void;
}

export const HomeWhereTheHeartIs = ({ onBack }: BlogPostProps) => {
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
              If home's where the heart is then i'll wear it on my sleeve
            </CardTitle>
            <p className="text-gray-600 text-lg italic">
              /Verbz/
            </p>
            <p className="text-gray-600 text-lg mt-2">
              Exploring identity and purpose as a global citizen in search of belonging and meaning.
            </p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Global Citizenship by the Numbers</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">51%</div>
                  <div className="text-sm text-gray-600">of millennials consider themselves global citizens</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-indigo-600">3.2%</div>
                  <div className="text-sm text-gray-600">of the world's population lives outside their birth country</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">73%</div>
                  <div className="text-sm text-gray-600">of global citizens feel they belong to a worldwide community</div>
                </div>
              </div>
            </div>

            <p>
              There's a saying that goes "home is where the heart is," but what happens when your heart has been scattered across continents, cities, and cultures? When you've moved more than your employers have offices, and your passports tell a story of wandering that even you sometimes struggle to piece together?
            </p>
            
            <p>
              I am a global citizen - not by choice initially, but by circumstance and eventually by identity. Sometimes I feel like a mustang running around the world, looking for his stall to settle down. The irony is that in searching for home everywhere, I've discovered that home isn't a place you find - it's something you carry within yourself.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-red-500" />
              The Identity Level: Who Am I When I'm Everywhere?
            </h3>
            
            <p>
              Robert Dilts' Logical Levels framework becomes particularly profound when you examine it through the lens of global citizenship. At the identity level - one of the highest in Dilts' pyramid - the question isn't just "Who am I?" but "Who am I when my environment constantly changes?"
            </p>
            
            <p>
              For most people, identity is deeply rooted in place - they're from a European country, they're Texan, they're from the Americas. But for global citizens like myself, identity becomes something more fluid, more complex. I've lived in England, taught in Vietnam. Each place has left its mark, but none has claimed me entirely.
            </p>
            
            <p>
              The statistics reveal something fascinating: 51% of millennials now consider themselves global citizens. We're part of a generation that doesn't define itself by the borders drawn on maps our grandparents memorized. Instead, we define ourselves by values, experiences, and connections that transcend geography.
            </p>
            
            <p>
              My identity isn't anchored to a postal code - it's anchored to principles. I'm someone who believes in education because I taught students in Vietnam. I'm someone who understands resilience because I've started over in new countries more times than I can count. I'm someone who values community because I've been welcomed by strangers who became family in places I'd never heard of before arriving.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center">
              <Compass className="w-5 h-5 mr-2 text-blue-500" />
              The Purpose Level: Finding Meaning in Motion
            </h3>
            
            <p>
              At the purpose level - the highest in Dilts' framework - global citizenship transforms from a circumstance into a calling. My purpose isn't to find a place to belong; it's to create belonging wherever I am. It's to build bridges between the communities I've touched and to carry the lessons learned in one place to improve life in another.
            </p>
            
            <p>
              When I taught financial literacy to students in Vietnam, I wasn't just sharing knowledge - I was fulfilling a purpose that transcends borders. When I negotiated free products for students, I was operating from a belief that opportunity shouldn't be limited by geography. When I built the Pizza Cone business, I was proving that innovation can emerge from anywhere and serve markets everywhere.
            </p>
            
            <p>
              The mustang analogy resonates deeply because mustangs aren't lost - they're free. They move not because they're searching for something they lack, but because movement is in their nature. Similarly, my global citizenship isn't about running from something or searching for something missing. It's about embracing a nature that finds home in purpose rather than place.
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg my-8 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-green-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">The Global Citizen's Paradox</h4>
              </div>
              <p className="text-gray-700 italic">
                "We are citizens of the world, but we long for the intimacy of belonging to a tribe. We value freedom of movement, but we crave the security of roots. We celebrate diversity, but we search for unity. This isn't contradiction - it's complexity."
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Mustang's Wisdom</h3>
            
            <p>
              Sometimes I feel like that mustang, running around the world looking for his stall to settle down. But here's what I've learned: the mustang's power isn't in finding the perfect stall - it's in the running itself. The movement teaches resilience. The journey builds character. The searching develops wisdom.
            </p>
            
            <p>
              Every city I've called home temporarily has taught me something new about myself. The UK taught me about ambition. Vietnam taught me how the mindset of whole societies can be shaped to benefit the system. Each place has been a classroom, each culture a teacher, each challenge a lesson in adaptation and growth.
            </p>
            
            <p>
              Research shows that 73% of global citizens feel they belong to a worldwide community. This isn't about rejecting local connections - it's about expanding the definition of community.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-purple-500" />
              Wearing Your Heart on Your Sleeve
            </h3>
            
            <p>
              If home is where the heart is, then wearing it on my sleeve means being open about this journey. It means acknowledging that global citizenship can be lonely - that there are moments when you envy people who have deep roots in one place. It means admitting that sometimes the mustang does long for a stall, for the simplicity of belonging somewhere completely.
            </p>
            
            <p>
              But it also means celebrating the unique perspective this lifestyle provides. I can connect a business lesson learned in London with an educational insight gained in Vietnam. I can understand how financial literacy challenges in one country might be solved by innovations from another. I carry not just my heart on my sleeve, but pieces of every place I've been - and that makes me richer, not rootless.
            </p>
            
            <p>
              My next venture is in education, building on the passion for teaching that I discovered in Vietnam, inspired by my grandparents who were teachers. This venture will serve global citizens like myself - people who value learning without borders, who see education as a universal language, who believe that knowledge shared across cultures makes the world stronger.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Stall and the Spirit</h3>
            
            <p>
              Maybe the mustang's stall isn't a physical place at all. Maybe it's the moment when you realize that home isn't where you're from - it's what you're building. It's not about finding your tribe - it's about creating connections that matter. It's not about settling down - it's about settling into who you're meant to be.
            </p>
            
            <p>
              For now, I continue to run - not because I'm lost, but because I'm found. Found in the movement, found in the connections, found in the purpose that transcends any single location. If home is where the heart is, then mine is everywhere I've chosen to care, to teach, to build, to grow.
            </p>
            
            <p>
              And I'll wear that on my sleeve - proudly, openly, and without apology. Because being a global citizen isn't about not having roots; it's about having roots everywhere you've chosen to plant them.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
