import { call,put,takeEvery } from 'redux-saga/effects';
import { DELETE_TASK,DELETE_TASK_SUCCESS,DELETE_TASK_FAILURE }  from '../../constants/Constants';


function* deleteTask(){
    let url = 'example_url'
    try {
        const response = yield call(deleteApiCAllperform,url)
        const data = response.data
        if (!response.error){
            yield put({type:DELETE_TASK_SUCCESS,data})
        }else {
            yield put({type:DELETE_TASK_FAILURE})
        }
    } catch (error) {
        console.log(error)
        yield put({type:DELETE_TASK_FAILURE})
    }
}

export const homeSaga = [
    takeEvery(DELETE_TASK, deleteTask)
]







function deleteApiCAllperform(url){
    //Do netwoking related to delete

    
    return {data:1,error:true}
}