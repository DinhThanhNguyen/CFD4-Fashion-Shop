import React from 'react'
import Bestpick from './components/Bestpick'
import Review from './components/Review'
import SalesOff from './components/SalesOff'
import Shopper from './components/Shopper'
import Topmonth from './components/Topmonth'
import Category from './components/Category'
import Banners from 'components/Banners'
import Horizontal from 'components/Horizontal'

export default function Home() {
    return (
        <>
            <Banners />
            <Category />
            <Bestpick />
            <Topmonth />
            <SalesOff />
            <Review />
            <Shopper />
        </>
    )
}
