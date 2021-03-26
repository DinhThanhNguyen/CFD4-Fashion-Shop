import productApi from 'api/productApi'
import Breadcrumb from 'components/Breadcrumb'
import Features from 'components/Features'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { addWishList } from 'redux/reducers/cartReducers'
import { addCart } from 'redux/reducers/cartReducers'
import Comments from './components/Comments'
import Description from './components/Description'
import SimilarProduct from './components/SimilarProduct'


export default function ProductDetail() {

    let routeMatch = useRouteMatch()

    let [product, setProduct] = useState()

    let [currentImage, setCurrentImage] = useState(0)

    let [amount, setAmount] = useState(1)

    const dispatch = useDispatch()

    function sliderItemClick(i) {
        setCurrentImage(i)
    }

    function _changeAmount(e) {
        setAmount(parseInt(e.target.value))
    }

    useEffect(() => {
        productApi.detail(routeMatch.params.slug)
            .then(res => {
                if (res.data.length > 0)
                setProduct(res.data[0])
            })
    }, [routeMatch.params.slug])

    if (!product) return null;

    let price_before_discount = new Intl.NumberFormat('vn').format(product.price)

    let real_price = new Intl.NumberFormat('vn').format(product.real_price)

    let { images, configurable_options } = product

    return (
        <>
            <Breadcrumb
                list={[
                    {
                        title: 'Home',
                        link: '/'
                    }, {
                        title: 'Product',
                        link: '/catalog'
                    }, {
                        title: `${product.name}`,
                        link: '#!'
                    }
                ]}
            />
            <section className="product_details">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    {/* Card */}
                                    <div className="card">
                                        {/* Badge */}
                                        {
                                            product.discount_rate ? <div className="badge badge-primary card-badge text-uppercase">
                                                -{product.discount_rate}%
                                            </div> : null
                                        }
                                        {/* Slider */}
                                        <div className="mb-4" id="productSlider">
                                            {/* Item */}
                                            {
                                                images.map((e, i) => <a key={i} href={e.large_url} className={currentImage === i ? 'active' : ''}>
                                                    <img src={e.large_url} alt="..." className="card-img-top" />
                                                </a>)
                                            }
                                        </div>
                                    </div>
                                    {/* Slider */}
                                    <div className="flickity-nav mx-n2 mb-10 mb-md-0 slider-thumbnail">
                                        {/* Item */}
                                        {
                                            images.map((e, i) => <div className={`col-12 px-2 ${currentImage === i ? 'active' : ''}`} key={i} style={{ maxWidth: '113px' }} onClick={sliderItemClick.bind(null, i)}>
                                                <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: `url(${e.medium_url})` }} />
                                            </div>)
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 pl-lg-10">
                                    {/* Heading */}
                                    <h3 className="mb-2">{product.name}</h3>
                                    {/* Price */}
                                    <div className="mb-7">
                                        <span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">{price_before_discount}₫</span>
                                        <span className="ml-1 font-size-h5 font-weight-bolder text-primary">{real_price}₫</span>
                                        <span className="font-size-sm ml-1">({product.stock_item.qty > 0 ? 'Còn hàng' : 'Hết hàng'})</span>
                                    </div>
                                    {/* Form */}
                                    {
                                        configurable_options?.map((e, i) => (
                                            <div className="form-group" key={i}>
                                                <p className="mb-5">
                                                    {e.name}: {e.values.map((e1, i1) => <span key={i1} id="colorCaption">{e1.label}</span>)}
                                                </p>
                                                {/* Radio */}
                                                {/* <div className="mb-8 ml-n1" >
                                                        <div className="custom-control custom-control-inline custom-control-img">
                                                            <input type="radio" className="custom-control-input" id="imgRadioOne" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" defaultValue="White" defaultChecked />
                                                            <label className="custom-control-label" htmlFor="imgRadioOne">
                                                                <span className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: 'url(/img/products/product-7.jpg)' }} />
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-control-inline custom-control-img">
                                                            <input type="radio" className="custom-control-input" id="imgRadioTwo" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" defaultValue="Black" />
                                                            <label className="custom-control-label" htmlFor="imgRadioTwo">
                                                                <span className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: 'url(/img/products/product-49.jpg)' }} />
                                                            </label>
                                                        </div>
                                                    </div> */}
                                            </div>
                                        ))
                                    }
                                    <span
                                        style={{ fontSize: '20px' }}>{product.short_description}</span>
                                    <div className="form-group">
                                        {/* Radio */}
                                        <div className="form-row mb-7" style={{ marginTop: '20px' }}>
                                            <div className="col-12 col-lg-auto">
                                                {/* Quantity */}
                                                <select className="custom-select mb-2" onChange={_changeAmount}>
                                                    {
                                                        [...Array(10)].map((e, i) => <option value={i + 1} selected={(i + 1) === amount} key={i}>{i + 1}</option>)
                                                    }
                                                </select>
                                            </div>
                                            <div className="col-12 col-lg">
                                                {/* Submit */}
                                                <button type="submit" className="btn btn-block btn-dark mb-2" onClick={() => dispatch(addCart({ ...product, cartNum: amount }))}>
                                                    Add to Cart <i className="fe fe-shopping-cart ml-2" />
                                                </button>
                                            </div>
                                            <div className="col-12 col-lg-auto">
                                                {/* Wishlist */}
                                                <button className="btn btn-outline-dark btn-block mb-2" data-toggle="button" onClick={() => dispatch(addWishList(product))}>
                                                    Wishlist <i className="fe fe-heart ml-2" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* Text */}
                                        {/* <p>
                                                <span className="text-gray-500">Is your size/color sold out?</span>
                                                <a className="text-reset text-decoration-underline" data-toggle="modal" href="#modalWaitList">Join the Wait List!</a>
                                            </p> */}
                                        {/* Share */}
                                        <p className="mb-0">
                                            <span className="mr-4">Share:</span>
                                            <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Description description={product.description} />
            <section className="pt-11">
                <SimilarProduct />
            </section>
            <Comments />
            <Features />
        </>
    )
}
