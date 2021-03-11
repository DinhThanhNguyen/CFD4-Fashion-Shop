import createSlice from "../../core/createSlice"

let cart = JSON.parse(localStorage.getItem('cart'))

const initialState = {
    list: cart?.list || [],
    num: cart?.num || 0,
    amount: cart?.amount || 0,
    shipping_option: cart?.shipping_option || 'free',
    shipping_price: cart?.shipping_price || 0,
}

function returnCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
    return cart
}

let { reducer, action, TYPE } = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: function (state, action) {
            let { list, amount } = state

            let find = list.findIndex(e => e._id === action.payload._id)
            if (find !== -1) {
                list[find].cartNum++
                amount += list[find].price
            } else {
                let item = JSON.parse(JSON.stringify(action.payload))
                
                item.cartNum = 1
                list.push(item)
                amount += item.price
            }



            return returnCart({
                ...state,
                num: state.num + 1,
                list,
                amount
            })
        },
        removeCart: function (state, action) {

            let { list, amount, num  } = state

            let find = list.findIndex(e => e._id === action.payload)
            if (find !== -1) {
                amount -= list[find].price*list[find].cartNum
                num -= list[find].cartNum
                list.splice(find, 1)
            }

            return returnCart({
                ...state,
                num,
                list,
                amount
            })
        },
        increment: function(state, action) {
            
            let { list, amount  } = state

            let find = list.findIndex(e => e._id === action.payload)
            if (find !== -1) {
                list[find].cartNum++
                amount += list[find].price
            }

            return returnCart({
                ...state,
                num: state.num + 1,
                list,
                amount
            })
        },
        decrement: function(state, action) {
            
            let { list, amount  } = state

            let find = list.findIndex(e => e._id === action.payload)
            if (find !== -1) {
                if(list[find].cartNum > 1){
                    list[find].cartNum--
                    amount -= list[find].price
                } else{
                    amount -= list[find].price
                    list.splice(find, 1)
                }
            }

            return returnCart({
                ...state,
                num: state.num - 1,
                list,
                amount
            })
        },
        shippingChange: function(state, action) {
            let {shipping_option, shipping_price } = action.payload

            return returnCart({
                ...state,
                shipping_option,
                shipping_price
            })
        }
    }
})


export default reducer

export const addCart = action.addCart

export const removeCart = action.removeCart

export const incrementCart = action.increment

export const decrementCart = action.decrement

export const shippingChange = action.shippingChange