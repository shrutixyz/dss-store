import React from 'react'
import Navbar from './Navbar'

function Cart() {
    return (
        <>
        <Navbar />
        <div className="max-w-5xl m-auto">
            
            <h2 className="font-semibold text-3xl text-gray-500 lg:mx-48 mx-6 mt-12">Shopping Bag</h2>
            <div className="bg-accent h-1 w-28 mt-3 lg:mx-48 mx-6 rounded-xl mb-10"></div>

            <div className="w-4/5 m-auto">
                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="text-left p-1 bg-midaccent font-normal ">Product</th>
                            <th className="text-left p-1 bg-midaccent font-normal ">Quantity</th>
                            <th className="text-left p-1 bg-midaccent font-normal ">Subtotal</th>
                        </tr>
                        </thead>
                        <tr className="py-10">
                            
                            <td className="px-2 py-1">
                                <div className="flex  flex-wrap justify-start">
                                    <img src="https://images.pexels.com/photos/4198115/pexels-photo-4198115.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="w-24  md:w-28 lg-48" alt="" />
                                    <div className="mx-2 my-auto">
                                        <p className="font-medium text-2xl">Sunray Oil</p>
                                        <small className="text-red-500">Price: Rs.799</small>
                                      </div>
                                </div>
                            </td>
                            <td><input type="number" value="1" className="w-12 h-6 p-2 m-auto border-1 border-black"/></td>
                            <td>Rs. 799</td>
                            
                        </tr>
                        
                        <tr>
                            
                            <td className="px-2 py-1">
                                <div className="flex  flex-wrap justify-start">
                                    <img src="https://images.pexels.com/photos/4198115/pexels-photo-4198115.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="w-24   md:w-28 lg-48" alt="" />
                                    <div className="mx-2 my-auto">
                                        <p className="font-medium text-2xl">Sunray Oil</p>
                                        <small className="text-red-500">Price: Rs.799</small>
                                      </div>
                                </div>
                            </td>
                            <td><input type="number" value="1" className="w-12 h-6 p-2 m-auto border-1 border-black"/></td>
                            <td>Rs. 799</td>
                        </tr>
                        <tr>
                            
                            <td className="px-2 py-1">
                                <div className="flex  flex-wrap justify-start">
                                    <img src="https://images.pexels.com/photos/4198115/pexels-photo-4198115.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="w-24   md:w-28 lg-48" alt="" />
                                    <div className="mx-2 my-auto">
                                        <p className="font-medium text-2xl">Sunray Oil</p>
                                        <small className="text-red-500">Price: Rs.799</small>
                                      </div>
                                </div>
                            </td>
                            <td><input type="number" value="1" className="w-12 h-6 p-2 m-auto border-1 border-black"/></td>
                            <td>Rs. 799</td>
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                            <td className="border-t-2 border-accent">
                                <p className="sm:text-xl"><span className="text-accent text-semibold">Total:</span>  Rs. 799</p>
                            
                            </td>
                        </tr>

                  

                </table>
            </div>

   
            
        </div>
        </>
    )
}

export default Cart
