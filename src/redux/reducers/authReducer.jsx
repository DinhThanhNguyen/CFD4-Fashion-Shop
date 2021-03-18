import userApi from "../../api/userApi"
import createSlice from "../../core/createSlice"

let user = JSON.parse(localStorage.getItem('login'))

let initialState = {
    login: !!user,
    user: user,
    error: null
}

export function login(data) {
    return (dispatch) => {
        userApi.login(data)
            .then(res => {
                if (res.error) {
                    dispatch(action.error(res.error))
                } else {
                    dispatch(action.login(res.data))
                }
            })
    }
}

export function register(data) {
    return (dispatch) => {
        userApi.register(data)
            .then(res => {
                if (res.error) {
                    dispatch(action.error(res.error))
                } else {
                    dispatch(action.register(res.data))
                }
            })
    }
}

let { action, reducer, TYPE } = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: function (state, action) {
            let user = action.payload
            let token = action.payload.token

            localStorage.setItem('login', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(token))
            return {
                ...state,
                login: true,
                user
            }
        },
        logout: function (state) {
            localStorage.removeItem('login')
            localStorage.removeItem('token')
            return {
                ...state,
                login: false,
                user: null
            }
        },
        error: function (state, action) {
            return {
                ...state,
                error: action.payload
            }
        },
        register: function (state, action) {
            let user = action.payload
            let token = action.payload.token

            localStorage.setItem('login', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(token))
            return {
                ...state,
                register: true,
                user
            }
        }
    }
})

export default reducer

export const userLogin = action.login

export const userLogout = action.logout

export const userRegister = action.register

export const USER = TYPE