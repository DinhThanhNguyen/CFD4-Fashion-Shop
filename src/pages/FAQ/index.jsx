import Breadcrumb from 'components/Breadcrumb'
import React, { useEffect, useState } from 'react'
import faqApi from '../../api/faqApi'
import FaqGroup from './components/FaqGroup'

export default function FAQ() {

    let [list, setList] = useState([])

    useEffect(() => {
        faqApi.faq()
            .then(res => {
                setList(res)
            })
    }, [])


    return (
        <>
            <Breadcrumb
                list={[
                    {
                        title: 'Home',
                        link: '/'
                    }, {
                        title: 'FAQ',
                        link: '/faq'
                    }
                ]}
            />
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            {/* Heading */}
                            <h3 className="mb-10 text-center">Frequently Asked Questionss</h3>
                            {/* Heading */}
                            {
                                list.map((e, index) => <FaqGroup key={index} {...e} />)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
