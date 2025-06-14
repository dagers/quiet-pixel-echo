
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 relative bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Profile Image */}
        <div className="mb-8 sm:mb-12 -mt-4 sm:-mt-8">
          <img 
            src="/lovable-uploads/4ce14e38-ea07-4f84-9d0c-e00a70ddbd00.png"
            alt="Dags Hofrats - Personal Photo"
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto rounded-full object-cover shadow-2xl border-4 border-white"
          />
        </div>

        {/* Content */}
        <div className="space-y-4 sm:space-y-6">
          <div className="inline-block">
            <img 
              src="/lovable-uploads/14126d7d-0604-484e-8815-64bf3fe0b615.png"
              alt="Dags Hofrats Logo"
              className="h-12 sm:h-16 md:h-20"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight px-2">
            Embracing Life's
            <span className="text-primary block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Journey</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed px-4">
            Every challenge is an opportunity to grow. Every setback is a setup for a comeback.
          </p>
        </div>

        {/* Name Meaning Section */}
        <Card className="bg-white/90 backdrop-blur-sm border-none shadow-xl max-w-3xl mx-auto">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">The Meaning Behind the Name</h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 text-left">
              <p><span className="font-semibold text-primary">Dag</span> - Meaning "day" or "bright," a luminous name of Scandinavian origins, derived from the Old Norse word dagr. Dagr is also a Norse god and the personification of the daytime.</p>
              <p><span className="font-semibold text-primary">Hofrat</span> - A German title that translates to Court Counselor or Councilor, historically given to high-ranking officials in the Austrian Empire.</p>
            </div>
          </CardContent>
        </Card>

        <Button 
          onClick={scrollToTimeline}
          size="lg" 
          className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
        >
          Discover My Journey
          <ChevronDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};
