import productApi from '../../api/productApi'
import createSlice from '../../core/createSlice'

const initialState = {
    products: [],
    paginate: null
}

export function getProduct() {
    return (dispatch) => {
        productApi.catalog()
            .then(res => {


                dispatch({ type: TYPE.catalog, payload: res.data })
            })
    }
}

let { reducer, TYPE, action } = createSlice({
    name: 'product',
    initialState,
    reducers: {
        catalog: function (state, action) {
            return {
                ...state,
                products: action.payload.data,
                paginate: action.payload.paginate
            }
        }
    }
})

export default reducer