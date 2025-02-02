import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Place } from "@/types/place";
import { Phone, Globe, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PlaceDialogProps {
  place: Place | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PlaceDialog({ place, open, onOpenChange }: PlaceDialogProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!place) return null;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? place.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === place.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <div className="relative">
          <img
            src={place.images[currentImageIndex]}
            alt={place.name}
            className="w-full aspect-video object-cover rounded-t-lg"
          />
          <button
            onClick={handlePrevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold flex items-center justify-between">
            {place.name}
            <div className="px-2 py-1 bg-blue-50 rounded-full">
              <span className="text-sm font-medium text-blue-600">{place.culture}</span>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-muted-foreground">{place.description}</p>
          <div className="space-y-2">
            <a
              href={`tel:${place.phone}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              {place.phone}
            </a>
            <a
              href={place.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-4 w-4" />
              {place.website}
            </a>
            <a
              href={place.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <MapPin className="h-4 w-4" />
              View on Google Maps
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}