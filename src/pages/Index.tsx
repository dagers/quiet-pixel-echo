
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { DreamsActionGoalsSuccess } from "@/components/DreamsActionGoalsSuccess";
import { SuccessQuote } from "@/components/SuccessQuote";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DreamsActionGoalsSuccess />
      <SuccessQuote />
      <Timeline />
    </div>
  );
};

export default Index;
