
import { Calendar, Lightbulb, Heart, TrendingUp, Award, Users, Target, Briefcase, Brain, Home } from "lucide-react";
import { TimelineEventData } from "./types";

export const timelineEvents: TimelineEventData[] = [
  {
    year: "Early Years",
    title: "Early Entrepreneurial Flair",
    description: "From selling mixtapes to friends in elementary school to running a high-school gaming server and funding a paintball field at 19. Took solace in entrepreneurship to escape feeling like an alien in early school years.",
    value: "Resilience",
    icon: Heart,
    color: "bg-gradient-to-br from-red-500 to-red-600",
    blogKey: "early-entrepreneurial"
  },
  {
    year: "2018-2019",
    title: "A Crazy Google Search That Led to a Premier League Startup",
    description: "Launched a sustainable pizza cone startup for bakeries, raised six figures in investor funding, and strategically tackled global supply issues - all from a single Google search for 'crazy business ideas'.",
    value: "Innovation",
    icon: Lightbulb,
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
    blogKey: "premier-league-startup"
  },
  {
    year: "2019",
    title: "Teaching in Vietnam (2019-2022)",
    description: "Crafted custom learning resources and encouraged high-school and university students in Vietnam to pursue their ambitions by creating interactive lessons that promoted financial literacy and resilience.",
    value: "Growth",
    icon: Users,
    color: "bg-gradient-to-br from-green-500 to-green-600",
    blogKey: "teaching-vietnam"
  },
  {
    year: "2020",
    title: "How I Scored a Free Product Launch for Students",
    description: "Successfully negotiated with the CEO of CatchBox to provide free Wireless Microphone Systems to students in Vietnam, creating a reward system that became a major positive influence.",
    value: "Leadership",
    icon: Award,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    blogKey: "free-product-launch"
  },
  {
    year: "2021",
    title: "Pizza Cones, Rice Straws and Vegan Pulled Pork",
    description: "From sourcing and packaging to exports and creating brands - quickly identifying emerging trends and establishing innovative start-ups that address gaps in the market.",
    value: "Innovation",
    icon: TrendingUp,
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    blogKey: "pizza-cones-rice-straws"
  },
  {
    year: "2022",
    title: "Coming back from Vietnam and getting into employment",
    description: "Navigating the challenging UK job market after returning from Vietnam, facing recruitment struggles and mental health challenges before finding the right opportunity.",
    value: "Perseverance",
    icon: Briefcase,
    color: "bg-gradient-to-br from-teal-500 to-teal-600",
    blogKey: "coming-back-from-vietnam"
  },
  {
    year: "2023",
    title: "What I Learned from Having 50+ Jobs: Dreams vs. Employment",
    description: "Reflecting on a journey through 50+ jobs and the realization that my identity was always entrepreneurial. The Pizza Cone experience validated my abilities - I was the 'right guy' even if the product wasn't perfect.",
    value: "Self-Discovery",
    icon: Brain,
    color: "bg-gradient-to-br from-pink-500 to-pink-600",
    blogKey: "fifty-jobs-lessons"
  },
  {
    year: "Present",
    title: "Financial Literacy and Building Community Wealth through Purpose Led Ventures",
    description: "Focusing on enhancing lives through financial literacy education and purpose-driven entrepreneurship, believing that personal growth and overcoming poverty are closely related through building community wealth.",
    value: "Purpose",
    icon: Target,
    color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    blogKey: "financial-literacy-community-wealth"
  },
  {
    year: "Reflection",
    title: "If home's where the heart is then i'll wear it on my sleeve",
    description: "Exploring identity and purpose as a global citizen - like a mustang running around the world, searching for belonging while discovering that home is something you carry within yourself.",
    value: "Global Citizenship",
    icon: Home,
    color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    blogKey: "home-where-heart-is"
  }
];
