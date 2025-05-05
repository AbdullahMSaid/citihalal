
export type Category = "shop" | "food" | "coffee" | "masjid";

export interface Place {
  id: string;
  name: string;
  category: Category;
  city: string;
  description: string;
  culture: string;
  image: string;
  images: string[];
  phone: string;
  website: string;
  googleMaps: string;
}
