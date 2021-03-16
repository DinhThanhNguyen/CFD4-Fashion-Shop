import Features from 'components/Features'
import React from 'react'
import Comments from './components/Comments'
import Description from './components/Description'
import ProductDetails from './components/ProductDetails'
import SimilarProduct from './components/SimilarProduct'

export default function ProductDetail() {
    return (
        <>
            <ProductDetails />
            <Description />
            <SimilarProduct />
            <Comments />
            <Features />
        </>
    )
}
