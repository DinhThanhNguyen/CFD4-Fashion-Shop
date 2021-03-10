import React from 'react'
import reactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import withPriceFormat from '../hoc/withPriceFormat'
import { decrementCart, incrementCart, removeCart } from '../redux/reducers/cartReducers'

export default function ModalCart() {

    const cart = useSelector(state => state.cart)

    let amount = new Intl.NumberFormat('vn').format(cart.amount)

    return reactDOM.createPortal(
        <div className="modal fixed-right fade" id="modalShoppingCart" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-vertical" role="document">
                {/* Full cart (add `.d-none` to disable it) */}
                <div className="modal-content">
                    {/* Close */}
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fe fe-x" aria-hidden="true" />
                    </button>
                    {/* Header*/}
                    <div className="modal-header line-height-fixed font-size-lg">
                        <strong className="mx-auto">Your Cart ({cart.num})</strong>
                    </div>
                    {/* List group */}
                    <ul className="list-group list-group-lg list-group-flush">
                        {
                            cart.list.map(e => <React.Fragment key={e._id}>{withPriceFormat(CartItem, e)}</React.Fragment>)
                        }
                    </ul>
                    {/* Footer */}
                    <div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
                        <strong>Subtotal</strong> <strong className="ml-auto">{amount}₫</strong>
                    </div>
                    {/* Buttons */}
                    <div className="modal-body">
                        <Link className="btn btn-block btn-dark" to="/checkout">Continue to Checkout</Link>
                        <a className="btn btn-block btn-outline-dark" href="./shopping-cart.html">View Cart</a>
                    </div>
                </div>
                {/* Empty cart (remove `.d-none` to enable it) */}
                <div className="modal-content d-none">
                    {/* Close */}
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fe fe-x" aria-hidden="true" />
                    </button>
                    {/* Header*/}
                    <div className="modal-header line-height-fixed font-size-lg">
                        <strong className="mx-auto">Your Cart ({cart.num})</strong>
                    </div>
                    {/* Body */}
                    <div className="modal-body flex-grow-0 my-auto">
                        {/* Heading */}
                        <h6 className="mb-7 text-center">Your cart is empty 😞</h6>
                        {/* Button */}
                        <Link className="btn btn-block btn-outline-dark" to="/catalog">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('root2')
    )
}

function CartItem({ name, price_text, images, _id, cartNum }) {

    const dispatch = useDispatch()

    function remove(e) {
        e.preventDefault();
        dispatch(removeCart(_id))
    }

    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-4">
                    {/* Image */}
                    <a href="./product.html">
                        <img className="img-fluid" src={images?.[0]?.medium_url} alt="..." />
                    </a>
                </div>
                <div className="col-8">
                    {/* Title */}
                    <p className="font-size-sm font-weight-bold mb-6">
                        <a className="text-body" href="./product.html">{name}</a> <br />
                        <span className="text-muted">{price_text}₫</span>
                    </p>
                    {/*Footer */}
                    <div className="d-flex align-items-center">
                        {/* Select */}
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
