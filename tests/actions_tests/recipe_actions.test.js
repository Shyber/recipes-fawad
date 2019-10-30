import React from 'react';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/app/actions/RecipeActions'
import * as types from '../../src/app/constants/ActionConstants'
import RecipesData from '../../data/RecipesData';
import RecipeService from '../../src/app/services/RecipeService';
import RecipeTransform from '../../src/app/services/transforms/RecipeTransform';
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async recipe actions', () => {
    let store;
    let recipesData = RecipesData.recipesMockDataObject();

    beforeEach(() => {
        store = mockStore({});
    });

    afterEach(() => {
        fetchMock.restore()
    });

  it('creates RECEIVE_RECIPES when fetching recipes has been done', () => {
    fetchMock.getOnce('../../../data/recipes.json', {
      body: recipesData,
      headers: { 'content-type': 'application/json' }
    })

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
    ]
    const store = mockStore({ bLoading:false , recipes : [] })

    return store.dispatch(actions.fetchRecipes())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  })
})