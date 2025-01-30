import { Header } from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <Header />
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e"
          alt="Shopping district"
          className="w-full h-full object-cover opacity-90"
          style={{ backgroundColor: 'rgb(250, 247, 244)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10" />
      </div>
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-medium text-foreground mb-6">
            About CityPick
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This is so everyone can find the best halal shopping experience. We're dedicated to helping you discover and explore halal-friendly businesses in your city, making it easier to shop with confidence and peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;