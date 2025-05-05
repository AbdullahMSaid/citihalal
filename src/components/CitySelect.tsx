
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CitySelectProps {
  selectedCity: string | null;
  onSelectCity: (city: string | null) => void;
}

const cities = [
  "New York",
  "Los Angeles",
  "San Francisco",
  "Chicago",
  "Miami",
  "Seattle",
];

export function CitySelect({ selectedCity, onSelectCity }: CitySelectProps) {
  // The issue is in this function - the SelectItem doesn't trigger with the same value
  // Let's use a click handler on the SelectItem instead
  return (
    <Select 
      onValueChange={(value) => onSelectCity(value)}
      value={selectedCity || undefined}
    >
      <SelectTrigger className="w-full bg-white/50 backdrop-blur-sm">
        <SelectValue placeholder="City" />
      </SelectTrigger>
      <SelectContent>
        {cities.map((city) => (
          <SelectItem 
            key={city} 
            value={city}
            onClick={(e) => {
              // If the clicked city is already selected, prevent default and deselect
              if (selectedCity === city) {
                e.preventDefault();
                e.stopPropagation();
                setTimeout(() => onSelectCity(null), 0);
              }
            }}
          >
            {city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
