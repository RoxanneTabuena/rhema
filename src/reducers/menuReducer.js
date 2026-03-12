export const initialMenuState = {
    open : false
};

export function menuReducer(state, action) {
switch (action.type) {

    case "CLOSE": {
    return {
        ...state,
        open: false
    };
    }

    case "OPEN":
    return {
        ...state,
        open: true
    };

    default:
    return state;
}
}