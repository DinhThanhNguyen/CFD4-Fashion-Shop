import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import errorPage from './pages/404Page'
import About from './pages/about'
import blogPost from './pages/blogPost'
import Footer from './components/Footer'
import shippingAndReturns from './pages/shippingAndReturns'
import StoreLocator from './pages/storeLocator'
import FAQ from './pages/FAQ'
import Checkout from './pages/checkout'
import ContactUs from './pages/contactUs'
import Auth from './pages/auth'
import Header from './components/Header/index'
import AppProvider from './core/AppProvider'
import reducers from './redux/reducers'
import Account from './pages/account'
import PrivateRoute from './core/PrivateRoute'
import Catalog from './pages/catalog'
import PopupCart from './components/PopupCart'
import './assets/custom.scss'
import ComingSoon from './pages/comingSoon'
import WithCountDown from './hoc/withCountDown'
import PopupSearch from './components/PopupSearch'
import PopupSizeChart from './components/PopupSizeChart'
import ShoppingCart from './pages/shoppingCart'
import Blog from 'pages/blog'
import ProductDetail from 'pages/productDetail'
import saga from './redux/saga'
import PopupProduct from 'components/PopupProduct'
import Horizontal from 'components/Horizontal'
import OrderCompleted from 'pages/orderCompleted'
import { setTranslate } from "core/Translate";
import vi from './translate/vi'
import en from './translate/en'

setTranslate({
  default: localStorage.getItem('lang') || 'vi',
  vi, en,
  env: 'test'
})

function App() {
  return <AppProvider reducers={reducers} saga={saga}>
    <Header />
    <Switch>
      <Route path="/faq" component={FAQ} />
      <Route path="/product/:slug" component={ProductDetail} />
      <PrivateRoute path="/account" component={Account} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/auth" component={Auth} />
      <Route path="/catalog/:slug?" component={Catalog} />
      <Route path="/shopping-cart" component={ShoppingCart} />
      <Route path="/shipping-and-returns" component={shippingAndReturns} />
      <Route path="/store-locator" component={StoreLocator} />
      <Route path="/coming-soon" component={() => <WithCountDown WapperComponent={ComingSoon} timeCountDown={((1 * 24) * 60 * 60) + 59} />} />
      <Route path="/blog-post" component={blogPost} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/order-completed/:_id" component={OrderCompleted} />
      <Route path="/about" component={About} />
      <Route path="/" exact component={Home} />
      <Route path="/" component={errorPage} />
    </Switch>
    <Footer />
    <PopupCart />
    <PopupSearch />
    <PopupProduct />
    <PopupSizeChart />
    <Horizontal />
  </AppProvider>
}

export default App;
