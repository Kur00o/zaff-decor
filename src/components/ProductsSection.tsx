import { ArrowUpRight } from 'lucide-react';

interface Product {
  title: string;
  description: string;
  image: string;
}

interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection = ({ products }: ProductsSectionProps) => {
  return (
    <section id="products" className="py-24 relative overflow-hidden bg-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(38_60%_55%_/_0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(38_60%_55%_/_0.06),_transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle inline-block mb-4">What We Offer</span>
          <h2 className="section-title text-foreground mb-6">
            Our <span className="text-gradient-gold">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our range of premium interior solutions designed to transform 
            your spaces into stunning works of art.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group relative overflow-hidden rounded-sm bg-card border border-border/50 transition-all duration-500 hover:border-primary/50 hover:shadow-elevated"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-display font-medium text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-white/80 text-sm line-clamp-2 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Explore <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
