import userApi from 'api/userApi'
import Pagination from 'components/Pagination'
import withPriceFormat from 'hoc/withPriceFormat'
import React, { useEffect, useState } from 'react'
import WishListItem from './WishListItem'

export default function WishList() {

    let [state, setState] = useState({
        list: [],
        paginate: null
    })

    useEffect(async () => {
        let result = await userApi.getWishList()

        console.log(result)

        setState({
            list: result.data,
            paginate: result.paginate
        })
    }, [])


    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Products */}
            <div className="row">
                {/* Item */}
                {
                    state.list.map(e => <WishListItem key={e._id} {...e} />)
                }
            </div>
            {/* Pagination */}
            <Pagination { ...state.paginate } />
        </div>
    )
}
