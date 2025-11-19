import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-display font-bold mb-4">
              Q100<span className="text-accent">.ai</span>
            </div>
            <p className="text-secondary-foreground/80 text-sm mb-4">
              100% quality results for manufacturing industries.
            </p>
            <div className="space-y-2 text-sm text-secondary-foreground/80">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:sales@augle.ai" className="hover:text-accent transition-colors">
                  sales@augle.ai
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+918108148186" className="hover:text-accent transition-colors">
                  +91 8108 148186
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>5th Floor, SINE Office, IRCC, IDC - Rahul Bajaj Technology Innovation Centre, YP Rd, IIT Area, Powai, Mumbai, Maharashtra 400076</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <Link to="/features" className="hover:text-accent transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-accent transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/demo" className="hover:text-accent transition-colors">
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Download Datasheet
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/demo" className="hover:text-accent transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60 gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p>&copy; {currentYear} Q100.ai. All rights reserved.</p>
              <div className="flex items-center space-x-2 text-secondary-foreground/80">
                <span className="text-lg">🇮🇳</span>
                <span className="font-semibold">Made in India</span>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
