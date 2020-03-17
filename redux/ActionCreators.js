import * as ActionType from '../redux/ActionTypes'
import {baseUrl} from "../shared/baseUrl";

export const fetch = () => (dispatch) => {
    return fetch(baseUrl+'comments').then(response => {
        if(response.ok){
            return response;
        }else{
            var error = new Error('Error' + response.status+': '+response.statusText)
            throw  error;
        }
    },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .then(error => dispatch(commentsFailed(error.message)));
};

export const addComments = (comments) => ({
    type: ActionType.ADD_COMMENTS,
    payload: comments
})

export const commentsFailed = (error) => ({
    type: ActionType.COMMENTS_FAILED,
    payload:error
})


