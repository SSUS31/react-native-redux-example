import { DELETE_TASK } from '../../constants/Constants';

export function deleteTask(id){
    return{
        type:DELETE_TASK,
        id
    }
}