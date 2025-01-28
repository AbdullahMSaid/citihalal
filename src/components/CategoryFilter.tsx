import { Category } from "@/types/place";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category) => void;
}

const categories: { value: Category; label: string }[] = [
  { value: "shop", label: "Shopping" },
  { value: "food", label: "Restaurants" },
  { value: "coffee", label: "Cafés" },
];

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-col gap-3">
      {categories.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onSelectCategory(value)}
          className={cn(
            "px-6 py-3 rounded-lg transition-all duration-200 text-sm font-medium w-full text-left",
            "hover:bg-neutral-100 hover:scale-105",
            selectedCategory === value
              ? "bg-neutral-900 text-white shadow-lg scale-105"
              : "bg-neutral-50 text-neutral-600"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}