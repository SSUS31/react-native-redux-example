import { ADD_TASK,DELETE_TASK,DELETE_TASK_SUCCESS,DELETE_TASK_FAILURE } from '../../constants/Constants';

const initialState = {
    tasks:[],
    deleteStatus:'None',
}

export default function homeReducer(state = initialState,action){
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat(action.task)
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id != action.id)
            }
        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                deleteStatus: "Success"
            }
        case DELETE_TASK_FAILURE:
            return {
                ...state,
                deleteStatus: "Fail"
            }
        default:
            return state
    }
}
