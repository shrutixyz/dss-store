import React from 'react'

function SingleProductDetail() {
    return (
        <div className=" max-w-5xl m-auto">

        <div className= "flex flex-wrap mx-12  py-12 justify-evenly">
            <div className="w-60 m-auto md:w-1/4">
            <img src="https://images.pexels.com/photos/4198115/pexels-photo-4198115.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="dummy" className="bg-contain mr-4"/>
            </div>
            
            <div className=" max-w-md">
                <div className="flex my-4 justify-between">
                     <h1 className="font-semibold">Sunray Beauty Oil</h1>
                     <p>Rs. 799</p>
                </div>
             
                 <h4 className="font-normal text-xl text-accent">Description</h4>

                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ad deserunt autem dignissimos non optio harum consequatur, itaque minus perferendis dolor voluptatum repudiandae porro? Placeat quibusdam provident suscipit quas facere.</p>

                 <button className="mt-12 px-3 py-2 mr-4 bg-accent text-white rounded-3xl hover:opacity-80">Add to Cart</button>
                 <button className="mt-12 px-6 py-2  text-accent border-2 border-accent rounded-3xl hover:opacity-75">Buy Now</button>
            </div>
            
        </div>
        </div>
    )
}

export default SingleProductDetail
