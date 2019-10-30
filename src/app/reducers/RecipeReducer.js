import {REQUEST_RECIPES,RECEIVE_RECIPE,RECEIVE_RECIPES} from '../constants/ActionConstants';

export const initialState = {
    recipes: [],
    bLoading: false,
};

const RecipeReducer = (state = initialState, action) => {
    try{
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
    }catch(error){
        return state;
    }
};
export default RecipeReducer;