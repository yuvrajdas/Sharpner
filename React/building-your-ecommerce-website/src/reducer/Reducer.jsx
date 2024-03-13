export const cartReducer = (state, action) => {
    let idx = state.myCart.findIndex((item) => item.id === action?.payload?.id);
    switch (action.type) {
        case 'ADD_TO_CART':
            if (idx !== -1) {
                // Item already exists, do not add it again
                return {
                    ...state,
                    isAlreadyExistInCart: true
                }
            } else {
                return {
                    ...state,
                    myCart: [...state.myCart, { ...action.payload }],
                    totalQty: state.totalQty + 1,
                    isAlreadyExistInCart: false,
                    currProdTitle: action.payload.title,
                    grandTotal:state.grandTotal+action.payload.price
                }
            }

        case 'DELETE':
            if (idx !== -1) {
                return {
                    ...state,
                    totalQty: state.totalQty - 1,
                    myCart: state.myCart.filter((item) => item.id !== action.payload.id),
                    grandTotal:state.grandTotal-action.payload.price
                }
            } else {
                return state;
            }
        case 'PURCHASE' :
            return {
                ...state,
                totalQty:0,
                myCart:[],
                grandTotal:0
            }
        default:
            return state;
    }
}
