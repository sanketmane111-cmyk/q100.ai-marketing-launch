import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-manufacturing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-industrial-light/30 to-background pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                AI-Powered Quality Inspection
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              100% Quality Results for{" "}
              <span className="text-primary">Manufacturing</span> Industries
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
              End-of-line AI quality inspection that detects defects and ensures compliance. 
              Operational in 2 hours with 100+ product categories supported out-of-the-box.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/demo">
                  Request a Live Demo
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Watch Video
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-display font-bold text-primary">2 Hours</div>
                <div className="text-sm text-muted-foreground">Setup Time</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Defect Categories</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="AI Quality Inspection in Manufacturing"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              
              {/* Floating annotation card */}
              <div className="absolute bottom-6 right-6 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <div>
                    <div className="text-sm font-semibold">Live Inspection</div>
                    <div className="text-xs text-muted-foreground">Detecting defects in real-time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
