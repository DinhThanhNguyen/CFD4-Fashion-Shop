import Api from 'core/Api'
// import { domain } from './config'


export default {
    login: (data) => {
        return Api.post('login', data)
    },
    register: (data) => {
        return Api.post('register', data)
        // return fetch(`${domain}elearning/v4/register`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // }).then(res => res.json())
    },
    update: (data) => {
        return Api.token().post('update-profile', data)
    },
    addWishList: (data) => {
        return Api.token().post('ecommerce/v1/profile/wishlist', data)
    },
    getWishList: (query) => {
        return Api.token().get(`ecommerce/v1/profile/wishlist${query ? `?${query}` : ''}`)
    },
    removeWistList: (_id) => {
        return Api.token().delete(`ecommerce/v1/profile/wishlist/${_id}`)
    },


    //Address
    addAddress: (data) => {
        return Api.token().post('ecommerce/v1/profile/address', data)
    }
}