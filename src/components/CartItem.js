import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function CartItem({price, qty, title, imageUrl}) {


    return (
        <tr className="py-10">
            
            <td className="px-2 py-1">
                <div className="flex  flex-wrap justify-start">
                    <img src={imageUrl} className="w-24  md:w-28 lg-48" alt="" />
                    <div className="mx-2 my-auto">
                        <p className="font-medium text-2xl">{title}</p>
                        <small className="text-red-500">Price: Rs.{price}</small>
                        </div>
                </div>
            </td>
            <td>
                <div className="flex">
                    <AddIcon />
                    <p>{qty}</p> 
                    <RemoveIcon />
                </div>
            </td>
            <td>Rs. {price}</td>
            
        </tr>
    )
}

export default CartItem
