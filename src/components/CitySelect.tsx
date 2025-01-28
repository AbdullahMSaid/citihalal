import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CitySelectProps {
  selectedCity: string | null;
  onSelectCity: (city: string) => void;
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
    <Select onValueChange={onSelectCity} value={selectedCity || undefined}>
      <SelectTrigger className="w-[200px] bg-white/50 backdrop-blur-sm">
        <SelectValue placeholder="Select a city" />
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