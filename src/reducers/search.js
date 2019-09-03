import {
    searchRequest,
    searchSuccess,
    searchFailure
} from './actions'

import {handleActions} from 'redux-actions';
import {combineReducers} from "redux";


const shows = handleActions(
    {
        [searchRequest]: () => [],
        [searchSuccess]: (_state, action) => action.payload,
    }, []
);

const isLoading = handleActions(
    {
        [searchRequest]: () => true,
        [searchSuccess]: () => false,
        [searchFailure]: () => false,
    }, false
);

const error = handleActions(
    {
        [searchFailure]: (_state, action) => action.payload,
    }, null
);

export default combineReducers({
    shows,
    error,
    isLoading
})