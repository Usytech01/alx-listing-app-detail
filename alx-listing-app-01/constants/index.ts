

export const PROPERTYLISTINGSAMPLE = [
   {
  name: "Luxury Apartment",
  image: "/images/main.jpg",
  images: ["/images/1.jpg", "/images/2.jpg"],
  price: 120,
  rating: 4.5,   // ✔ FIXED
  description: "A beautiful apartment with sea view.",
  category: ["Wi-Fi", "AC", "Parking"],

  address: {
    city: "Lagos",
    country: "Nigeria",
  },

  reviews: [      // ✔ FIXED
    {
      id: 1,
      name: "John Doe",
      avatar: "/avatar/john.png",
      rating: 5,
      comment: "Amazing experience!"
    }
  ]
}

];