import { combineReducers } from 'redux'
import authReducer from './authReducer'
import productReducers from './productReducers'
import cartReducers from './cartReducers'
import searchReducer from './searchReducer'

export default combineReducers({
    auth: authReducer,
    product: productReducers,
    cart: cartReducers,
    search: searchReducer
})