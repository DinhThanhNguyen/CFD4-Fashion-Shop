import React from 'react'
import Banner from './components/Banner'
import Bestpick from './components/Bestpick'
import Review from './components/Review'
import SalesOff from './components/SalesOff'
import Shopper from './components/Shopper'
import Topmonth from './components/Topmonth'

export default function Home() {
    return (
        <>
            <Banner />
            <Bestpick />
            <Topmonth />
            <SalesOff />
            <Review />
            <Shopper />
        </>
    )
}
