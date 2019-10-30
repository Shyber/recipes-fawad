
import RecipeTransform from './transforms/RecipeTransform';
import RecipesData from '../../../data/RecipesData';

// To include the json file to webpack loader
import '../../../data/recipes.json';

export default class RecipeService {   
    static getAllRecipes() {
        // Try to get a static json file (wouldn't work till served)
        const uri = `../../../data/recipes.json`;
        return fetch(uri, {method: 'GET'})
            .then(response => {
                if(response===null || response.ok===false)
                    return RecipesData.recipesMockResponse().json();
                return response.json();
            }).then(jsonData => {
                return RecipeTransform.transformRecipes(jsonData);
            }).catch(error => {
                console.warn(`getAllRecipes error: ${error}`);
                return RecipeTransform.transformRecipes(null);
            });
    }

    static getRecipe(recipeId) {
        // Try to get a static json file (wouldn't work till served)
        const uri = `../../../data/recipes.json`;
        return fetch(uri, {method: 'GET'})
            .then(response => {
                if(response===null || response.ok===false)
                    return RecipesData.recipesMockResponse().json();
                return response.json();
            }).then(jsonData => {
                return RecipeTransform.filterAndTransformRecipe(recipeId,jsonData);
            }).catch(error => {
                console.warn(`getAllRecipes error: ${error}`);
                return RecipeTransform.filterAndTransformRecipe(recipeId,null);
            });
    }
}