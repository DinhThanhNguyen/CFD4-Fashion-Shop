import productApi from 'api/productApi'
import Breadcrumb from 'components/Breadcrumb'
import Features from 'components/Features'
import withPriceFormat from 'hoc/withPriceFormat'
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import Comments from './components/Comments'
import Description from './components/Description'
import ProductDetails from './components/ProductDetails'
import SimilarProduct from './components/SimilarProduct'


export default function ProductDetail() {

    let routeMatch = useRouteMatch()

    let [product, setProduct] = useState()

    useEffect(() => {
        productApi.detail(routeMatch.params.slug)
        .then(res => {
            if(res.data.length > 0)
                setProduct(res.data[0])
        })
    }, [routeMatch.params.slug])

    if(!product) return null;

    return (
        <>
            <Breadcrumb
                list={[
                    {
                        title: 'Home',
                        link: '/'
                    }, {
                        title: 'Catalog',
                        link: '/catalog'
                    }, {
                        title: 'Đình Thanh',
                        link: '/'
                    }
                ]}
            />
            {
                withPriceFormat(ProductDetails, {...product})
            }
            <Description />
            <SimilarProduct />
            <Comments />
            <Features />
        </>
    )
}
