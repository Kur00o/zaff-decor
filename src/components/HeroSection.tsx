import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-texture texture-lines overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-muted-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image Composition */}
          <div className="relative opacity-0 animate-fade-up order-2 lg:order-1">
            {/* Main Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={heroImage}
                alt="Elegant interior design showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            
            {/* Decorative Elements - Hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-sm" />
            <div className="hidden sm:block absolute -top-6 -left-6 w-24 h-24 bg-primary/10 backdrop-blur-sm rounded-sm" />
            
            {/* Experience Badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 glass-card px-4 py-3 sm:px-6 sm:py-4 rounded-sm">
              <div className="text-3xl sm:text-4xl font-display font-bold text-primary">9+</div>
              <div className="text-xs sm:text-sm text-muted-foreground tracking-wide">Years Experience</div>
            </div>
          </div>

          {/* Right - Content Card */}
          <div className="lg:relative lg:-ml-20 z-10 order-1 lg:order-2">
            <div className="glass-card p-6 sm:p-10 lg:p-14 rounded-sm opacity-0 animate-fade-up animation-delay-200">
              <span className="section-subtitle inline-block mb-4 sm:mb-6 text-xs sm:text-sm">Welcome to Zaff Decor</span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground mb-6 sm:mb-8 leading-tight">
                Where Visions<br />
                <span className="text-gradient-gold">Meet Reality</span>
              </h1>
              
              <p className="text-muted-foreground leading-relaxed mb-8 sm:mb-10 text-base sm:text-lg">
                Zaff Decor has been a trusted name in the industry for over 9 years, 
                delivering exceptional products and services to our valued customers. 
                Our decade of experience has allowed us to refine our craft and understand 
                the unique needs of our clients.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#projects" className="btn-primary inline-flex items-center justify-center gap-2 group text-sm sm:text-base py-3 sm:py-4">
                  View Our Work
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a href="#about" className="btn-outline inline-flex items-center justify-center text-sm sm:text-base py-3 sm:py-4">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3 opacity-0 animate-fade-in animation-delay-600">
        <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
