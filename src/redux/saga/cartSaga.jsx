import { call, put, select } from "@redux-saga/core/effects";
import cartApi from "api/cartApi";
import { CartAction } from "redux/reducers/cartReducers";


export function* logoutClearCart() {
    yield put(CartAction.clearCart())
}

export function* cartUpdate(data) {
    const state = yield select()

    yield call(cartApi.create, state.cart)
}

export function* userLoginGetCart() {
    let cart = yield call(cartApi.getCartFromUser)
}