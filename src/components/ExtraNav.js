import React from 'react';
import {Link} from 'react-router-dom';


function ExtraNav() {
    
    return (
        <div className=" absolute h-100v lg:w-96 w-64 md:block hidden bg-accent right-0 top-0">
            <div className="mt-3.5 inline-block bg-black hover:opacity-75  rounded-3xl px-5 ml-8 py-1 text-white">
                <Link to="/products" >Shop Now</Link>
            </div>
            
        </div>
    )
}

export default ExtraNav
