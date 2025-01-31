import { Place } from "@/types/place";
import { PlaceCard } from "@/components/PlaceCard";

interface PlaceGridProps {
  places: Place[];
  onPlaceClick: (place: Place) => void;
}

export function PlaceGrid({ places, onPlaceClick }: PlaceGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {places.map((place) => (
        <PlaceCard 
          key={place.id} 
          place={place} 
          onClick={() => onPlaceClick(place)}
        />
      ))}
      {places.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">
            No places found. Try adjusting your filters.
          </p>
        </div>
      )}
    </div>
  );
}