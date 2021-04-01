import cartApi from 'api/cartApi'
import { serializeObjectToQueryURL, convertQueryToObject } from 'components/helper'
import Pagination from 'components/Pagination'
import React, { useEffect, useState } from 'react'
import OrderListItem from './OrderListItem'

export default function OrderList() {

    let [state, setState] = useState({
        list: [],
        paginate: null
    })

    let queryURL = convertQueryToObject()

    let QueryString = serializeObjectToQueryURL(queryURL)

    useEffect(() => {
        cartApi.getAllOrder(QueryString)
            .then(res => {
                console.log(res)
                setState({
                    list: res.data,
                    paginate: res.paginate
                })
            })
    }, [QueryString])

    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Order */}
            {
                state.list.map((e, i) => <OrderListItem key={i} {...e} />)
            }
            {/* Pagination */}
            <Pagination {...state.paginate} />
        </div>
    )
}
