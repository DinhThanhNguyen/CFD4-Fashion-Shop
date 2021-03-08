import React from 'react'
import Category from './components/Category'
import Size from './components/Size'
import Color from './components/Color'
import Brand from './components/Brand'
import Price from './components/Price'
import Slider from './components/Slider'
import Breadcrumb from '../../components/Breadcrumb'
import Product from './components/Product'



export default function Catalog() {
    return (
        <section className="py-11">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                        {/* Filters */}
                        <form className="mb-10 mb-md-0">
                            <ul className="nav nav-vertical" id="filterNav">
                                <Category />
                                <Size />
                                <Color />
                                <Brand />
                                <Price />
                            </ul>
                        </form>
                    </div>
                    <div className="col-12 col-md-8 col-lg-9">
                        {/* Slider */}
                        <Slider />
                        {/* Header */}
                        <div className="row align-items-center mb-7">
                            <div className="col-12 col-md">
                                {/* Heading */}
                                <h3 className="mb-1">Womens' Clothing</h3>
                                {/* Breadcrumb */}
                                <Breadcrumb list={[
                                    {
                                        title: 'Home',
                                        link: ''
                                    },
                                    {
                                        title: `Women's Clothing`,
                                        link: ''
                                    }
                                ]} />
                            </div>
                            <div className="col-12 col-md-auto">
                                {/* Select */}
                                <select className="custom-select custom-select-xs" onChange={sortChange}>
                                    <option selected={queryURL.sort === ''} value=''>--Sắp xếp--</option>
                                    <option selected={queryURL.sort === 'real_price.1'} value="real_price.1">Giá thấp</option>
                                    <option selected={queryURL.sort === 'real_price.-1'} value="real_price.-1">Giá cao</option>
                                    <option selected={queryURL.sort === 'rating_average.-1'} value="rating_average.-1">Đánh giá cao</option>
                                    <option selected={queryURL.sort === 'discount_rate.-1'} value="discount_rate.-1">Giảm nhiều</option>
                                </select>
                            </div>
                        </div>
                        {/* Tags */}
                        <div className="row mb-7">
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
                        </div>
                        {/* Products */}
                        <div className="row">
                            {
                                product.loading && [...Array(15)].map((e, i) => (
                                    <div className="col-6 col-md-4" key={i}>
                                        <Product loading={true} />
                                    </div>
                                ))
                            }
                            {
                                !product.loading && product.products.map(e => (
                                    <div className="col-6 col-md-4" key={e._id}>
                                        {withPriceFormat(Product, e)}
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
    )
}
