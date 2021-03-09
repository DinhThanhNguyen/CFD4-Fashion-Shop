import createSlice from "../../core/createSlice"


const initialState = {
    list: [],
    num: 0
}

let { reducer, action, TYPE } = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: function (state, action) {
            return {
                ...state,
                num: state.num + 1,
                list: [...state.list, action.payload]
            }
        }
    }
})


export default reducer

export const addCart = action.addCart