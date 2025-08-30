import { Card, CardContent } from "./ui/card";
import { 
  BarChart3, 
  Shield, 
  Smartphone, 
  Users, 
  Zap, 
  Globe,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Make informed decisions with comprehensive analytics and reporting tools"
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Your farm data is protected with enterprise-grade security measures"
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Access all tools on any device, whether you're in the field or office"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with thousands of farmers and agricultural experts worldwide"
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Get instant notifications about weather changes and critical farm conditions"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Localized weather data and region-specific crop recommendations"
  }
];

const benefits = [
  "Increase crop yields by up to 30%",
  "Reduce water usage by 25%",
  "Optimize fertilizer costs",
  "Prevent crop diseases early",
  "Plan seasonal activities better",
  "Track farm performance metrics"
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Why Choose AgriTools?
              </h2>
              <p className="text-lg text-gray-600">
                Our platform combines cutting-edge technology with practical farming knowledge 
                to deliver tools that actually work in the real world.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Proven Results
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4 text-center">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-green-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}