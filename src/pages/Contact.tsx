import { Header } from "@/components/Header";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <Header />
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium text-foreground">COMING SOON</h2>
          <p className="text-muted-foreground mt-2">More features and locations being added daily</p>
        </div>
        <div className="h-48 rounded-lg overflow-hidden mb-12">
          <FlickeringGrid
            className="w-full h-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-medium text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our contact form and support channels will be available soon. Stay tuned for updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;