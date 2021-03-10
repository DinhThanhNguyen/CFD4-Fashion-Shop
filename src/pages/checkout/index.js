import React from 'react'
import { useSelector } from 'react-redux'
import Features from '../../components/Features'
import useFormValidate from '../../core/hook/useValidateForm'


const styles = {
    inputError: {
        color: 'red',
        fontSize: 13,
        fontStyle: 'italic'
    }
}

export default function Checkout() {

    const state = useSelector(state => state)

    let { cart, auth } = state

    let { form, inputChange, submit, error, setForm } = useFormValidate({
        first_name: '',
        last_name: '',
        email: '',
        company: '',
        country: '',
        address_line1: '',
        address_line2: '',
        city: '',
        postcode: '',
        phone: '',
        shipping_option: cart.shipping_option,
        shipping_diff_address: false,
        ship_country: '',
        ship_address1: '',
        ship_address2: '',
        ship_city: '',
        ship_post_code: '',

        payment_option: cart.payment_option,
        payment_card_number: '',
        payment_card_name: '',
        payment_card_month: '',
        payment_card_year: '',
        payment_card_cvv: '',
        note: '',

    }, {
        rule: {
            first_name: { required: true },
            last_name: { required: true },
            email: { required: true, pattern: 'email' },
            phone: { required: true },
            city: { required: true },
            // shipping: { required: true },
            // payment_option: { required: true },

            ship_country: { required: true },
            ship_city: { required: true },
            ship_post_code: { required: true },

            payment_card_number: { required: true },
            payment_card_name: { required: true },
            payment_card_cvv: { required: true },


        },
        message: {}
    })

    // let shipping_price = new Intl.NumberFormat('vn').format(cart.shipping_price)

    function _btnPlaceOrderClick() {
        let error
        if (form.shipping_diff_address) {
            error = submit()
        } else {
            error = submit({ exclude: { ship_country: 1, ship_city: 1, ship_post_code: 1 } });
        }

        if (Object.keys(error).length === 0) {
            alert('Đặt hàng thành công')
        }

    }

    return (
        <>
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* Heading */}
                            <h3 className="mb-4">Checkout</h3>
                            {/* Subheading */}
                            <p className="mb-10">
                                Already have an account? <a className="font-weight-bold text-reset" href="#!">Click here to login</a>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-7">
                            {/* Form */}
                            <form>
                                {/* Heading */}
                                <h6 className="mb-7">Billing Details</h6>
                                {/* Billing details */}
                                <div className="row mb-9">
                                    <div className="col-12 col-md-6">
                                        {/* First Name */}
                                        <InputGroup name="first_name" title="First Name *" form={form} inputChange={inputChange} error={error} />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* Last Name */}
                                        <InputGroup name="last_name" title="Last Name *" form={form} inputChange={inputChange} error={error} />
                                    </div>
                                    <div className="col-12">
                                        {/* Email */}
                                        <InputGroup name="email" title="Email *" form={form} inputChange={inputChange} error={error} />
                                    </div>
                                    <div className="col-12">
                                        {/* Company Name */}
                                        <InputGroup name="company" title="Company name" form={form} inputChange={inputChange} error={error} />
                                    </div>
                                    <div className="col-12">
                                        {/* Country */}
                                        <InputGroup name="country" title="Country *" form={form} inputChange={inputChange} error={error} />
                                    </div>
                                    <div className="col-12">
                                        {/* Address Line 1 */}
                                        <InputGroup name="address_line1" title="Address Line 1 *" form={form} inputChange={inputChange} error={error} />
                                    </div>
                                    <div className="col-12">
                                        {/* Address Line 2 */}
                                        <InputGroup name="address_line2" title="Address Line 2 *" form={form} inputChange={inputChange} error={error} />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* Town / City */}
                                        <InputGroup name="city" title="Town / City *" form={form} inputChange={inputChange} error={error} />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* ZIP / Postcode */}
                                        <InputGroup name="postcode" title="ZIP / Postcode *" form={form} inputChange={inputChange} error={error} />
                                    </div>
                                    <div className="col-12">
                                        {/* Mobile Phone */}
                                        <InputGroup name="phone" title="Mobile Phone *" form={form} inputChange={inputChange} error={error} />
                                    </div>
                                </div>
                                {/* Heading */}
                                <h6 className="mb-7">Shipping Details</h6>
                                {/* Shipping details */}
                                <div className="table-responsive mb-6">
                                    <table className="table table-bordered table-sm table-hover mb-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" id="checkoutShippingStandard" name="shipping" type="radio" />
                                                        <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingStandard">
                                                            Standard Shipping
                                    </label>
                                                    </div>
                                                </td>
                                                <td>Delivery in 5 - 7 working days</td>
                                                <td>$8.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" id="checkoutShippingExpress" name="shipping" type="radio" />
                                                        <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingExpress">
                                                            Express Shipping
                                    </label>
                                                    </div>
                                                </td>
                                                <td>Delivery in 3 - 5 working days</td>
                                                <td>$12.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" id="checkoutShippingShort" name="shipping" type="radio" />
                                                        <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingShort">
                                                            1 - 2 Shipping
                                    </label>
                                                    </div>
                                                </td>
                                                <td>Delivery in 1 - 2 working days</td>
                                                <td>$18.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" id="checkoutShippingFree" name="shipping" type="radio" />
                                                        <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingFree">
                                                            Free Shipping
                                    </label>
                                                    </div>
                                                </td>
                                                <td>Living won't the He one every subdue
                                                meat replenish face was you morning
                                firmament darkness.</td>
                                                <td>$0.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Address */}
                                <div className="mb-9">
                                    {/* Checkbox */}
                                    <div className="custom-control custom-checkbox">
                                    <input className="custom-control-input" id="checkoutShippingAddress" name="shipping_diff_address" type="checkbox" checked={form.shipping_diff_address} onChange={inputChange} />
                                    <label className="custom-control-label font-size-sm" data-toggle="collapse" data-target="#checkoutShippingAddressCollapse" htmlFor="checkoutShippingAddress">
                                        Ship to a different address?
                                    </label>
                                </div>
                                    {/* Collapse */}
                                    <div className="collapse" id="checkoutShippingAddressCollapse">
                                        <div className="row mt-6">
                                            <div className="col-12">
                                                {/* Country */}
                                                <InputGroup name="ship_country" title="Country *" form={form} inputChange={inputChange} error={error} />
                                            </div>
                                            <div className="col-12">
                                                {/* Address Line 1 */}
                                                <InputGroup name="ship_address1" title="Address Line 1 *" form={form} inputChange={inputChange} error={error} />
                                            </div>
                                            <div className="col-12">
                                                {/* Address Line 2 */}
                                                <InputGroup name="ship_address2" title="Address Line 2 *" form={form} inputChange={inputChange} error={error} />
                                            </div>
                                            <div className="col-6">
                                                {/* Town / City */}
                                                <InputGroup name="ship_city" title="Town / City *" form={form} inputChange={inputChange} error={error} />
                                            </div>
                                            <div className="col-6">
                                                {/*ZIP / Postcode */}
                                                <InputGroup name="ship_post_code" title="ZIP / Postcode *" form={form} inputChange={inputChange} error={error} />
                                            </div>
                                            <div className="col-12">
                                                {/* Button */}
                                                <button className="btn btn-sm btn-outline-dark" type="submit">
                                                    Save Address
                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Heading */}
                                <h6 className="mb-7">Payment</h6>
                                {/* List group */}
                                <div className="list-group list-group-sm mb-7">
                                    <div className="list-group-item">
                                        {/* Radio */}
                                        <div className="custom-control custom-radio">
                                            {/* Input */}
                                            <input className="custom-control-input" id="checkoutPaymentCard" name="payment" type="radio" data-toggle="collapse" data-action="show" data-target="#checkoutPaymentCardCollapse" />
                                            {/* Label */}
                                            <label className="custom-control-label font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentCard">
                                                Credit Card <img className="ml-2" src="/img/brands/color/cards.svg" alt="..." />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="list-group-item collapse py-0" id="checkoutPaymentCardCollapse">
                                        {/* Form */}
                                        <div className="form-row py-5">
                                            <div className="col-12">
                                                <div className="form-group mb-4">
                                                    <label className="sr-only" htmlFor="checkoutPaymentCardNumber">Card Number</label>
                                                    <input className="form-control form-control-sm" id="checkoutPaymentCardNumber" type="text" placeholder="Card Number *" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group mb-4">
                                                    <label className="sr-only" htmlFor="checkoutPaymentCardName">Name on Card</label>
                                                    <input className="form-control form-control-sm" id="checkoutPaymentCardName" type="text" placeholder="Name on Card *" required />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group mb-md-0">
                                                    <label className="sr-only" htmlFor="checkoutPaymentMonth">Month</label>
                                                    <select className="custom-select custom-select-sm" id="checkoutPaymentMonth">
                                                        <option>January</option>
                                                        <option>February</option>
                                                        <option>March</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group mb-md-0">
                                                    <label className="sr-only" htmlFor="checkoutPaymentCardYear">Year</label>
                                                    <select className="custom-select custom-select-sm" id="checkoutPaymentCardYear">
                                                        <option>2017</option>
                                                        <option>2018</option>
                                                        <option>2019</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="input-group input-group-merge">
                                                    <input className="form-control form-control-sm" id="checkoutPaymentCardCVV" type="text" placeholder="CVV *" required />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text" data-toggle="popover" data-placement="top" data-trigger="hover" data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards.">
                                                            <i className="fe fe-help-circle" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item">
                                        {/* Radio */}
                                        <div className="custom-control custom-radio">
                                            {/* Input */}
                                            <input className="custom-control-input" id="checkoutPaymentPaypal" name="payment" type="radio" data-toggle="collapse" data-action="hide" data-target="#checkoutPaymentCardCollapse" />
                                            {/* Label */}
                                            <label className="custom-control-label font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentPaypal">
                                                <img src="/img/brands/color/paypal.svg" alt="..." />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* Notes */}
                                <textarea className="form-control form-control-sm mb-9 mb-md-0 font-size-xs" rows={5} placeholder="Order Notes (optional)" defaultValue={""} />
                            </form>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
                            {/* Heading */}
                            <h6 className="mb-7">Order Items (2)</h6>
                            {/* Divider */}
                            <hr className="my-7" />
                            {/* List group */}
                            <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">
                                <li className="list-group-item">
                                    <div className="row align-items-center">
                                        <div className="col-4">
                                            {/* Image */}
                                            <a href="product.html">
                                                <img src="/img/products/product-6.jpg" alt="..." className="img-fluid" />
                                            </a>
                                        </div>
                                        <div className="col">
                                            {/* Title */}
                                            <p className="mb-4 font-size-sm font-weight-bold">
                                                <a className="text-body" href="product.html">Cotton floral print Dress</a> <br />
                                                <span className="text-muted">$40.00</span>
                                            </p>
                                            {/* Text */}
                                            <div className="font-size-sm text-muted">
                                                Size: M <br />
                                Color: Red
                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row align-items-center">
                                        <div className="col-4">
                                            {/* Image */}
                                            <a href="product.html">
                                                <img src="/img/products/product-10.jpg" alt="..." className="img-fluid" />
                                            </a>
                                        </div>
                                        <div className="col">
                                            {/* Title */}
                                            <p className="mb-4 font-size-sm font-weight-bold">
                                                <a className="text-body" href="product.html">Suede cross body Bag</a> <br />
                                                <span className="text-muted">$49.00</span>
                                            </p>
                                            {/* Text */}
                                            <div className="font-size-sm text-muted">
                                                Color: Brown
                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* Card */}
                            <div className="card mb-9 bg-light">
                                <div className="card-body">
                                    <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                                        <li className="list-group-item d-flex">
                                            <span>Subtotal</span> <span className="ml-auto font-size-sm">$89.00</span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span>Tax</span> <span className="ml-auto font-size-sm">$00.00</span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span>Shipping</span> <span className="ml-auto font-size-sm">$8.00</span>
                                        </li>
                                        <li className="list-group-item d-flex font-size-lg font-weight-bold">
                                            <span>Total</span> <span className="ml-auto">$97.00</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Disclaimer */}
                            <p className="mb-7 font-size-xs text-gray-500">
                                Your personal data will be used to process your order, support
                                your experience throughout this website, and for other purposes
                                described in our privacy policy.
                    </p>
                            {/* Button */}
                            <button className="btn btn-block btn-dark" onClick={_btnPlaceOrderClick}>
                                Place Order
                    </button>
                        </div>
                    </div>
                </div>
            </section>
            <Features />
        </>
    )
}

function InputGroup({ form, name, title, type = "text", placeholder, inputChange, error, className }) {
    if (!placeholder) placeholder = title

    let randomID = 'id-' + (Math.round(Math.random() * 100000))

    return (
        <div className="form-group">
            <label htmlFor={randomID}>{title}</label>
            <input className="form-control form-control-sm" id={randomID} name={name} type={type} placeholder={placeholder} value={form[name]} onChange={inputChange} />
            {
                error[name] && <p className="error-text" style={styles.inputError}>{error[name]}</p>
            }
        </div>
    )
}