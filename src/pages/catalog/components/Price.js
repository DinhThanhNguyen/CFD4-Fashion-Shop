import React from 'react'

export default function Price() {
    return (
        <li className="nav-item">
            {/* Toggle */}
            <a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#priceCollapse">
                Price
                    </a>
            {/* Collapse */}
            <div className="collapse" id="priceCollapse" data-toggle="simplebar" data-target="#priceGroup">
                {/* Form group*/}
                <div className="form-group form-group-overflow mb-6" id="priceGroup">
                    <div className="custom-control custom-checkbox mb-3">
                        <input className="custom-control-input" id="priceOne" type="checkbox" defaultChecked />
                        <label className="custom-control-label" htmlFor="priceOne">
                            $10.00 - $49.00
                          </label>
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                        <input className="custom-control-input" id="priceTwo" type="checkbox" defaultChecked />
                        <label className="custom-control-label" htmlFor="priceTwo">
                            $50.00 - $99.00
                          </label>
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                        <input className="custom-control-input" id="priceThree" type="checkbox" />
                        <label className="custom-control-label" htmlFor="priceThree">
                            $100.00 - $199.00
                          </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input className="custom-control-input" id="priceFour" type="checkbox" />
                        <label className="custom-control-label" htmlFor="priceFour">
                            $200.00 and Up
                          </label>
                    </div>
                </div>
                {/* Range */}
                <div className="d-flex align-items-center">
                    {/* Input */}
                    <input type="number" className="form-control form-control-xs" placeholder="$10.00" min={10} />
                    {/* Divider */}
                    <div className="text-gray-350 mx-2">‒</div>
                    {/* Input */}
                    <input type="number" className="form-control form-control-xs" placeholder="$350.00" max={350} />
                </div>
            </div>
        </li>
    )
}