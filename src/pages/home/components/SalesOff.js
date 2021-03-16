import React from 'react'
import { Link } from 'react-router-dom'

export default function SalesOff({day, hours, minutes, seconds}) {

    return (
        <section className="py-13 bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-4.jpg)' }}>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-12 col-md-8 col-lg-6">
                        {/* Heading */}
                        <h3 className="mb-7">
                            Get -50% from <br />Summer Collection
                        </h3>
                        {/* Counter */}
                        <div className="d-flex mb-9" data-countdown data-date="Jan 5, 2021 15:37:25">
                            <div className="text-center">
                                <div className="font-size-h1 font-weight-bolder text-primary" data-days>{day.toString().padStart(2, '0')}</div>
                                <div className="heading-xxs text-muted">Days</div>
                            </div>
                            <div className="px-1 px-md-4">
                                <div className="font-size-h2 font-weight-bolder text-primary">:</div>
                            </div>
                            <div className="text-center">
                                <div className="font-size-h1 font-weight-bolder text-primary" data-hours>{hours.toString().padStart(2, '0')}</div>
                                <div className="heading-xxs text-muted">Hours</div>
                            </div>
                            <div className="px-1 px-md-4">
                                <div className="font-size-h2 font-weight-bolder text-primary">:</div>
                            </div>
                            <div className="text-center">
                                <div className="font-size-h1 font-weight-bolder text-primary" data-minutes>{minutes.toString().padStart(2, '0')}</div>
                                <div className="heading-xxs text-muted">Minutes</div>
                            </div>
                            <div className="px-1 px-md-4">
                                <div className="font-size-h2 font-weight-bolder text-primary">:</div>
                            </div>
                            <div className="text-center">
                                <div className="font-size-h1 font-weight-bolder text-primary" data-seconds>{seconds.toString().padStart(2, '0')}</div>
                                <div className="heading-xxs text-muted">Seconds</div>
                            </div>
                        </div>
                        {/* Button */}
                        <Link className="btn btn-dark" to="/catalog">
                            Shop Now <i className="fe fe-arrow-right ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
