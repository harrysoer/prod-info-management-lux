// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next";
import corsMiddleware from "utils/corsMiddleware";
import chunk from "utils/chunk";

let mockData = [
  {
    id: 1,
    category: "Bags",
    description: "Tessuto Cloth Handbag - Black",
    brand: "Prada",
    material: "Cloth",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=500,h=undefined,q=80,f=auto,/produit/11736088-1_1.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/11736088-2_1.jpg",
    ],
    price: 525.88,
  },
  {
    id: 2,
    category: "Bags",
    description: "Timeless/Classique Leather Clutch Bag - Black",
    brand: "Chanel",
    material: "Leather",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/13929573-1_6.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/13929573-2_6.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/13929573-3_6.jpg",
    ],
    price: 1100,
  },
  {
    id: 3,
    category: "Clothing",
    description: "Crocodile Jacket - Brown",
    brand: "Gucci",
    material: "Exotic Leathers",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/9896741-1_1.jpg",
    ],
    price: 7800,
  },
  {
    id: 4,
    category: "Bags",
    description: "Alma Alligator Handbag - Black",
    brand: "Louis Vitton",
    material: "Exotic Leathers",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/10580150-1_1.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/10580150-2_1.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/10580150-4_1.jpg",
    ],
    price: 11392.5,
  },
  {
    id: 5,
    category: "Watches",
    description: "Chanel Mademoiselle Première Watch 1987",
    brand: "Chanel",
    material: "Leather",
    photos: [
      "https://media.truefacet.com/guide/wp-content/uploads/2017/12/812FD10012A_l.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/14883530-1_3.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/14883530-2_3.jpg",
    ],
    price: 8760103.38,
  },
  {
    id: 6,
    category: "Clothing",
    description:
      "Museum Chanel Haute Couture 1960 Coco Gabrielle Elizabeth Taylor Tweed Jacket Skirt Suit - Beige",
    brand: "Chanel",
    material: "Tweed",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/10939061-1_2.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/10939061-10_2.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/10939061-2_2.jpg",
    ],
    price: 12062.65,
  },
  {
    id: 7,
    category: "Shoes",
    description: "Leather Heels - Brown",
    brand: "Prada",
    material: "Leather",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/15332397-1_5.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/15332397-2_5.jpg",
    ],
    price: 40,
  },
  {
    id: 8,
    category: "Shoes",
    description: "Patent Leather Heels - Brown",
    brand: "Louis Vitton",
    material: "Patent Leather",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/11273518-1_1.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/11273518-2_1.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/11273518-3_1.jpg",
    ],
    price: 355.45,
  },
  {
    id: 9,
    category: "Shoes",
    description: "Leather Mules - Black",
    brand: "Gucci",
    material: "Leather",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/15238515-2_3.jpg",
    ],
    price: 7200.06,
  },

  {
    id: 10,
    category: "Shoes",
    description: "Patent Leather Sandals - Camel",
    brand: "Louis Vitton",
    material: "Patent Leather",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/10275465-1_1.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/10275465-2_1.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/10275465-4_1.jpg",
    ],
    price: 318.99,
  },
  {
    id: 11,
    category: "Watches",
    description: "Gucci 7900 M.1 18k Gold 29mm Quartz Watch",
    brand: "Gucci",
    material: "Yellow Gold",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/8075288-4_1.jpg",
    ],
    price: 4800.55,
  },
  {
    id: 12,
    category: "Clothing",
    description: "Cashmere Coat - Camel",
    brand: "Prada",
    material: "Cashmere",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/13280533-1_2.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/13280533-3_2.jpg",
    ],
    price: 1640.52,
  },
  {
    id: 13,
    category: "Clothing",
    description: "Leather Jacket - Black",
    brand: "Prada",
    material: "Leather",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/12922769-1_1.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/12922769-3_1.jpg",
    ],
    price: 1224.65,
  },
  {
    id: 14,
    category: "Accessories",
    description: "Crocodile Suitcase Jewelry Box - Burgundy",
    brand: "Gucci",
    material: "Exotic Leathers",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/11349003-1_1.jpg",
    ],
    price: 2680.59,
  },
  {
    id: 15,
    category: "Accessories",
    description: "Leather Hat - Camel",
    brand: "Gucci",
    material: "Leather",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/15196860-1_4.jpg",
    ],
    price: 489.42,
  },
  {
    id: 16,
    category: "Bags",
    description: "Speedy 30 Leather Bag - Brown",
    brand: "Louis Vitton",
    material: "Leather",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/15237979-1_2.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/15237979-2_2.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/15237979-4_2.jpg",
    ],
    price: 580,
  },
  {
    id: 17,
    category: "Bags",
    description: "Wallet On Chain Leather Handbag - Black",
    brand: "Chanel",
    material: "Lambskin Leather",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/14723522-1_1.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/14723522-7_1.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/14723522-9_1.jpg",
    ],
    price: 2799,
  },
  {
    id: 18,
    category: "Bags",
    description: "Trocadéro Cloth Handbag - Brown",
    brand: "Louis Vitton",
    material: "Cloth",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/14947019-1_2.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/14947019-3_2.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/14947019-6_2.jpg",
    ],
    price: 1499,
  },
  {
    id: 19,
    category: "Bags",
    description: "Diana Leather Handbag - Black",
    brand: "Chanel",
    material: "Leather",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/14947588-1_2.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/14947588-11_2.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/14947588-7_2.jpg",
    ],
    price: 4299,
  },
  {
    id: 20,
    category: "Bags",
    description: "Nano Speedy/Mini HL Cloth Handbag - Brown",
    brand: "Louis Vitton",
    material: "Cloth",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/14920289-1_1.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/14920289-2_1.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/14920289-3_1.jpg",
    ],
    price: 799,
  },
  {
    id: 21,
    category: "Shoes",
    description: "Crocodile Flats - Brown",
    brand: "Gucci",
    material: "Exotic Leathers",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/12069115-1_1.jpg",
    ],
    price: 238,
  },
  {
    id: 22,
    category: "Shoes",
    description: "Cloth Mules - Brown",
    brand: "Gucci",
    material: "Cloth",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/15288301-1_4.jpg",
    ],
    price: 204,
  },
  {
    id: 23,
    category: "Clothing",
    description: "Tweed Jacket - Ecru",
    brand: "Chanel",
    material: "Tweed",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/15135572-1_6.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/15135572-5_6.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/15135572-11_6.jpg",
    ],
    price: 11488.24,
  },
  {
    id: 24,
    category: "Clothing",
    description: "Shirt Vest - White",
    brand: "Chanel",
    material: "cotton",
    photos: [
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/15081712-1_4.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/15081712-4_4.jpg",
      "https://images.vestiairecollective.com/cdn-cgi/image/w=1000,q=80,f=auto,/produit/15081712-5_4.jpg",
    ],
    price: 4518.71,
  },
];

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "PUT", "POST", "HEAD"],
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await corsMiddleware(req, res, cors);

  switch (req.method) {
    case "GET": {
      let list = [...mockData];

      const { p, category, description, brand } = req.query;

      const hasBrand = typeof brand === "string" && brand.length;
      const hasCategory = typeof category === "string" && category.length;
      const hasDescription =
        typeof description === "string" && description.length;

      if (hasBrand || hasCategory || hasDescription) {
        list = mockData.filter((data) => {
          const brandTest = hasBrand
            ? data.brand.toLowerCase().includes((brand as string).toLowerCase())
            : false;
          const categoryTest = hasCategory
            ? data.category
                .toLowerCase()
                .includes((category as string).toLowerCase())
            : false;
          const descriptionTest = hasDescription
            ? data.description
                .toLowerCase()
                .includes((description as string).toLowerCase())
            : false;

          return brandTest || categoryTest || descriptionTest;
        });
      }

      const page = Number(p);
      const total = list.length;
      const indx = page - 1;
      const paginatedList = chunk(list, 10);

      res.statusCode = 200;
      res.json({
        total,
        page,
        numberOfPages: paginatedList.length,
        productsList: paginatedList[indx],
      });
      break;
    }

    case "POST": {
      const body = req.body;

      const newId = mockData[mockData.length - 1];
      const newData = {
        id: newId,
        ...body,
      };

      mockData = [newData, ...mockData];

      res.statusCode = 200;
      res.json({ success: true });

      break;
    }

    case "PUT": {
      const newData = req.body;

      if (!!newData.id) {
        const index = mockData.findIndex((data) => newData.id === data.id);

        if (index >= 0) {
          mockData[index] = newData;

          res.statusCode = 200;
          res.json({ success: true });
        } else {
          res.statusCode = 500;
          res.json({ message: "id doesn't exist" });
        }
      } else {
        res.statusCode = 500;
        res.json({ message: "id is required" });
      }
      break;
    }
  }
};
