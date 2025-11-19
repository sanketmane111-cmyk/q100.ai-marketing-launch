import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Clock,
  Target,
  Settings,
  FileCheck,
  Zap,
  Shield,
  Database,
  GitMerge,
  CheckCircle2,
  AlertCircle,
  Camera,
  LineChart,
  Smartphone,
} from "lucide-react";
import featuresImage from "@/assets/hero-phone-inspection.jpg";

const Features = () => {
  const coreFeatures = [
    {
      icon: Clock,
      title: "2-Hour Setup",
      description:
        "Fast standalone setup — add a new part and be fully operational within 2 hours. Deploy Q100.ai at your production line with minimal downtime.",
      benefits: [
        "Pre-trained AI models for common defects",
        "Simple configuration interface",
        "No complex integration required",
        "Immediate ROI realization",
      ],
    },
    {
      icon: Target,
      title: "100+ Detection Categories",
      description:
        "Comprehensive defect detection covering the widest range of quality issues in manufacturing.",
      benefits: [
        "Surface defects (scratches, dents, discoloration)",
        "Small defect detection with high accuracy",
        "Assembly errors and missing components",
        "Dimensional anomalies",
        "Contamination and foreign objects",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Phone Inspection",
      description:
        "Capture parts using any mobile phone — Q100.ai analyzes images perfectly even with hand movement or motion blur, delivering accurate and reliable inspection results anywhere.",
      benefits: [
        "Mobile phone image capture supported",
        "Robust to motion blur during capture",
        "Credible results even with operator movement",
        "No specialized camera hardware required",
      ],
    },
    {
      icon: Camera,
      title: "Advanced Vision System",
      description:
        "State-of-the-art computer vision powered by deep learning algorithms for unmatched accuracy.",
      benefits: [
        "Multi-angle inspection capability",
        "High-resolution defect detection",
        "Real-time image processing",
        "Adaptive lighting compensation",
      ],
    },
    {
      icon: Zap,
      title: "Small Defect Detection",
      description:
        "Lightning-fast inspection at production line speed without compromising accuracy. Detects even small defects with precision.",
      benefits: [
        "< 100ms processing time per part",
        "Small defect detection capability",
        "Zero bottlenecks in production",
        "Instant pass/fail decisions",
        "Continuous learning from data",
      ],
    },
    {
      icon: Settings,
      title: "Easy Configuration",
      description:
        "Intuitive interface for adding new specs and adjusting quality parameters without IT support.",
      benefits: [
        "Visual configuration tools",
        "Template-based setup",
        "Multi-user role management",
        "Cloud-based updates",
      ],
    },
    {
      icon: FileCheck,
      title: "Compliance & Traceability",
      description:
        "Complete audit trail with detailed QA reports for regulatory compliance and quality standards.",
      benefits: [
        "ISO 9001 compliant reporting",
        "Automated documentation",
        "Batch traceability",
        "Custom report templates",
      ],
    },
  ];

  const integrationFeatures = [
    {
      icon: GitMerge,
      title: "PLC Integration",
      description: "Seamless connection with major PLC brands for automated quality gates.",
    },
    {
      icon: Database,
      title: "MES Connectivity",
      description: "Direct integration with Manufacturing Execution Systems for data flow.",
    },
    {
      icon: LineChart,
      title: "Analytics Dashboard",
      description: "Real-time quality metrics and trend analysis for continuous improvement.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-industrial-light/30 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Powerful <span className="text-primary">Features</span> for Manufacturing Excellence
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground">
                Advanced AI-powered quality inspection with enterprise-grade capabilities. Fast standalone setup — add a new part and be operational within 2 hours.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto bg-white rounded-lg p-8">
              <img
                src={featuresImage}
                alt="Inspector using mobile phone to capture car door panel — Q100.ai defect highlight"
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {coreFeatures.map((feature, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Features */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Enterprise <span className="text-primary">Integration</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect seamlessly with your existing manufacturing infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {integrationFeatures.map((feature, index) => (
                <Card key={index} className="text-center border-border">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Transform Your Quality Control?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              See Q100.ai in action with a personalized demo tailored to your production line
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">Request Your Demo Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
