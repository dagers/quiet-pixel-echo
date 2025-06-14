
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp } from "lucide-react";

export const PizzaConeSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Pizza Cone Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From a single Google search for "crazy business ideas" to Premier League partnerships - 
            the journey of creating a revolutionary food concept that disrupted an entire industry.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
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
            className="w-full mt-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-medium py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Learn More About This Journey
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
