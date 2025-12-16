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
    <section id="about" className="py-24 bg-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-subtitle inline-block mb-4">Our Story</span>
          <h2 className="section-title text-foreground mb-6">
            Meet the <span className="text-gradient-gold">Family</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            At Zaff Decor, we're more than just a business – we're a family. 
            Our partnership is built on shared values, mutual respect, and a 
            passion for creating beautiful spaces that bring joy to our clients.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`flex flex-col ${index % 2 === 1 ? 'md:mt-12' : ''}`}
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

                {/* Decorative Frame */}
                <div className="absolute -inset-3 border border-primary/20 rounded-sm -z-10" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-sm -z-10" />

                {/* Name Card */}
                <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-sm">
                  <h3 className="text-2xl font-display font-medium text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Family Culture Section */}
        <div className="glass-card rounded-sm p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
                Why Choose a <span className="text-gradient-gold">Family Business?</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When you work with Zaff Decor, you're not just hiring a service – 
                you're joining our family. We believe that the best results come 
                from genuine relationships, open communication, and a shared 
                commitment to excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our family culture means we take personal pride in every project. 
                We understand that your space is an extension of your identity, 
                and we treat it with the care and attention we'd give our own homes.
              </p>
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Journey With Us
              </a>
            </div>

            {/* Right - Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-6 bg-secondary/30 rounded-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <value.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-display text-lg font-medium text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
