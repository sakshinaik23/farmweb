export interface ExperienceItem {
  id: string;
  title: string;
  desc: string;
  images: string[]; // ← changed from image to images array
  highlights?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "farm-stay",
    title: "Farm Stay Experience",
    desc:
      "Wake up to birds, fresh air, peaceful greenery and nature-connected comfort. Stay in premium rooms with all essential amenities for families and groups.",
    images: [
      "/images/experience/farm-stay-1.webp",
      "/images/experience/farm-stay-2.webp",
      "/images/experience/farm-stay-3.png",
    ],
    highlights: ["Nature Surroundings", "Premium Rooms", "Relaxing Ambience"],
  },

  {
    id: "day-picnic",
    title: "Day Picnic Adventure",
    desc:
      "Spend a fun-filled day from 9 AM to 5 PM with picnic meals, games, pool fun, rain dance and relaxation.",
    images: [
      "/images/experience/day-picnic-1.jpg",
      "/images/experience/day-picnic-2.webp",
      "/images/experience/day-picnic-3.webp",
    ],
    highlights: ["Breakfast & Lunch", "Pool Access", "Games Zone", "Music"],
  },

  {
    id: "events",
    title: "Event Celebrations",
    desc:
      "Host birthdays, engagements, corporate gatherings and celebrations in our lush green open lawn with music and décor options.",
    images: [
      "/images/experience/event1.webp",
      "/images/experience/event2.png",
      "/images/experience/event3.png",
    ],
    highlights: ["Event Space", "Music System", "Decoration Friendly"],
  },

  {
    id: "pool-rain-dance",
    title: "Swimming Pool & Rain Dance",
    desc:
      "Enjoy refreshing swimming and high-energy rain dance with music and lights — designed for pure fun.",
    images: [
      "/images/experience/pool_img.jpg",
      "/images/experience/pool_img2.png",
      "/images/experience/pool_img1.png",
    ],
    highlights: ["Swimming Pool", "Rain Dance", "Music Beats"],
  },

  {
    id: "games",
    title: "Indoor & Outdoor Games",
    desc:
      "A variety of indoor and outdoor games for all age groups to keep the fun going throughout your stay.",
    images: [
      "/images/experience/games.webp",
      "/images/experience/game1.jpg",
      "/images/experience/game2.jpg",
    ],
    highlights: ["Badminton", "Table Games", "Outdoor Fun"],
  },

  {
    id: "food",
    title: "Homely Food & Local Dining",
    desc:
      "Savour freshly prepared meals with authentic local flavors as part of your experience here.",
    images: [
      "/images/experience/food1.jpg",
      "/images/experience/food2.webp",
      "/images/experience/food3.webp",
    ],
    highlights: ["Fresh Meals", "Local Cuisine", "Family Style"],
  },

  {
    id: "farm-visit",
    title: "Nature & Farm Visit",
    desc:
      "Explore the farm environment, learn about nature, interact with elements of farm life and capture beautiful memories.",
    images: [
      "/images/experience/farm-visit-1.webp",
      "/images/experience/farm-visit-2.webp",
      "/images/experience/farm-visit-3.png",
    ],
    highlights: ["Nature Walks", "Scenic Views", "Photo Moments"],
  },
];