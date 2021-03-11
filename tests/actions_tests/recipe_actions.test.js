import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../../src/app/actions/RecipeActions';
import * as types from '../../src/app/constants/ActionConstants';
import RecipesData from '../../data/RecipesData';
import RecipeTransform from '../../src/app/services/transforms/RecipeTransform';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async recipe actions', () => {
    const recipesData = RecipesData.recipesMockDataObject();

    afterEach(() => {
        fetchMock.restore();
    });

    it('creates RECEIVE_RECIPES when fetching recipes has been done', () => {
        fetchMock.getOnce('../../../data/recipes.json', {
            body: recipesData,
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [
            { 
                type: types.REQUEST_RECIPES,
                bLoading : true
            },
            { 
                type: types.RECEIVE_RECIPES, 
                recipes: RecipeTransform.transformRecipes(recipesData) 
            },
            { 
                type: types.REQUEST_RECIPES,
                bLoading : false
            }
        ];
        const store = mockStore({ bLoading:false , recipes : [] });

        return store.dispatch(actions.fetchRecipes())
            .then(() => { // return of async actions
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    it('creates FILTER_RECIPES when filtering recipes is called', () => {
        const searchTerm = 'Search term';
        const expectedAction = 
            [{ 
                type: types.FILTER_RECIPES,
                filter : searchTerm
            }];
        const store = mockStore({ bLoading:false , recipes : [], filter : '' });

        store.dispatch(actions.filterRecipes(searchTerm));
        expect(store.getActions()).toEqual(expectedAction);
    });
});
