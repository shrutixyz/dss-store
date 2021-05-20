import React from 'react'
import ReviewCard from './ReviewCard'

function Review() {
    const review = [
        {
            id : 1,
            image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg",
            name: "Kris Han",
            quote: 'Elevate your skincare with our gentle yet effective foaming cleanser. Made with olive, sugar '
        },
    ]
    return (
        <div className=" h-100v">
        <div className="mx-24 mt-24">
            <h1>
                Testimonials
            </h1>

          <div className="bg-accent h-1px w-28"></div>

            <div className="flex flex-wrap justify-around mt-14">
                {review.map(item => {
                    return <ReviewCard key={item.id} {...item} />
                })}
            </div>
           
          
        </div>
        
        
    </div>
    )
}

export default Review
