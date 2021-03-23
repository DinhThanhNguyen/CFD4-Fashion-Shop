import storeLocatorApi from 'api/storeLocatorApi'
import Breadcrumb from 'components/Breadcrumb'
import React, { useEffect, useState } from 'react'
import StoreLocatorItem from './components/storeLocatorItem'

export default function StoreLocator() {

    let [storeLocator, setStoreLocator] = useState([])

    useEffect(() => {
        storeLocatorApi.map()
            .then(res => {
                setStoreLocator(res.data)
            })
    }, [])

    let [iframeSrc, setIframeSrc] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2174.327152000161!2d106.72092788657216!3d10.79412256949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529664ed42713%3A0x282b57a24209b2b5!2sVinhomes%20Park%206!5e0!3m2!1svi!2s!4v1615864131875!5m2!1svi!2s')

    function storeClick(i) {
        setIframeSrc(storeLocator[i].iframe_google_map)
    }

    return (
        <>
            <Breadcrumb
                list={[
                    {
                        title: 'Home',
                        link: '/'
                    }, {
                        title: 'Contact Us',
                        link: '/contact-us'
                    }, {
                        title: 'Store Locator',
                        link: '/store-locator'
                    }
                ]}
            />
            <section className="py-12 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-4">
                            {/* Card */}
                            <div className="card card-xl h-md-0 minh-md-100 mb-10 mb-md-0 shadow" style={{ overflow: "auto" }}>
                                {
                                    storeLocator.map((e, i) => <StoreLocatorItem onClick={storeClick.bind(null, i)} key={i} {...e} />)
                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-8">
                            {/* Map */}
                            <div className="embed-responsive embed-responsive-4by3">
                                <div className="embed-responsive-item" data-toggle="map" data-markers="[{&quot;position&quot;: [53.5508748,9.9985808], &quot;info&quot;: &quot;<div class=\&quot;card card-sm\&quot;><div class=\&quot;card-body\&quot;><p class=\&quot;mb-2 font-weight-bold\&quot;>Baldwin Hills Crenshaw Plaza</p><p class=\&quot;mb-3 text-gray-500\&quot;>Mönckebergstrasse 11 20095 Hamburg, Germany</p><p class=\&quot;mb-1 font-weight-bold\&quot;>Phone:</p><p class=\&quot;mb-3 text-grat-500\&quot;>6-146-389-574</p><p class=\&quot;mb-1 font-weight-bold\&quot;>Store Hours:</p><p class=\&quot;mb-0 text-grat-500\&quot;>10 am - 10 pm EST, 7 days a week</p></div>&quot;}, {&quot;position&quot;: [45.4646477,9.1935083], &quot;info&quot;: &quot;<div class=\&quot;card card-sm\&quot;><div class=\&quot;card-body\&quot;><p class=\&quot;mb-2 font-weight-bold\&quot;>Stonewood Center</p><p class=\&quot;mb-3 text-gray-500\&quot;>Largo Corsia Dei Servi 3 20122 Milan, Italy</p><p class=\&quot;mb-1 font-weight-bold\&quot;>Phone:</p><p class=\&quot;mb-3 text-grat-500\&quot;>6-146-389-574</p><p class=\&quot;mb-1 font-weight-bold\&quot;>Store Hours:</p><p class=\&quot;mb-0 text-grat-500\&quot;>10 am - 10 pm EST, 7 days a week</p></div>&quot;}, {&quot;position&quot;: [53.332769,-6.2663917], &quot;info&quot;: &quot;<div class=\&quot;card card-sm\&quot;><div class=\&quot;card-body\&quot;><p class=\&quot;mb-2 font-weight-bold\&quot;>Shalyapin Palace</p><p class=\&quot;mb-3 text-gray-500\&quot;>Block 5, 5th Floor, Harcourt Centre, Harcourt Road Dublin, Ireland</p><p class=\&quot;mb-1 font-weight-bold\&quot;>Phone:</p><p class=\&quot;mb-3 text-grat-500\&quot;>6-146-389-574</p><p class=\&quot;mb-1 font-weight-bold\&quot;>Store Hours:</p><p class=\&quot;mb-0 text-grat-500\&quot;>10 am - 10 pm EST, 7 days a week</p></div>&quot;}]">
                                    <iframe src={iframeSrc} allowfullscreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
