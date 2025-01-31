import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Place } from "@/types/place";
import { Star, Phone, Globe, MapPin } from "lucide-react";

interface PlaceDialogProps {
  place: Place | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PlaceDialog({ place, open, onOpenChange }: PlaceDialogProps) {
  if (!place) return null;

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
          <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4">
            <img
              src={place.image}
              alt={place.name}
              className="h-full w-full object-cover"
            />
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