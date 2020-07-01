import { createStore,applyMiddleware } from 'redux';
import combineReducers from './reducers/';
import rootSaga from './sagas';

import  createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]


export default function createStoreConfig(){
    const store = createStore(combineReducers,applyMiddleware(...middleware));
    sagaMiddleware.run(rootSaga)
    return store
}