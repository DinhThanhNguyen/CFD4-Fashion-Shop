import productApi from '../../api/productApi'
import createSlice from '../../core/createSlice'

const initialState = {
    products: [],
    paginate: null,
    loading: true
}

export function getProduct(page) {
    return (dispatch) => {
        dispatch(action.loading())
        productApi.catalog(page)
            .then(res => {

                dispatch(action.catalog(res))
            })
    }
}

let { reducer, TYPE, action } = createSlice({
    name: 'product',
    initialState,
    reducers: {
        loading: function(state) {
            state.loading = true
        },
        catalog: function (state, action) {
            return {
                ...state,
                products: action.payload.data,
                paginate: action.payload.paginate,
                loading: false
            }
        }
    }
})

export default reducer