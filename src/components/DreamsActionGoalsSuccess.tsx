
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp, Award } from "lucide-react";

export const DreamsActionGoalsSuccess = () => {
  const steps = [
    {
      title: "Dreams",
      description: "Vision starts with a dream - the spark of possibility that ignites transformation and creates the foundation for all achievements.",
      icon: Lightbulb,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      title: "Action",
      description: "Dreams without action remain wishes. Taking consistent, purposeful steps transforms vision into reality.",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      title: "Goals",
      description: "Clear, measurable goals provide direction and milestones that guide the journey from dream to achievement.",
      icon: Target,
      color: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      title: "Success",
      description: "True success is not just reaching the destination, but growing through the journey and inspiring others along the way.",
      icon: Award,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dreams → Action → Goals → Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every meaningful achievement follows a proven path. Understanding this journey transforms how we approach our aspirations and turn them into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-primary to-primary/70"></div>
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto p-4 rounded-xl ${step.color} text-white shadow-lg mb-4`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-center">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20 shadow-xl">
            <CardContent className="p-10 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                The Journey Never Ends
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Success isn't a destination—it's a continuous cycle of dreaming bigger, taking bolder action, 
                setting higher goals, and achieving greater impact. Each success becomes the foundation for the next dream.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
