
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, ExternalLink } from "lucide-react";
import { TimelineEventData } from "./types";

interface TimelineEventProps {
  event: TimelineEventData;
  index: number;
  onReadBlog: (blogKey: string) => void;
}

export const TimelineEvent = ({ event, index, onReadBlog }: TimelineEventProps) => {
  return (
    <div className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
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
            
            {/* Blog Post Section */}
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="flex items-center text-primary font-semibold mb-3">
                <BookOpen className="w-4 h-4 mr-2" />
                Related Blog Post
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onReadBlog(event.blogKey)}
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
  );
};
