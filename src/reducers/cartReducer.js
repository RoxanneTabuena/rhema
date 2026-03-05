export const initialCartState = {
    items: ["butt monkeys it worked!"],
    dates: {
        pickup: '2026-03-24',
        dropoff: '2026-03-24'
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

    case "PICKUP":
    return {
        ...state,
        dates: {...state.dates,
            pickup: action.payload
        }
    };

    case "DROPOFF":
    return {
        ...state,
        dates: {...state.dates,
            dropoff: action.payload
        }
    };

    case "CLEAR_CART":
    return initialCartState;

    default:
    return state;
}
}