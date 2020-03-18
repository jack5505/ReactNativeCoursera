import * as ActionType from '../redux/ActionTypes'

export const comments = (state = {
    errMess:null,
    comments:[]
},action) =>{
    switch (action.type) {
        case ActionType.ADD_COMMENTS:
            return{...state,isLoading: false,errMess: null,comments:action.payload};
        case ActionType.COMMENTS_FAILED:
            return{...state,isLoading: false,errMess:action.payload};
        default:
            return state;
    }
};