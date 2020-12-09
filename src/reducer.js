export const initialState = {
    path: null,
    user: null,
};

export const actionTypes = {
    SET_PATH: "SET_PATH",
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_PATH:
            return {
                ...state, path: action.path,
            };
        
        case actionTypes.SET_USER:
            return {
                ...state, user: action.user,
            };

        default:
            return state;
    }
};

export default reducer;