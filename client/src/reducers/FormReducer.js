const formReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_TRANSCRIPT':
            return { ...state, ...action.data }
        default:
            return state;
    }
};
export default formReducer;