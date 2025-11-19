import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for pilot programs and small production lines",
      price: "Custom",
      features: [
        "Single production line",
        "Up to 50,000 inspections/month",
        "100+ defect categories",
        "Basic reporting",
        "Email support",
        "Standard SLA",
      ],
      cta: "Start Pilot Program",
      highlighted: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing manufacturers",
      price: "Custom",
      features: [
        "Up to 5 production lines",
        "Unlimited inspections",
        "Custom defect training",
        "Advanced analytics dashboard",
        "PLC & MES integration",
        "Priority support",
        "99.5% uptime SLA",
      ],
      cta: "Request Demo",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "For large-scale manufacturing operations",
      price: "Custom",
      features: [
        "Unlimited production lines",
        "Multi-site deployment",
        "Custom AI model training",
        "Dedicated success manager",
        "24/7 premium support",
        "Custom integrations",
        "99.9% uptime SLA",
        "On-premise deployment option",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const addOns = [
    {
      name: "Advanced AI Training",
      description: "Custom defect detection models for your specific products",
      tooltip: "Train Q100.ai to detect unique defects specific to your production process",
    },
    {
      name: "Multi-Site License",
      description: "Deploy across multiple manufacturing facilities",
      tooltip: "Centralized management and reporting across all your plants",
    },
    {
      name: "Premium Support",
      description: "24/7 technical support with guaranteed response times",
      tooltip: "< 1 hour response time for critical issues",
    },
    {
      name: "Custom Integration",
      description: "Integration with legacy systems and custom ERP solutions",
      tooltip: "Our team will build custom connectors for your unique infrastructure",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-industrial-light/30 to-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible licensing options designed to scale with your manufacturing needs
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    plan.highlighted
                      ? "border-primary shadow-xl scale-105"
                      : "border-border"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-display font-bold">{plan.price}</div>
                      <div className="text-sm text-muted-foreground">Contact for quote</div>
                    </div>

                    <Button
                      variant={plan.highlighted ? "cta" : "default"}
                      className="w-full mb-6"
                      size="lg"
                      asChild
                    >
                      <Link to="/demo">{plan.cta}</Link>
                    </Button>

                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Optional <span className="text-primary">Add-ons</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enhance your Q100.ai deployment with additional services
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <TooltipProvider>
                {addOns.map((addon, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-display font-semibold">{addon.name}</h3>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="w-5 h-5 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{addon.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <p className="text-sm text-muted-foreground">{addon.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-display font-semibold mb-2">How is pricing determined?</h3>
                    <p className="text-sm text-muted-foreground">
                      Pricing is based on the number of production lines, inspection volume, and required features. 
                      Contact our sales team for a customized quote based on your specific needs.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-display font-semibold mb-2">Is there a minimum contract period?</h3>
                    <p className="text-sm text-muted-foreground">
                      We offer flexible contracts starting from 12 months. Pilot programs can begin with shorter terms.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-display font-semibold mb-2">What's included in setup?</h3>
                    <p className="text-sm text-muted-foreground">
                      All plans include hardware installation, software configuration, initial training, and integration support. 
                      Advanced customization and on-site training are available as add-ons.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Schedule a demo to see Q100.ai in action and get a custom quote for your facility
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">Request Custom Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
