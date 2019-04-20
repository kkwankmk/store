const initialState = {
    item: [],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ITEM_PENDING':
            return { ...state, loading: true };

        case 'GET_ITEM_FULFILLED':
            return { ...state, item: action.payload.data, loading: false };

        case 'GET_ITEM_REJECTED':
            return { ...state, loading: true };

        default:
            return state;
    }
};
