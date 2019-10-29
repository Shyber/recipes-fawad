import {REQUEST_RECIPE,RECEIVE_RECIPE} from '../constants/ActionConstants';
import RecipeService from '../services/RecipeService';

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
        RecipeService.getAllRecipes()
            .then((response) => {
                dispatch(receiveRecipes(response));
            })
            .catch(error =>{
                console.warn(`fetchRecipes error: ${error}`);
            })
            .finally(()=> {
                dispatch(requestRecipes(false));
            });
    };
} 