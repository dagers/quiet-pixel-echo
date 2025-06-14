
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { DreamsActionGoalsSuccess } from "@/components/DreamsActionGoalsSuccess";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DreamsActionGoalsSuccess />
      <Timeline />
      
      {/* Navigation to Blog */}
      <div className="text-center py-12">
        <Link to="/blog">
          <Button variant="outline" className="text-lg px-8 py-3">
            View Blog Style Demo
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
