
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const SuccessQuote = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          What does success mean to you?
        </h2>
        
        <Card className="bg-white shadow-2xl border-0 overflow-hidden">
          <CardContent className="p-12">
            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-full bg-primary/10">
                <Quote className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed mb-8 italic">
              "Success is the ongoing process of striving to become more."
            </blockquote>
            
            <div className="text-lg text-gray-600">
              <p className="font-semibold">— Robert Dilts</p>
              <p className="text-sm mt-2">Author, Trainer, and Consultant in NLP</p>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-12 max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            True success isn't a destination—it's a journey of continuous growth, learning, and becoming the best version of ourselves. 
            Every challenge overcome, every skill developed, and every person helped along the way contributes to this ongoing process of becoming more.
          </p>
        </div>
      </div>
    </section>
  );
};
