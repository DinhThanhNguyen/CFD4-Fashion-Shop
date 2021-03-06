import userApi from 'api/userApi'
import useFormValidate from 'core/hook/useValidateForm'
import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router'
import Step1 from './Components/Step1'
import Step2 from './Components/Step2'

export default function Payment() {

    let { _id } = useRouteMatch().params
    let history = useHistory()

    let [state, setState] = useState({
        errorMessage: '',
        step: _id ? 2 : 1
    })

    useEffect(async () => {
        if (_id) {
            let result = await userApi.getPayment(_id)
            if (result.data) {
                form.setForm(result.data)
            }
        }
    }, [])

    function nextStep() {
        setState({
            ...state,
            step: state.step + 1
        })
    }

    let form = useFormValidate({
        payment_option: 'credit_card',
        payment_card_number: '',
        payment_card_name: '',
        payment_card_month: '',
        payment_card_year: '',
        payment_card_cvv: '',
        default: false
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

    function _btnAddPayment() {
        let error = form.submit()
        if (Object.keys(error).length === 0) {
            userApi.addPayment(form.form)
            .then(res => {
                if (res.data) {
                    history.push('/account/payment')
                }
                else {
                    setState({
                        ...state,
                        errorMessage: res.error
                    })
                }
            })
        }
    }

    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Form */}
            {/* Heading */}
            <h6 className="mb-7">
                Add Debit / Credit Card
            </h6>
            {/* Form */}
            {
                state.errorMessage && <p className="error-text">{state.errorMessage}</p>
            }
            {
                state.step === 1 && <Step1 nextStep={nextStep} formValidate={form} />
            }
            {
                state.step === 2 && <Step2 formValidate={form} _btnAddPayment={_btnAddPayment} />
            }
        </div>
    )
}
