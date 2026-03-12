export const initialMenuState = {
    open : false
};

export function menuReducer(state, action) {
switch (action.type) {

    case "CLOSE": {
        console.log('close')
    return {
        ...state,
        open: false
    };
    }

    case "OPEN":
        console.log('open')
    return {
        ...state,
        open: true
    };

    default:
    return state;
}
}