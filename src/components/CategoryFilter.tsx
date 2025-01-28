import { Category } from "@/types/place";
import { cn } from "@/lib/utils";
import { ShoppingBag, Utensils, Coffee } from "lucide-react";

interface CategoryFilterProps {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category) => void;
}

const categories: { value: Category; label: string; icon: React.ComponentType }[] = [
  { value: "shop", label: "Shopping", icon: ShoppingBag },
  { value: "food", label: "Restaurants", icon: Utensils },
  { value: "coffee", label: "Cafés", icon: Coffee },
];

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-col gap-2">
      {categories.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          onClick={() => onSelectCategory(value)}
          className={cn(
            "p-2 rounded-lg transition-all duration-200",
            "hover:bg-neutral-100 hover:scale-105",
            selectedCategory === value
              ? "bg-neutral-900 text-white shadow-lg scale-105"
              : "bg-neutral-50 text-neutral-600"
          )}
          title={label}
        >
          <Icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  );
}