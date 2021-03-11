import {REQUEST_RECIPES,RECEIVE_RECIPE,RECEIVE_RECIPES,FILTER_RECIPES} from '../constants/ActionConstants';

export const initialState = {
    recipes: [],
    bLoading: false,
    filter: ``
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
        case FILTER_RECIPES:
            return  {
                ...state,
                filter : action.filter
            };
        default:
            return state;
        }
    }catch(error){
        return state;
    }
};
export default RecipeReducer;