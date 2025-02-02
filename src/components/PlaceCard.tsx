import { Place } from "@/types/place";

interface PlaceCardProps {
  place: Place;
  onClick: () => void;
}

export function PlaceCard({ place, onClick }: PlaceCardProps) {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-white/50 backdrop-blur-sm border border-neutral-200/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-scale-in cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-medium text-neutral-900">{place.name}</h3>
            <p className="text-sm text-neutral-600">{place.city}</p>
          </div>
          <div className="px-2 py-1 bg-neutral-100 rounded-full">
            <span className="text-sm font-medium text-neutral-600">{place.culture}</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
          {place.description}
        </p>
      </div>
    </div>
  );
}