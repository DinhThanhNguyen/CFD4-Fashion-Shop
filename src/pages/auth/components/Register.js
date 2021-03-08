import React from 'react'

export default function Register() {
    return (
        <div className="card-body">
            {/* Heading */}
            <h6 className="mb-7">New Customer</h6>
            {/* Form */}
            <form>
                <div className="row">
                    <div className="col-12">
                        {/* Email */}
                        <div className="form-group">
                            <label className="sr-only" htmlFor="registerFirstName">
                                First Name *
                          </label>
                            <input className="form-control form-control-sm" id="registerFirstName" type="text" placeholder="First Name *" required />
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Email */}
                        <div className="form-group">
                            <label className="sr-only" htmlFor="registerLastName">
                                Last Name *
                          </label>
                            <input className="form-control form-control-sm" id="registerLastName" type="text" placeholder="Last Name *" required />
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Email */}
                        <div className="form-group">
                            <label className="sr-only" htmlFor="registerEmail">
                                Email Address *
                          </label>
                            <input className="form-control form-control-sm" id="registerEmail" type="email" placeholder="Email Address *" required />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <div className="form-group">
                            <label className="sr-only" htmlFor="registerPassword">
                                Password *
                          </label>
                            <input className="form-control form-control-sm" id="registerPassword" type="password" placeholder="Password *" required />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <div className="form-group">
                            <label className="sr-only" htmlFor="registerPasswordConfirm">
                                Confirm Password *
                          </label>
                            <input className="form-control form-control-sm" id="registerPasswordConfirm" type="password" placeholder="Confrm Password *" required />
                        </div>
                    </div>
                    <div className="col-12 col-md-auto">
                        {/* Link */}
                        <div className="form-group font-size-sm text-muted">
                            By registering your details, you agree with our Terms &amp; Conditions,
                            and Privacy and Cookie Policy.
                        </div>
                    </div>
                    <div className="col-12 col-md">
                        {/* Newsletter */}
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" id="registerNewsletter" type="checkbox" />
                                <label className="custom-control-label" htmlFor="registerNewsletter">
                                    Sign me up for the Newsletter!
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Button */}
                        <button className="btn btn-sm btn-dark" type="submit">
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
