import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoForm from "@/components/DemoForm";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Award, TrendingUp } from "lucide-react";

const Demo = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Quick Setup",
      description: "See how we can deploy in just 2 hours",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our team will walk you through everything",
    },
    {
      icon: Award,
      title: "Tailored Demo",
      description: "Customized to your production needs",
    },
    {
      icon: TrendingUp,
      title: "ROI Analysis",
      description: "Understand your potential cost savings",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-industrial-light/30 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
              {/* Left Column - Info */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                    Request a <span className="text-primary">Live Demo</span>
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    See Q100.ai in action with a personalized demonstration tailored to your 
                    manufacturing environment. Our experts will show you how to achieve 100% quality 
                    results in your production line.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-display font-semibold">What to Expect</h2>
                  <ul className="space-y-3">
                    {[
                      "Live demonstration of AI-powered defect detection",
                      "Walkthrough of the 2-hour setup process",
                      "Integration capabilities with your existing systems",
                      "ROI calculation specific to your production volume",
                      "Q&A session with our technical experts",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="border-border">
                      <CardContent className="p-4">
                        <benefit.icon className="w-8 h-8 text-primary mb-2" />
                        <h3 className="font-display font-semibold text-sm mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-muted/50 border-border">
                  <CardContent className="p-6">
                    <h3 className="font-display font-semibold mb-2">Trusted by Industry Leaders</h3>
                    <p className="text-sm text-muted-foreground">
                      Join automotive Tier-1 suppliers and white goods manufacturers who trust 
                      Q100.ai to maintain zero-defect quality standards.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Form */}
              <div>
                <Card className="border-border shadow-xl sticky top-24">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h2 className="text-2xl font-display font-bold mb-2">Get Your Demo</h2>
                      <p className="text-sm text-muted-foreground">
                        Fill out the form below and we'll contact you within 24 hours
                      </p>
                    </div>
                    <DemoForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
