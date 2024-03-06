export const cartReducer = (state, action) => {
    
    switch (action.type) {
        
        case `ADD_${action.payload.qty}`:
            let idx = state.allProduct.findIndex((ele) => ele.id === action.payload.item.id);
            if (idx !== -1) {
                let updatedCartList;
                if (state.myCart.some(item => item.id === action.payload.item.id)) {
                    updatedCartList = state.myCart.map(item => {
                        if (item.id === action.payload.item.id) {
                            return {
                                ...item,
                                sub_total: item.sub_total + action.payload.item.price * action.payload.qty,
                                quantity: item.quantity + action.payload.qty
                            };
                        }
                        return item;
                    });
                } else {
                    updatedCartList = [
                        ...state.myCart,
                        {
                            ...action.payload.item,
                            sub_total: action.payload.item.price * action.payload.qty,
                            quantity: action.payload.qty
                        }
                    ];
                }
 
                return {
                    ...state,
                    myCart: updatedCartList,
                    totalCartItem: state.totalCartItem + action.payload.qty,
                    grandTotal: updatedCartList.reduce((acc, curr) => acc + curr.sub_total, 0)

                };
            }

            break;
            case 'ADD_PRODUCT':
                return{
                    ...state,
                    allProduct:[...state.allProduct, action.payload]
                }
            
            default :
            return state;
    }
};
