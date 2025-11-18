import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import automotiveImage from "@/assets/automotive-industry.jpg";
import whiteGoodsImage from "@/assets/white-goods-industry.jpg";

const Industries = () => {
  const industries = [
    {
      name: "Automotive",
      description: "Quality inspection for Tier-1 and Tier-2 suppliers",
      features: [
        "Engine component inspection",
        "Surface defect detection",
        "Assembly verification",
        "PPM reduction",
      ],
      image: automotiveImage,
    },
    {
      name: "White Goods",
      description: "End-of-line inspection for appliance manufacturers",
      features: [
        "Component presence checks",
        "Surface quality validation",
        "Assembly accuracy",
        "Compliance reporting",
      ],
      image: whiteGoodsImage,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Trusted by Leading <span className="text-primary">Industries</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering quality excellence across manufacturing sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={industry.image}
                  alt={`${industry.name} industry`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-2xl font-display font-bold mb-2">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground mb-6">{industry.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link to="/industries">
                    Learn more
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/industries">
              Explore All Industries
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
