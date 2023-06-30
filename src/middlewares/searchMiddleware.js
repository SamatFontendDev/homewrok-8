// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.
import {searchRequest, searchSuccess, searchFailure} from '../reducers/actions'
import {search} from "../api"

export default ({dispatch}) => next => action => {
    if (action.type === searchRequest.toString()) {
        search(action.payload)
            .then(data => dispatch(searchSuccess(data)))
            .catch(error => dispatch(searchFailure(error)))
    }
    return next(action)
};