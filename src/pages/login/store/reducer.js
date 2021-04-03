import { fromJS } from 'immutable'
import { constants } from '../store'

const defaultState = fromJS({
    login: false
});

const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value);
        case constants.CHANGE_LOGOUT:
            return state.set('login', action.value);
        default:
            return state;
    }
}

export default reducer;
