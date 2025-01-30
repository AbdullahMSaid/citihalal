import { useState } from "react";
import { CategoryFilter } from "@/components/CategoryFilter";
import { CitySelect } from "@/components/CitySelect";
import { PlaceCard } from "@/components/PlaceCard";
import { PlaceDialog } from "@/components/PlaceDialog";
import { Category, Place } from "@/types/place";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/Header";

const mockPlaces: Place[] = [
  {
    id: "1",
    name: "The Coffee House",
    category: "coffee",
    city: "New York",
    description: "Artisanal coffee shop with house-roasted beans and fresh pastries. Our expert baristas craft each drink with precision and care, using only the finest locally roasted beans. We also offer a selection of homemade pastries and light breakfast options.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "Urban Outfitters",
    category: "shop",
    city: "Los Angeles",
    description: "Trendy clothing store featuring the latest fashion and accessories. Browse through our carefully curated collection of contemporary fashion, home decor, and unique gifts. Our store offers a mix of well-known brands and emerging designers.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    name: "Gourmet Kitchen",
    category: "food",
    city: "San Francisco",
    description: "Fine dining restaurant serving contemporary American cuisine. Our seasonal menu features locally sourced ingredients prepared with modern techniques. The elegant atmosphere and exceptional service create an unforgettable dining experience.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const filteredPlaces = mockPlaces.filter((place) => {
    const matchesCategory = !selectedCategory || place.category === selectedCategory;
    const matchesCity = !selectedCity || place.city === selectedCity;
    const matchesSearch = !searchQuery || 
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesCity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <Header />
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
          alt="City lights"
          className="w-full h-full object-cover opacity-90"
          style={{ backgroundColor: 'rgb(250, 247, 244)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10" />
      </div>
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-medium text-foreground mb-4">
              Discover Your City
            </h1>
            <p className="text-muted-foreground">
              Find the best places to shop, eat, and drink in your area
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="max-w-none">
              <Input
                type="search"
                placeholder="Search places..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
              <div className="w-32 sm:w-40">
                <CitySelect selectedCity={selectedCity} onSelectCity={setSelectedCity} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlaces.map((place) => (
                <PlaceCard 
                  key={place.id} 
                  place={place} 
                  onClick={() => setSelectedPlace(place)}
                />
              ))}
              {filteredPlaces.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">
                    No places found. Try adjusting your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <PlaceDialog
        place={selectedPlace}
        open={!!selectedPlace}
        onOpenChange={(open) => !open && setSelectedPlace(null)}
      />
    </div>
  );
};

export default Index;