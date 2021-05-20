import React from 'react'

function Card({id,name,price,image, navigate}) {
    return (
        <div className="shadow-md bg-white md:w-1/4  lg:w-1/5 w-48 mr-1 mb-4" onClick={() => navigate(id)}>
            <img src={image} className="bg-cover" alt={name} />
            <h3 className="ml-4">{name}</h3>
            <h3 className="ml-4">{price}</h3>
        </div>
    )
}

export default Card
