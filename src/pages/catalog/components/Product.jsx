import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCart, addWishList } from '../../../redux/reducers/cartReducers'
import { Skeleton } from '@material-ui/lab';

export default function Product(props) {

    let { name, price_text, images, loading, discount_rate, price_before_discount, slug } = props

    let dispatch = useDispatch()

    let image1 = images?.[0]?.medium_url
    let image2 = images?.[1]?.medium_url



    return (
        <div className="card mb-7">
            {/* Badge */}
            {
                !loading && <div className="badge badge-white card-badge card-badge-left text-uppercase">
                    New
                </div>
            }
            {/* Image */}
            <div className="card-img">
                {/* Image */}
                <Link className="card-img-hover" to={`/product/${slug}`}>
                    {
                        loading ? <Skeleton variant="rect" width="100%" height={253} /> : <>
                            {
                                image1 && <img className="card-img-top card-img-back" src={image1} alt="..." />
                            }
                            {
                                image2 ? <img className="card-img-top card-img-front" src={image2} alt="..." /> :
                                    <img className="card-img-top card-img-front" src={image1} alt="..." />
                            }
                        </>
                    }
                    {
                        !discount_rate ? <p className="discount_rate hidden">{discount_rate}%</p> :
                            !loading && <p className="discount_rate">-{discount_rate}%</p>
                    }
                </Link>
                {/* Actions */}
                <div className="card-actions">
                    <span className="card-action">
                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct" >
                            <i className="fe fe-eye" />
                        </button>
                    </span>
                    <span className="card-action">
                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button" onClick={() => dispatch(addCart(props))}>
                            <i className="fe fe-shopping-cart" />
                        </button>
                    </span>
                    <span className="card-action">
                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button" onClick={() => dispatch(addWishList(props))}>
                            <i className="fe fe-heart" />
                        </button>
                    </span>
                </div>
            </div>
            {/* Body */}
            <div className="card-body px-0">
                {/* Category */}
                {/* <div className="font-size-xs">
                    <Link className="text-muted" to="/catalog">Shoes</Link>
                </div> */}
                {/* Title */}
                {
                    loading ? <Skeleton height={60} /> : <div className="font-weight-bold custom-name-product">
                        <Link className="text-body" to={`/product/${slug}`}>
                            {name}
                        </Link>
                    </div>
                }
                {/* Price */}
                {
                    loading ? <Skeleton variant="text" /> : <del className="font-weight-bold text-muted">
                        {price_before_discount}₫
                    </del>
                }
                {
                    loading ? <Skeleton variant="text" /> : <div className="font-weight-bold text-primary">
                        {price_text}₫
                    </div>
                }
            </div>
        </div>
    )
}