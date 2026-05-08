export const initialWindowState = {
    windowOpen : true,
    windowContent: '',
};

export function windowReducer(state, action) {
switch (action.type) {

    case "CLOSE": {
    console.log('close')

    return {
        ...state,
        windowOpen: false
    };
    }

    case "OPEN":
    return {
        ...state,
        windowOpen: true
    };

    case "CONTENT":
    return {
        ...state,
        windowContent: action.payload
    };

    default:
    return state;
}
}