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
        case ActionType.ADD_COMMENT:
            let comment = action.payload;
            comment.id = Math.max(...state.comments.map((comment) => comment.id)) + 1;
            return {...state, comments: state.comments.concat(comment)};
        default:
            return state;
    }
};