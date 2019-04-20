const initialState = {
    list: [],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ITEM_LIST_PENDING':
            return { ...state, loading: true };

        case 'GET_ITEM_LIST_FULFILLED':
            return { ...state, list: action.payload.data, loading: false };

        case 'GET_ITEM_LIST_REJECTED':
            return { ...state, loading: true };

        case 'ADD_ITEM_PENDING':
            return { ...state, loading: true };

        case 'ADD_ITEM_FULFILLED':
            const { data } = action.payload;
            return { ...state, list: state.list.concat(data) };

        default:
            return state;
    }
};
