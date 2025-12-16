import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import ProductsSection from "@/components/ProductsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

// Import images
import heroImage from "@/assets/hero-interior.jpg";
import productFurniture from "@/assets/product-furniture.jpg";
import productPanels from "@/assets/product-panels.jpg";
import productLighting from "@/assets/product-lighting.jpg";
import productCurtains from "@/assets/product-curtains.jpg";
import productFlooring from "@/assets/product-flooring.jpg";
import productDecor from "@/assets/product-decor.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectRetail from "@/assets/project-retail.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectSpa from "@/assets/project-spa.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";

const products = [
  {
    title: "Custom Furniture",
    description: "Handcrafted pieces tailored to your space, combining functionality with timeless elegance.",
    image: productFurniture,
  },
  {
    title: "Wall Panels",
    description: "Decorative 3D panels and textured surfaces that add depth and character to any room.",
    image: productPanels,
  },
  {
    title: "Designer Lighting",
    description: "Statement chandeliers and fixtures that illuminate your space with warmth and style.",
    image: productLighting,
  },
  {
    title: "Premium Curtains",
    description: "Luxurious window treatments that frame your views and enhance privacy beautifully.",
    image: productCurtains,
  },
  {
    title: "Flooring Solutions",
    description: "From elegant hardwood to modern tiles, flooring that grounds your design vision.",
    image: productFlooring,
  },
  {
    title: "Home Decor",
    description: "Curated accessories and art pieces that add the finishing touches to your space.",
    image: productDecor,
  },
];

const projects = [
  {
    title: "Luxury Villa Residence",
    category: "Residential",
    image: projectResidential,
  },
  {
    title: "Artisan Restaurant",
    category: "Hospitality",
    image: projectRestaurant,
  },
  {
    title: "Modern Corporate Office",
    category: "Commercial",
    image: projectOffice,
  },
  {
    title: "Boutique Retail Space",
    category: "Retail",
    image: projectRetail,
  },
  {
    title: "Grand Hotel Lobby",
    category: "Hospitality",
    image: projectHotel,
  },
  {
    title: "Serene Wellness Spa",
    category: "Wellness",
    image: projectSpa,
  },
];

const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Co-Founder & Lead Designer",
    image: teamMember1,
  },
  {
    name: "Priya Sharma",
    role: "Co-Founder & Creative Director",
    image: teamMember2,
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection heroImage={heroImage} />
      <ClientsSection />
      <ProductsSection products={products} />
      <ProjectsSection projects={projects} />
      <AboutSection teamMembers={teamMembers} />
      <Footer />
    </main>
  );
};

export default Index;
