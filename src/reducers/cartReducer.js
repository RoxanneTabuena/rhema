export const initialCartState = {
    items: ["butt monkeys it worked!"],
    dates: {
        pickup: 'ya ma',
        return: ''
    }
    };

export function cartReducer(state, action) {
switch (action.type) {

    case "ADD_ITEM": {
    const existing = state.items.find(
        item => item.id === action.payload.id
    );

    if (existing) {
        return {
        ...state,
        items: state.items.map(item =>
            item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
        };
    }

    return {
        ...state,
        items: [...state.items, { ...action.payload, qty: 1 }]
    };
    }

    case "REMOVE_ITEM":
    return {
        ...state,
        items: state.items.filter(
        item => item.id !== action.payload
        )
    };

    case "UPDATE_QTY":
    return {
        ...state,
        items: state.items.map(item =>
        item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        )
    };

    case "CLEAR_CART":
    return initialCartState;

    default:
    return state;
}
}