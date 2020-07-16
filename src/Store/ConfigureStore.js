import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import promise from 'redux-promise'
// import thunk from 'redux-thunk'
import sequenceAction from 'redux-sequence-action'
import AppConfig from '../AppConfig'
import MasterState from './MasterState'
import MasterReducers from '../Reducers/MasterReducers'
import createSagaMiddleware from 'redux-saga'



const logger = createLogger({
    // write heir code 
})

const sagaMiddleware = createSagaMiddleware()
const configureStore = () => {
    let applyMiddlewareobj;
    if (AppConfig.reduxLogger) {
        applyMiddlewareobj = applyMiddleware(sagaMiddleware, promise, logger, sequenceAction)
    }
    else {
        applyMiddlewareobj = applyMiddleware(sagaMiddleware, promise, sequenceAction)
    }

    const store = createStore(
        MasterReducers,
        MasterState,
        applyMiddlewareobj
    )

    return store;

}

export default configureStore