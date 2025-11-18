import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingDown, TrendingUp, Clock } from "lucide-react";

const CaseStudy = () => {
  const metrics = [
    {
      icon: TrendingDown,
      value: "87%",
      label: "Defect Rate Reduction",
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      value: "45%",
      label: "Productivity Increase",
      color: "text-primary",
    },
    {
      icon: Clock,
      value: "60%",
      label: "Faster Quality Checks",
      color: "text-secondary",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              Case Study
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Tier-1 Automotive Supplier Success Story
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              How a leading automotive supplier transformed their quality control process
            </p>
          </div>

          <Card className="bg-background/5 border-secondary-foreground/20 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-background/10 rounded-full flex items-center justify-center">
                      <metric.icon className={`w-8 h-8 ${metric.color}`} />
                    </div>
                    <div className="text-4xl font-display font-bold mb-2">{metric.value}</div>
                    <div className="text-sm text-secondary-foreground/70">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-secondary-foreground/20 pt-8">
                <h3 className="text-xl font-display font-semibold mb-4">The Challenge</h3>
                <p className="text-secondary-foreground/80 mb-6">
                  A major automotive Tier-1 supplier was struggling with manual quality inspection processes 
                  that were slow, inconsistent, and unable to catch critical defects. With over 50,000 parts 
                  inspected daily, they needed a solution that could scale while maintaining precision.
                </p>

                <h3 className="text-xl font-display font-semibold mb-4">The Solution</h3>
                <p className="text-secondary-foreground/80 mb-6">
                  Q100.ai was deployed at the end of their assembly line, integrating seamlessly with existing 
                  PLCs and MES systems. Within 2 hours of setup, the system was inspecting parts at full 
                  production speed, detecting surface defects and assembly errors with 99.9% accuracy.
                </p>

                <Button variant="cta" size="lg">
                  Download Full Case Study
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
