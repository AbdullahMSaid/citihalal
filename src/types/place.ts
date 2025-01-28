export type Category = "shop" | "food" | "coffee";

export interface Place {
  id: string;
  name: string;
  category: Category;
  city: string;
  description: string;
  rating: number;
  image: string;
}