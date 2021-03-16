import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCart } from '../../../redux/reducers/cartReducers'

export default function Product(props) {

    let { name, price_text, images } = props

    let dispatch = useDispatch()

    let image1 = images?.[0]?.medium_url
    let image2 = images?.[1]?.medium_url

    return (
        <div className="card mb-7">
            {/* Badge */}
            <div className="badge badge-white card-badge card-badge-left text-uppercase">
                New
            </div>
            {/* Image */}
            <div className="card-img">
                {/* Image */}
                <Link className="card-img-hover" to="/product-detail">
                    {
                        image1 && <img className="card-img-top card-img-back" src={image1} alt="..." />
                    }
                    {
                        image2 ? <img className="card-img-top card-img-front" src={image2} alt="..." /> :
                            <img className="card-img-top card-img-front" src={image1} alt="..." />
                    }
                </Link>
                {/* Actions */}
                <div className="card-actions">
                    <span className="card-action">
                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                            <i className="fe fe-eye" />
                        </button>
                    </span>
                    <span className="card-action">
                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button" onClick={dispatch.bind(null, addCart(props))}>
                            <i className="fe fe-shopping-cart" />
                        </button>
                    </span>
                    <span className="card-action">
                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
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
                <div className="font-weight-bold">
                    <Link className="text-body" to="/product-detail">
                        {name}
                    </Link>
                </div>
                {/* Price */}
                <div className="font-weight-bold text-muted">
                    {price_text}₫
                </div>
            </div>
        </div>
    )
}