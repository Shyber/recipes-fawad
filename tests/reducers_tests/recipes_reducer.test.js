import RecipeReducer, { initialState }  from '../../src/app/reducers/RecipeReducer';
import * as types from '../../src/app/constants/ActionConstants';
import RecipesData from '../../data/RecipesData';
import RecipeTransform from '../../src/app/services/transforms/RecipeTransform';

describe('recipes reducer', () => {
    it('should return the initial state', () => {
        expect(RecipeReducer(undefined, {})).toEqual(initialState);
    });
  
    const transformedJson = RecipeTransform.transformRecipes(RecipesData.recipesMockDataObject());
    const loadedState = {recipes:  transformedJson, bLoading:true, filter: ''};

    it('should handle REQUEST_RECIPES', () => {
        expect(
            RecipeReducer(initialState, {
                type: types.REQUEST_RECIPES,
                bLoading: true
            })
        ).toEqual({
            recipes: [],
            filter: '',
            bLoading: true
        });

        expect(
            RecipeReducer(loadedState, {
                type: types.REQUEST_RECIPES,
                bLoading: false
            })
        ).toEqual({
            recipes: transformedJson,
            filter: '',
            bLoading: false
        });
    });

    const loadingState = {recipes:  [], bLoading:true, filter: ''};
    it('should handle RECEIVE_RECIPES', () => {
        expect(
            RecipeReducer(loadingState, {
                type: types.RECEIVE_RECIPES,
                recipes: transformedJson
            })
        ).toEqual({
            recipes: transformedJson,
            filter: '',
            bLoading: true
        });
    });

    it('should handle FILTER_RECIPES', () => {
        const searchTerm = 'search term';
        expect(
            RecipeReducer(loadingState, {
                type: types.FILTER_RECIPES,
                filter: searchTerm
            })
        ).toEqual({
            recipes: [],
            filter: searchTerm,
            bLoading: true
        });
    });
});