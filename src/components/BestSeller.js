import React from 'react';
import Card from './Card';
import {useState, useEffect, useHistory} from 'react-router-dom';

function BestSeller() {
    
    const history = useHistory();

    const navigate = (id) => {
        history.push(`/products/${id}`)
    }
    const list = [
        {
            id : 1,
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.tb-XASqylOpmcFLPLiOr9wHaJp%26pid%3DApi&f=1',
            name: "Sunray Beauty Oil",
            price: 499.0
        },
        {
            id : 1,
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.tb-XASqylOpmcFLPLiOr9wHaJp%26pid%3DApi&f=1',
            name: "Sunray Beauty Oil",
            price: 499.0
        },
        {
            id : 1,
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.tb-XASqylOpmcFLPLiOr9wHaJp%26pid%3DApi&f=1',
            name: "Sunray Beauty Oil",
            price: 499.0
        },
        {
            id : 1,
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.tb-XASqylOpmcFLPLiOr9wHaJp%26pid%3DApi&f=1',
            name: "Sunray Beauty Oil",
            price: 499.0
        },
        
    ]
    return (
       
            <div className="mx-24 mt-28">
                <h1>
                    Our Bestsellers
                </h1>

              <div className="bg-accent h-1px w-28"></div>

                <div className="flex flex-wrap justify-around mt-14 ">
                    {list.map(item => {
                        return <Card key={item.id} {...item} navigate={navigate}/>
                    })}
                </div>
               
              
            </div>
            
            
        
    )
}


export default BestSeller
