import React from 'react'
import Header from '@root/modules/HomePage/components/Header'
import NavBar from '@root/modules/HomePage/components/NavBar'
import Footer from '@root/modules/HomePage/components/Footer'

export default function index({children}) {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </div>
    )
}
