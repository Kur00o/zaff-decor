import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img
                src="/zaffdecorlogo.png"
                alt="Zaff Decor logo"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <span className="font-display text-xl sm:text-2xl font-medium text-foreground">
                Zaff Decor
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Transforming spaces with passion, precision, and a family touch. 
              Let us bring your vision to life.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-medium text-foreground mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Home', 'Products', 'Projects', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="hidden sm:block">
            <h4 className="font-display text-base sm:text-lg font-medium text-foreground mb-4 sm:mb-6">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Interior Design',
                'Custom Furniture',
                'Space Planning',
                'Renovation',
                'Consultation',
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm sm:text-base">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-display text-base sm:text-lg font-medium text-foreground mb-4 sm:mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                <span className="text-muted-foreground text-sm sm:text-base">
                  123 Design Street, Creative District, Pune 411001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                <a
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                <a
                  href="mailto:hello@zaffdecor.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                >
                  hello@zaffdecor.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-10 sm:mt-16 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © 2024 Zaff Decor. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
