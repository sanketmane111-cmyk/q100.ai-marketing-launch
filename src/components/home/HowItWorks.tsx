import { Camera, Cpu, CheckCircle, Database } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: "Capture",
      description: "High-resolution cameras capture images at the end of your assembly line",
      step: "01",
    },
    {
      icon: Cpu,
      title: "Analyze",
      description: "AI algorithms process images in real-time, detecting defects and anomalies",
      step: "02",
    },
    {
      icon: CheckCircle,
      title: "Validate",
      description: "Automated validation against quality standards and specifications",
      step: "03",
    },
    {
      icon: Database,
      title: "Report",
      description: "Generate traceable QA reports and integrate with your MES system",
      step: "04",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, fast, and reliable quality inspection process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl font-display font-bold text-primary/10">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg relative z-10">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
