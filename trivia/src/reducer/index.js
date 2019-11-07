import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions';

const initialState = {
    data: [],
    error: '',
    isFetching: false
}

export function reducer (state=initialState, action) {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: '',
                isFetching: false
            };
        case FETCH_FAIL:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
}

export default reducer;