
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
  return (
    <Select 
      onValueChange={(value) => {
        // If "all" is selected, set to null (show all cities)
        if (value === "all") {
          onSelectCity(null);
        } else {
          onSelectCity(value);
        }
      }}
      value={selectedCity || "all"}
    >
      <SelectTrigger className="w-full bg-white/50 backdrop-blur-sm">
        <SelectValue placeholder="City" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Cities</SelectItem>
        {cities.map((city) => (
          <SelectItem key={city} value={city}>
            {city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
