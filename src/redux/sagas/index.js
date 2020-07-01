import { homeSaga } from './home/home'
import { all } from 'redux-saga/effects';

export default function* rootSaga(){
    yield all([
        ...homeSaga
    ])
}