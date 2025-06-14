
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full text-primary font-medium border border-primary/20">
            <span className="text-3xl font-bold mr-3">DH</span>
            Dags Hofrats
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Embracing Life's
            <span className="text-primary block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Journey</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto font-light">
            Every challenge is an opportunity to grow. Every setback is a setup for a comeback.
          </p>
        </div>

        {/* Name Meaning Section */}
        <Card className="bg-white/90 backdrop-blur-sm border-none shadow-xl max-w-3xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">The Meaning Behind the Name</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold text-primary">Dag</span> - Meaning "day" or "bright," a luminous name of Scandinavian origins, derived from the Old Norse word dagr. Dagr is also a Norse god and the personification of the daytime.</p>
              <p><span className="font-semibold text-primary">Hofrat</span> - A German title that translates to Court Counselor or Councilor, historically given to high-ranking officials in the Austrian Empire.</p>
            </div>
          </CardContent>
        </Card>

        <Button 
          onClick={scrollToTimeline}
          size="lg" 
          className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-10 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Discover My Journey
          <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};
