import InputGroup from 'components/InputGroup';
import useFormValidate from 'core/hook/useValidateForm';
import React from 'react'

export default function Step2() {

    let yearNow = new Date().getFullYear();

    let { form, error, inputChange, submit } = useFormValidate({
        payment_card_number: '',
        payment_card_name: '',
        payment_card_month: '',
        payment_card_year: '',
        payment_card_cvv: '',
    }, {
        rule: {
            payment_card_number: {
                required: true
            },
            payment_card_name: {
                required: true
            },
            payment_card_month: {
                required: true
            },
            payment_card_year: {
                required: true
            },
            payment_card_cvv: {
                required: true
            }
        }
    })

    function _addPaymentMethod() {
        let error = submit()
    }

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
                    <div className="form-group">
                        <label className="sr-only" htmlFor="paymentMonth">Month</label>
                        <select className="custom-select" id="paymentMonth" name="payment_card_month" inputChange={inputChange} error={error}>
                            <option selected disabled value>Month *</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="paymentCardYear">Year</label>
                        <select className="custom-select" id="paymentCardYear" required>
                            <option selected disabled value>Year *</option>
                            {
                                [].map.bind([...Array(50)])((e, i) => <option value={i + yearNow} key={i}>{yearNow - i}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="form-group">
                        <div className="input-group input-group-merge">
                            <input className="form-control" id="paymentCardCVV" type="text" placeholder="CVV *" required />
                            <div className="input-group-append">
                                <span className="input-group-text" data-toggle="popover" data-placement="top" data-trigger="hover" data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards." data-original-title title>
                                    <i className="fe fe-help-circle" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="defaultPaymentMethod" />
                            <label className="custom-control-label" htmlFor="defaultPaymentMethod">Default payment method</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* Button */}
            <button className="btn btn-dark" type="submit" onClick={_addPaymentMethod}>
                Add Card
            </button>
        </>
    )
}
