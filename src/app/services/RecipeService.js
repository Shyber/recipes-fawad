
import RecipeTransform from './transforms/RecipeTransform';
import recipesMockData from '../../../data/recipesMockData';

export default class RecipeService {   
    static getAllRecipes() {
        // const uri = `../../../recipes.json`;
        // return fetch(uri, {method: 'GET'})
        // .then(response => {
        //     return response.json();
        // }).then(jsonData => {
        //     return RecipeTransform.transformRecipes(jsonData);
        // }).catch(error => {
        //     console.warn(`getAllRecipes error: ${error}`);
        // });

        const promise1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                try{
                    resolve(RecipeTransform.transformRecipes(recipesMockData));
                }catch(error){
                    reject(error);
                }
            }, 300);
        });
        return promise1;
    }

    static getRecipe(recipeId) {
        // const uri = `${API_BASE_ADDRESS  }/recipes/${recipeId}`;
        // return fetch(uri, {method: 'GET'});
        const promise1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                try{
                    resolve(RecipeTransform.filterAndTransformRecipe(recipeId,recipesMockData));
                }catch(error){
                    reject(error);
                }
            }, 300);
        });
        return promise1;
    }
}