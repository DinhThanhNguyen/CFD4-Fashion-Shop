import userApi from 'api/userApi'
import React, { useState } from 'react'

export default function PaymentListItem(props) {

    let { _id } = props

    let [remove, setRemove] = useState(false)

    function _removePayment() {
        userApi.removePayment(_id)
            .then(res => {
                setRemove(true)
            })
    }

    if (remove) return null
    return (
        <div className="col-12 col-lg-6">
            {/* Card */}
            <div className="card card-lg bg-light mb-8">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-6">
                        Debit / Credit Card
                    </h6>
                    {/* Text */}
                    <p className="mb-5">
                        <strong>Card Number:</strong> <br />
                        <span className="text-muted">4242 ∙∙∙∙ ∙∙∙∙ 7856 (Mastercard)</span>
                    </p>
                    {/* Text */}
                    <p className="mb-5">
                        <strong>Expiry Date:</strong> <br />
                        <span className="text-muted">Feb 2022</span>
                    </p>
                    {/* Text */}
                    <p className="mb-0">
                        <strong>Name on Card:</strong> <br />
                        <span className="text-muted">Daniel Robinson</span>
                    </p>
                    {/* Action */}
                    <div className="card-action card-action-right">
                        {/* Button */}
                        <a className="btn btn-xs btn-circle btn-white-primary" href="account-payment-edit.html">
                            <i className="fe fe-edit-2" />
                        </a>
                        {/* Button */}
                        <button className="btn btn-xs btn-circle btn-white-primary" onClick={_removePayment}>
                            <i className="fe fe-x" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
