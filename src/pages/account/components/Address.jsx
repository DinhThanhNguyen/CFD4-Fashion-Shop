import userApi from 'api/userApi'
import InputGroup from 'components/InputGroup'
import useFormValidate from 'core/hook/useValidateForm'
import React, { useEffect } from 'react'
import { useHistory, useRouteMatch } from 'react-router'

export default function Address() {

    let history = useHistory()

    let { _id } = useRouteMatch().params

    useEffect(async () => {
        let form = await userApi.getAddress(_id)
        if (form.data) {
            setForm(form.data)
        }
    }, [])



    let { form, error, inputChange, submit, setForm } = useFormValidate({
        first_name: '',
        last_name: '',
        username: '',
        company: '',
        country: '',
        address_line1: '',
        address_line2: '',
        city: '',
        zip: '',
        phone: '',
        default: false
    }, {
        rule: {
            first_name: {
                required: true
            },
            last_name: {
                required: true
            },
            username: {
                required: true,
                pattern: 'email'
            },
            country: {
                required: true
            },
            address_line1: {
                required: true
            },
            city: {
                required: true
            },
            zip: {
                required: true
            },
            phone: {
                required: true,
                pattern: 'phone'
            }
        }
    })

    async function _btnAddress() {
        let error = submit()
        if (Object.keys(error).length === 0) {
            await userApi.addAddress(form)
            history.push('/account/address')
        }
    }


    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Heading */}
            <h6 className="mb-7">
                Add Address
            </h6>
            {/* Form */}
            <div className="row">
                <div className="col-12 col-md-6">
                    <InputGroup name="first_name" title="First Name *" form={form} inputChange={inputChange} error={error} />
                </div>
                <div className="col-12 col-md-6">
                    <InputGroup name="last_name" title="Last Name *" form={form} inputChange={inputChange} error={error} />
                </div>
                <div className="col-12">
                    <InputGroup name="username" title="Email Address *" form={form} inputChange={inputChange} error={error} />
                </div>
                <div className="col-12">
                    <InputGroup name="company" title="Company Name" form={form} inputChange={inputChange} error={error} />
                </div>
                <div className="col-12">
                    <InputGroup name="country" title="Country *" form={form} inputChange={inputChange} error={error} />
                </div>
                <div className="col-12">
                    <InputGroup name="address_line1" title="Address Line 1 *" form={form} inputChange={inputChange} error={error} />
                </div>
                <div className="col-12">
                    <InputGroup name="address_line2" title="Address Line 2" form={form} inputChange={inputChange} error={error} />
                </div>
                <div className="col-12 col-md-6">
                    <InputGroup name="city" title="Town / City *" form={form} inputChange={inputChange} error={error} />
                </div>
                <div className="col-12 col-md-6">
                    <InputGroup name="zip" title="ZIP / Postcode *" form={form} inputChange={inputChange} error={error} />
                </div>
                <div className="col-12">
                    <InputGroup name="phone" title="Mobile Phone *" form={form} inputChange={inputChange} error={error} />
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="defaultDeliveryAddress" form={form.default} onChange={inputChange} name="default" />
                            <label className="custom-control-label" htmlFor="defaultDeliveryAddress">Default delivery address</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* Button */}
            <button className="btn btn-dark" type="submit" onClick={_btnAddress}>
                Add Address
            </button>
        </div>
    )
}
