export const cartReducer = (state, action) => {
    let idx = state.myCart.findIndex((item) => item.id === action.payload.id)
    console.log(state.myCart, action, idx);
    switch (action.type) {
        case 'ADD_TO_CART':
            if (idx !== -1) {
                return {
                    ...state,
                    isAlreadyExistInCart: true
                }
            } else {
               
                console.log(idx);
                return {
                    ...state,
                    myCart: [...state.myCart, { ...action.payload }],
                    isAlreadyExistInCart: false 
                }
            }
    }
    return state;
}
