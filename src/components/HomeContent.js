import React from 'react'
import landing from '../assets/landing.png'
import {useHistory} from 'react-router-dom'

function HomeContent() {
    const history = useHistory()
    return (
        <div className="lg:ml-48 md:ml-20 md:flex md:justify-between relative">
            
            <div className="absolute top-10 left-0 right-0  w-60 h-60 rounded-full m-auto -z-10 bg-accent sm:hidden">
                
            </div>

            <div className="flex w-60 m-auto  md:hidden">
                <img  src={landing} alt="landing" className="bg-contain "/>
            </div>

            <div className="sm:mt-32 mt-16 w-1/2 lg:w-1/3 text-left m-auto">
                <h1 className="text-4xl font-thin">
                     Just using skin care products is not enough. 
                </h1>
                <p className="font-extralight mt-8">
                Find your skin’s perfect match. The dos sistas line is skincare for men, skincare for women, skincare for beginners… skincare for everyone.Find your skin’s perfect match. The dos sistas line is skincare for men, skincare for women, skincare for beginners… skincare for everyone.  
                </p>

                <button className=" mt-12 px-3 py-2 bg-accent text-white rounded-3xl" onClick={() => history.push('/products')}>
                    Explore more 
                </button>
        
            </div>
            <div className="md:flex md:align-bottom md:z-10 md:mr-12   mt-24 h-80v  hidden">
                <img  src={landing} alt="landing" className="bg-contain"/>
            </div>
            
        </div>
    )
}

export default HomeContent
