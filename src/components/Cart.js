import React, {useState, useEffect} from 'react'
import Navbar from './Navbar';

import CartItem from './CartItem';
import {db, auth, storage} from '../utils/firebase';

function Cart() {

    //set state
    const [cartList, setcartList] = useState([])

    //compute total 
    const [total, setTotal] = useState(0)

    //set user
    const [user, setuser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((_user) => {
            if(_user) {
                // console.log("user signed in");
                setuser(_user)
                db.collection('cart').doc(`${_user.email}`).collection('cartItems')
            .onSnapshot(snap => {
                let documents = [];
                let t = 0
                snap.forEach(doc => {
                    
                    
                    documents.push({...doc.data(), id: doc.id})
                    t += parseInt(doc.data().qty) * parseInt(doc.data().price)
                })


                setcartList(documents);
                setTotal(t)
            })
            }else {
                console.log("uh,oh")
            }
            
        })
        
    }, [])

    
    const onIncrease = (_id, _price) => {
        // console.log(_id, _price)
        setTotal(total +  parseInt(_price))
    }

    const onDecrease = (_id, _price) => {
        // console.log(_id, _price)
        setTotal(total -  parseInt(_price))
    }

   


   
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
                        
                        {
                            
                            cartList.map(item => {

                                return <CartItem id={item.data} onIncrease={onIncrease} onDecrease={onDecrease} {...item}/>
                            })
                        }

                       
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total: <span>Rs. {total}</span></td>
                        </tr>
                  

                </table>
            </div>

   
            
        </div>
        </>
    )
}

export default Cart
