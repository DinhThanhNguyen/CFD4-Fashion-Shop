import React from 'react'
import FaqItem from './FaqItem'
export default function FaqGroup({ title, items }) {
    return (
        <>
            {/* Heading */}
            <h5 className="mb-7">{title}</h5>
            {/* List group */}
            <ul className="list-group list-group-flush-x mb-9" id="faqCollapseParentOne">
                {
                    items.map((e, i) => <FaqItem key={i} {...e} number={i + 1} />)
                }
            </ul>
        </>
    )
}
