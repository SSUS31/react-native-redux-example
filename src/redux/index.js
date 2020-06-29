import { createStore} from 'redux';
import combineReducers from './reducers/';

export default function createStoreConfig(){
    const store = createStore(combineReducers)
    return store
}