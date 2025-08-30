import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Recycle, 
  TestTube, 
  Droplets, 
  CloudRain, 
  Zap, 
  Bug,
  ArrowRight,
  Users,
  TrendingUp,
  Currency,
  IndianRupee,
  Landmark
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const tools = [
  {
    id: "crop-rotation",
    title: "Crop Rotation Planner",
    description: "Plan optimal crop rotations to improve soil health and maximize yields",
    image: "crop_rotation_planning.jpg",
    icon: Recycle,
    badge: "Popular",
    users: "2.5k",
    improvement: "+18%"
  },
  {
    id: "soil-ph",
    title: "Price Prediction",
    description: "Calculate real time market price of crops based on various factors",
    image: "https://images.unsplash.com/photo-1710090720809-527cefdac598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2lsJTIwdGVzdGluZyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1NjI5MjcwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: IndianRupee,
    badge: "Essential",
    users: "1.8k",
    improvement: "+22%"
  },
  {
    id: "irrigation",
    title: "Government Schemes Suggestion",
    description: "Smart irrigation scheduling based on weather and soil moisture data",
    image: "PMK.jpg",
    icon: Landmark,
    badge: "Smart",
    users: "3.1k",
    improvement: "+50%"
  },
  {
    id: "weather",
    title: "Weather Prediction",
    description: "Real-time weather monitoring and forecasting for better farm planning",
    image: "https://images.unsplash.com/photo-1755245291656-34f9a96bee38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwbW9uaXRvcmluZyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1NjM4MjM5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: CloudRain,
    badge: "Real-time",
    users: "4.2k",
    improvement: "+15%"
  },
  {
    id: "fertilizer",
    title: "Coming Soon...",
    description: "Stay connected to know more...",
    image: "coming soon.jpg",
    icon: Zap,
    badge: "",
    users: "",
    improvement: ""
  },
  {
    id: "pest",
    title: "Coming Soon...",
    description: "Stay connected to know more...",
    image: "coming soon.jpg",
    icon: Bug,
    badge: "",
    users: "",
    improvement: ""
  }
];

export function ToolsSection() {
  return (
    <section id="tools" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Agriculture Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our suite of digital tools helps farmers make data-driven decisions, 
            optimize resource usage, and maximize crop yields through modern technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Card key={tool.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900">
                      {tool.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-600 p-2 rounded-full text-white">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                    {tool.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {tool.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{tool.users} users</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-600">
                      <TrendingUp className="w-4 h-4" />
                      <span>{tool.improvement} yield</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors"
                    variant="outline"
                  >
                    Use Tool
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            View All Tools
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}