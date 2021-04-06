import userApi from 'api/userApi'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function WishListItem({ name, price_text, price_before_discount, images, _id, slug, discount_rate }) {

    let [remove, setRemove] = useState(false)

    function _removeItem() {
        userApi.removeWistList(_id)
        setRemove(true)
    }

    if (remove) return null

    return (
        <div className="col-6 col-md-4">
            <div className="card mb-7">
                {/* Image */}
                <div className="card-img">
                    <p className="discount_rate-left">-{discount_rate}%</p>
                    {/* Action */}
                    <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right btn_edit_address">
                        <i className="fe fe-x" onClick={_removeItem} />
                    </button>
                    {/* Button */}
                    <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                        <i className="fe fe-eye mr-2 mb-1" /> Quick View
                    </button>
                    {/* Image */}
                    <img className="card-img-top" src={images?.[0]?.medium_url} alt="..." />
                </div>
                {/* Body */}
                <div className="card-body font-weight-bold text-center">
                    <Link className="text-body custom-name-product" to={`/product/${slug}`}>{name}</Link> <br />
                    <del className="font-weight-bold text-muted">
                        {price_before_discount}₫
                    </del> <br />
                    <span className="text-primary">{price_text}</span>
                </div>
            </div>
        </div>
    )
}
