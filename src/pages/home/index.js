import React from 'react'
import WithCountDown from '../../hoc/withCountDown'
import withCountDown from '../../hoc/withCountDown'
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
            {
                <WithCountDown WapperComponent={SalesOff} timeCountDown={((1*24)*60*60) + 59} />
            }
            <Review />
            <Shopper />
        </>
    )
}
