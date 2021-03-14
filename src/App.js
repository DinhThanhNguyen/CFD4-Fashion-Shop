import { Route, Switch } from 'react-router-dom'
import Home from '../src/pages/home'
import errorPage from '../src/pages/404Page'
import About from './pages/about'
import blogPost from './pages/blogPost'
import Footer from './components/Footer'
import shippingAndReturns from './pages/shippingAndReturns'
import storeLocator from './pages/storeLocator'
import FAQ from './pages/FAQ'
import shoppingCart from './pages/shoppingCart'
import Checkout from './pages/checkout'
import Blog from './pages/blogPost/components/Blog'
import contactUs from './pages/contactUs'
import Auth from './pages/auth'
import Header from './components/Header/index'
import AppProvider from './core/AppProvider'
import reducers from './redux/reducers'
import Account from './pages/account'
import PrivateRoute from './core/PrivateRoute'
import Catalog from './pages/catalog'
import ModalCart from './components/ModalCart'
import './assets/custom.scss'
import ProductDetail from './pages/productDetail'
import ComingSoon from './pages/comingSoon'
import WithCountDown from './hoc/withCountDown'
import Search from './components/Search'

function App() {
  return <AppProvider reducers={reducers}>
  <Header />
  <Switch>
    <Route path="/faq" component={FAQ} />
    <Route path="/product-detail" component={ProductDetail} />
    <PrivateRoute path="/account" component={Account} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/auth" component={Auth} />
    <Route path="/catalog" component={Catalog} />
    <Route path="/shopping-cart" component={shoppingCart} />
    <Route path="/shipping-and-returns" component={shippingAndReturns} />
    <Route path="/store-locator" component={storeLocator} />
    <Route path="/coming-soon" component={() => <WithCountDown WapperComponent={ComingSoon} timeCountDown={((1*24)*60*60) + 59} />} />
    <Route path="/blog-post" component={blogPost} />
    <Route path="/blog" component={Blog} />
    <Route path="/contact-us" component={contactUs} />
    <Route path="/about" component={About} />
    <Route path="/" exact component={Home} />
    <Route path="/" component={errorPage} />
  </Switch>
  <Footer />
  <ModalCart />
  <Search />
  </AppProvider>
}

export default App;
