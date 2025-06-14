
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Linkedin } from "lucide-react";
import { TimelineEvent } from "./timeline/TimelineEvent";
import { BlogRenderer } from "./timeline/BlogRenderer";
import { timelineEvents } from "./timeline/timelineData";

export const Timeline = () => {
  const [activeBlog, setActiveBlog] = useState<string | null>(null);

  const handleReadBlog = (blogKey: string) => {
    setActiveBlog(blogKey);
  };

  const handleBackToTimeline = () => {
    setActiveBlog(null);
  };

  // Render blog post if one is active
  if (activeBlog) {
    return <BlogRenderer activeBlog={activeBlog} onBack={handleBackToTimeline} />;
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
          <div className="absolute left-4 top-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary/80 to-primary/30 rounded-full"></div>

          {timelineEvents.map((event, index) => (
            <TimelineEvent 
              key={index}
              event={event}
              index={index}
              onReadBlog={handleReadBlog}
            />
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
                onClick={() => window.open('https://www.linkedin.com/in/dagshofrats/', '_blank')}
              >
                Connect With Me
                <Linkedin className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
