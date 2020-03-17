import * as ActionType from '../redux/ActionTypes'
import {baseUrl} from "../shared/baseUrl";

export const fetchComments = () => (dispatch) => {
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

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading())
    return fetch(baseUrl+'dishes').then(response => {
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
        .then(dishes => dispatch(addDishes(dishes)))
        .then(error => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
    type:ActionType.DISHES_LOADING,
})

export const addDishes = (dishes) => ({
    type:ActionType.ADD_DISHES,
    payload:dishes
})

export const dishesFailed = (error) => ({
    type:ActionType.DISHES_FAILED,
    payload:error
})






