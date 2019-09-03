import {handleActions} from 'redux-actions';
import {combineReducers} from "redux";

import {
    showRequest,
    showSuccess,
    showFailure
} from './actions'


const showInfo = handleActions(
    {
        [showRequest]: () => {},
        [showSuccess]: (_state, action) => action.payload,
    }, null
);

const isLoading = handleActions(
    {
        [showRequest]: () => true,
        [showSuccess]: () => false,
        [showFailure]: () => false,
    }, false
);

const error = handleActions(
    {
        [showFailure]: (_state, action) => action.payload,
    }, null
);

export default combineReducers({
    showInfo,
    error,
    isLoading
})