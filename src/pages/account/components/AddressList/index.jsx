import userApi from 'api/userApi'
import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import AddressListItem from './AddressListItem'

export default function AddressList() {

    let [list, setList] = useState([])

    useEffect(async () => {
        let result = await userApi.getAddress()
        setList(result.data)
    }, [])

    let match = useRouteMatch()

    function setAddressDefault(e) {
        if(!e.default) {
            userApi.changeAddressDefault({
                _id: e._id
            })

            list.forEach(e1 => {
                if(e1._id === e._id) {
                    e1.default = true;
                } else {
                    e1.default = false;
                }
            })

            setList([...list])
        }
    }

    

    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <div className="row">
                {/* Card */}
                {
                    list.map(e => <AddressListItem key={e._id} {...e} setAddressDefault={setAddressDefault.bind(null, e)} />)
                }
                <div className="col-12">
                    {/* Button */}
                    <Link className="btn btn-block btn-lg btn-outline-border" to={`${match.path}/create`}>
                        Add Address <i className="fe fe-plus" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
