
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Lightbulb, Heart, TrendingUp, Award, BookOpen, ExternalLink, Globe, Users, Target } from "lucide-react";

// Import blog components
import { EarlyEntrepreneurialFlair } from "./blog/EarlyEntrepreneurialFlair";
import { PremierLeagueStartup } from "./blog/PremierLeagueStartup";
import { TeachingInVietnam } from "./blog/TeachingInVietnam";
import { FreeProductLaunch } from "./blog/FreeProductLaunch";
import { PizzaConesRiceStraws } from "./blog/PizzaConesRiceStraws";
import { FinancialLiteracyMission } from "./blog/FinancialLiteracyMission";

export const Timeline = () => {
  const [activeBlog, setActiveBlog] = useState<string | null>(null);

  const timelineEvents = [
    {
      year: "Early Years",
      title: "Early Entrepreneurial Flair",
      description: "From selling mixtapes to friends in elementary school to running a high-school gaming server and funding a paintball field at 19. Took solace in entrepreneurship to escape feeling like an alien in early school years.",
      value: "Resilience",
      icon: Heart,
      color: "bg-gradient-to-br from-red-500 to-red-600",
      blogTitle: "Early Entrepreneurial Flair",
      blogSummary: "From selling CD mixtapes to creating gaming servers - discovering entrepreneurship as an outlet for creativity and independence.",
      blogKey: "early-entrepreneurial"
    },
    {
      year: "2018-2019",
      title: "A Crazy Google Search That Led to a Premier League Startup",
      description: "Launched a sustainable pizza cone startup for bakeries, raised six figures in investor funding, and strategically tackled global supply issues - all from a single Google search for 'crazy business ideas'.",
      value: "Innovation",
      icon: Lightbulb,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      blogTitle: "A Crazy Google Search That Led to a Premier League Startup",
      blogSummary: "How one Google search led to BBC features, Premier League partnerships, and six-figure funding rounds.",
      blogKey: "premier-league-startup"
    },
    {
      year: "2019-2022",
      title: "Teaching Results-Driven Experiences in Vietnam",
      description: "Crafted custom learning resources and encouraged high-school and university students in Vietnam to pursue their ambitions by creating interactive lessons that promoted financial literacy and resilience.",
      value: "Growth",
      icon: Users,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      blogTitle: "Teaching Results-Driven Experiences to Students in Vietnam",
      blogSummary: "Discovering passion for education and helping students build confidence through YouTube channels and financial literacy.",
      blogKey: "teaching-vietnam"
    },
    {
      year: "2020",
      title: "How I Scored a Free Product Launch for Students",
      description: "Successfully negotiated with the CEO of CatchBox to provide free Wireless Microphone Systems to students in Vietnam, creating a reward system that became a major positive influence.",
      value: "Leadership",
      icon: Award,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      blogTitle: "How I Scored a Free Product Launch for Students in Vietnam",
      blogSummary: "Negotiating partnerships and building reward systems that inspired student communities across Vietnam.",
      blogKey: "free-product-launch"
    },
    {
      year: "2021",
      title: "Pizza Cones, Rice Straws and Vegan Pulled Pork",
      description: "From sourcing and packaging to exports and creating brands - quickly identifying emerging trends and establishing innovative start-ups that address gaps in the market.",
      value: "Innovation",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      blogTitle: "Pizza cones, rice straws and Vegan Pulled pork",
      blogSummary: "Building valuable partnerships with social media influencers and sourcing sustainable products from Vietnam to the UK.",
      blogKey: "pizza-cones-rice-straws"
    },
    {
      year: "Present",
      title: "Financial Literacy & Entrepreneurship Mission",
      description: "Focusing on enhancing lives through financial literacy education, believing that personal growth and overcoming poverty are closely related. Teaching others to 'fish for a lifetime'.",
      value: "Purpose",
      icon: Target,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      blogTitle: "Keep your eyes on the prize & The lack of money is the root of all evil",
      blogSummary: "Exploring the connection between financial literacy, personal growth, and defeating poverty through education.",
      blogKey: "financial-literacy-mission"
    }
  ];

  const handleReadBlog = (blogKey: string) => {
    setActiveBlog(blogKey);
  };

  const handleBackToTimeline = () => {
    setActiveBlog(null);
  };

  // Render blog post if one is active
  if (activeBlog) {
    switch (activeBlog) {
      case "early-entrepreneurial":
        return <EarlyEntrepreneurialFlair onBack={handleBackToTimeline} />;
      case "premier-league-startup":
        return <PremierLeagueStartup onBack={handleBackToTimeline} />;
      case "teaching-vietnam":
        return <TeachingInVietnam onBack={handleBackToTimeline} />;
      case "free-product-launch":
        return <FreeProductLaunch onBack={handleBackToTimeline} />;
      case "pizza-cones-rice-straws":
        return <PizzaConesRiceStraws onBack={handleBackToTimeline} />;
      case "financial-literacy-mission":
        return <FinancialLiteracyMission onBack={handleBackToTimeline} />;
      default:
        return null;
    }
  }

  return (
    <section id="timeline" className="py-24 px-4 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Journey of Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A timeline of resilience, innovation, and continuous learning - each chapter revealing new insights and opportunities for growth.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-primary via-primary/80 to-primary/30 rounded-full"></div>

          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-primary shadow-lg z-10">
                <div className="w-2 h-2 bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              {/* Content card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group">
                  <div className="h-2 bg-gradient-to-r from-primary to-primary/70"></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-sm bg-primary/10 text-primary hover:bg-primary/20 font-semibold px-3 py-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        {event.year}
                      </Badge>
                      <div className={`p-3 rounded-xl ${event.color} text-white shadow-lg`}>
                        <event.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 leading-tight">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                    
                    {/* Blog Post Section - Simplified */}
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="flex items-center text-primary font-semibold mb-3">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Related Blog Post
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleReadBlog(event.blogKey)}
                        className="w-full border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                      >
                        Read Full Story
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </Button>
                    </div>

                    <Badge className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary hover:from-primary/20 hover:to-primary/10 border-primary/20 font-medium">
                      {event.value}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Closing message */}
        <div className="text-center mt-20">
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20 shadow-xl">
            <CardContent className="p-10">
              <div className="flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-3xl font-bold text-gray-900">
                  The Journey Continues...
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Every day brings new opportunities to grow, learn, and make a positive impact. 
                The best chapter is always the one being written today.
              </p>
              <Button 
                className="mt-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-medium px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Connect With Me
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
