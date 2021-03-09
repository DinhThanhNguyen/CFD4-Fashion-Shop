import React from 'react'

export default function Pagination({ currentPage, nextPage, perPage, totalPage, count }) {

    function renderPage() {
        let start = currentPage - 2
        if (start < 1) {
            start = 1
        }

        let end = start + 4
        if (end > totalPage) {
            end = totalPage;
            start = end - 4
        }

        let list = []
        for (let i = start; i <= end; i++) {
            list.push(<li className="page-item" key={i}>
                <a className="page-link" href="#">{i}</a>
            </li>)
        }
        
        return list;
    }

    return (
        <nav className="d-flex justify-content-center justify-content-md-end">
            <ul className="pagination pagination-sm text-gray-400">
                {
                    currentPage > 1 && <li className="page-item">
                        <a className="page-link page-link-arrow" href="#">
                            <i className="fa fa-caret-left" />
                        </a>
                    </li>
                }

                {
                    renderPage()
                }

                {
                    currentPage < totalPage && <li className="page-item">
                        <a className="page-link page-link-arrow" href="#">
                            <i className="fa fa-caret-right" />
                        </a>
                    </li>
                }
            </ul>
        </nav>
    )
}
