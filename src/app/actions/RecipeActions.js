import {REQUEST_RECIPE,RECEIVE_RECIPE} from '../constants/ActionConstants';
import RecipeApi from '../services/RecipeApi';
import recipesMockData from '../../../data/recipesMockData';

function requestRecipes(_loading){
    return {
        type: REQUEST_RECIPE,
        bLoading : _loading
    };
}

function receiveRecipes(inputJson){
    return {
        type: RECEIVE_RECIPE,
        recipes : inputJson,
    };
}

export function fetchRecipes(){
    return(dispatch) => {
        dispatch(requestRecipes(true));
        // api call
        RecipeApi.getRecipes()
            .then((response) => {
                return recipesMockData;
            // return response.json();
            })
            .then((findresponse)=> {
                dispatch(receiveRecipes(findresponse));
                dispatch(requestRecipes(false));
            });
    };
} 