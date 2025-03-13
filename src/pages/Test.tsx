import { useState, useEffect } from "react";
import { CategoryFilter } from "@/components/CategoryFilter";
import { CitySelect } from "@/components/CitySelect";
import { PlaceCard } from "@/components/PlaceCard";
import { PlaceDialog } from "@/components/PlaceDialog";
import { Category, Place } from "@/types/place";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/Header";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";

// Define environment variables at the top level
const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

// Log environment variables immediately to check if they're loaded
console.log("Environment variables on load:", {
  apiKey: API_KEY ? "Set (masked)" : "Not set",
  baseId: BASE_ID || "Not set",
  tableName: TABLE_NAME || "Not set"
});

const fetchPlacesFromAirtable = async () => {
  // Use the variables defined at the top level
  const apiKey = API_KEY;
  const baseId = BASE_ID;
  const tableName = TABLE_NAME;
  
  console.log("ENV Variables in fetch function:", {
    apiKey: apiKey ? "Set (masked for security)" : "Not set",
    baseId: baseId || "Not set",
    tableName: tableName || "Not set"
  });

  if (!apiKey || !baseId || !tableName) {
    console.error("Airtable credentials missing in environment variables");
    return [];
  }

  try {
    console.log("Fetching from Airtable with:", { baseId, tableName });
    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableName}`,
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Airtable API error: ${response.status}`, errorText);
      throw new Error(`Airtable API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Airtable response:", data);
    
    // Transform Airtable data to match our Place type
    return data.records.map((record: any) => {
      const fields = record.fields;
      return {
        id: record.id,
        name: fields.name || "Unnamed Place",
        category: (fields.category as Category) || "food",
        city: fields.city || "Unknown",
        description: fields.description || "",
        culture: fields.culture || "",
        image: fields.image?.[0]?.url || "https://placehold.co/600x400",
        images: fields.images?.map((img: any) => img.url) || [fields.image?.[0]?.url || "https://placehold.co/600x400"],
        phone: fields.phone || "",
        website: fields.website || "#",
        googleMaps: fields.googleMaps || "#"
      };
    });
  } catch (error) {
    console.error("Error fetching from Airtable:", error);
    throw error;
  }
};

// Fallback mock data in case Airtable fetch fails
const mockPlaces: Place[] = [
  {
    id: "1",
    name: "The Halal Coffee House",
    category: "coffee",
    city: "New York",
    description: "Artisanal coffee shop with house-roasted beans and fresh pastries. Certified Halal.",
    culture: "Turkish",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80"
    ],
    phone: "+1 (212) 555-0123",
    website: "https://halalcoffeehouse.com",
    googleMaps: "https://maps.app.goo.gl/Da1nX4DHwxu7K9Aw6",
  },
  {
    id: "2",
    name: "Urban Halal Market",
    category: "shop",
    city: "Los Angeles",
    description: "Premium Halal grocery store featuring imported goods and fresh meats.",
    culture: "Lebanese",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80"
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
    culture: "Persian",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515669097368-22e68427d265?auto=format&fit=crop&q=80"
    ],
    phone: "+1 (415) 555-0789",
    website: "https://gourmethalalkit.com",
    googleMaps: "https://goo.gl/maps/example3",
  },
  {
    id: "4",
    name: "Arabian Nights Restaurant",
    category: "food",
    city: "Chicago",
    description: "Authentic Middle Eastern cuisine in an elegant setting with live entertainment.",
    culture: "Yemeni",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80"
    ],
    phone: "+1 (312) 555-1234",
    website: "https://arabiannightschi.com",
    googleMaps: "https://goo.gl/maps/example4",
  },
  {
    id: "5",
    name: "Medina Spice Bazaar",
    category: "shop",
    city: "Houston",
    description: "Traditional spice market offering rare and authentic Middle Eastern ingredients.",
    culture: "Moroccan",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546552356-3173f7d0c091?auto=format&fit=crop&q=80"
    ],
    phone: "+1 (713) 555-5678",
    website: "https://medinaspicebazaar.com",
    googleMaps: "https://goo.gl/maps/example5",
  }
];

const Test = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const { toast } = useToast();

  // Use the variables from the top level
  const envApiKey = API_KEY;
  const envBaseId = BASE_ID;
  const envTableName = TABLE_NAME;

  // Add an effect to check environment variables after component mounts
  useEffect(() => {
    console.log("Component mounted, environment variables:", {
      apiKey: envApiKey ? "Set (masked for security)" : "Not set",
      baseId: envBaseId || "Not set",
      tableName: envTableName || "Not set"
    });
    
    // Check if Vite is properly replacing the env variables
    console.log("Raw env variable check:", {
      apiKey: typeof import.meta.env.VITE_AIRTABLE_API_KEY,
      baseId: typeof import.meta.env.VITE_AIRTABLE_BASE_ID,
      tableName: typeof import.meta.env.VITE_AIRTABLE_TABLE_NAME
    });
  }, []);

  // Fetch places from Airtable
  const { 
    data: places = [], 
    isLoading, 
    isError, 
    error 
  } = useQuery({
    queryKey: ['airtablePlaces'],
    queryFn: fetchPlacesFromAirtable,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Show error toast if Airtable fetch fails
  if (isError && error) {
    console.error("Error in useQuery:", error);
    toast({
      title: "Error fetching data",
      description: "Could not load places from Airtable. Using mock data instead.",
      variant: "destructive",
    });
  }

  // Log to help with debugging
  console.log("Query state:", { isLoading, isError, placesCount: places.length });

  // If we have an error or no places from Airtable, use mock data
  const displayPlaces = isError || places.length === 0 ? mockPlaces : places;

  // Filter places based on category, city, and search query
  const filteredPlaces = displayPlaces.filter((place) => {
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
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80"
          alt="City skyline"
          className="w-full h-full object-cover opacity-90"
          style={{ backgroundColor: 'rgb(250, 247, 244)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10" />
      </div>
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-medium text-foreground mb-4">
              Test Page - Halal Scene
            </h1>
            <p className="text-muted-foreground mb-6">
              Find the best Halal places to shop, eat, and drink in your area - Test Version
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
            
            {isLoading ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Loading places from Airtable...</p>
              </div>
            ) : (
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
            )}
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

export default Test;
