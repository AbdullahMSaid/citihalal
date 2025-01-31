import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Place } from "@/types/place";
import { Star, Phone, Globe, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PlaceDialogProps {
  place: Place | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PlaceDialog({ place, open, onOpenChange }: PlaceDialogProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!place) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === place.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? place.images.length - 1 : prev - 1
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold flex items-center justify-between">
            {place.name}
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
              <span className="text-base">{place.rating}</span>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-4 group">
            <img
              src={place.images[currentImageIndex]}
              alt={`${place.name} - Image ${currentImageIndex + 1}`}
              className="h-full w-full object-cover transition-transform duration-300"
            />
            {place.images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {place.images.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 w-1.5 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-neutral-900 mb-1">Location</h3>
              <p className="text-neutral-600">{place.city}</p>
              <a 
                href={place.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 mt-1"
              >
                <MapPin className="h-4 w-4" />
                View on Google Maps
              </a>
            </div>
            <div>
              <h3 className="font-medium text-neutral-900 mb-1">Contact</h3>
              <div className="space-y-2">
                <a 
                  href={`tel:${place.phone}`}
                  className="inline-flex items-center gap-2 text-sm text-neutral-600"
                >
                  <Phone className="h-4 w-4" />
                  {place.phone}
                </a>
                <br />
                <a 
                  href={place.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                >
                  <Globe className="h-4 w-4" />
                  Visit Website
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-neutral-900 mb-1">Description</h3>
              <p className="text-neutral-600">{place.description}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}