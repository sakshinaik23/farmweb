export interface PackageItem {
  id: string;
  title: string;
  subtitle?: string;
  weekendPrice: string;
  weekdayPrice: string;
  childPrice: string;
  capacity: string;
  minGuests: string;
  description: string;
}

export const packages: PackageItem[] = [
  {
    id: "bunglow-ground",
    title: "Bunglow – Ground Floor",
    subtitle: "2 Rooms with 1 Big Veranda",
    weekendPrice: "₹2000 / person",
    weekdayPrice: "₹1800 / person",
    childPrice: "Below 10 yrs: ₹1000 (Weekday)",
    capacity: "Accommodates 10 people | Whole bungalow: 28 people",
    minGuests: "Minimum 10 Adults",
    description:
      "Spacious ground floor stay ideal for group getaways with large veranda and green surroundings.",
  },
  {
    id: "couple-room",
    title: "Couple Room",
    subtitle: "Room with Private Garden",
    weekendPrice: "₹5500 / couple",
    weekdayPrice: "₹4500 / couple",
    childPrice: "Below 10 yrs: ₹1300 (Weekday)",
    capacity: "Up to 4 people (1 bed + 2 extra beds)",
    minGuests: "Minimum 2 Adults",
    description:
      "Private garden room designed for couples seeking peaceful and romantic farm experience.",
  },
  {
    id: "bunglow-first",
    title: "Bunglow – 1st Floor",
    subtitle: "2 Rooms with 1 Big Patio",
    weekendPrice: "₹2000 / person",
    weekdayPrice: "₹1800 / person",
    childPrice: "Below 10 yrs: ₹1000 (Weekday)",
    capacity: "Accommodates 10 people | Whole bungalow: 28 people",
    minGuests: "Minimum 10 Adults",
    description:
      "First floor accommodation with patio views and spacious layout for large groups.",
  },
  {
    id: "cottages",
    title: "Cottages with Private Lawn",
    subtitle: "2 Rooms with Private Lawn",
    weekendPrice: "₹2000 / person",
    weekdayPrice: "₹1800 / person",
    childPrice: "Below 10 yrs: ₹1000 (Weekday)",
    capacity: "1 Cottage: 8 people | 2 Cottages: 16 people",
    minGuests: "Minimum 8 Adults",
    description:
      "Private lawn cottages offering intimate group stays surrounded by greenery.",
  },
];