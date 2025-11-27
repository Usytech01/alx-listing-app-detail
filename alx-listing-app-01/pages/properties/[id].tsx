import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import React from 'react'
import ReviewSection from "@/components/property/ReviewSection";
import BookingSection from "@/components/property/BookingSection";

export default function PropertyPage() {
    const router = useRouter();
    const { id } = router.query;
    const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

    if (!property) return <p>Property not found</p>;
 return (
    <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="col-span-2">
        <PropertyDetail property={property} />
        
        <ReviewSection reviews={property.reviews} />
      </div>

      <div className="col-span-1 sticky top-20">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
}