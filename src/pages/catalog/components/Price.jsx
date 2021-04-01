import { convertQueryToObject, serializeObjectToQueryURL } from 'components/helper'
import React, { useRef } from 'react'
import { useHistory, useRouteMatch } from 'react-router'

export default function Price() {

    let query = convertQueryToObject()
    let routeMatch = useRouteMatch()
    let history = useHistory()

    let minRef = useRef(),
        maxRef = useRef()

    function _apply() {
        let minValue = minRef.current.value,
            maxValue = maxRef.current.value

        if (minValue || maxValue) {
            if (minValue) {
                query.min = minValue.trim()
            } else {
                delete query.min
            }

            if (maxValue) {
                query.max = maxValue.trim()
            } else {
                delete query.max
            }

            delete query.page
        }

        if (minValue) {
            query.min = minValue.trim()
        } else {
            delete query.min
        }

        if (maxValue) {
            query.max = maxValue.trim()
        } else {
            delete query.max
        }

        let queryURL = serializeObjectToQueryURL(query)
        history.push(`${routeMatch.url}?${queryURL}`)
    }

    return (
        <li className="nav-item">
            {/* Toggle */}
            <a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#priceCollapse">
                Price
            </a>
            {/* Collapse */}
            <div className="collapse show" id="priceCollapse" data-toggle="simplebar" data-target="#priceGroup">
                {/* Range */}
                <div className="d-flex align-items-center">
                    {/* Input */}
                    <input ref={minRef} defaultValue={query.min} type="number" className="form-control form-control-xs" placeholder="1.000₫" />
                    {/* Divider */}
                    <div className="text-gray-350 mx-2">‒</div>
                    {/* Input */}
                    <input ref={maxRef} defaultValue={query.max} type="number" className="form-control form-control-xs" placeholder="10.000₫" />
                </div>
                <div className="btn-light btn" onClick={_apply} style={{ marginTop: 10, cursor: 'pointer', pointerEvents: 'auto' }}>Apply</div>
            </div>
        </li>
    )
}