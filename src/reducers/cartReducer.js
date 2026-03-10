export const initialCartState = {
    items: [{id:"420", name: "butt monkeys",brand:"ya mas", category:"Bass Amps" , qty:1}],
    dates: {
        pickup: '2026-03-24',
        dropoff: '2026-03-24'
    },
    times: {
        pickup: '',
        dropoff: ''
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

    case "INC_UP":
    return {
        ...state,
        items: state.items.map(item =>
        item.id === action.payload.id
            ? { ...item, qty: item.qty+1 }
            : item
        )
    };

    case "INC_DOWN":
    return {
        ...state,
        items: state.items.map(item =>
        item.id === action.payload.id
            ? { ...item, qty: item.qty-1 }
            : item
        )
    };

    case "PICKUP_DATE":
    return {
        ...state,
        dates: {...state.dates,
            pickup: action.payload
        }
    };

    case "DROPOFF_DATE":
    return {
        ...state,
        dates: {...state.dates,
            dropoff: action.payload
        }
    };

    case "PICKUP_TIME":
        console.log('pickup')
    return {
        ...state,
        times: {...state.times,
            pickup: action.payload
        }
    };

    case "DROPOFF_TIME":
    return {
        ...state,
        times: {...state.times,
            dropoff: action.payload
        }
    };

    case "CLEAR_CART":
    return initialCartState;

    default:
    return state;
}
}