
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Lightbulb, Heart, TrendingUp, Award } from "lucide-react";

export const Timeline = () => {
  const timelineEvents = [
    {
      year: "Early Years",
      title: "Foundation of Resilience",
      description: "Learning that every challenge is a stepping stone. Developed the mindset that setbacks are setups for comebacks.",
      value: "Resilience",
      icon: Heart,
      color: "bg-red-500"
    },
    {
      year: "Teen Years",
      title: "Discovering Innovation",
      description: "First entrepreneurial spark ignited. Learned that patience and persistence turn ideas into reality.",
      value: "Innovation",
      icon: Lightbulb,
      color: "bg-yellow-500"
    },
    {
      year: "2018",
      title: "The Pizza Cone Revolution",
      description: "Created and launched the revolutionary pizza cone concept. Showed that thinking differently can change entire industries.",
      value: "Innovation",
      icon: TrendingUp,
      color: "bg-orange-500"
    },
    {
      year: "2019-2020",
      title: "Building & Growing",
      description: "Faced challenges head-on while scaling the business. Every obstacle became a lesson in patience and strategic thinking.",
      value: "Growth",
      icon: TrendingUp,
      color: "bg-green-500"
    },
    {
      year: "2021",
      title: "Team Leadership",
      description: "Developed leadership skills and built amazing teams. Learned that success is sweeter when shared with others.",
      value: "Leadership",
      icon: Award,
      color: "bg-blue-500"
    },
    {
      year: "Present",
      title: "Continuous Evolution",
      description: "Embracing new challenges with a growth mindset. Every day is an opportunity to become a better version of myself.",
      value: "Growth Mindset",
      icon: TrendingUp,
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="timeline" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Journey of Growth
          </h2>
          <p className="text-xl text-gray-600">
            A timeline of resilience, innovation, and continuous learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-primary/30"></div>

          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        {event.year}
                      </Badge>
                      <div className={`p-2 rounded-full ${event.color} text-white`}>
                        <event.icon className="w-4 h-4" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      {event.description}
                    </p>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {event.value}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Closing message */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Journey Continues...
              </h3>
              <p className="text-lg text-gray-700">
                Every day brings new opportunities to grow, learn, and make a positive impact. 
                The best chapter is always the one being written today.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
