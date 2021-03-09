import React from 'react'

export default function Catagory() {
    return (
        <li className="nav-item">
            {/* Toggle */}
            <a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#categoryCollapse">
                Category
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
                        <li className="list-styled-item">
                            {/* Toggle */}
                            <a className="list-styled-link" data-toggle="collapse" href="#blousesCollapse">
                                Blouses and Shirts
                                                    </a>
                            {/* Collapse */}
                            <div className="collapse" id="blousesCollapse" data-parent="#productsNav">
                                <div className="py-4 pl-5">
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="blousesOne" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="blousesOne">
                                            Women Tops, Tees &amp; Blouses
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="blousesTwo" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="blousesTwo">
                                            Petite
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="blousesThree" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="blousesThree">
                                            Petite-Size Blouses &amp; Button-Down Shirts
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="blousesFour" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="blousesFour">
                                            Women Plus Tops &amp; Tees
                                                                </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-styled-item">
                            {/* Toggle */}
                            <a className="list-styled-link" data-toggle="collapse" href="#coatsCollapse">
                                Coats and Jackets
                                                    </a>
                            {/* Collapse */}
                            <div className="collapse" id="coatsCollapse" data-parent="#productsNav">
                                <div className="py-4 pl-5">
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="coatsOne" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="coatsOne">
                                            Coats, Jackets &amp; Vests
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="coatsTwo" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="coatsTwo">
                                            Down Jackets &amp; Parkas
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="coatsThree" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="coatsThree">
                                            Wool &amp; Pea Coats Plus-Size
                                                                </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-styled-item">
                            {/* Toggle */}
                            <a className="list-styled-link" data-toggle="collapse" href="#dressesCollapse" aria-expanded="true">
                                Dresses
                                                    </a>
                            {/* Collapse */}
                            <div className="collapse show" id="dressesCollapse" data-parent="#productsNav">
                                <div className="py-4 pl-5">
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="dressesOne" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="dressesOne">
                                            A-line Dresses
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="dressesTwo" type="checkbox" defaultChecked />
                                        <label className="custom-control-label" htmlFor="dressesTwo">
                                            Shift Dresses
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="dressesThree" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="dressesThree">
                                            Wrap Dresses
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="dressesFour" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="dressesFour">
                                            Maxi Dresses
                                                                </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-styled-item">
                            {/* Toggle */}
                            <a className="list-styled-link" data-toggle="collapse" href="#hoodiesCollapse">
                                Hoodies and Sweats
                                                    </a>
                            {/* Collapse */}
                            <div className="collapse" id="hoodiesCollapse" data-parent="#productsNav">
                                <div className="py-4 pl-5">
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="hoodiesOne" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="hoodiesOne">
                                            Activewear
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="hoodiesTwo" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="hoodiesTwo">
                                            Fashion Hoodies &amp; Sweatshirts
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="hoodiesThree" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="hoodiesThree">
                                            Big &amp; Tall Sweatshirts
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="hoodiesFour" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="hoodiesFour">
                                            Big &amp; Tall Fashion Hoodies
                                                                </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-styled-item">
                            {/* Toggle */}
                            <a className="list-styled-link" data-toggle="collapse" href="#denimCollapse">
                                Denim
                                                    </a>
                            {/* Collapse */}
                            <div className="collapse" id="denimCollapse" data-parent="#productsNav">
                                <div className="py-4 pl-5">
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="denimOne" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="denimOne">
                                            Women Shorts
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="denimTwo" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="denimTwo">
                                            Juniors' Shorts
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="denimThree" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="denimThree">
                                            Petite
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="denimFour" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="denimFour">
                                            Women Plus Shorts
                                                                </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-styled-item">
                            {/* Toggle */}
                            <a className="list-styled-link" data-toggle="collapse" href="#jeansCollapse">
                                Jeans
                                                    </a>
                            {/* Collapse */}
                            <div className="collapse" id="jeansCollapse" data-parent="#productsNav">
                                <div className="py-4 pl-5">
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="jeansOne" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="jeansOne">
                                            Men Jeans
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="jeansTwo" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="jeansTwo">
                                            Men Big &amp; Tall Jeans
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="jeansThree" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="jeansThree">
                                            Surf, Skate &amp; Street Clothing
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="jeansFour" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="jeansFour">
                                            Men Big &amp; Tall Pants
                                                                </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-styled-item">
                            {/* Toggle */}
                            <a className="list-styled-link" data-toggle="collapse" href="#jumpersCollapse">
                                Jumpers and Cardigans
                                                    </a>
                            {/* Collapse */}
                            <div className="collapse" id="jumpersCollapse" data-parent="#productsNav">
                                <div className="py-4 pl-5">
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="jumpersOne" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="jumpersOne">
                                            Sweaters Plus-Size
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="jumpersTwo" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="jumpersTwo">
                                            Plus Sweaters
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="jumpersThree" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="jumpersThree">
                                            Petite Cardigans
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="jumpersFour" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="jumpersFour">
                                            Tops, Tees &amp; Blouses
                                                                </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-styled-item">
                            {/* Toggle */}
                            <a className="list-styled-link" data-toggle="collapse" href="#legginsCollapse">
                                Leggings
                                                    </a>
                            {/* Collapse */}
                            <div className="collapse" id="legginsCollapse" data-parent="#productsNav">
                                <div className="py-4 pl-5">
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="legginsOne" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="legginsOne">
                                            Novelty Leggings
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="legginsTwo" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="legginsTwo">
                                            Novelty Pants &amp; Capris
                                                                </label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="legginsThree" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="legginsThree">
                                            Women Yoga Leggings
                                  </label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="legginsFour" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="legginsFour">
                                            Workout &amp; Training Leggings
                                  </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    )
}