const clients = [
  { name: 'Bishop School', initials: 'BS' },
  { name: 'Kundan Spaces', initials: 'KS' },
  { name: 'Aditya Architects', initials: 'AA' },
  { name: 'Metro Builders', initials: 'MB' },
  { name: 'Elite Interiors', initials: 'EI' },
  { name: 'Royal Estates', initials: 'RE' },
  { name: 'Urban Living', initials: 'UL' },
  { name: 'Prime Properties', initials: 'PP' },
];

const ClientsSection = () => {
  // Duplicate clients for seamless loop
  const allClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-16 sm:py-24 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 sm:mb-16">
        <div className="text-center">
          <span className="section-subtitle inline-block mb-4 text-xs sm:text-sm">Trusted By</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-foreground">
            Our Valued Clients
          </h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Logos */}
        <div className="flex animate-marquee">
          {allClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-4 sm:mx-8 group"
            >
              <div className="w-28 h-20 sm:w-40 sm:h-24 glass-card rounded-sm flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:scale-105">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-display font-bold text-primary mb-1">
                    {client.initials}
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground tracking-wide px-2">
                    {client.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-12 sm:mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: '200+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '9+', label: 'Years Experience' },
            { number: '15+', label: 'Team Members' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
