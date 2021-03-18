import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeCart, incrementCart, decrementCart } from 'redux/reducers/cartReducers'

export default function CartItem({ name, price_text, images, _id, cartNum, short_description }) {

    const dispatch = useDispatch()

    function remove(e) {
        e.preventDefault();
        dispatch(removeCart(_id))
    }

    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-3">
                    {/* Image */}
                    <Link to="product-detail">
                        <img src={images?.[0]?.medium_url} alt="..." className="img-fluid" />
                    </Link>
                </div>
                <div className="col">
                    {/* Title */}
                    <div className="d-flex mb-2 font-weight-bold">
                        <a className="text-body" href="product.html">{name}</a> <span className="ml-auto">{price_text}₫</span>
                    </div>
                    {/* Text */}
                    {/* <p className="mb-7 font-size-sm text-muted">
                        {short_description}
                    </p> */}
                    {/*Footer */}
                    <div className="d-flex align-items-center">
                        {/* Cart Number */}
                        <button className="cartItem-button" onClick={() => dispatch(decrementCart(_id))}>-</button>
                        <input className="cartItem-number" type="text" value={cartNum} />
                        <button className="cartItem-button" onClick={() => dispatch(incrementCart(_id))}>+</button>
                        {/* Remove */}
                        <a className="font-size-xs text-gray-400 ml-auto" href="#!" onClick={remove}>
                            <i className="fe fe-x" /> Remove
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}
