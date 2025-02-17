// lib/data.ts

export type CardItem = {
  id: string;
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
        id: "434342q3dsda",
        name: "Fort Lauderdale",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717330/image1_ar9m19.png",
      },
      {
        id: "5rtyt65dfgdf",
        name: "Hollywood",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717330/image1_ar9m19.png",
      },

      {
        id: "13dfg129dfgdf",
        name: "Mid Beach",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717332/image7_c8ezan.png",
      },
      {
        id: "14dfg139dfgdf",
        name: "South Beach",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717332/image8_rzekff.png",
      },
      {
        id: "15dfg44149dfgdf",
        name: "Miami",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717333/image9_jmqvoc.png",
      },
      {
        id: "16dfg15943fgdf",
        name: "Founders Park",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717330/image10_pge5ew.png",
      },
      {
        id: "17dfg43169dfgdf",
        name: "Dorai Central Park",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717332/image11_otjgj5.png",
      },
      {
        id: "9dfg874dfgdfg",
        name: "Downtown Miami",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717330/image1_ar9m19.png",
      },
    ],
  },
  {
    name: "Miami Dade County",
    items: [
      {
        id: "76dfg65dfgdf",
        name: "Miami-Dade County",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717330/image1_ar9m19.png",
      },
      {
        id: "8dfg76dfgdfg",
        name: "Brickell",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717331/image2_gxw9yd.png",
      },
      {
        id: "9dfg87dfgdfg",
        name: "Downtown Miami",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717330/image1_ar9m19.png",
      },
      {
        id: "10dfg98dfgdf",
        name: "Wynwood",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717331/image4_r64j0w.png",
      },
      {
        id: "11dfg109dfgdf",
        name: "Edgewater",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717335/image5_atp6qd.png",
      },
      {
        id: "12dfg119dfgdf",
        name: "Doral Central",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717332/image6_glqowg.png",
      },
      {
        id: "13dfg129dfgdf",
        name: "Mid Beach",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717332/image7_c8ezan.png",
      },
      {
        id: "14dfg139dfgdf",
        name: "South Beach",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717332/image8_rzekff.png",
      },
      {
        id: "15dfg149dfgdf",
        name: "Miami",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717333/image9_jmqvoc.png",
      },
      {
        id: "16dfg159dfgdf",
        name: "Founders Park",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717330/image10_pge5ew.png",
      },
      {
        id: "17dfg169dfgdf",
        name: "Dorai Central Park",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717332/image11_otjgj5.png",
      },
    ],
  },
  {
    name: "Monroe County",
    items: [
      {
        id: "12dfg119dfgdf",
        name: "Doral Central",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717332/image6_glqowg.png",
      },
      {
        id: "13dfg129dfgdf",
        name: "Mid Beach",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717332/image7_c8ezan.png",
      },
      {
        id: "14dfg139dfgdf",
        name: "South Beach",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717332/image8_rzekff.png",
      },
      {
        id: "15dfg149dfgdf",
        name: "Miami",
        image:
          "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739717333/image9_jmqvoc.png",
      },
    ],
  },
];
