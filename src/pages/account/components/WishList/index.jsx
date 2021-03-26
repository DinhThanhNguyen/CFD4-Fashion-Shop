import userApi from 'api/userApi'
import { serializeObjectToQueryURL, convertQueryToObject } from 'components/helper'
import Pagination from 'components/Pagination'
import withPriceFormat from 'hoc/withPriceFormat'
import React, { useEffect, useState } from 'react'
import WishListItem from './WishListItem'

export default function WishList() {

    let [state, setState] = useState({
        list: [],
        paginate: null
    })

    let queryURL = convertQueryToObject()

    let QueryString = serializeObjectToQueryURL(queryURL)

    useEffect(() => {
        userApi.getWishList(QueryString)
            .then(res => {
                setState({
                    list: res.data,
                    paginate: res.paginate
                })
            })
    }, [QueryString])


    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Products */}
            <div className="row">
                {/* Item */}
                {
                    state.list.map(e => <React.Fragment key={e._id}>{withPriceFormat(WishListItem, e)}</React.Fragment>)
                }
            </div>
            {/* Pagination */}
            <Pagination {...state.paginate} />
        </div>
    )
}
