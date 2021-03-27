import userApi from 'api/userApi'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PaymentItem(props) {

    let { payment_option, payment_card_number, payment_card_name, payment_card_month, payment_card_year, _id, setPaymentDefault } = props

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
                <div className={`card-body profile-address ${props.default ? 'profile-default' : ''}`}>
                    <p className="item-default" onClick={setPaymentDefault}>Default</p>
                    {/* Heading */}
                    <h6 className="mb-6">
                        {`${payment_option === 'credit_card' ? 'Credit Card' : 'PayPall'}`}
                    </h6>
                    {/* Text */}
                    <p className="mb-5">
                        <strong>Card Number:</strong> <br />
                        <span className="text-muted">{payment_card_number}</span>
                    </p>
                    {/* Text */}
                    <p className="mb-5">
                        <strong>Expiry Date:</strong> <br />
                        <span className="text-muted">{payment_card_month.toString().padStart(2, 0)} {payment_card_year}</span>
                    </p>
                    {/* Text */}
                    <p className="mb-0">
                        <strong>Name on Card:</strong> <br />
                        <span className="text-muted">{payment_card_name}</span>
                    </p>
                    {/* Action */}
                    <div className="card-action card-action-right">
                        {/* Button */}
                        <Link className="btn btn-xs btn-circle btn-white-primary" to={`/account/payment/edit/${_id}`}>
                            <i className="fe fe-edit-2" />
                        </Link>
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
