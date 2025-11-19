import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for pilot programs and small production lines",
      features: [
        "Basic inspection features",
        "100+ product categories",
        "Phone & camera input supported",
        "2-hour setup time",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing manufacturers",
      features: [
        "Full category support",
        "Integrations (PLCs/MES)",
        "Priority support",
        "Advanced reporting",
      ],
      cta: "Request Demo",
      highlighted: true,
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
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                      <div className="text-sm text-muted-foreground">Contact sales for pricing</div>
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
