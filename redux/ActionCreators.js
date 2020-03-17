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


export const fetchPromotions = () => (dispatch) => {
    dispatch(promosLoading())
    return fetch(baseUrl+'promotions').then(response => {
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
        .then(promotions => dispatch(addPromotions(promotions)))
        .then(error => dispatch(promosFailed(error.message)));
};
export const addPromotions = (promotions) => ({
    type:ActionType.ADD_PROMOS,
    payload:promotions
})
export const promosFailed = (error) => ({
    type:ActionType.PROMOS_FAILED,
    payload:error
})
export const promosLoading = () => ({
    type:ActionType.PROMOS_LOADING,
})

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading())
    return fetch(baseUrl+'leaders').then(response => {
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
        .then(leaders => dispatch(addLeaders(leaders)))
        .then(error => dispatch(leadersFailed(error.message)));
};

export const addLeaders = (leaders) => ({
    type:ActionType.ADD_LEADERS,
    payload:leaders
})
export const leadersFailed = (error) => ({
    type:ActionType.LEADERS_FAILED,
    payload:error
})
export const leadersLoading = () => ({
    type:ActionType.LEADERS_LOADING,
})




