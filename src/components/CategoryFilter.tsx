
import { Category } from "@/types/place";
import { cn } from "@/lib/utils";
import { ShoppingBag, Utensils, Coffee, LucideIcon, Church } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface CategoryFilterProps {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
}

const categories: { value: Category; label: string; icon: LucideIcon }[] = [
  { value: "shop", label: "Shopping", icon: ShoppingBag },
  { value: "food", label: "Restaurants", icon: Utensils },
  { value: "coffee", label: "Cafés", icon: Coffee },
  { value: "masjid", label: "Masjid", icon: Church },
];

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const isMobile = useIsMobile();
  
  const handleCategoryClick = (category: Category) => {
    if (selectedCategory === category) {
      onSelectCategory(null);
    } else {
      onSelectCategory(category);
    }
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          onClick={() => handleCategoryClick(value)}
          className={cn(
            "px-3 sm:px-6 py-2 rounded-lg transition-all duration-200 flex items-center gap-2",
            "hover:bg-neutral-100 hover:scale-105",
            selectedCategory === value
              ? "bg-neutral-900 text-white shadow-lg scale-105"
              : "bg-neutral-50 text-neutral-600"
          )}
          title={label}
        >
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          {!isMobile && <span className="text-sm sm:text-base">{label}</span>}
        </button>
      ))}
    </div>
  );
}
