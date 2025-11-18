import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import automotiveImage from "@/assets/automotive-industry.jpg";
import whiteGoodsImage from "@/assets/white-goods-industry.jpg";

const Industries = () => {
  const industries = [
    {
      name: "Automotive Manufacturing",
      subtitle: "Tier-1 & Tier-2 Suppliers",
      description:
        "Ensure zero-defect delivery with AI-powered inspection for automotive components and assemblies.",
      image: automotiveImage,
      challenges: [
        "High PPM requirements from OEMs",
        "Complex multi-component assemblies",
        "Strict surface quality standards",
        "Rapid product changeovers",
      ],
      solutions: [
        "Detect micro-defects on painted and polished surfaces",
        "Verify complex assembly configurations",
        "Real-time compliance reporting",
        "Adapt to new part numbers in 2 hours",
      ],
      results: [
        "87% reduction in defect escape rate",
        "45% faster quality verification",
        "100% traceability for recalls",
        "Zero manual inspection errors",
      ],
    },
    {
      name: "White Goods Manufacturing",
      subtitle: "Appliance OEMs",
      description:
        "Streamline quality control for refrigerators, washing machines, and appliances with automated inspection.",
      image: whiteGoodsImage,
      challenges: [
        "Large component variety per product",
        "Cosmetic defect sensitivity",
        "High-volume production lines",
        "Regulatory compliance requirements",
      ],
      solutions: [
        "Comprehensive presence/absence checks",
        "Surface finish quality validation",
        "Assembly accuracy verification",
        "Automated compliance documentation",
      ],
      results: [
        "60% reduction in customer complaints",
        "35% faster line speeds",
        "95% decrease in warranty claims",
        "Complete audit trail for certification",
      ],
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
              Industry <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored quality inspection solutions for manufacturing excellence across industries
            </p>
          </div>
        </section>

        {/* Industry Sections */}
        {industries.map((industry, index) => (
          <section
            key={index}
            className={index % 2 === 0 ? "py-16 lg:py-24 bg-background" : "py-16 lg:py-24 bg-muted/50"}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm font-semibold text-primary mb-2">{industry.subtitle}</div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        {industry.name}
                      </h2>
                      <p className="text-lg text-muted-foreground">{industry.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-display font-semibold mb-3">Key Challenges</h3>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-display font-semibold mb-3">Q100.ai Solutions</h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-6">
                        <h4 className="font-display font-semibold mb-3">Proven Results</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {industry.results.map((result, idx) => (
                            <div key={idx} className="text-sm">
                              <CheckCircle2 className="w-4 h-4 text-primary inline mr-2" />
                              {result}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Your Industry, Our Expertise
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-secondary-foreground/80">
              Don't see your industry? Q100.ai adapts to any manufacturing environment.
              Let's discuss your specific needs.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
