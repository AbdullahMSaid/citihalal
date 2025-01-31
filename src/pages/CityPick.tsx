import { useState } from "react";
import { Category, Place } from "@/types/place";
import { PlaceDialog } from "@/components/PlaceDialog";
import { Header } from "@/components/Header";
import { Hero } from "@/components/city-pick/Hero";
import { SearchBar } from "@/components/city-pick/SearchBar";
import { FilterBar } from "@/components/city-pick/FilterBar";
import { PlaceGrid } from "@/components/city-pick/PlaceGrid";

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

const CityPick = () => {
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
      <Hero 
        title="Discover Your City"
        subtitle="Find the best places to shop, eat, and drink in your area"
      />
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <FilterBar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
            <PlaceGrid places={filteredPlaces} onPlaceClick={setSelectedPlace} />
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

export default CityPick;
