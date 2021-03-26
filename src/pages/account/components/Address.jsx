import userApi from 'api/userApi'
import InputGroup from 'components/InputGroup'
import useFormValidate from 'core/hook/useValidateForm'
import React from 'react'
import { useHistory } from 'react-router'

export default function Address() {

    let history = useHistory()

    let { form, error, inputChange, submit } = useFormValidate({
        first_name: '',
        last_name: '',
        username: '',
        country: '',
        address_line1: '',
        city: '',
        zip: '',
        phone: ''
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
                required: true
            }
        }
    })

    async function _btnAddress() {
        let error = submit()
        if(Object.keys(error).length === 0) {
            let result = await userApi.addAddress(form)
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
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input className="form-control" id="companyName" type="text" placeholder="Company Name" required />
                    </div>
                </div>
                <div className="col-12">
                    <InputGroup name="country" title="Country *" form={form} inputChange={inputChange} error={error} />
                </div>
                <div className="col-12">
                    <InputGroup name="address_line1" title="Address Line 1 *" form={form} inputChange={inputChange} error={error} />
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <label htmlFor="addressLineTwo">Address Line 2</label>
                        <input className="form-control" id="addressLineTwo" type="text" placeholder="Address Line 2" required />
                    </div>
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
                            <input type="checkbox" className="custom-control-input" id="defaultDeliveryAddress" />
                            <label className="custom-control-label" htmlFor="defaultDeliveryAddress">Default delivery address</label>
                        </div>
                        {/* <div className="custom-control custom-checkbox mb-0">
                            <input type="checkbox" className="custom-control-input" id="defaultShippingAddress" />
                            <label className="custom-control-label" htmlFor="defaultShippingAddress">Default shipping address</label>
                        </div> */}
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
