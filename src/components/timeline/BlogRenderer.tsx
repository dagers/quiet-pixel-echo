
import { EarlyEntrepreneurialFlair } from "../blog/EarlyEntrepreneurialFlair";
import { PremierLeagueStartup } from "../blog/PremierLeagueStartup";
import { TeachingInVietnam } from "../blog/TeachingInVietnam";
import { FreeProductLaunch } from "../blog/FreeProductLaunch";
import { PizzaConesRiceStraws } from "../blog/PizzaConesRiceStraws";
import { ComingBackFromVietnam } from "../blog/ComingBackFromVietnam";
import { FinancialLiteracyCommunityWealth } from "../blog/FinancialLiteracyCommunityWealth";
import { FiftyJobsLessons } from "../blog/FiftyJobsLessons";
import { HomeWhereTheHeartIs } from "../blog/HomeWhereTheHeartIs";

interface BlogRendererProps {
  activeBlog: string;
  onBack: () => void;
}

export const BlogRenderer = ({ activeBlog, onBack }: BlogRendererProps) => {
  switch (activeBlog) {
    case "early-entrepreneurial":
      return <EarlyEntrepreneurialFlair onBack={onBack} />;
    case "premier-league-startup":
      return <PremierLeagueStartup onBack={onBack} />;
    case "teaching-vietnam":
      return <TeachingInVietnam onBack={onBack} />;
    case "free-product-launch":
      return <FreeProductLaunch onBack={onBack} />;
    case "pizza-cones-rice-straws":
      return <PizzaConesRiceStraws onBack={onBack} />;
    case "coming-back-from-vietnam":
      return <ComingBackFromVietnam onBack={onBack} />;
    case "fifty-jobs-lessons":
      return <FiftyJobsLessons onBack={onBack} />;
    case "financial-literacy-community-wealth":
      return <FinancialLiteracyCommunityWealth onBack={onBack} />;
    case "home-where-heart-is":
      return <HomeWhereTheHeartIs onBack={onBack} />;
    default:
      return null;
  }
};
