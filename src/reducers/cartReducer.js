export const initialCartState = {
    items: [],
    dates: {
        start: '',
        end: ''
    },
    customer: {
        name: '',
        preferred: '',
        email: '',
        phone: ''
    },
    event: {
        type: 'Wedding',
        location: '',
        size: 'Under 100',
        multi: false,
        info: ''
    },
    times: {
        start: '',
        end: '',
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
    if(action.payload.qty===1){
        return {
            ...state,
            items: state.items.filter(
            item => item.id !== action.payload.id
            )
        }}
        return {
            ...state,
            items: state.items.map(item =>
            item.id === action.payload.id
                ? { ...item, qty: item.qty-1 }
                : item
            )
        };

    case "START_DATE":
    return {
        ...state,
        dates: {...state.dates,
            start: action.payload
        }
    };

    case "END_DATE":
    return {
        ...state,
        dates: {...state.dates,
            end: action.payload
        }
    };

    case "CUSTOMER_NAME":
    return {
        ...state,
        customer: {...state.customer,
            name: action.payload
        }
    };

    case "CUSTOMER_EMAIL":
    return {
        ...state,
        customer: {...state.customer,
            email: action.payload
        }
    };

    case "CUSTOMER_PHONE":
    return {
        ...state,
        customer: {...state.customer,
            phone: action.payload
        }
    };

    case "CUSTOMER_PREFERRED":
    return {
        ...state,
        customer: {...state.customer,
            preferred: action.payload
        }
    };

    case "EVENT_TYPE":
    return {
        ...state,
        event: {...state.event,
            type: action.payload
        }
    };

    case "EVENT_SIZE":
    return {
        ...state,
        event: {...state.event,
            size: action.payload
        }
    };

    case "EVENT_MULTI":
    return {
        ...state,
        event: {...state.event,
            multi: action.payload
        }
    };

    case "EVENT_LOCATION":
    return {
        ...state,
        event: {...state.event,
            location: action.payload
        }
    };

    case "EVENT_INFO":
    return {
        ...state,
        event: {...state.event,
            info: action.payload
        }
    };

    case "START_TIME":
    return {
        ...state,
        times: {...state.times,
            start: action.payload
        }
    };

    case "END_TIME":
    return {
        ...state,
        times: {...state.times,
            end: action.payload
        }
    };

    case "CLEAR_CART":
    return initialCartState;

    default:
    return state;
}
}