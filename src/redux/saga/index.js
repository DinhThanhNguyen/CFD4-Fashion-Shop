import { takeLatest } from 'redux-saga/effects'
import { AUTH } from 'redux/reducers/authReducer'
import { CART } from 'redux/reducers/cartReducers'
import { cartUpdate, logoutClearCart, userLoginGetCart} from './cartSaga'

export default function* saga() {
    yield takeLatest(AUTH.logout, logoutClearCart)

    yield takeLatest(AUTH.login, userLoginGetCart)

    yield takeLatest([CART.addCart, CART.increment, CART.decrement, CART.removeCart], cartUpdate)
}
