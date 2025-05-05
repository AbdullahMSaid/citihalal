
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
  const handleValueChange = (value: string) => {
    // If the user selects the already selected city, deselect it
    if (value === selectedCity) {
      onSelectCity(null);
    } else {
      onSelectCity(value);
    }
  };

  return (
    <Select 
      onValueChange={handleValueChange} 
      value={selectedCity || undefined}
      defaultValue={undefined}
    >
      <SelectTrigger className="w-full bg-white/50 backdrop-blur-sm">
        <SelectValue placeholder="City" />
      </SelectTrigger>
      <SelectContent>
        {cities.map((city) => (
          <SelectItem key={city} value={city}>
            {city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
