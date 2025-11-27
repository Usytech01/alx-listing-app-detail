import { Key, ReactNode } from "react";


const ReviewSection: React.FC<{reviews: any}> = ({reviews}) => {
    return(
        <div className="mt-8">
            <h3 className="text-2xl font-semibold">Reviews</h3>
            {reviews.map((review: {
                rating: ReactNode; avatar: string | Blob | undefined; name: string | undefined; 
}, index: Key | null | undefined) => (
                <div className="" key={index}>
                    <div className="flex items center">
                        <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                        <div className="">
                            <p className="font-bold">{review.name}</p>
                            <p className="text-yellow-500">{review.rating} stars</p>
                        </div>
                    </div>
                    <p className="">review.comment</p>
                </div>
            ))}
        </div>
    )
}

export default ReviewSection;