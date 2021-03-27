import InputGroup from 'components/InputGroup';
import SelectGroup from 'components/SelectGroup';
import React from 'react'

export default function Step2({ formValidate, _btnAddPayment }) {

    let yearNow = new Date().getFullYear();

    let { form, inputChange, error } = formValidate



    return (
        <>
            <div className="row">
                <div className="col-12 col-md-6">
                    <InputGroup name="payment_card_number" title="Card Number *" form={form} inputChange={inputChange} error={error} />
                </div>
                <div className="col-12 col-md-6">
                    <InputGroup name="payment_card_name" title="Name on Card *" form={form} inputChange={inputChange} error={error} />
                </div>
                <div className="col-12">
                    {/* Label */}
                    <label>
                        Expiry Date *
                    </label>
                </div>
                <div className="col-12 col-md-4">
                    <SelectGroup name="payment_card_month" title="Month *" form={form} inputChange={inputChange} error={error}

                        options={[...Array(12)].map((e, i) =>  i + 1)}
                    />
                </div>
                <div className="col-12 col-md-4">
                    <SelectGroup
                        name="payment_card_year" title="Year *" form={form} inputChange={inputChange} error={error}
                        options={[...Array(50)].map((e, i) => yearNow + i)}
                    />
                </div>
                <div className="col-12 col-md-4">
                    <div className="form-group">
                        <div className="input-group input-group-merge">
                            <input className="form-control" id="paymentCardCVV"  type="text" placeholder="CVV *" value={form.payment_card_cvv} name="payment_card_cvv" onChange={inputChange} />
                            <div className="input-group-append">
                                <span className="input-group-text" data-toggle="popover" data-placement="top" data-trigger="hover" data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards." data-original-title title>
                                    <i className="fe fe-help-circle" />
                                </span>
                            </div>
                        </div>
                    </div>
                    {
                        error.payment_card_cvv && <p className="error-text">{error.payment_card_cvv}</p>
                    }
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="defaultPaymentMethod" form={form.default} onChange={inputChange} name="default" />
                            <label className="custom-control-label" htmlFor="defaultPaymentMethod">Default payment method</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* Button */}
            <button className="btn btn-dark" type="submit" onClick={_btnAddPayment}>
                Add Card
            </button>
        </>
    )
}
