import cartApi from 'api/cartApi'
import withPriceFormat from 'hoc/withPriceFormat'
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import OrderItem from './OrderItem'

export default function Order() {

    let _id = useRouteMatch().params

    let [order, setOrder] = useState({
        list: []
    });

    useEffect(() => {
        cartApi.getOrder(_id.id)
            .then(res => {
                if (res.data) {
                    setOrder(res.data)
                }
            })
    }, [])

    let day = new Date().getDate()

    let month = new Date().getMonth()

    let year = new Date().getFullYear()

    if (!order === 0) return null

    let { first_name, last_name, address_line1, address_line2, zip, city, phone, company, country,
        payment_option, status, num, payment_card_number, payment_card_month, payment_card_year, payment_card_name, shipping_price } = order;
    
    let amount = new Intl.NumberFormat('vn').format(order.amount)
    
    let tax = new Intl.NumberFormat('vn').format((order.amount)/10)

    let total = new Intl.NumberFormat('vn').format(order.shipping_price + order.amount + (order.amount / 10))

    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Order */}
            <div className="card card-lg mb-5 border">
                <div className="card-body pb-0">
                    {/* Info */}
                    <div className="card card-sm">
                        <div className="card-body bg-light">
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">Order No:</h6>
                                    {/* Text */}
                                    <p className="mb-lg-0 font-size-sm font-weight-bold">
                                        {_id.id}
                                    </p>
                                </div>
                                <div className="col-6 col-lg-3">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">Shipped date:</h6>
                                    {/* Text */}
                                    <p className="mb-lg-0 font-size-sm font-weight-bold">
                                        <time dateTime="2019-10-01">
                                            {day} {month.toString().padStart(2, 0)}, {year}
                                        </time>
                                    </p>
                                </div>
                                <div className="col-6 col-lg-3">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">Status:</h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm font-weight-bold">
                                        {status}
                                    </p>
                                </div>
                                <div className="col-6 col-lg-3">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">Order Amount:</h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm font-weight-bold">
                                        {amount}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    {/* Heading */}
                    <h6 className="mb-7">Order Items ({num})</h6>
                    {/* Divider */}
                    <hr className="my-5" />
                    {/* List group */}
                    <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x">
                        {
                            order.list.map(e => <React.Fragment key={e._id}>{withPriceFormat(OrderItem, e)}</React.Fragment>)
                        }
                    </ul>
                </div>
            </div>
            {/* Total */}
            <div className="card card-lg mb-5 border">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">Order Total</h6>
                    {/* List group */}
                    <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                        <li className="list-group-item d-flex">
                            <span>Subtotal</span>
                            <span className="ml-auto">{amount}</span>
                        </li>
                        <li className="list-group-item d-flex">
                            <span>Tax</span>
                            <span className="ml-auto">{tax}</span>
                        </li>
                        <li className="list-group-item d-flex">
                            <span>Shipping</span>
                            <span className="ml-auto">{shipping_price}</span>
                        </li>
                        <li className="list-group-item d-flex font-size-lg font-weight-bold">
                            <span>Total</span>
                            <span className="ml-auto">{total}</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Details */}
            <div className="card card-lg border">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">Billing &amp; Shipping Details</h6>
                    {/* Content */}
                    <div className="row">
                        <div className="col-12 col-md-4">
                            {/* Heading */}
                            <p className="mb-4 font-weight-bold">
                                Shipping Address:
                            </p>
                            <p className="mb-7 mb-md-0 text-gray-500">
                                {last_name} {first_name} <br />
                                {address_line1} {address_line2 ? `Or ${address_line2}` : ''} <br />
                                {city} -  {country}<br />
                                {zip} <br />
                                {phone} <br />
                                {company}
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="mb-7 mb-md-0 text-gray-500">
                                <p className="mb-5">
                                    <strong>Card Number:</strong> <br />
                                    <span className="text-muted">{payment_card_number}</span>
                                </p>
                                {/* Text */}
                                <p className="mb-5">
                                    <strong>Expiry Date:</strong> <br />
                                    <span className="text-muted">{payment_card_month} {payment_card_year}</span>
                                </p>
                                {/* Text */}
                                <p className="mb-0">
                                    <strong>Name on Card:</strong> <br />
                                    <span className="text-muted">{payment_card_name}</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            {/* Heading */}
                            <p className="mb-4 font-weight-bold">
                                Shipping Method:
                            </p>
                            <p className="mb-7 text-gray-500">
                                Standart Shipping <br />
                                (5 - 7 days)
                            </p>
                            {/* Heading */}
                            <p className="mb-4 font-weight-bold">
                                Payment Method:
                            </p>
                            <p className="mb-0 text-gray-500">
                                {`${payment_option === 'credit_card' ? 'Credit Card' : 'PayPall'}`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
