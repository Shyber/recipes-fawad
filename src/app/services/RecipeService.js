
import RecipeTransform from './transforms/RecipeTransform';
import recipesMockData from '../../../data/recipesMockData';

export default class RecipeService {   
    static getAllRecipes() {
        // const uri = `${API_BASE_ADDRESS  }/recipes`;
        // return fetch(uri, {method: 'GET'});
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