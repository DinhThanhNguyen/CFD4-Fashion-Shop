import productApi from '../../api/productApi'
import createSlice from '../../core/createSlice'

const initialState = {
    products: [],
    paginate: null,
    categories: [],
    // loadingCategories: true,
    loading: true
}

export function getProduct(queryString) {
    return (dispatch) => {
        dispatch(action.loading())
        productApi.catalog(queryString)
            .then(res => {
                dispatch(action.catalog(res))
            })
    }
}

export function getCategories() {

    return (dispatch) => {
        productApi.category()
        .then (res => {
            dispatch(action.categories(res))
        })


        // if (state.product.loadingCategories) {
            
        // }
    }
}


let { reducer, TYPE, action } = createSlice({
    name: 'product',
    initialState,
    reducers: {
        loading: function (state) {
            state.loading = true
        },
        catalog: function (state, action) {
            return {
                ...state,
                products: action.payload.data,
                paginate: action.payload.paginate,
                loading: false
            }
        },
        categories: (state, action) => {
            state.categories = action.payload
            // state.loadingCategories = false
        }
    }
})

export default reducer

export const PRODUCT = TYPE

export const productAction = action