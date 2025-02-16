// lib/data.ts

export type CardItem = {
  name: string;
  image: string;
};

export type CountyData = {
  name: string;
  items: CardItem[];
};

export const counties: CountyData[] = [
  {
    name: "Broward County",
    items: [
      {
        name: "Fort Lauderdale",
        image: "/images/fort-lauderdale.jpg",
      },
      {
        name: "Hollywood",
        image: "/images/hollywood.jpg",
      },
      // Add more items...
    ],
  },
  {
    name: "Miami Dade County",
    items: [
      {
        name: "Miami-Dade County",
        image: "/images/miami-dade.jpg",
      },
      {
        name: "Brickell",
        image: "/images/brickell.jpg",
      },
      {
        name: "Downtown Miami",
        image: "/images/downtown-miami.jpg",
      },
      {
        name: "Wynwood",
        image: "/images/wynwood.jpg",
      },
      // Add more items...
    ],
  },
  {
    name: "Monroe County",
    items: [
      {
        name: "Key West",
        image: "/images/key-west.jpg",
      },
      // Add more items...
    ],
  },
];
