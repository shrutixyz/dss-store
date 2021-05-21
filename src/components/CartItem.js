import React,{useState, qty} from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function CartItem({id,price, qty, title, imageUrl, onIncrease, onDecrease}) {
    const [_qty, setqty] = useState(parseInt(qty))
    const [_price, setPrice] = useState(parseInt(price))

    const updateQty =  (q) => {
        setqty(parseInt(_qty)+1)
        setPrice(parseInt(q+1)*parseInt(price))
        onIncrease(id, price)
    }

    const reduceQty = (q) => {
        if(q==0) {return}
        setqty(parseInt(_qty)-1)
        setPrice(parseInt(q-1)*parseInt(price))
        onDecrease(id, price)
    }

    return (
        <tr className="py-10">
            
            <td className="px-2 py-1">
                <div className="flex  flex-wrap justify-start">
                    <img src={imageUrl} className="w-24  md:w-28 lg-48" alt="" />
                    <div className="mx-2 my-auto">
                        <p className="font-medium text-2xl">{title}</p>
                        <small className="text-red-500">Price: Rs.{_price}</small>
                        </div>
                </div>
            </td>
            <td>
                <div className="flex">
                    <AddIcon onClick={() => updateQty(_qty)}/>
                    <p>{_qty}</p>
                    
                    <RemoveIcon onClick={() => reduceQty(_qty)}/>
                </div>
            </td>
            <td>Rs. {_price}</td>
            
        </tr>
    )
}

export default CartItem
