import {REQUEST_RECIPES,RECEIVE_RECIPE,RECEIVE_RECIPES} from '../constants/ActionConstants';

const RecipeReducer = (state = { bLoading:false , recipes : [] }, action) => {
    switch(action.type){
    case REQUEST_RECIPES:
        return {
            ...state,
            bLoading : action.bLoading
        };
    case RECEIVE_RECIPES:
        return  {
            ...state,
            recipes : action.recipes
        };
    case RECEIVE_RECIPE:
        return  {
            ...state,
            recipe : action.recipe
        };
    default:
        return state;
    }
};
export default RecipeReducer;