import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getCategories } from 'redux/reducers/productReducers'

export default function Catagory() {

    const { categories } = useSelector(state => state.product)

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <li className="nav-item">
            {/* Toggle */}
            <a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#categoryCollapse">
                Category
            </a>
            {/* Collapse */}
            <div className="collapse show" id="categoryCollapse">
                <div className="form-group">
                    <ul className="list-styled mb-0" id="productsNav">
                        <li className="list-styled-item">
                            <NavLink className="list-styled-link" exact to={`/catalog`}>
                                All Product
                            </NavLink>
                        </li>
                        {
                            categories.map(e => (
                                <li className="list-styled-item" key={e.id}>
                                    <NavLink className="list-styled-link" to={`/catalog/${e.slug}`}>
                                        {e.title}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </li>
    )
}