import { Place } from "@/types/place";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface PlaceCardProps {
  place: Place;
  onClick: () => void;
}

export function PlaceCard({ place, onClick }: PlaceCardProps) {
  return (
    <Card 
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={place.images[0]}
          alt={place.name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-lg">{place.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
            <span className="text-sm">{place.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-2">{place.city}</p>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {place.description}
        </p>
      </CardContent>
    </Card>
  );
}