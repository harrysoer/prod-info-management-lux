// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const mockData = [
  {
    id: 1,
    name: "Scarf",
    description: "Blue Scarf",
    brand: "Gucci",
  },
  {
    id: 2,
    name: "Shoe",
    description: "Size 9",
    brand: "Loui Viton",
  },
  {
    id: 3,
    name: "Shirt",
    description: "Red medium",
    brand: "Lacoste",
  },
  {
    id: 4,
    name: "Scarf",
    description: "Blue Scarf",
    brand: "Gucci",
  },
  {
    id: 5,
    name: "Shoe",
    description: "Size 9",
    brand: "Loui Viton",
  },
  {
    id: 6,
    name: "Shirt",
    description: "Red medium",
    brand: "Lacoste",
  },
  {
    id: 7,
    name: "Scarf",
    description: "Blue Scarf",
    brand: "Gucci",
  },
  {
    id: 8,
    name: "Shoe",
    description: "Size 9",
    brand: "Loui Viton",
  },
  {
    id: 9,
    name: "Shirt",
    description: "Red medium",
    brand: "Lacoste",
  },

  {
    id: 10,
    name: "Scarf",
    description: "Blue Scarf",
    brand: "Gucci",
  },
  {
    id: 11,
    name: "Shoe",
    description: "Size 9",
    brand: "Loui Viton",
  },
  {
    id: 12,
    name: "Shirt",
    description: "Red medium",
    brand: "Lacoste",
  },
  {
    id: 13,
    name: "Scarf",
    description: "Blue Scarf",
    brand: "Gucci",
  },
  {
    id: 14,
    name: "Shoe",
    description: "Size 9",
    brand: "Loui Viton",
  },
  {
    id: 15,
    name: "Shirt",
    description: "Red medium",
    brand: "Lacoste",
  },
  {
    id: 16,
    name: "Scarf",
    description: "Blue Scarf",
    brand: "Gucci",
  },
  {
    id: 17,
    name: "Shoe",
    description: "Size 9",
    brand: "Loui Viton",
  },
  {
    id: 18,
    name: "Shirt",
    description: "Red medium",
    brand: "Lacoste",
  },
  {
    id: 19,
    name: "Scarf",
    description: "Blue Scarf",
    brand: "Gucci",
  },
  {
    id: 20,
    name: "Shoe",
    description: "Size 9",
    brand: "Loui Viton",
  },
  {
    id: 21,
    name: "Shirt",
    description: "Red medium",
    brand: "Lacoste",
  },
  {
    id: 22,
    name: "Scarf",
    description: "Blue Scarf",
    brand: "Gucci",
  },
  {
    id: 23,
    name: "Shoe",
    description: "Size 9",
    brand: "Loui Viton",
  },
  {
    id: 24,
    name: "Shirt",
    description: "Red medium",
    brand: "Lacoste",
  },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({
    productsList: mockData,
  });
};
