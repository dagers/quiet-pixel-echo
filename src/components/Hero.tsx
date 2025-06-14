
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content Side */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
              <span className="text-2xl font-bold mr-2">DH</span>
              Dags Hofrats
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Embracing Life's
              <span className="text-primary block">Journey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Every challenge is an opportunity to grow. Every setback is a setup for a comeback.
            </p>
          </div>

          {/* Purpose Quotes */}
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg">
              <CardContent className="p-6">
                <blockquote className="text-lg italic text-gray-700">
                  "Success isn't about never falling down, it's about getting back up every time with more wisdom and strength."
                </blockquote>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/5 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <blockquote className="text-lg italic text-gray-700">
                  "The greatest revolution happens within. When you change your mindset, you change your world."
                </blockquote>
              </CardContent>
            </Card>
          </div>

          <Button 
            onClick={scrollToTimeline}
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-white px-8 py-3"
          >
            Discover My Journey
            <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>

        {/* Images Side */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/6d76e00a-d49c-4111-a59c-100b51a2218e.png"
              alt="Dags Hofrats - Confident and smiling"
              className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            />
            <img 
              src="/lovable-uploads/1928dec7-5024-4c26-90e7-48224467a5a8.png"
              alt="Pizza cones creation"
              className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            />
          </div>
          <div className="space-y-4 pt-8">
            <img 
              src="/lovable-uploads/719b8e8a-1e4c-4cf0-aa1f-4696688e9903.png"
              alt="Dags Hofrats - Joyful moment by the water"
              className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            />
            <img 
              src="/lovable-uploads/0f8c373f-2bbb-4598-bd51-49dd5f4907d0.png"
              alt="Team moment at pizza cone stand"
              className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            />
          </div>
        </div>
      </div>

      {/* Floating Logo */}
      <div className="absolute top-8 left-8">
        <img 
          src="/lovable-uploads/6fe8abe3-669b-4f1b-b671-c64798bb6a8d.png"
          alt="DH Logo"
          className="w-16 h-16 object-contain"
        />
      </div>
    </section>
  );
};
