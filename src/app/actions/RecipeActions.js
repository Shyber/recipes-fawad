import {REQUEST_RECIPES,RECEIVE_RECIPE,RECEIVE_RECIPES, FILTER_RECIPES} from '../constants/ActionConstants';
import RecipeService from '../services/RecipeService';

function requestRecipes(_loading){
    return {
        type: REQUEST_RECIPES,
        bLoading : _loading
    };
}

function receiveRecipe(_recipe){
    return {
        type: RECEIVE_RECIPE,
        currentRecipe : _recipe,
    };
}

function receiveRecipes(_recipes){
    return {
        type: RECEIVE_RECIPES,
        recipes : _recipes,
    };
}

export function fetchRecipes(){
    return(dispatch) => {
        dispatch(requestRecipes(true));
        return RecipeService.getAllRecipes()
            .then((response) => {
                dispatch(receiveRecipes(response));
                dispatch(requestRecipes(false));
            })
            .catch(error =>{
                // eslint-disable-next-line no-console
                console.warn(`fetchRecipes error: ${error}`);
                dispatch(requestRecipes(false));
            });
    };
} 

export function fetchRecipesById(recipeId){
    return(dispatch) => {
        dispatch(requestRecipes(true));
        RecipeService.getRecipe(recipeId)
            .then((response) => {
                dispatch(receiveRecipe(response));
                dispatch(requestRecipes(false));
            })
            .catch(error =>{
                // eslint-disable-next-line no-console
                console.warn(`fetchRecipesById error: ${error}`);
                dispatch(requestRecipes(false));
            });
    };
} 

export function filterRecipes(searchTerms){
    return {
        type: FILTER_RECIPES,
        filter : searchTerms,
    };
}