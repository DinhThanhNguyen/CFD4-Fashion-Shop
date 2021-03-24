import React from 'react'
import reactDom from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useFormValidate from '../core/hook/useValidateForm'
import withPriceFormat from '../hoc/withPriceFormat'
import { fetchSearch } from '../redux/reducers/searchReducer'

const styles = {
    inputError: {
        marginTop: '10px',
        paddingLeft: '20px',
        color: 'red',
        fontSize: 13,
        fontStyle: 'italic'
    }
}

export default function PopupSearch() {


    let { form, error, inputChange, submit } = useFormValidate({
        input: ''
    }, {
        rule: {
            input: { required: true }
        },
        message: {
            input: {
                required: 'Vui lòng nhập từ khoá cần tìm kiếm'
            }
        }
    })

    const search = useSelector(state => state.search)

    let dispatch = useDispatch()

    function _btnSubmit() {
        let error = submit()

        if (Object.keys(error).length === 0) {
            dispatch(fetchSearch(form.input))
        }
    }

    function _keyPress(e) {
        if(e.which === 13) {
            _btnSubmit()
        }
    }

    return reactDom.createPortal(
        <div className="modal fixed-right fade" id="modalSearch" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-vertical" role="document">
                <div className="modal-content">
                    {/* Close */}
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fe fe-x" aria-hidden="true" />
                    </button>
                    {/* Header*/}
                    <div className="modal-header line-height-fixed font-size-lg">
                        <strong className="mx-auto">Search Products</strong>
                    </div>
                    {/* Body: Form */}
                    <div className="modal-body">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="modalSearchCategories">Categories:</label>
                            <select className="custom-select" id="modalSearchCategories">
                                <option selected>All Categories</option>
                                <option>Women</option>
                                <option>Men</option>
                                <option>Kids</option>
                            </select>
                        </div>
                        <div className="input-group input-group-merge">
                            <input className="form-control" type="search" placeholder="Search" name="input" value={form.input} onKeyPress={_keyPress} onChange={inputChange} />
                            <div className="input-group-append" >
                                <button className="btn btn-outline-border" type="submit" onClick={_btnSubmit}>
                                    <i className="fe fe-search" />
                                </button>
                            </div>
                        </div>
                        {
                            error.input && <p className="text-error" style={styles.inputError}>{error.input}</p>
                        }
                    </div>
                    {/* Body: Results (add `.d-none` to disable it) */}
                    <div className="modal-body border-top font-size-sm">
                        {/* Heading */}
                        <p>Search Results:</p>
                        {/* Items */}
                        {
                            search.list.map(e => <React.Fragment key={e._id}>{withPriceFormat(SearchItem, e)}</React.Fragment>)
                        }
                        {/* Button */}
                        <Link onClick={() => document.getElementById('modalSearch').dispatchEvent(new Event('click'))} className="btn btn-link px-0 text-reset" to={`/catalog?search=${form.input}`}>
                            View All <i className="fe fe-arrow-right ml-2" />
                        </Link>
                    </div>
                    {/* Body: Empty (remove `.d-none` to disable it) */}
                    <div className="d-none modal-body">
                        {/* Text */}
                        <p className="mb-3 font-size-sm text-center">
                            Nothing matches your search
              </p>
                        <p className="mb-0 font-size-sm text-center">
                            😞
              </p>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('root2')
    )
}


function SearchItem({ name, images, price_text }) {
    return (
        <div className="row align-items-center position-relative mb-5">
            <div className="col-4 col-md-3">
                {/* Image */}
                <img className="img-fluid" src={images?.[0]?.medium_url} alt="..." />
            </div>
            <div className="col position-static">
                {/* Text */}
                <p className="mb-0 font-weight-bold">
                    <Link onClick={() => document.getElementById('modalSearch').dispatchEvent(new Event('click'))} className="stretched-link text-body" to="/product-detail">{name}</Link> <br />
                    <span className="text-muted">{price_text}₫</span>
                </p>
            </div>
        </div>
    )
}