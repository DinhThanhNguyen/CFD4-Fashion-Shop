import { currency } from 'components/helper'
import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderItem({ slug, images, cartNum, name, real_price }) {

    let amount = currency(real_price * cartNum)

    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-4 col-md-3 col-xl-2">
                    {/* Image */}
                    <Link to={`/product/${slug}`}><img src={images?.[0]?.thumbnail_url} alt="..." className="img-fluid" /></Link>
                </div>
                <div className="col">
                    {/* Title */}
                    <p className="mb-4 font-size-sm font-weight-bold">
                        <Link className="text-body" to={`/product/${slug}`}> {name} x {cartNum}</Link> <br />
                        <span className="text-muted">{amount}</span>
                    </p>
                </div>
            </div>
        </li>
    )
}
