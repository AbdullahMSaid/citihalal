import { Header } from "@/components/Header";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

const Maps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <Header />
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute inset-0">
            <FlickeringGrid 
              squareSize={4}
              gridGap={6}
              flickerChance={0.3}
              maxOpacity={0.3}
            />
          </div>
          <div className="relative z-10 text-center py-20">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
              Maps Coming Soon
            </h1>
            <p className="text-lg text-muted-foreground">
              Our interactive maps feature is under development. Stay tuned for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;