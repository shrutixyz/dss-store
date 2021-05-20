import React from 'react'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

function ReviewCard({name,quote,image}) {
    return (
        <div className="shadow-md bg-white w-60 md:w-1/4  lg:w-1/6  mr-1 mb-1 relative">
            <div className="rounded-full mx-auto w-24 bg-accent h-24 overflow-hidden ">
                <img src={image} alt={name} className="bg-contain " />
                
            </div>

            <FormatQuoteIcon className="text-accent absolute top-0  right-4 text-xl"/>

            <h3 className="text-center px-2 font-normal text-lg mt-4">{name}</h3>
            <p className="text-center px-4 py-2 pb-8 font-light">{quote}</p>
            
        </div>
    )
}




export default ReviewCard
