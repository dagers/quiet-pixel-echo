
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp } from "lucide-react";

export const PizzaConeSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Pizza Cone Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From a single Google search for "crazy business ideas" to Premier League partnerships - 
            the journey of creating a revolutionary food concept that disrupted an entire industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/lovable-uploads/21ddd6b2-888c-47f1-a6ab-c20777966f73.png"
              alt="Pizza cones in production"
              className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow col-span-2"
            />
            <img 
              src="/lovable-uploads/1928dec7-5024-4c26-90e7-48224467a5a8.png"
              alt="Pizza cone creation process"
              className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            />
            <img 
              src="/lovable-uploads/0d398733-daff-4c8e-b9d2-133b47987463.png"
              alt="Pizza cone business setup"
              className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <Card className="bg-white shadow-xl border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <TrendingUp className="mr-3 h-6 w-6 text-primary" />
                  Innovation Highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Raised six figures in investor funding
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Featured on BBC's 'Entrepreneurs' programme
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Trial partnership with Arsenal FC
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Listed on UK's largest food wholesalers
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Accepted into Entrepreneurial Spark Programme
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Button 
              className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-medium py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More About This Journey
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
