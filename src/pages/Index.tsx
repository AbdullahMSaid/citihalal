import { useState } from "react";
import { CategoryFilter } from "@/components/CategoryFilter";
import { CitySelect } from "@/components/CitySelect";
import { PlaceCard } from "@/components/PlaceCard";
import { Category, Place } from "@/types/place";

// Mock data - replace with real API call in production
const mockPlaces: Place[] = [
  {
    id: "1",
    name: "The Coffee House",
    category: "coffee",
    city: "New York",
    description: "Artisanal coffee shop with house-roasted beans and fresh pastries.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "Urban Outfitters",
    category: "shop",
    city: "Los Angeles",
    description: "Trendy clothing store featuring the latest fashion and accessories.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    name: "Gourmet Kitchen",
    category: "food",
    city: "San Francisco",
    description: "Fine dining restaurant serving contemporary American cuisine.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
  },
  // Add more mock data as needed
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const filteredPlaces = mockPlaces.filter((place) => {
    const matchesCategory = !selectedCategory || place.category === selectedCategory;
    const matchesCity = !selectedCity || place.city === selectedCity;
    return matchesCategory && matchesCity;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100/50">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-medium text-neutral-900 mb-4">
              Discover Your City
            </h1>
            <p className="text-neutral-600">
              Find the best places to shop, eat, and drink in your area
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <CitySelect selectedCity={selectedCity} onSelectCity={setSelectedCity} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
            {filteredPlaces.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-neutral-600">
                  No places found. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;