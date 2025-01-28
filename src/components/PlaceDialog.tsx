import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Place } from "@/types/place";
import { Star } from "lucide-react";

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