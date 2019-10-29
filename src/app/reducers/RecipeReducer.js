import {REQUEST_RECIPE,RECEIVE_RECIPE} from '../constants/ActionConstants';

const RecipeReducer = (state = { bLoading:false , recipes : { contents : [] } }, action) => {
    switch(action.type){
    case REQUEST_RECIPE:
        return {
            ...state,
            bLoading : action.bLoading
        };
    case RECEIVE_RECIPE:
        return  {
            ...state,
            recipes : action.recipes
        };
    default:
        return state;
    }
};
export default RecipeReducer;