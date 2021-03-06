import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import Address from './components/Address';
import PaymentList from './components/PaymentList';
import Payment from './components/Payment/Payment';
import PersonalInfor from './components/PersonalInfor';
import SlideBar from './components/SlideBar'
import OrderList from './components/OrderList';
import Breadcrumb from 'components/Breadcrumb';
import WishList from './components/WishList';
import AddressList from './components/AddressList';
import Order from './components/Order';

export default function Account() {

    let match = useRouteMatch();
    return (
        <>
            <Breadcrumb
                list={[
                    {
                        title: 'Home',
                        link: '/'
                    }, {
                        title: 'My Account',
                        link: '/account'
                    }
                ]}
            />
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
                            <Route path={`${match.path}/address`} exact component={AddressList} />
                            <Route path={`${match.path}/address/:action/:_id?`} exact component={Address} />
                            <Route path={`${match.path}/order`} exact component={OrderList} />
                            <Route path={`${match.path}/order/:_id`} component={Order} />
                            <Route path={`${match.path}/wishlist`} component={WishList} />
                            <Route path={`${match.path}/payment`} exact component={PaymentList} />
                            <Route path={`${match.path}/payment/:action/:_id?`} component={Payment} />
                            <Route path={`${match.path}`} exact component={PersonalInfor} />
                        </Switch>
                    </div>
                </div>
            </section>
        </>
    )
}
