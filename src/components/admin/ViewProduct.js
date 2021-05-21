import React, {useEffect, useState} from 'react'
import {db,storage} from '../../utils/firebase';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar'
import {useHistory} from 'react-router-dom';

function ViewProduct() {

    const [productList, setproductList] = useState([]);
    const history = useHistory();

    const navigate = (id) => {
        history.push(`/products/${id}`)
    }

    const onEdit = (id) => {
        history.push(`/admin/edit-product/${id}`)
    }



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
        <>
            <Navbar />
             <div className=" mx-24 mt-28">
           
                <h1>
                    Our Products
                </h1>

                    <div className="bg-accent h-1px w-28"></div>
                    <div className="flex flex-wrap justify-around mt-14 ">
                    {productList.map(item => {
                        return <Card key={item.id} admin={true} navigate={navigate} onEdit={onEdit}  {...item} />
                    })}
                </div>
                
            </div>
        </>
       
    )
}

export default ViewProduct
