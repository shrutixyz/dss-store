import React from 'react'

function Card({id,title,price,url, navigate, admin, onEdit}) {
    return (
        <div className="shadow-md bg-white md:w-1/4  lg:w-1/5 w-48 mr-1 mb-4" >
            <img src={url} className="bg-cover" alt={title} onClick={() => navigate(id)} />
            <h3 className="mt-2 ml-4 text-gray-500">{title}</h3>
            <h3 className="ml-4 font-semibold mt-2">Rs. {price}</h3>
            {
                admin ? <div className="flex justify-around">
                    <button className="my-3 px-7 py-2 mr-4 bg-accent text-white rounded-3xl hover:opacity-80" onClick={() => onEdit(id)}>Edit</button>
                    <button className="my-3 px-6 py-2  text-accent border-2 border-accent rounded-3xl hover:opacity-75">Delete</button>
                </div> : ""
            }
        </div>
    )
}

export default Card
