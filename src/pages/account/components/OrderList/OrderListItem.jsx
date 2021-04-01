import { currency } from 'components/helper'
import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

export default function OrderListItem({ list, _id, status, amount }) {

    let match = useRouteMatch()

    let images = list.map(e => e.images?.[0]?.thumbnail_url || null)

    images = images.filter(e => e !== null)

    let day = new Date().getDate()

    let month = new Date().getMonth()

    let year = new Date().getFullYear()

    amount = currency(amount)

    return (
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
                                    {_id}
                                </p>
                            </div>
                            <div className="col-6 col-lg-3">
                                {/* Heading */}
                                <h6 className="heading-xxxs text-muted">Shipped date:</h6>
                                {/* Text */}
                                <p className="mb-lg-0 font-size-sm font-weight-bold">
                                    <time>
                                        {day.toString().padStart(2, 0)} {month.toString().padStart(2, 0)}, {year}
                                    </time>
                                </p>
                            </div>
                            <div className="col-6 col-lg-3">
                                {/* Heading */}
                                <h6 className="heading-xxxs text-muted">Status:</h6>
                                {/* Text */}
                                <p className="mb-0 font-size-sm font-weight-bold">
                                    {status === 'order' && 'Đang đặt hàng'}
                                    {status === 'cart' && 'Đơn hàng đang được xử lí'}
                                    {status === 'confirm' && 'Đơn hàng được xác nhận'}
                                    {status === 'shipping' && 'Đơn hàng đang được giao'}
                                    {status === 'finish' && 'Đã hoàn thành'}
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
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="form-row mb-4 mb-lg-0">
                            {
                                images.slice(0, 3).map(e => (
                                    <div className="col-3">
                                        {/* Image */}
                                        <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: `url(${e})` }} />
                                    </div>
                                ))
                            }
                            {
                                images.length > 3 && (
                                    <div className="col-3">
                                        <div className="embed-responsive embed-responsive-1by1 bg-light">
                                            <Link className="embed-responsive-item embed-responsive-item-text text-reset" to={`${match.path}/${_id}`}>
                                                <div className="font-size-xxs font-weight-bold">
                                                    +{images.length - 3} <br /> more
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="form-row">
                            <div className="col-6">
                                {/* Button */}
                                <Link className="btn btn-sm btn-block btn-outline-dark" to={`${match.path}/${_id}`}>
                                    Order Details
                                </Link>
                            </div>
                            <div className="col-6">
                                {/* Button */}
                                <a className="btn btn-sm btn-block btn-outline-dark" href="#!">
                                    Track order
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
