import useFormValidate from 'core/hook/useValidateForm'
import React, { useState } from 'react'
import Step1 from './Components/Step1'
import Step2 from './Components/Step2'

export default function PaymentMethod() {

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

    let [step, setStep] = useState(1)

    function nextStep() {
        setStep(step + 1)
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
                step === 1 && <Step1 nextStep={nextStep} />
            }
            {
                step === 2 && <Step2 />
            }
        </div>
    )
}
