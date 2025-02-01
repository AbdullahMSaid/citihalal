import { Header } from "@/components/Header";
import { WorldMap } from "@/components/ui/world-map";

const Maps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <Header />
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <WorldMap
            dots={[
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 21.4225, lng: 39.8262 }, // Mecca
              },
              {
                start: { lat: 40.7128, lng: -74.0060 }, // New York
                end: { lat: 25.2048, lng: 55.2708 }, // Dubai
              },
              {
                start: { lat: 35.6762, lng: 139.6503 }, // Tokyo
                end: { lat: 24.7136, lng: 46.6753 }, // Riyadh
              },
            ]}
            lineColor="#6B7280"
          />
        </div>
      </div>
    </div>
  );
};

export default Maps;