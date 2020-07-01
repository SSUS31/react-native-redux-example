import { ADD_TASK,DELETE_TASK } from '../../constants/Constants';

export function addTask(task){
    return{
        type:ADD_TASK,
        task
    }
}
// export function deleteTask(id){
//     return{
//         type:DELETE_TASK,
//         id
//     }
// }