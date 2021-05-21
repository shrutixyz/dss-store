import React, {useEffect, useState} from 'react';
import Card from './Card';
import { useHistory} from 'react-router-dom';

import {db, auth, storage} from '../utils/firebase';

function BestSeller() {
    
    const history = useHistory();

    const navigate = (id) => {
        history.push(`/products/${id}`)
    }
    const [productList, setproductList] = useState([]);

    useEffect(() => {
       
        
       

        db.collection('products')
            .onSnapshot(snap => {
                let documents = [];

                snap.forEach(doc => {
                    

                    documents.push({...doc.data(), id: doc.id})
                })

                setproductList(documents)
            })

        
    }, [])
    return (
       
            <div className="mx-24 mt-28">
                <h1>
                    Our Bestsellers
                </h1>

              <div className="bg-accent h-1px w-28"></div>

              <div className="flex flex-wrap justify-around mt-14 ">
                    {productList.map(item => {
                        return <Card key={item.id} admin={false} navigate={navigate}  {...item} />
                    })}
                </div>

               
              
            </div>
            
            
        
    )
}


export default BestSeller
