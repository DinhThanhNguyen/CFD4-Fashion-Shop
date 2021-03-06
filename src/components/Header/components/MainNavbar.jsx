import { useTranslate } from 'core/Translate'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function MainNavbar() {

    const cart = useSelector(state => state.cart)

    let { t } = useTranslate()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                {/* Brand */}
                <Link className="navbar-brand" to="/">
                    Shopper.
                </Link>
                {/* Toggler */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Collapse */}
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    {/* Nav */}
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">{t('Product')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/store-locator">Store Locator</Link>
                        </li>
                    </ul>
                    {/* Nav */}
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="modal" href="#modalSearch">
                                <i className="fe fe-search" />
                            </a>
                        </li>
                        <li className="nav-item ml-lg-n4">
                            <Link className="nav-link" to="/account">
                                <i className="fe fe-user" />
                            </Link>
                        </li>
                        <li className="nav-item ml-lg-n4">
                            <Link className="nav-link" to="/account/wishlist">
                                <i className="fe fe-heart" />
                            </Link>
                        </li>
                        <li className="nav-item ml-lg-n4">
                            <a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
                                {
                                    cart.num > 0 ? (<span data-cart-items={cart.num}>
                                        <i className="fe fe-shopping-cart" />
                                    </span>

                                    ) : (
                                        <span>
                                            <i className="fe fe-shopping-cart" />
                                        </span>
                                    )
                                }
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
