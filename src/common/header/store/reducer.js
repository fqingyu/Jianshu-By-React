import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false
});

const reducer = (state=defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = true;
        return fromJS(newState);
    }
    if (action.type === constants.SEARCH_BLUR) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = false;
        return fromJS(newState);
    }
    return state;
}

export default reducer;