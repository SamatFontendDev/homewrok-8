import {
    showRequest,
    showSuccess,
    showFailure
} from "../reducers/actions";

import {show} from "../api";
// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.


export default ({dispatch}) => next => action => {
    if (action.type === showRequest.toString()) {
        show(action.payload)
            .then(data => dispatch(showSuccess(data)))
            .catch(error => dispatch(showFailure(error)))
    }
    return next(action)
};