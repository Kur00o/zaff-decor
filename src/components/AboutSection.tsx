import { Heart, Users, Shield, Award } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface AboutSectionProps {
  teamMembers: TeamMember[];
}

const AboutSection = ({ teamMembers }: AboutSectionProps) => {
  const values = [
    {
      icon: Heart,
      title: 'Family Values',
      description: 'We treat every client and team member as part of our extended family.',
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'Two minds working together to bring your vision to life.',
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Honest relationships built on transparency and reliability.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality in every project.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-[hsl(30_10%_92%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="section-subtitle inline-block mb-4 text-xs sm:text-sm">Our Story</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[hsl(20_10%_15%)] mb-4 sm:mb-6">
            Meet the <span className="text-gradient-gold">Family</span>
          </h2>
          <p className="text-[hsl(20_10%_40%)] max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2">
            At Zaff Decor, we're more than just a business – we're a family. 
            Our partnership is built on shared values, mutual respect, and a 
            passion for creating beautiful spaces that bring joy to our clients.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 mb-16 sm:mb-24">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`flex flex-col ${index % 2 === 1 ? 'sm:mt-12' : ''}`}
            >
              <div className="relative group">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>

                {/* Decorative Frame - Hidden on mobile */}
                <div className="hidden sm:block absolute -inset-3 border border-primary/20 rounded-sm -z-10" />
                <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-sm -z-10" />

                {/* Name Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 glass-card p-4 sm:p-6 rounded-sm">
                  <h3 className="text-xl sm:text-2xl font-display font-medium text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-xs sm:text-sm tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Family Culture Section */}
        <div className="bg-white/70 backdrop-blur-xl border border-[hsl(30_10%_85%)] rounded-sm p-6 sm:p-10 lg:p-16 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-[hsl(20_10%_15%)] mb-4 sm:mb-6">
                Why Choose a <span className="text-gradient-gold">Family Business?</span>
              </h3>
              <p className="text-[hsl(20_10%_40%)] leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                When you work with Zaff Decor, you're not just hiring a service – 
                you're joining our family. We believe that the best results come 
                from genuine relationships, open communication, and a shared 
                commitment to excellence.
              </p>
              <p className="text-[hsl(20_10%_40%)] leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Our family culture means we take personal pride in every project. 
                We understand that your space is an extension of your identity, 
                and we treat it with the care and attention we'd give our own homes.
              </p>
              <a href="#contact" className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base py-3 sm:py-4">
                Start Your Journey With Us
              </a>
            </div>

            {/* Right - Values Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-4 sm:p-6 bg-[hsl(30_10%_96%)] rounded-sm border border-[hsl(30_10%_85%)] hover:border-primary/50 transition-all duration-300"
                >
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-4" />
                  <h4 className="font-display text-sm sm:text-lg font-medium text-[hsl(20_10%_15%)] mb-1 sm:mb-2">
                    {value.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[hsl(20_10%_40%)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
