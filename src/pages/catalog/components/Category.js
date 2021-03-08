import React from 'react'

export default function Catagory() {
    return (
        <li className="nav-item">
            {/* Toggle */}
            <a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#categoryCollapse">
                Catagory
            </a>
            {/* Collapse */}
            <div className="collapse show" id="categoryCollapse">
                <div className="form-group">
                    <ul className="list-styled mb-0" id="productsNav">
                        <li className="list-styled-item">
                            <a className="list-styled-link" href="#">
                                All Products
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    )
}