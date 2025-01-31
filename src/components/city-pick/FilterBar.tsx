import { CategoryFilter } from "@/components/CategoryFilter";
import { CitySelect } from "@/components/CitySelect";
import { Category } from "@/types/place";

interface FilterBarProps {
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category | null) => void;
  selectedCity: string | null;
  setSelectedCity: (city: string) => void;
}

export function FilterBar({
  selectedCategory,
  setSelectedCategory,
  selectedCity,
  setSelectedCity,
}: FilterBarProps) {
  return (
    <div className="flex items-center justify-between">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="w-32 sm:w-40">
        <CitySelect selectedCity={selectedCity} onSelectCity={setSelectedCity} />
      </div>
    </div>
  );
}