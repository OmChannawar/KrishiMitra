import { Button } from "./ui/button";
import { ArrowRight, Sprout } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import React from "react";

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-green-600">
                <Sprout className="w-5 h-5" />
                <span className="text-sm uppercase tracking-wide font-medium">Smart Agriculture</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Modern Tools for
                <span className="text-green-600 block">Smart Farming</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Optimize your farming operations with our comprehensive suite of digital tools. 
                From crop rotation planning to soil analysis, we've got everything you need to maximize your harvest.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Explore Tools
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="bg-green-100">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10k+</div>
                <div className="text-sm text-gray-600">Active Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50M+</div>
                <div className="text-sm text-gray-600">Acres Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">25%</div>
                <div className="text-sm text-gray-600">Avg. Yield Increase</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1641128259256-1c1ea3d84d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBmaWVsZHN8ZW58MXx8fHwxNzU2MzU4MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern farming with technology"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-2xl"></div>
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}