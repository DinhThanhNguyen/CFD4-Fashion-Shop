import React, { useEffect } from 'react'
import Category from './components/Category'
import Price from './components/Price'
import Slider from './components/Slider'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/reducers/productReducers'
import Product from './components/Product'
import Pagination from '../../components/Pagination'
import withPriceFormat from '../../hoc/withPriceFormat'
import { useHistory, useRouteMatch } from 'react-router'
import { convertQueryToObject, serializeObjectToQueryURL } from 'components/helper'
import Banners from 'components/Banners'
import Breadcrumb from 'components/Breadcrumb'


export default function Catalog() {

    let dispatch = useDispatch()

    let product = useSelector(state => state.product)

    let { categories } = product

    let queryURL = convertQueryToObject()

    let QueryString = serializeObjectToQueryURL(queryURL)

    let history = useHistory()

    let routeMatch = useRouteMatch()

    let { slug } = useRouteMatch().params

    let category = {
        title: 'All Product',
        link: '/catalog'
    }

    if (slug) {
        slug = slug.replace(/.*id/, '')
        let f = categories.find(e => e.id == slug)
        if (f) {
            category = {
                title: f.title,
                link: `/catalog/${f.slug}`
            }

            QueryString += `${QueryString ? '&' : ''}categories=${slug}`
        }
    }

    useEffect(() => {
        dispatch(getProduct(QueryString))
    }, [QueryString])


    function sortChange(e) {
        let value = e.target.value;
        let queryObj = convertQueryToObject();
        queryObj.sort = value;
        delete queryObj.page;

        let queryURL = serializeObjectToQueryURL(queryObj)
        history.push(`${routeMatch.url}?${queryURL}`)
    }

    return (
        <>
            <Banners />
            <section className="py-11">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3">
                            {/* Filters */}
                            <ul className="nav nav-vertical" id="filterNav">
                                <Category />
                                {/* <Session />
                                    <Size />
                                    <Color />
                                    <Brand /> */}
                                <Price />
                            </ul>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9">
                            {/* Slider */}
                            <Slider />
                            {/* Header */}
                            <div className="row align-items-center mb-7">
                                <div className="col-12 col-md">
                                    {/* Heading */}
                                    <h3 className="mb-1">{category.title}</h3>
                                    {/* Breadcrumb */}
                                    <Breadcrumb
                                        list={[
                                            {
                                                title: 'Home',
                                                link: '/'
                                            },
                                            category
                                        ]}
                                    />
                                </div>
                                <div className="col-12 col-md-auto">
                                    {/* Select */}
                                    <select className="custom-select custom-select-xs cursor-pointer" onChange={sortChange}>
                                        <option selected={queryURL.sort === ''} className="cursor-pointer">--Sắp xếp--</option>
                                        <option selected={queryURL.sort === 'real_price.-1'} value="real_price.-1">Giá cao đến thấp</option>
                                        <option selected={queryURL.sort === 'real_price.1'} value="real_price.1">Giá thấp đến cao</option>
                                        <option selected={queryURL.sort === 'discount_rate.-1'} value="discount_rate.-1">Giá giảm nhiều</option>
                                    </select>
                                </div>
                            </div>
                            {/* Tags */}
                            {/* <div className="row mb-7">
                                <div className="col-12">
                                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                        Shift dresses <a className="text-reset ml-2" href="#!" role="button">
                                            <i className="fe fe-x" />
                                        </a>
                                    </span>
                                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                        Summer <a className="text-reset ml-2" href="#!" role="button">
                                            <i className="fe fe-x" />
                                        </a>
                                    </span>
                                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                        M <a className="text-reset ml-2" href="#!" role="button">
                                            <i className="fe fe-x" />
                                        </a>
                                    </span>
                                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                        White <a className="text-reset ml-2" href="#!" role="button">
                                            <i className="fe fe-x" />
                                        </a>
                                    </span>
                                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                        Red <a className="text-reset ml-2" href="#!" role="button">
                                            <i className="fe fe-x" />
                                        </a>
                                    </span>
                                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                        Adidas <a className="text-reset ml-2" href="#!" role="button">
                                            <i className="fe fe-x" />
                                        </a>
                                    </span>
                                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                        $10.00 - $49.00 <a className="text-reset ml-2" href="#!" role="button">
                                            <i className="fe fe-x" />
                                        </a>
                                    </span>
                                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                        $50.00 - $99.00 <a className="text-reset ml-2" href="#!" role="button">
                                            <i className="fe fe-x" />
                                        </a>
                                    </span>
                                </div>
                            </div> */}
                            {/* Products */}
                            <div className="row">
                                {
                                    product.products.length === 0 ?
                                        [...Array(15)].map((e, i) => (
                                            <div className="col-6 col-md-4" key={i}>
                                                {/* Card */}
                                                {withPriceFormat(Product, { loading: product.loading })}
                                            </div>
                                        ))
                                        :
                                        product.products.map(e => (
                                            <div className="col-6 col-md-4" key={e._id}>
                                                {/* Card */}
                                                {withPriceFormat(Product, { ...e, loading: product.loading })}
                                            </div>
                                        ))
                                }
                            </div>
                            {/* Pagination */}
                            <Pagination {...product.paginate} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
