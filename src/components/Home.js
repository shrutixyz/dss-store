import React from 'react';
import Navbar from './Navbar';
import ExtraNav from './ExtraNav';
import HomeContent from './HomeContent';
import BestSeller from './BestSeller';
import Review from './Review'

function Home() {
    return (
        <div>
            
            <Navbar />
            <ExtraNav/>
            <HomeContent />
            <BestSeller/>
            <Review />
        </div>
    )
}

export default Home
