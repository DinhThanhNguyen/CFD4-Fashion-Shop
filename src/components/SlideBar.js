import React from 'react'
import ReactDOM from 'react-dom'

export default function slideBar() {
    return ReactDOM.createPortal (
        <div className="modal fixed-right fade" id="modalSidebar" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-vertical" role="document">
                <div className="modal-content">
                    {/* Close */}
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fe fe-x" aria-hidden="true" />
                    </button>
                    {/* Body */}
                    <div className="modal-body px-10 my-auto">
                        {/* Nav */}
                        <ul className="nav nav-vertical nav-unstyled font-size-h2" id="sidebarNav">
                            <li className="nav-item">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarHome">
                                    Home
                                </a>
                                {/* Collapse */}
                                <div className="collapse" id="sidebarHome" data-parent="#sidebarNav">
                                    <ul className="list-styled font-size-lg py-3 mb-0">
                                        <li className="list-styled-item">
                                            <a className="list-styled-link" href="./index.html">Default</a>
                                        </li>
                                        <li className="list-styled-item">
                                            <a className="list-styled-link" href="./index-classic.html">Classic</a>
                                        </li>
                                        <li className="list-styled-item">
                                            <a className="list-styled-link" href="./index-fashion.html">Fashion</a>
                                        </li>
                                        <li className="list-styled-item">
                                            <a className="list-styled-link" href="./index-boxed.html">Boxed</a>
                                        </li>
                                        <li className="list-styled-item">
                                            <a className="list-styled-link" href="./index-simple.html">Simple</a>
                                        </li>
                                        <li className="list-styled-item">
                                            <a className="list-styled-link" href="./index-asymmetric.html">Asymmetric</a>
                                        </li>
                                        <li className="list-styled-item">
                                            <a className="list-styled-link" href="./index-sidenav.html">Sidenav</a>
                                        </li>
                                        <li className="list-styled-item">
                                            <a className="list-styled-link" href="./index-landing.html">Landing</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarCatalog">
                                    Catalog
                  </a>
                                {/* Collapse */}
                                <div className="collapse" id="sidebarCatalog" data-parent="#sidebarNav">
                                    <div className="row">
                                        <div className="col-12 py-3">
                                            {/* Heading */}
                                            <h6 className="mb-5 font-weight-bold">Clothing</h6>
                                            {/* Links */}
                                            <ul className="list-styled font-size-lg py-3">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">All Clothing</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Blouses &amp; Shirts</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Coats &amp; Jackets</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Dresses</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Hoodies &amp; Sweats</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Denim</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Jeans</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Jumpers &amp; Cardigans</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Leggings</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 py-3">
                                            {/* Heading */}
                                            <h6 className="mb-5 font-weight-bold">Shoes &amp; Boots</h6>
                                            {/* Links */}
                                            <ul className="list-styled font-size-lg">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">All Shoes &amp; Boots</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Branded Shoes</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Boots</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Heels</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Trainers</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Sandals</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Shoes</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Wide Fit Shoes</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 py-3">
                                            {/* Heading */}
                                            <h6 className="mb-5 font-weight-bold">Bags &amp; Accessories</h6>
                                            {/* Links */}
                                            <ul className="list-styled font-size-lg">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">All Bags &amp; Accessories</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Accessories</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Bags &amp; Purses</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Luggage</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Belts</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Hats</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Hair Accessories</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Jewellery</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Travel Accessories</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarShop">
                                    Shop
                  </a>
                                {/* Collapse */}
                                <div className="collapse" id="sidebarShop" data-parent="#sidebarNav">
                                    <div className="row">
                                        <div className="col-12 py-3">
                                            {/* Heading */}
                                            <h6 className="mb-5">Shop</h6>
                                            {/* Links */}
                                            <ul className="list-styled font-size-lg">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop.html">Default</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop-topbar.html">Topbar</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop-collapse.html">Collapse</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop-simple.html">Simple</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shop-masonry.html">Masonry</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 py-3">
                                            {/* Heading */}
                                            <h6 className="mb-5">Product</h6>
                                            {/* Links */}
                                            <ul className="list-styled font-size-lg">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./product.html">Default</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./product-images-left.html">Images Left</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./product-image-grid.html">Image Grid</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./product-image-slider.html">Image Slider</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./product-images-stacked.html">Images Stacked</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 py-3">
                                            {/* Heading */}
                                            <h6 className="mb-5">Support</h6>
                                            {/* Links */}
                                            <ul className="list-styled font-size-lg">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shopping-cart.html">Shopping Cart</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./checkout.html">Checkout</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./order-completed.html">Order Completed</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./shipping-and-returns.html">Shipping &amp; Returns</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 py-3">
                                            {/* Heading */}
                                            <h6 className="mb-5">Account</h6>
                                            {/* Links */}
                                            <ul className="list-styled font-size-lg">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./account-order.html">Order</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./account-orders.html">Orders</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./account-wishlist.html">Wishlist</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./account-personal-info.html">Personal Info</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./account-address.html">Addresses</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./account-address-edit.html">Addresses: New</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./account-payment.html">Payment</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./account-payment-edit.html">Payment: New</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./account-payment-choose.html">Payment: Choose</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./auth.html">Auth</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 py-3">
                                            {/* Heading */}
                                            <h6 className="mb-5">Modals</h6>
                                            {/* Links */}
                                            <ul className="list-styled font-size-lg">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterHorizontal">
                                                        Newsletter: Horizontal
                            </a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterVertical">
                                                        Newsletter: Vertical
                            </a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" data-toggle="modal" href="#modalProduct">
                                                        Product
                            </a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" data-toggle="modal" href="#modalSearch">
                                                        Search
                            </a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" data-toggle="modal" href="#modalShoppingCart">
                                                        Shopping Cart
                            </a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" data-toggle="modal" href="#modalSizeChart">
                                                        Size Chart
                            </a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" data-toggle="modal" href="#modalWaitList">
                                                        Wait List
                            </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarPages">
                                    Pages
                  </a>
                                {/* Collapse */}
                                <div className="collapse" id="sidebarPages" data-parent="#sidebarNav">
                                    <ul className="list-styled font-size-lg py-3 mb-0">
                                        <li className="list-styled-item">
                                            <a className="list-styled-link" href="./about.html">About</a>
                                        </li>
                                        <li className="list-styled-item">
                                            <a className="list-styled-link" href="./contact-us.html">Contact Us</a>
                                        </li>
                                        <li className="list-styled-item">
                                            <a className="list-styled-link" href="./store-locator.html">Store Locator</a>
                                        </li>
                                        <li className="list-styled-item">
                                            <a className="list-styled-link" href="./faq.html">FAQ</a>
                                        </li>
                                        <li className="list-styled-item">
                                            <a className="list-styled-link" href="./coming-soon.html">Coming Soon</a>
                                        </li>
                                        <li className="list-styled-item">
                                            <a className="list-styled-link" href="./404.html">404</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarBlog">
                                    Blog
                  </a>
                                {/* Collapse */}
                                <div className="collapse" id="sidebarBlog" data-parent="#sidebarNav">
                                    <ul className="list-styled font-size-lg py-3 mb-0">
                                        <li className="list-styled-item">
                                            <a className="list-styled-link" href="./blog.html">Blog</a>
                                        </li>
                                        <li className="list-styled-item">
                                            <a className="list-styled-link" href="./blog-post.html">Blog Post</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./docs/getting-started.html">Docs</a>
                            </li>
                        </ul>
                    </div>
                    {/* Body */}
                    <div className="moda-body px-10 py-9">
                        {/* Social links */}
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a className="text-gray-350" href="#!">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="text-gray-350" href="#!">
                                    <i className="fab fa-youtube" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="text-gray-350" href="#!">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="text-gray-350" href="#!">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="text-gray-350" href="#!">
                                    <i className="fab fa-medium-m" />
                                </a>
                            </li>
                        </ul>
                        {/* Footer */}
                        <div className="font-size-xxs text-gray-350">
                            © 2019 All rights reserved. Designed by Unvab.
              </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('root2')
    )
}
