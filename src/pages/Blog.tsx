
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    year: "2024",
    date: "14/JUN",
    title: "GLOBAL CITIZEN, EDUCATOR / 2020-PRESENT",
    author: "admin",
    fullDate: "June 14, 2024",
    excerpt: "Exploring identity and purpose as a global citizen in search of belonging and meaning. Teaching financial literacy across cultures and building bridges between communities...",
    readMore: true
  },
  {
    id: 2,
    year: "2023",
    date: "15/DEC",
    title: "PIZZA CONES & INNOVATION / 2019-2023",
    author: "admin", 
    fullDate: "December 15, 2023",
    excerpt: "Building sustainable food solutions with innovative approaches. From rice straws to pizza cones, exploring how innovation can solve real-world problems...",
    readMore: true
  },
  {
    id: 3,
    year: "2022",
    date: "08/MAR",
    title: "TEACHING IN VIETNAM / 2020-2022",
    author: "admin",
    fullDate: "March 8, 2022", 
    excerpt: "Discovering passion for education while teaching in Vietnam. Learning about different educational systems and the power of cross-cultural knowledge sharing...",
    readMore: true
  }
];

const skills = [
  { name: "education", level: 90, color: "bg-green-500" },
  { name: "entrepreneurship", level: 85, color: "bg-green-400" },
  { name: "innovation", level: 80, color: "bg-green-300" },
  { name: "communication", level: 88, color: "bg-green-400" }
];

const recentPosts = [
  {
    title: "GLOBAL CITIZEN, EDUCATOR / 2020-PRESENT",
    date: "June 14, 2024",
    image: "/lovable-uploads/6d76e00a-d49c-4111-a59c-100b51a2218e.png"
  },
  {
    title: "PIZZA CONES & INNOVATION / 2019-2023", 
    date: "December 15, 2023",
    image: "/lovable-uploads/21ddd6b2-888c-47f1-a6ab-c20777966f73.png"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                MY TIMELINE
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                my latest post
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-6 text-sm text-gray-600 uppercase tracking-wide">
                <div>CONTACT ME</div>
                <div className="text-gray-400">BE IN TOUCH WITH ME</div>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600 uppercase tracking-wide">
                <div>OTHER PAGES</div>
                <div className="text-gray-400">PAGES</div>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600 uppercase tracking-wide">
                <div>OTHER DEMO</div>
                <div className="text-gray-400">SEE OUR 5 DEMOS</div>
              </div>
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-light text-gray-300 uppercase tracking-widest">
                YOUR NAME
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-5xl font-light text-gray-800 mb-12 tracking-wide">
              My Blog Posts
            </h1>
            
            <div className="space-y-12">
              {blogPosts.map((post) => (
                <div key={post.id} className="flex gap-8">
                  {/* Timeline Date Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full border-2 border-gray-300 bg-white flex flex-col items-center justify-center">
                      <div className="text-lg font-medium text-gray-800">{post.year}</div>
                      <div className="text-xs text-gray-500 uppercase">{post.date}</div>
                    </div>
                    {/* Timeline line */}
                    <div className="w-0.5 h-24 bg-gray-200 mx-auto mt-4"></div>
                  </div>
                  
                  {/* Post Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-medium text-gray-800 uppercase tracking-wide mb-2">
                      {post.title}
                    </h2>
                    <div className="text-sm text-gray-500 mb-4">
                      Posted by {post.author} / {post.fullDate}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    {post.readMore && (
                      <Button variant="link" className="text-gray-600 p-0 h-auto font-normal">
                        Keep Reading ›
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80">
            {/* Skills Section */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-6 border-b border-gray-200 pb-2">
                  Skills
                </h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">{skill.name}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${skill.color}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts Section */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-6 border-b border-gray-200 pb-2">
                  My Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="flex gap-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-800 uppercase tracking-wide mb-1">
                          {post.title}
                        </h4>
                        <div className="text-xs text-gray-500">{post.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
