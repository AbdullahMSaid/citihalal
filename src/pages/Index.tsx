import { useState } from "react";
import { Place } from "@/types/place";
import { PlaceCard } from "@/components/PlaceCard";
import { PlaceDialog } from "@/components/PlaceDialog";
import { CategoryFilter } from "@/components/CategoryFilter";
import { CitySelect } from "@/components/CitySelect";

const mockPlaces: Place[] = [
  {
    id: "1",
    name: "The Halal Coffee House",
    category: "coffee",
    city: "New York",
    description: "Artisanal coffee shop with house-roasted beans and fresh pastries. Certified Halal.",
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80"
    ],
    phone: "+1 (212) 555-0123",
    website: "https://halalcoffeehouse.com",
    googleMaps: "https://goo.gl/maps/example1",
  },
  {
    id: "2",
    name: "Urban Halal Market",
    category: "shop",
    city: "Los Angeles",
    description: "Premium Halal grocery store featuring imported goods and fresh meats.",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80"
    ],
    phone: "+1 (323) 555-0456",
    website: "https://urbanhalalmarket.com",
    googleMaps: "https://goo.gl/maps/example2",
  },
  {
    id: "3",
    name: "Gourmet Halal Kitchen",
    category: "food",
    city: "San Francisco",
    description: "Fine dining restaurant serving contemporary Halal cuisine with locally sourced ingredients.",
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&q=80"
    ],
    phone: "+1 (415) 555-0789",
    website: "https://gourmethalalkit.com",
    googleMaps: "https://goo.gl/maps/example3",
  },
];

export default function Index() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handlePlaceClick = (place: Place) => {
    setSelectedPlace(place);
    setDialogOpen(true);
  };

  return (
    <div>
      <CategoryFilter />
      <CitySelect />
      <div className="grid grid-cols-1 gap-4">
        {mockPlaces.map((place) => (
          <PlaceCard key={place.id} place={place} onClick={() => handlePlaceClick(place)} />
        ))}
      </div>
      <PlaceDialog place={selectedPlace} open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}
