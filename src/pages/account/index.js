import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import address from './components/Address';
import addressList from './components/AddressLish';
import payment from './components/Payment';
import paymentList from './components/PaymentList';
import PersonalInfor from './components/PersonalInfor';
import SlideBar from './components/SlideBar'
import widhlist from './components/Widhlist';
import order from './components/Order';
import orderList from './components/AddressLish';

export default function Account() {

    let match = useRouteMatch();
    return (
        <section className="pt-7 pb-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* Heading */}
                        <h3 className="mb-10">My Account</h3>
                    </div>
                </div>
                <div className="row">
                    <SlideBar />
                    <Switch>
                        <Route path={`${match.path}/order`} exact component={orderList} />
                        <Route path={`${match.path}/order/:id`} component={order} />
                        <Route path={`${match.path}/widhlist`} component={widhlist} />
                        <Route path={`${match.path}/address`} exact component={addressList} />
                        <Route path={`${match.path}/address/:action`} exact component={address} />
                        <Route path={`${match.path}/payment`} exact component={paymentList} />
                        <Route path={`${match.path}/payment/:action`} component={payment} />
                        <Route path={`${match.path}`} exact component={PersonalInfor} />
                    </Switch>
                </div>
            </div>
        </section>
    )
}
