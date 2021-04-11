export enum BrandEnum {
  prada = "Prada",
  chanel = "Chanel",
  gucci = "Gucci",
  louis_viton = "Louis Vitton",
}

export enum CategoryEnum {
  clothing = "Clothing",
  watches = "Watches",
  bags = "Bags",
  accessories = "Accessories",
}

export type Product = {
  id: number;
  category: CategoryEnum;
  description: string;
  brand: string;
  material: string;
  photos: string[];
  price: number;
};

export type ProductInputs = {
  category: CategoryEnum;
  description: string;
  brand: string;
  material: string;
  photos: string[];
  price: number;
};

export type ProductList = Array<Product>;
