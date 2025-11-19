import { Clock, Target, Settings, FileCheck, Zap, Shield, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "2-Hour Setup",
      description: "Fast standalone setup — add a new part and be fully operational within 2 hours. No lengthy training or complex configuration required.",
    },
    {
      icon: Target,
      title: "100+ Categories",
      description: "Supports 100+ product categories and defect types out-of-the-box. From automotive to white goods.",
    },
    {
      icon: Smartphone,
      title: "Mobile Phone Inspection",
      description: "Capture parts using any mobile phone — Q100.ai analyzes images perfectly even with hand movement or motion blur, delivering accurate and reliable inspection results anywhere.",
    },
    {
      icon: Settings,
      title: "Easily Configurable",
      description: "Quickly add new specifications and adapt to changing production requirements without technical expertise.",
    },
    {
      icon: FileCheck,
      title: "Traceable Reports",
      description: "Exports comprehensive QA reports with full traceability for compliance and quality management.",
    },
    {
      icon: Shield,
      title: "Enterprise Integration",
      description: "Seamless integration with PLCs and MES systems for complete automation.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Why Choose <span className="text-primary">Q100.ai</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built for manufacturing excellence with features that deliver 100% quality results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
