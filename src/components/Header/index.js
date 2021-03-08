import React from 'react'
import BottomNavbar from './BottomNavbar'
import MainNavbar from './MainNavbar'
import TopNavbar from './TopNavbar'

export default function Header() {
    return (
        <>
            <TopNavbar />
            <MainNavbar />
            <BottomNavbar />
        </>
    )
}
