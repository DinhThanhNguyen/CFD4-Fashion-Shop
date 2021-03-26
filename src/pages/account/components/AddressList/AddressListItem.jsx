import userApi from 'api/userApi'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AddressListItem(props) {

    let { first_name, last_name, address_line1, address_line2, city, zip, country, phone, _id, company, setAddressDefault } = props

    let [remove, setRemove] = useState(false)

    function _removeAddress() {
        userApi.removeAddress(_id)
            .then(res => {
                setRemove(true)
            })
    }

    if (remove) return null

    return (
        <div className="col-12 col-lg-6">
            <div className="card card-lg bg-light mb-8">
                <div className={`card-body profile-address ${props.default ? 'profile-default' : ''}`}>
                    <p className="item-default" onClick={setAddressDefault}>Default</p>
                    {/* Heading */}
                    <h6 className="mb-6">
                        {last_name} {first_name}
                    </h6>
                    {/* Text */}
                    <p className="text-muted mb-0">
                        {address_line1} {address_line2 ? `Or ${address_line2}` : ''} <br />
                        {city} -  {country}<br />
                        {zip} <br />
                        {phone} <br />
                        {company}
                    </p>
                    {/* Action */}
                    <div className="card-action card-action-right btn_edit_address">
                        {/* Button */}
                        <Link className="btn btn-xs btn-circle btn-white-primary" to={`/account/address/edit/${_id}`}>
                            <i className="fe fe-edit-2" />
                        </Link>
                        {/* Button */}
                        <button className="btn btn-xs btn-circle btn-white-primary" style={{ marginLeft: '5px' }} onClick={_removeAddress}>
                            <i className="fe fe-x" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
