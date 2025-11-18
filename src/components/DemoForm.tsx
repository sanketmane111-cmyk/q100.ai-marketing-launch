import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const DemoForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Demo Request Submitted!",
      description: "Our team will contact you within 24 hours to schedule your personalized demo.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            name="firstName"
            required
            placeholder="John"
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            name="lastName"
            required
            placeholder="Smith"
            className="bg-background"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Work Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john.smith@company.com"
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company Name *</Label>
        <Input
          id="company"
          name="company"
          required
          placeholder="Your Company"
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Industry *</Label>
        <Select name="industry" required>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="automotive-tier1">Automotive - Tier 1</SelectItem>
            <SelectItem value="automotive-tier2">Automotive - Tier 2</SelectItem>
            <SelectItem value="white-goods">White Goods</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="aerospace">Aerospace</SelectItem>
            <SelectItem value="other">Other Manufacturing</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (234) 567-8900"
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your quality inspection needs..."
          rows={4}
          className="bg-background resize-none"
        />
      </div>

      <Button
        type="submit"
        variant="cta"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            Request Demo
            <Send className="ml-2" size={18} />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  );
};

export default DemoForm;
