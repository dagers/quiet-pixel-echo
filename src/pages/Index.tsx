
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { DreamsActionGoalsSuccess } from "@/components/DreamsActionGoalsSuccess";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DreamsActionGoalsSuccess />
      <Timeline />
    </div>
  );
};

export default Index;
