import { ADD_TASK,DELETE_TASK } from '../../constants/Constants';

const initialState = {
    tasks:[],
    userName:'Sahad'
}

export default function homeReducer(state = initialState,action){
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat(action.task)
            }
        default:
            return state
    }
}
